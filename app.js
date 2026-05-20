// PrepVerse Core Application Engine
import examData from './questions.js';

// ==========================================
// 1. STATE MANAGEMENT
// ==========================================
const state = {
    activeView: 'view-dashboard',
    soundEnabled: true,
    history: [],
    streak: 1,
    
    // Active exam session variables
    currentSession: {
        examId: null, // 0: Exam 1, 1: Exam 2, 'custom': Custom Mock
        title: '',
        mode: 'practice', // 'practice' or 'exam'
        questionsCount: 10,
        timeLimitMinutes: 30,
        questions: [],
        userResponses: {}, // index: answer letter
        flaggedQuestions: new Set(),
        timeElapsedSeconds: 0,
        timerIntervalId: null,
        startTime: null,
        isCompleted: false
    },
    
    // Active navigation pointer
    currentQuestionIndex: 0
};

// LocalStorage Keys
const STORAGE_KEY_HISTORY = 'prepverse_exam_history_v1';
const STORAGE_KEY_THEME = 'prepverse_theme_preference';
const STORAGE_KEY_SOUND = 'prepverse_sound_preference';
const STORAGE_KEY_STREAK = 'prepverse_streak_v1';
const STORAGE_KEY_STREAK_DATE = 'prepverse_streak_date_v1';

// ==========================================
// 2. AUDIO SYNTHESIS SYSTEM (WEB AUDIO)
// ==========================================
let audioCtx = null;

function initAudioContext() {
    if (!audioCtx) {
        audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    }
}

function playSound(type) {
    if (!state.soundEnabled) return;
    try {
        initAudioContext();
        if (audioCtx.state === 'suspended') {
            audioCtx.resume();
        }
        
        const now = audioCtx.currentTime;
        
        switch (type) {
            case 'correct': {
                // Energetic double-chime arpeggio
                const osc1 = audioCtx.createOscillator();
                const osc2 = audioCtx.createOscillator();
                const gainNode = audioCtx.createGain();
                
                osc1.type = 'triangle';
                osc1.frequency.setValueAtTime(523.25, now); // C5
                osc1.frequency.setValueAtTime(659.25, now + 0.08); // E5
                
                osc2.type = 'sine';
                osc2.frequency.setValueAtTime(783.99, now + 0.16); // G5
                osc2.frequency.setValueAtTime(1046.50, now + 0.24); // C6
                
                gainNode.gain.setValueAtTime(0.0, now);
                gainNode.gain.linearRampToValueAtTime(0.18, now + 0.05);
                gainNode.gain.exponentialRampToValueAtTime(0.001, now + 0.5);
                
                osc1.connect(gainNode);
                osc2.connect(gainNode);
                gainNode.connect(audioCtx.destination);
                
                osc1.start(now);
                osc2.start(now + 0.16);
                
                osc1.stop(now + 0.55);
                osc2.stop(now + 0.55);
                break;
            }
            case 'incorrect': {
                // Disappointment slide down
                const osc = audioCtx.createOscillator();
                const gainNode = audioCtx.createGain();
                
                osc.type = 'sawtooth';
                osc.frequency.setValueAtTime(220.00, now); // A3
                osc.frequency.exponentialRampToValueAtTime(130.81, now + 0.35); // C3
                
                // Add a low-pass filter to make it softer
                const filter = audioCtx.createBiquadFilter();
                filter.type = 'lowpass';
                filter.frequency.setValueAtTime(400, now);
                
                gainNode.gain.setValueAtTime(0.0, now);
                gainNode.gain.linearRampToValueAtTime(0.15, now + 0.05);
                gainNode.gain.exponentialRampToValueAtTime(0.001, now + 0.4);
                
                osc.connect(filter);
                filter.connect(gainNode);
                gainNode.connect(audioCtx.destination);
                
                osc.start(now);
                osc.stop(now + 0.45);
                break;
            }
            case 'click': {
                // Short, soft click
                const osc = audioCtx.createOscillator();
                const gainNode = audioCtx.createGain();
                
                osc.type = 'sine';
                osc.frequency.setValueAtTime(800, now);
                
                gainNode.gain.setValueAtTime(0.0, now);
                gainNode.gain.linearRampToValueAtTime(0.05, now + 0.01);
                gainNode.gain.exponentialRampToValueAtTime(0.001, now + 0.08);
                
                osc.connect(gainNode);
                gainNode.connect(audioCtx.destination);
                
                osc.start(now);
                osc.stop(now + 0.1);
                break;
            }
            case 'complete': {
                // Triad chord progression celebration
                const chords = [329.63, 392.00, 523.25]; // C major triad
                const gainNode = audioCtx.createGain();
                
                gainNode.gain.setValueAtTime(0.0, now);
                gainNode.gain.linearRampToValueAtTime(0.2, now + 0.1);
                gainNode.gain.exponentialRampToValueAtTime(0.001, now + 0.8);
                gainNode.connect(audioCtx.destination);
                
                chords.forEach((freq, idx) => {
                    const osc = audioCtx.createOscillator();
                    osc.type = 'sine';
                    osc.frequency.setValueAtTime(freq, now + (idx * 0.06));
                    osc.connect(gainNode);
                    osc.start(now + (idx * 0.06));
                    osc.stop(now + 0.8);
                });
                break;
            }
        }
    } catch (e) {
        console.error("Audio Context playback failed or blocked: ", e);
    }
}

// ==========================================
// 2b. TOAST NOTIFICATION SYSTEM
// ==========================================
function showToast(message, type = 'info', duration = 3000) {
    const container = document.getElementById('toast-container');
    if (!container) return;
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    const icons = { success: 'fa-circle-check', error: 'fa-circle-xmark', warning: 'fa-triangle-exclamation', info: 'fa-circle-info' };
    toast.innerHTML = `<div class="toast-icon"><i class="fa-solid ${icons[type] || icons.info}"></i></div><span>${message}</span>`;
    container.appendChild(toast);
    setTimeout(() => {
        toast.classList.add('toast-out');
        setTimeout(() => toast.remove(), 300);
    }, duration);
}

// ==========================================
// 3. EXPLANATIONS DATABASE & GENERATION
// ==========================================
// High quality explanations database for all first 5 chapters
const explanations = {
    // Database Concepts, LSM-Trees, NoSQL (Exam 1)
    "Read amplification": "Read amplification is when a single logical database read requires reading multiple physical blocks/SSTables from disk. LSM-Trees suffer from this because a key could be in any of the active segment files, prompting multiple searches unless filtered by Bloom filters.",
    "Schema-on-read is common in": "NoSQL (e.g. document databases) support schema-on-read. It means the format of the data is not checked when written, but parsed and interpreted only when retrieved by client queries.",
    "System handles more users but response time increases slightly": "This represents a classic scalability trade-off where the system maintains availability and load management under increased utilization, but at the cost of slight latency gains.",
    "Why are SSTables immutable": "Immutability avoids concurrency issues (no locking needed), simplifies write operations (only appending new values), and makes database background compaction/merging extremely straightforward and race-free.",
    "During compaction, duplicate keys are": "Compaction scans segment files, merges sorted collections, and discards older duplicates or tombstones, keeping only the newest value associated with each unique key.",
    "Simplicity helps reduce": "According to Chapter 1, simplicity reduces complexity ('accidental complexity') to make the codebase understandable, preventing developers from introducing bugs during updates.",
    "What is a tombstone in LSM trees": "A tombstone is a special deletion marker appended to log-structured databases. Since SSTables are immutable, we cannot delete a key in place; we write a tombstone key to signal that the key is deleted during future reads and compactions.",
    "Segment files in LSM": "Segment files are sorted, immutable blocks written sequentially to disk. Once written, they are never modified. They are merged into new segment files during compaction.",
    "What is a key property of an SSTable": "An Sorted String Table (SSTable) keeps keys sorted alphabetically on disk, enabling logarithmic key lookups, range queries, and very fast merge compactions similar to mergesort.",
    "Load can be described using": "Load is defined using load parameters, which vary by database (e.g., read/write ratios, cache hits, concurrent active users, or message rate in messaging systems).",
    "What does reliability mean in a system": "Reliability means the system continues functioning correctly (delivering expected performance, security, and correctness) even when unexpected failures or software/hardware faults occur.",
    "LSM Trees are optimized for": "LSM-Trees optimize for writes because they write to a sequential append-only log on disk and an in-memory sorted Memtable, avoiding expensive random disk write seeks.",
    "LSM trees suffer from": "Read amplification is a primary drawback, since we may need to look up keys across multiple SSTable segments on disk.",
    "What happens when a memtable is full": "The active memtable is frozen and flushed to disk as an immutable SSTable file sequentially, and a fresh active memtable takes over to receive new in-memory writes.",
    "Impedance mismatch refers to": "Impedance mismatch is the structural friction between relational tables (rows, foreign key relations) and object-oriented application models (classes, nesting, inheritance).",
    "Relational model organizes data into": "Relational databases use tables (relations) containing rows (tuples) with rigid, predefined schemas enforcing relational constraints.",
    "A fault is": "A fault is defined as one component of the system deviating from its expected specification. A system failure, by contrast, is when the overall system stops providing its service.",
    "Data locality improves": "Data locality keeps nested document elements stored within the same physical sector/file. Retrieving the whole document requires only a single disk seek, reducing latency.",
    "Bloom filter": "A Bloom filter is a space-efficient probabilistic data structure. It tests whether an element is a member of a set. It can return false positives (saying a key exists when it doesn't) but never false negatives.",
    "Hash index works best for": "A hash index mapped in-memory stores keys and byte offsets. It is optimized for exact match lookups but cannot perform range queries efficiently.",
    "Write amplification means": "Write amplification is the ratio of actual bytes written to the physical storage vs. logical bytes requested by the application. High write amplification degrades SSD lifetime.",
    "Schema-on-write means": "In relational/SQL databases, the system validates the incoming data schema strictness upon receiving write statements, rejecting invalid transactions.",
    "When writing to an SSTable system, new data is first": "New write operations are written to a crash-safe write-ahead log (WAL) on disk and added to an in-memory balanced tree structure called a Memtable.",
    "Which is a document database": "MongoDB is a document database storing records as BSON (binary JSON), promoting data locality and flexible schemas.",
    "Operability focuses on": "Operability represents how easily operations teams can monitor the database, deploy updates, recover failures, maintain backups, and keep systems healthy.",
    "Denormalization means": "Denormalization involves intentionally duplicating data across tables to eliminate expensive database JOIN operations and accelerate reads.",
    "System is hard to modify when changing requirements": "Evolvability represents how easily developers can adapt a database application to new and changing requirements. Lack of this creates rigidity.",
    "Bloom filters are used to": "By verifying key absence in-memory first, Bloom filters prevent the system from checking every disk segment file for missing keys, saving disk I/O.",
    "Latency means": "Latency is the duration that a client request spends waiting for the system to process and respond to it.",
    "NoSQL databases typically": "To achieve high scale, NoSQL systems often avoid strict relational structures, database-level schemas, and expensive multi-node JOIN queries.",
    "Index is": "An index is an auxiliary data structure designed to speed up search queries. It acts as a guide, though writing to tables becomes slower because all active indices must be updated.",
    "Normalization reduces": "Normalization structures database tables to eliminate duplicate fields and data redundancy, minimizing inconsistencies and storage volume.",
    "A log-structured storage system": "It operates in an append-only fashion, writing new values at the end of the log rather than updating keys in-place.",
    "Compaction in LSM trees does": "Compaction merges multiple sorted SSTables, resolves conflicting keys by keeping only the latest version, and discards deleted values to reclaim disk space.",
    "Which model is best for many-to-many relationships": "The relational model handles many-to-many relationships naturally using join tables and foreign key lookups.",
    "Scalability refers to": "Scalability is a system's capacity to handle growing volumes of requests or data gracefully by scaling hardware resources (up or out).",
    "Graph databases store data as": "Graph databases utilize vertices (objects) and edges (relations) directly, making deep traversal query executions extremely fast.",
    "Which is NOT a type of fault": "Data redundancy is a storage mechanism to tolerate disk crash faults, not a category of system fault.",
    "A read in LSM tree may require": "If the key is not in-memory or cached, the read operation must query the memtable and search backwards through multiple SSTable files on disk.",

    // Replication, Distributed Systems (Exam 2)
    "What is the primary goal of replication": "Replication distributes identical copies of data across physically separate machines (replicas), boosting availability, fault tolerance, and read performance.",
    "Which replication model allows all replicas to accept writes": "Multi-leader and leaderless replication models allow multiple nodes to receive write requests, which is useful in multi-datacenter environments.",
    "In leader-based replication, what does the leader do": "The leader coordinates write updates, validates transactions, writes them to its local database log, and ships replication logs to its followers.",
    "What is a follower in replication": "Followers (secondary nodes) are replicas that accept read queries but receive database writes strictly by copying replication updates from the leader.",
    "What is synchronous replication mainly valued for": "Synchronous replication provides strong consistency guarantees: the leader waits for the follower to acknowledge the write before responding to the client.",
    "What is a disadvantage of synchronous replication": "If the synchronous follower crashes or experiences network delay, all write operations are blocked, increasing latency or stopping writes entirely.",
    "What happens in asynchronous replication": "The leader returns success immediately after writing locally. Replicas are updated in the background, which is fast but carries a risk of stale reads.",
    "What is replication lag": "Replication lag is the time delay between a write operation succeeding on the leader node and that same update being copied and visible on follower nodes.",
    "Why can replication lag be problematic": "If a client writes an update to the leader and immediately reads from a lagging follower, they may observe stale, out-of-date information (violating read-after-write consistency).",
    "What is eventual consistency": "Eventual consistency is a weak guarantee: if no new writes occur, all database replicas will eventually synchronize and return identical query results.",
    "What is statement-based replication": "The leader logs every write request query (e.g. INSERT, UPDATE) and ships those exact SQL command strings to all followers to execute locally.",
    "What is a challenge with statement-based replication": "Non-deterministic SQL functions (like NOW(), RAND(), or auto-increment operations) can produce divergent data values on different replicas.",
    "What is write-ahead log (WAL) shipping": "The leader shares raw database log files (containing low-level disk byte changes) directly with followers to reconstruct the database state.",
    "What is a drawback of WAL shipping": "Because the WAL details low-level storage layouts, it tightly couples the replication mechanism to the exact database engine and storage version.",
    "What is logical log replication": "It decouples the replication log from storage internals. It logs high-level row changes (e.g., column values) so leaders and followers can run different software versions.",
    "What is the CAP-related tradeoff often discussed with replication": "The CAP theorem states that in the event of a network partition (P), a distributed system must choose between strict consistency (C) or active availability (A).",
    "What is a snapshot in replication": "A snapshot is a read-consistent copy of the database's physical storage state taken at a specific, frozen point in time.",
    "Why are snapshots useful": "When initializing a brand-new replica follower, the database loads the snapshot onto the node, then streams log changes that occurred after the snapshot timestamp.",
    "What is failover": "Failover is the automatic or manual operation where the system promotes one of the active follower replicas to be the new leader when the current leader crashes.",
    "What is a risk during failover": "If the original leader crashes before all write updates are shipped to the promoted follower, those updates can be lost, causing database inconsistency.",
    "What is split-brain": "Split-brain occurs when two nodes in a cluster simultaneously believe they are the active leader. Both accept writes, leading to catastrophic data divergence.",
    "What is multi-leader replication useful for": "It is highly suited for deploying databases across multiple geographical datacenters, allowing local writes even if transatlantic lines go down.",
    "What is a conflict in multi-leader replication": "A conflict occurs when two users in different datacenters edit the exact same data row concurrently, creating conflicting values that cannot both be saved.",
    "How are conflicts commonly resolved": "Databases use strategies like Last-Write-Wins (LWW) based on timestamps, giving users resolution tools, or merging changes using operational transformation.",
    "What is one downside of multi-leader replication": "The architectural complexity of detecting, catching, and resolving concurrent write conflicts across datacenters is very high.",
    "What is leaderless replication": "Also called Dynamo-style, it abandons the concept of a single leader. Clients write and read directly to/from multiple database nodes concurrently.",
    "Which system popularized leaderless replication": "Amazon's internal 'Dynamo' design paper popularized leaderless quorums, which was later adopted by databases like Apache Cassandra and Riak.",
    "What does quorum mean in leaderless replication": "Quorum is the minimum count of database replica nodes that must successfully process and acknowledge a read or write operation to guarantee data consistency.",
    "What is the condition often used for strong quorum consistency": "Strong consistency requires `w + r > n`, where the write node set size (w) and read node set size (r) overlap by at least one node among the replica set (n).",
    "What does ‘n’ represent in quorum systems": "The parameter 'n' represents the configured replication factor: the total number of replica nodes designated to store copies of a specific key.",
    "What is sloppy quorum": "If the primary replica nodes are unreachable, the system accepts writes on alternative temporary 'healthy' nodes in the cluster to maintain write availability.",
    "What is hinted handoff": "When an unreachable primary node comes back online, a temporary node that accepted its writes under a sloppy quorum ships those writes home to complete consistency.",
    "What problem can occur in leaderless replication during concurrent writes": "Clock synchronization drifts can cause Last-Write-Wins (LWW) to erroneously discard newer updates, or result in out-of-order execution anomalies.",
    "Why are vector clocks used": "Vector clocks track the causal history of updates across multiple database replicas, allowing the system to identify concurrent write conflicts accurately without relying on absolute wall-clock time."
};

function getExplanation(questionObj) {
    // Use built-in explanation from question data if available
    if (questionObj && questionObj.explanation) {
        return questionObj.explanation;
    }
    // Fallback: try to find a matching explanation from the hardcoded keys
    const questionText = typeof questionObj === 'string' ? questionObj : (questionObj?.question || '');
    for (let key in explanations) {
        if (questionText.toLowerCase().includes(key.toLowerCase())) {
            return explanations[key];
        }
    }
    return "In data-intensive systems, strict tradeoffs exist between write speeds, read latencies, network partition handling, and consistency levels.";
}

// ==========================================
// 4. CONFETTI ANIMATION ENGINE
// ==========================================
class ConfettiEngine {
    constructor(canvasId) {
        this.canvas = document.getElementById(canvasId);
        this.ctx = this.canvas.getContext('2d');
        this.particles = [];
        this.colors = ['#00f2fe', '#4facfe', '#10b981', '#8b5cf6', '#ef4444', '#f59e0b', '#ec4899'];
        this.isActive = false;
        this.animationId = null;
        
        window.addEventListener('resize', () => {
            if (this.isActive) {
                this.resizeCanvas();
            }
        });
    }
    
    resizeCanvas() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
    }
    
    start() {
        this.isActive = true;
        this.resizeCanvas();
        this.particles = [];
        for (let i = 0; i < 150; i++) {
            this.particles.push(this.createParticle());
        }
        this.animate();
        
        // Auto stop after 5 seconds to free CPU resources
        setTimeout(() => this.stop(), 5000);
    }
    
    stop() {
        this.isActive = false;
        if (this.animationId) {
            cancelAnimationFrame(this.animationId);
            this.animationId = null;
        }
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
    
    createParticle() {
        return {
            x: Math.random() * this.canvas.width,
            y: Math.random() * -this.canvas.height,
            size: Math.random() * 8 + 5,
            color: this.colors[Math.floor(Math.random() * this.colors.length)],
            speedY: Math.random() * 3 + 2,
            speedX: Math.random() * 2 - 1,
            rotation: Math.random() * Math.PI,
            rotationSpeed: Math.random() * 0.03 - 0.015
        };
    }
    
    animate() {
        if (!this.isActive) return;
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        
        this.particles.forEach((p, idx) => {
            p.y += p.speedY;
            p.x += p.speedX;
            p.rotation += p.rotationSpeed;
            
            // Loop back to top
            if (p.y > this.canvas.height) {
                this.particles[idx] = this.createParticle();
            }
            
            this.ctx.save();
            this.ctx.translate(p.x, p.y);
            this.ctx.rotate(p.rotation);
            this.ctx.fillStyle = p.color;
            this.ctx.fillRect(-p.size/2, -p.size/2, p.size, p.size);
            this.ctx.restore();
        });
        
        this.animationId = requestAnimationFrame(() => this.animate());
    }
}

// Initialize confetti
const confetti = new ConfettiEngine('confetti-canvas');

// ==========================================
// 5. APP VIEW MANAGEMENT (ROUTING)
// ==========================================
function navigateTo(viewId) {
    playSound('click');
    
    const views = document.querySelectorAll('.app-view');
    views.forEach(v => {
        v.classList.remove('active');
    });
    
    const target = document.getElementById(viewId);
    if (target) {
        target.classList.add('active');
        state.activeView = viewId;
    }
    
    // Update navigation buttons styling
    const dashboardBtn = document.getElementById('nav-btn-dashboard');
    const historyBtn = document.getElementById('nav-btn-history');
    
    if (viewId === 'view-dashboard' || viewId === 'view-subject-hub' || viewId === 'view-exam-config') {
        dashboardBtn.classList.add('active');
        historyBtn.classList.remove('active');
    } else if (viewId === 'view-performance-history') {
        dashboardBtn.classList.remove('active');
        historyBtn.classList.add('active');
    } else {
        dashboardBtn.classList.remove('active');
        historyBtn.classList.remove('active');
    }

    // Always scroll to top on navigation
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ==========================================
// 6. INITIALIZATION & STORAGE
// ==========================================
function loadLocalStorage() {
    try {
        const storedHistory = localStorage.getItem(STORAGE_KEY_HISTORY);
        if (storedHistory) {
            state.history = JSON.parse(storedHistory);
        }
        
        const storedTheme = localStorage.getItem(STORAGE_KEY_THEME);
        if (storedTheme) {
            document.body.className = storedTheme;
            updateThemeIcon(storedTheme === 'dark-theme');
        } else {
            // Default dark theme
            document.body.className = 'dark-theme';
            updateThemeIcon(true);
        }
        
        const storedSound = localStorage.getItem(STORAGE_KEY_SOUND);
        if (storedSound) {
            state.soundEnabled = JSON.parse(storedSound);
            updateSoundIcon();
        }
        
        // Handle learning streak
        const storedStreak = localStorage.getItem(STORAGE_KEY_STREAK);
        const storedStreakDate = localStorage.getItem(STORAGE_KEY_STREAK_DATE);
        
        if (storedStreak) {
            state.streak = parseInt(storedStreak);
            const today = new Date().toDateString();
            
            if (storedStreakDate) {
                const lastStudyDate = new Date(storedStreakDate);
                const timeDiff = new Date(today) - lastStudyDate;
                const diffDays = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));
                
                if (diffDays > 1) {
                    // Streak broken
                    state.streak = 1;
                    localStorage.setItem(STORAGE_KEY_STREAK, '1');
                }
            }
        }
    } catch (e) {
        console.error("Local storage load failed", e);
    }
}

function updateThemeIcon(isDark) {
    const icon = document.getElementById('theme-icon');
    if (icon) {
        icon.className = isDark ? 'fa-solid fa-moon' : 'fa-solid fa-sun';
    }
}

function updateSoundIcon() {
    const icon = document.getElementById('sound-icon');
    if (icon) {
        icon.className = state.soundEnabled ? 'fa-solid fa-volume-high' : 'fa-solid fa-volume-xmark';
    }
}

function toggleTheme() {
    const isDark = document.body.classList.contains('dark-theme');
    const newTheme = isDark ? 'light-theme' : 'dark-theme';
    document.body.className = newTheme;
    localStorage.setItem(STORAGE_KEY_THEME, newTheme);
    updateThemeIcon(!isDark);
    playSound('click');
}

function toggleSound() {
    state.soundEnabled = !state.soundEnabled;
    localStorage.setItem(STORAGE_KEY_SOUND, JSON.stringify(state.soundEnabled));
    updateSoundIcon();
    playSound('click');
}

// ==========================================
// 7. STATS AND PROGRESS METRICS
// ==========================================
function updateDashboardMetrics() {
    // Dashboard stats bar elements
    const dashAttempts = document.getElementById('dash-total-attempts');
    const dashAvg = document.getElementById('dash-avg-score');
    const dashStreak = document.getElementById('dash-streak');
    const dashBest = document.getElementById('dash-best-score');
    
    // Legacy elements (safety)
    const attemptsEl = document.getElementById('stat-total-attempts');
    const scoreEl = document.getElementById('stat-avg-score');
    const completedEl = document.getElementById('stat-completed-exams');
    const streakEl = document.getElementById('stat-streak');
    
    // Streak display
    const streakText = `${state.streak} ${state.streak === 1 ? 'Day' : 'Days'}`;
    if (streakEl) streakEl.textContent = streakText;
    if (dashStreak) dashStreak.textContent = streakText;
    
    if (state.history.length === 0) {
        if (attemptsEl) attemptsEl.textContent = '0';
        if (scoreEl) scoreEl.textContent = '0%';
        if (completedEl) completedEl.textContent = '0';
        if (dashAttempts) dashAttempts.textContent = '0';
        if (dashAvg) dashAvg.textContent = '0%';
        if (dashBest) dashBest.textContent = '--';
        updateRadialProgress(0, 'hero-progress-bar', 'hero-progress-percent');
        
        const exam1BestEl = document.getElementById('exam1-best-score');
        const exam2BestEl = document.getElementById('exam2-best-score');
        if (exam1BestEl) exam1BestEl.innerHTML = '<i class="fa-solid fa-trophy"></i> Best: --';
        if (exam2BestEl) exam2BestEl.innerHTML = '<i class="fa-solid fa-trophy"></i> Best: --';
        return;
    }
    
    if (attemptsEl) attemptsEl.textContent = state.history.length;
    if (completedEl) completedEl.textContent = state.history.filter(h => h.isCompleted).length;
    if (dashAttempts) dashAttempts.textContent = state.history.length;
    
    let totalPercent = 0;
    let globalBest = 0;
    state.history.forEach(item => {
        totalPercent += item.scorePercent;
        if (item.scorePercent > globalBest) globalBest = item.scorePercent;
    });
    const avgScore = Math.round(totalPercent / state.history.length);
    if (scoreEl) scoreEl.textContent = `${avgScore}%`;
    if (dashAvg) dashAvg.textContent = `${avgScore}%`;
    if (dashBest) dashBest.textContent = `${globalBest}%`;
    
    let exam1Best = -1;
    let exam2Best = -1;
    state.history.forEach(item => {
        if (item.examId === 0 && item.scorePercent > exam1Best) exam1Best = item.scorePercent;
        if (item.examId === 1 && item.scorePercent > exam2Best) exam2Best = item.scorePercent;
    });
    
    const exam1BestEl = document.getElementById('exam1-best-score');
    const exam2BestEl = document.getElementById('exam2-best-score');
    if (exam1Best >= 0 && exam1BestEl) {
        exam1BestEl.innerHTML = `<i class="fa-solid fa-trophy text-accent"></i> Best: <strong>${exam1Best}%</strong>`;
    }
    if (exam2Best >= 0 && exam2BestEl) {
        exam2BestEl.innerHTML = `<i class="fa-solid fa-trophy text-accent"></i> Best: <strong>${exam2Best}%</strong>`;
    }
    
    const syllabusPercent = computeSyllabusMasteryPercent();
    updateRadialProgress(syllabusPercent, 'hero-progress-bar', 'hero-progress-percent');
}

function updateRadialProgress(percent, barId, textId) {
    const bar = document.getElementById(barId);
    const text = document.getElementById(textId);
    
    if (!bar) return;
    
    const r = bar.getAttribute('r');
    const circ = 2 * Math.PI * r;
    
    // Animate circular stroke
    const offset = circ - (percent / 100) * circ;
    bar.style.strokeDasharray = circ;
    bar.style.strokeDashoffset = offset;
    
    if (text) {
        text.textContent = `${percent}%`;
    }
}

function computeSyllabusMasteryPercent() {
    // Total questions in core data = 40 + 34 = 74
    const totalQs = 74;
    const correctQuestionKeys = new Set();
    
    state.history.forEach(session => {
        // Collect question numbers that were answered correctly
        if (session.answersBreakdown) {
            session.answersBreakdown.forEach(ans => {
                if (ans.isCorrect) {
                    correctQuestionKeys.add(`${session.examId}_${ans.qNum}`);
                }
            });
        }
    });
    
    return Math.round((correctQuestionKeys.size / totalQs) * 100);
}

// ==========================================
// 8. SESSION BUILDER & CONFIGURATION
// ==========================================
function selectExamForConfig(examId) {
    state.currentSession.examId = examId;
    
    const titleEl = document.getElementById('config-exam-title');
    const limitSelect = document.getElementById('select-question-limit');
    
    // Clear previous options
    limitSelect.innerHTML = '';
    
    let maxQs = 10;
    
    if (examId === 0) {
        titleEl.innerHTML = '<i class="fa-solid fa-file-invoice"></i> Config: LSM Trees, NoSQL & DB Concepts';
        state.currentSession.title = "Exam 1: LSM Trees, NoSQL, and Database Concepts";
        maxQs = examData[0].questions.length; // 40
    } else if (examId === 1) {
        titleEl.innerHTML = '<i class="fa-solid fa-file-invoice"></i> Config: Replication & Distributed Systems';
        state.currentSession.title = "Exam 2: Replication and Distributed Systems";
        maxQs = examData[1].questions.length; // 34
    } else {
        titleEl.innerHTML = '<i class="fa-solid fa-shuffle"></i> Config: Syllabus Master Simulator';
        state.currentSession.title = "Combined Chapters 1-5 Master Mock";
        maxQs = examData[0].questions.length + examData[1].questions.length; // 74
    }
    
    // Populate dropdown options based on question counts
    limitSelect.add(new Option(`All ${maxQs} Questions`, "all"));
    if (maxQs > 10) limitSelect.add(new Option("10 Questions (Quick Study)", "10"));
    if (maxQs > 20) limitSelect.add(new Option("20 Questions (Balanced)", "20"));
    if (maxQs > 30) limitSelect.add(new Option("30 Questions (Focused Prep)", "30"));
    if (examId === 'custom' && maxQs > 50) limitSelect.add(new Option("50 Questions (Comprehensive)", "50"));
    
    // Set brief counts
    document.getElementById('brief-questions-count').textContent = maxQs;
    
    updateSessionBrief();
    navigateTo('view-exam-config');
}

function updateSessionBrief() {
    const mode = document.querySelector('input[name="exam_mode"]:checked').value;
    const limitVal = document.getElementById('select-question-limit').value;
    
    let qCount = 0;
    if (limitVal === 'all') {
        if (state.currentSession.examId === 0) qCount = 40;
        else if (state.currentSession.examId === 1) qCount = 34;
        else qCount = 74;
    } else {
        qCount = parseInt(limitVal);
    }
    
    document.getElementById('brief-questions-count').textContent = qCount;
    document.getElementById('brief-mode-name').textContent = mode === 'practice' ? 'Practice Mode (Untimed)' : 'Exam Simulator (Timed)';
    
    const timeGroup = document.getElementById('group-time-limit');
    if (mode === 'exam') {
        timeGroup.style.opacity = '1';
        timeGroup.style.pointerEvents = 'auto';
        document.getElementById('select-time-limit').disabled = false;
    } else {
        timeGroup.style.opacity = '0.5';
        timeGroup.style.pointerEvents = 'none';
        document.getElementById('select-time-limit').disabled = true;
    }
}

// Setup Exam Questions List
function buildSessionQuestions() {
    const examId = state.currentSession.examId;
    const mode = document.querySelector('input[name="exam_mode"]:checked').value;
    const limitVal = document.getElementById('select-question-limit').value;
    const timeLimitMinutes = parseInt(document.getElementById('select-time-limit').value);
    
    let pool = [];
    
    if (examId === 0) {
        pool = [...examData[0].questions];
    } else if (examId === 1) {
        pool = [...examData[1].questions];
    } else {
        // Combined syllabus pool, tagged with source exam titles
        const exam1Pool = examData[0].questions.map(q => ({...q, sourceTitle: "Exam 1"}));
        const exam2Pool = examData[1].questions.map(q => ({...q, sourceTitle: "Exam 2"}));
        pool = [...exam1Pool, ...exam2Pool];
    }
    
    // Shuffle the question pool for randomized custom review, or if custom mock is chosen
    if (examId === 'custom' || limitVal !== 'all') {
        pool = shuffleArray(pool);
    }
    
    // Crop pool to limit size
    let limit = pool.length;
    if (limitVal !== 'all') {
        limit = Math.min(parseInt(limitVal), pool.length);
    }
    
    const questions = pool.slice(0, limit);
    
    // Reset session variables
    state.currentSession.mode = mode;
    state.currentSession.questions = questions;
    state.currentSession.questionsCount = questions.length;
    state.currentSession.timeLimitMinutes = timeLimitMinutes;
    state.currentSession.userResponses = {};
    state.currentSession.flaggedQuestions.clear();
    state.currentSession.timeElapsedSeconds = 0;
    state.currentSession.startTime = new Date();
    state.currentSession.isCompleted = false;
    
    state.currentQuestionIndex = 0;
}

function shuffleArray(array) {
    const arr = [...array];
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}

// ==========================================
// 9. EXAM RUNNER ENGINE
// ==========================================
function startExamRunner() {
    buildSessionQuestions();
    
    // UI elements update
    document.getElementById('runner-current-title').textContent = state.currentSession.title;
    
    const modeBadge = document.getElementById('runner-mode-badge');
    const timerBox = document.getElementById('runner-timer-box');
    const timerVal = document.getElementById('runner-timer-val');
    
    modeBadge.textContent = state.currentSession.mode === 'practice' ? 'Practice Mode' : 'Exam Mode';
    modeBadge.className = state.currentSession.mode === 'practice' ? 'runner-badge' : 'runner-badge badge-orange';
    
    // Hide accuracy tracker initially in practice mode
    document.getElementById('practice-accuracy-box').style.display = 'none';
    
    if (state.currentSession.mode === 'exam') {
        timerBox.style.display = 'flex';
        timerBox.className = 'runner-timer-container';
        // Compute seconds
        let secondsLeft = state.currentSession.timeLimitMinutes * 60;
        updateTimerDisplay(secondsLeft);
        
        // Start running interval
        if (state.currentSession.timerIntervalId) clearInterval(state.currentSession.timerIntervalId);
        state.currentSession.timerIntervalId = setInterval(() => {
            state.currentSession.timeElapsedSeconds++;
            const timeLeft = secondsLeft - state.currentSession.timeElapsedSeconds;
            
            updateTimerDisplay(timeLeft);
            
            if (timeLeft <= 0) {
                clearInterval(state.currentSession.timerIntervalId);
                autoSubmitExam();
            }
        }, 1000);
    } else {
        // Untimed practice mode timer hide or count up
        timerBox.style.display = 'flex';
        timerBox.className = 'runner-timer-container';
        timerVal.textContent = 'Untimed Practice';
        
        // Standard count up for tracking duration
        if (state.currentSession.timerIntervalId) clearInterval(state.currentSession.timerIntervalId);
        state.currentSession.timerIntervalId = setInterval(() => {
            state.currentSession.timeElapsedSeconds++;
        }, 1000);
        
        // Show practice correctness accuracy box
        document.getElementById('practice-accuracy-box').style.display = 'inline';
        updatePracticeAccuracy();
    }
    
    // Populate navigation sidebar grid
    renderSidebarGrid();
    
    // Load first question
    loadQuestion(0);
    
    navigateTo('view-exam-runner');
}

function updateTimerDisplay(totalSeconds) {
    const timerVal = document.getElementById('runner-timer-val');
    const timerBox = document.getElementById('runner-timer-box');
    
    if (totalSeconds < 0) totalSeconds = 0;
    
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    
    const displayStr = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    timerVal.textContent = displayStr;
    
    // Time warnings shifting colors
    if (totalSeconds <= 60) {
        // Danger red
        timerBox.className = 'runner-timer-container danger-state';
    } else if (totalSeconds <= 300) {
        // Warning orange
        timerBox.className = 'runner-timer-container warning-state';
    } else {
        timerBox.className = 'runner-timer-container';
    }
}

function renderSidebarGrid() {
    const grid = document.getElementById('sidebar-questions-grid');
    grid.innerHTML = '';
    
    state.currentSession.questions.forEach((_, idx) => {
        const cell = document.createElement('button');
        cell.className = 'grid-cell';
        cell.id = `grid-cell-${idx}`;
        cell.textContent = idx + 1;
        cell.addEventListener('click', () => jumpToQuestion(idx));
        grid.appendChild(cell);
    });
    
    updateSidebarIndicators();
}

function updateSidebarIndicators() {
    const unansweredEl = document.getElementById('sidebar-unanswered-count');
    let unansweredCount = 0;
    
    state.currentSession.questions.forEach((_, idx) => {
        const cell = document.getElementById(`grid-cell-${idx}`);
        if (!cell) return;
        
        cell.className = 'grid-cell'; // reset
        
        // Answered check
        const hasAnswered = state.currentSession.userResponses[idx] !== undefined;
        
        if (idx === state.currentQuestionIndex) {
            cell.classList.add('current');
        }
        
        if (hasAnswered) {
            cell.classList.add('answered');
        } else {
            unansweredCount++;
        }
        
        if (state.currentSession.flaggedQuestions.has(idx)) {
            cell.classList.add('flagged');
        }
    });
    
    unansweredEl.textContent = `${unansweredCount} Left`;
}

// Question loading inside runner
function loadQuestion(index) {
    if (index < 0 || index >= state.currentSession.questions.length) return;
    
    state.currentQuestionIndex = index;
    
    // Track indicators
    updateSidebarIndicators();
    
    // Load text
    const q = state.currentSession.questions[index];
    const textEl = document.getElementById('active-question-text');
    
    // Append index in UI
    document.getElementById('current-q-index').textContent = index + 1;
    document.getElementById('total-qs-count').textContent = state.currentSession.questionsCount;
    
    // Set question text content
    let qPrefix = q.sourceTitle ? `[${q.sourceTitle}] ` : "";
    textEl.textContent = `${qPrefix}${q.question}`;
    
    // Load options
    const optionsContainer = document.getElementById('active-options-list');
    optionsContainer.innerHTML = '';
    
    const userSelectedLetter = state.currentSession.userResponses[index];
    const hasAlreadyChecked = state.currentSession.mode === 'practice' && userSelectedLetter !== undefined;
    
    q.options.forEach(opt => {
        const btn = document.createElement('button');
        btn.className = 'option-btn animate-fade-in';
        btn.id = `opt-btn-${opt.letter}`;
        
        // Selection highlights
        if (userSelectedLetter === opt.letter) {
            btn.classList.add('selected');
        }
        
        // If practice mode and already answered, show correct/wrong immediately
        if (hasAlreadyChecked) {
            btn.disabled = true;
            if (opt.letter === q.answer) {
                btn.classList.add('correct-choice');
            } else if (userSelectedLetter === opt.letter) {
                btn.classList.add('incorrect-choice');
            }
        }
        
        // Option inner structures
        const letterBadge = document.createElement('span');
        letterBadge.className = 'option-letter';
        letterBadge.textContent = opt.letter;
        
        const optionText = document.createElement('span');
        optionText.className = 'option-text';
        optionText.textContent = opt.text;
        
        const feedbackIcon = document.createElement('i');
        feedbackIcon.className = 'choice-icon';
        if (opt.letter === q.answer) {
            feedbackIcon.className = 'fa-solid fa-circle-check choice-icon';
        } else {
            feedbackIcon.className = 'fa-solid fa-circle-xmark choice-icon';
        }
        
        btn.appendChild(letterBadge);
        btn.appendChild(optionText);
        btn.appendChild(feedbackIcon);
        
        // Click events
        btn.addEventListener('click', () => selectOption(opt.letter));
        
        optionsContainer.appendChild(btn);
    });
    
    // Display control buttons based on practice vs exam mode
    const checkBtn = document.getElementById('btn-check-answer');
    const explanationBox = document.getElementById('practice-explanation-box');
    
    if (state.currentSession.mode === 'practice') {
        if (userSelectedLetter === undefined) {
            // Unanswered, show Check Answer button if selection is made
            checkBtn.style.display = 'inline-flex';
            checkBtn.disabled = true; // disabled until an option is clicked
            explanationBox.style.display = 'none';
        } else {
            // Already answered, hide Check Answer and show explanation
            checkBtn.style.display = 'none';
            showExplanationBox(index);
        }
    } else {
        // Exam mode: no instant check or explanation box
        checkBtn.style.display = 'none';
        explanationBox.style.display = 'none';
    }
    
    // Update progress runner track bar
    const progressFill = document.getElementById('runner-progress-fill');
    const pct = ((index + 1) / state.currentSession.questionsCount) * 100;
    progressFill.style.width = `${pct}%`;
    
    // Flag status UI
    const flagIcon = document.getElementById('flag-icon');
    const flagBtn = document.getElementById('btn-flag-question');
    
    if (state.currentSession.flaggedQuestions.has(index)) {
        flagIcon.className = 'fa-solid fa-flag';
        flagBtn.classList.add('btn-orange');
        flagBtn.classList.remove('btn-outline');
    } else {
        flagIcon.className = 'fa-regular fa-flag';
        flagBtn.classList.remove('btn-orange');
        flagBtn.classList.add('btn-outline');
    }
    
    // Disable prev button if on first question, next if on last
    document.getElementById('btn-prev-question').disabled = index === 0;
    
    const nextBtn = document.getElementById('btn-next-question');
    if (index === state.currentSession.questionsCount - 1) {
        nextBtn.innerHTML = 'Finish Runner <i class="fa-solid fa-circle-check"></i>';
    } else {
        nextBtn.innerHTML = 'Next <i class="fa-solid fa-chevron-right"></i>';
    }
}

function selectOption(letter) {
    if (state.currentSession.mode === 'practice' && state.currentSession.userResponses[state.currentQuestionIndex] !== undefined) {
        return; // already checked in practice mode, block edits
    }
    
    playSound('click');
    
    // Update response list
    state.currentSession.userResponses[state.currentQuestionIndex] = letter;
    
    // Update visuals immediately in option list
    const options = ['A', 'B', 'C', 'D'];
    options.forEach(l => {
        const btn = document.getElementById(`opt-btn-${l}`);
        if (btn) {
            if (l === letter) {
                btn.classList.add('selected');
            } else {
                btn.classList.remove('selected');
            }
        }
    });
    
    // Enable check answer button in Practice mode
    if (state.currentSession.mode === 'practice') {
        const checkBtn = document.getElementById('btn-check-answer');
        if (checkBtn) {
            checkBtn.disabled = false;
        }
    }
    
    updateSidebarIndicators();
}

function triggerCheckAnswer() {
    const index = state.currentQuestionIndex;
    const q = state.currentSession.questions[index];
    const userAns = state.currentSession.userResponses[index];
    
    if (userAns === undefined) return;
    
    const isCorrect = userAns === q.answer;
    
    // Play synthesis sounds
    if (isCorrect) {
        playSound('correct');
    } else {
        playSound('incorrect');
    }
    
    // Reveal correct/wrong options immediately
    q.options.forEach(opt => {
        const btn = document.getElementById(`opt-btn-${opt.letter}`);
        if (btn) {
            btn.disabled = true;
            if (opt.letter === q.answer) {
                btn.classList.add('correct-choice');
            } else if (userAns === opt.letter) {
                btn.classList.add('incorrect-choice');
            }
        }
    });
    
    // Update accuracy indicator
    updatePracticeAccuracy();
    
    // Hide check answer and show explanation
    document.getElementById('btn-check-answer').style.display = 'none';
    showExplanationBox(index);
    updateSidebarIndicators();
}

function showExplanationBox(index) {
    const q = state.currentSession.questions[index];
    const userAns = state.currentSession.userResponses[index];
    const isCorrect = userAns === q.answer;
    
    const expBox = document.getElementById('practice-explanation-box');
    const badge = document.getElementById('explanation-status-badge');
    const body = document.getElementById('explanation-text-content');
    
    badge.textContent = isCorrect ? "Correct" : "Incorrect";
    badge.className = isCorrect ? "exp-badge correct" : "exp-badge incorrect";
    
    // Load textbook context explanation
    body.textContent = getExplanation(q.question);
    
    expBox.style.display = 'block';
}

function updatePracticeAccuracy() {
    const accuracyPercentEl = document.getElementById('practice-accuracy-percent');
    
    let totalChecked = 0;
    let correctCount = 0;
    
    state.currentSession.questions.forEach((q, idx) => {
        const userAns = state.currentSession.userResponses[idx];
        if (userAns !== undefined) {
            totalChecked++;
            if (userAns === q.answer) {
                correctCount++;
            }
        }
    });
    
    if (totalChecked === 0) {
        accuracyPercentEl.textContent = '0%';
    } else {
        const rate = Math.round((correctCount / totalChecked) * 100);
        accuracyPercentEl.textContent = `${rate}%`;
    }
}

function toggleFlagActive() {
    const index = state.currentQuestionIndex;
    playSound('click');
    
    if (state.currentSession.flaggedQuestions.has(index)) {
        state.currentSession.flaggedQuestions.delete(index);
    } else {
        state.currentSession.flaggedQuestions.add(index);
    }
    
    // Refresh question view & sidebar markers
    loadQuestion(index);
}

function handleNextQuestion() {
    const nextIdx = state.currentQuestionIndex + 1;
    if (nextIdx < state.currentSession.questionsCount) {
        playSound('click');
        loadQuestion(nextIdx);
    } else {
        // Last question triggering exam submit sequence
        triggerSubmitExamConfirmation();
    }
}

function handlePrevQuestion() {
    const prevIdx = state.currentQuestionIndex - 1;
    if (prevIdx >= 0) {
        playSound('click');
        loadQuestion(prevIdx);
    }
}

function jumpToQuestion(idx) {
    if (idx >= 0 && idx < state.currentSession.questionsCount) {
        playSound('click');
        loadQuestion(idx);
    }
}

// ==========================================
// 10. SUBMISSION & RESULTS COMPILER
// ==========================================
function triggerSubmitExamConfirmation() {
    playSound('click');
    
    // Count remaining unanswered questions
    let unanswered = 0;
    for (let i = 0; i < state.currentSession.questionsCount; i++) {
        if (state.currentSession.userResponses[i] === undefined) {
            unanswered++;
        }
    }
    
    let message = "Are you ready to submit your exam responses? You will get a detailed performance scorecard with topic-by-topic breakdowns.";
    if (unanswered > 0) {
        message = `Warning: You have ${unanswered} unanswered question${unanswered === 1 ? '' : 's'} remaining in this session. Are you sure you want to submit now?`;
    }
    
    if (confirm(message)) {
        submitExamSession();
    }
}

function autoSubmitExam() {
    // Timed out, force complete
    alert("Time limit reached! Your exam responses are being submitted automatically.");
    submitExamSession();
}

function submitExamSession() {
    // Clear runner timers
    if (state.currentSession.timerIntervalId) {
        clearInterval(state.currentSession.timerIntervalId);
    }
    
    state.currentSession.isCompleted = true;
    
    // Evaluate scores
    let correctCount = 0;
    const breakdown = [];
    
    state.currentSession.questions.forEach((q, idx) => {
        const userAns = state.currentSession.userResponses[idx];
        const isCorrect = userAns === q.answer;
        
        if (isCorrect) correctCount++;
        
        breakdown.push({
            qNum: q.number,
            questionText: q.question,
            options: q.options,
            userAns: userAns || null,
            correctAns: q.answer,
            isCorrect: isCorrect,
            isFlagged: state.currentSession.flaggedQuestions.has(idx)
        });
    });
    
    const totalQs = state.currentSession.questionsCount;
    const scorePercent = totalQs === 0 ? 0 : Math.round((correctCount / totalQs) * 100);
    
    // Format duration string
    const durSecs = state.currentSession.timeElapsedSeconds;
    const minutes = Math.floor(durSecs / 60);
    const seconds = durSecs % 60;
    const durationStr = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    
    // learning streak updater
    updateStreakData();
    
    // Create new history log item
    const historyItem = {
        id: 'hist_' + Date.now(),
        examId: state.currentSession.examId,
        title: state.currentSession.title,
        mode: state.currentSession.mode,
        scorePercent: scorePercent,
        correctFraction: `${correctCount}/${totalQs}`,
        duration: durationStr,
        timestamp: new Date().toISOString(),
        isCompleted: true,
        answersBreakdown: breakdown,
        flaggedCount: state.currentSession.flaggedQuestions.size
    };
    
    // Prepend to history stack
    state.history.unshift(historyItem);
    localStorage.setItem(STORAGE_KEY_HISTORY, JSON.stringify(state.history));
    
    // Launch scorecard renderer
    renderScorecard(historyItem);
}

function updateStreakData() {
    const today = new Date().toDateString();
    const storedStreakDate = localStorage.getItem(STORAGE_KEY_STREAK_DATE);
    
    if (storedStreakDate !== today) {
        // Increments streak if it's the next day
        if (storedStreakDate) {
            const lastStudyDate = new Date(storedStreakDate);
            const timeDiff = new Date(today) - lastStudyDate;
            const diffDays = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));
            
            if (diffDays === 1) {
                state.streak++;
            } else if (diffDays > 1) {
                state.streak = 1;
            }
        } else {
            state.streak = 1;
        }
        
        localStorage.setItem(STORAGE_KEY_STREAK, String(state.streak));
        localStorage.setItem(STORAGE_KEY_STREAK_DATE, today);
    }
}

// Scorecard compiler UI
function renderScorecard(historyItem) {
    playSound('complete');
    
    // Setup labels
    document.getElementById('results-exam-title').textContent = historyItem.title;
    document.getElementById('results-score-percent').textContent = `${historyItem.scorePercent}%`;
    document.getElementById('results-score-fraction').textContent = `${historyItem.correctFraction} Correct`;
    
    document.getElementById('results-time-spent').textContent = historyItem.duration;
    document.getElementById('results-accuracy').textContent = `${historyItem.scorePercent}%`;
    document.getElementById('results-flagged-count').textContent = `${historyItem.flaggedCount} Qs`;
    document.getElementById('results-streak').textContent = `${state.streak} ${state.streak === 1 ? 'Day' : 'Days'}`;
    
    // Performance gauge visual ring
    const percent = historyItem.scorePercent;
    updateRadialProgress(percent, 'results-progress-bar', null);
    
    // Grade critiques
    const gradeTitle = document.getElementById('results-performance-grade');
    const critiqueEl = document.getElementById('results-performance-critique');
    
    if (percent >= 90) {
        gradeTitle.textContent = "Syllabus Titan!";
        critiqueEl.textContent = "Absolute mastery achieved! You displayed highly precise, robust database systems schema comprehension.";
        // Trigger visual confetti!
        setTimeout(() => confetti.start(), 300);
    } else if (percent >= 75) {
        gradeTitle.textContent = "Distinguished Scholar!";
        critiqueEl.textContent = "Excellent work. You have a solid grasp of LSM compactions, storage locality, and replica quorums.";
        if (percent >= 80) setTimeout(() => confetti.start(), 300);
    } else if (percent >= 50) {
        gradeTitle.textContent = "Competent Engineer";
        critiqueEl.textContent = "Pass achieved. Continue reviewing vector clocks, hinted handoff, and read/write amplification profiles to close learning gaps.";
    } else {
        gradeTitle.textContent = "Aspiring Apprentice";
        critiqueEl.textContent = "Low score. We highly recommend reviewing standard textbook definitions, re-reading Chapters 1-5, and retaking this exam.";
    }
    
    // Populate Review list
    renderReviewList(historyItem.answersBreakdown);
    
    // Go to Results View
    navigateTo('view-exam-results');
}

// Reviewing items on scorecard
function renderReviewList(breakdown, filter = 'all') {
    const container = document.getElementById('results-review-list');
    container.innerHTML = '';
    
    let filteredList = [...breakdown];
    
    if (filter === 'correct') {
        filteredList = breakdown.filter(item => item.isCorrect);
    } else if (filter === 'incorrect') {
        filteredList = breakdown.filter(item => !item.isCorrect);
    } else if (filter === 'flagged') {
        filteredList = breakdown.filter(item => item.isFlagged);
    }
    
    // Update filter counts
    document.getElementById('count-filter-all').textContent = breakdown.length;
    document.getElementById('count-filter-correct').textContent = breakdown.filter(item => item.isCorrect).length;
    document.getElementById('count-filter-incorrect').textContent = breakdown.filter(item => !item.isCorrect).length;
    document.getElementById('count-filter-flagged').textContent = breakdown.filter(item => item.isFlagged).length;
    
    if (filteredList.length === 0) {
        container.innerHTML = `<div class="text-center text-muted py-4 card">No questions match the selected filter.</div>`;
        return;
    }
    
    filteredList.forEach((item, idx) => {
        const card = document.createElement('div');
        card.className = `review-item-card card ${item.isCorrect ? 'border-correct' : 'border-incorrect'} animate-fade-in`;
        
        // Card meta tags
        const metaRow = document.createElement('div');
        metaRow.className = 'review-item-meta';
        
        const qTag = document.createElement('span');
        qTag.className = 'review-q-tag';
        qTag.textContent = `Question ${item.qNum}`;
        if (item.isFlagged) {
            qTag.innerHTML += ` &nbsp;<i class="fa-solid fa-flag text-orange"></i>`;
        }
        
        const statusLabel = document.createElement('span');
        statusLabel.className = `review-status-label ${item.isCorrect ? 'correct' : 'incorrect'}`;
        statusLabel.textContent = item.isCorrect ? 'Correct' : 'Incorrect';
        
        metaRow.appendChild(qTag);
        metaRow.appendChild(statusLabel);
        
        // Question Text
        const qText = document.createElement('h4');
        qText.className = 'review-question-text';
        qText.textContent = item.questionText;
        
        // Options List
        const optionsList = document.createElement('div');
        optionsList.className = 'review-options-list';
        
        item.options.forEach(opt => {
            const optRow = document.createElement('div');
            optRow.className = 'review-option';
            
            // Highlights user selection vs correct answer
            if (opt.letter === item.correctAns) {
                optRow.classList.add('correct');
            } else if (opt.letter === item.userAns) {
                optRow.classList.add('incorrect');
            }
            
            const badge = document.createElement('span');
            badge.className = 'review-option-letter';
            badge.textContent = opt.letter;
            
            const txt = document.createElement('span');
            txt.textContent = opt.text;
            
            optRow.appendChild(badge);
            optRow.appendChild(txt);
            optionsList.appendChild(optRow);
        });
        
        // Explanation
        const expSection = document.createElement('div');
        expSection.className = 'review-explanation';
        
        const expTitle = document.createElement('h5');
        expTitle.textContent = "Textbook Insight";
        
        const expText = document.createElement('p');
        expText.textContent = getExplanation(item.questionText);
        
        expSection.appendChild(expTitle);
        expSection.appendChild(expText);
        
        // Put together
        card.appendChild(metaRow);
        card.appendChild(qText);
        card.appendChild(optionsList);
        card.appendChild(expSection);
        
        container.appendChild(card);
    });
}

function handleReviewFilter(filterType) {
    playSound('click');
    
    // Toggle active filter button style
    const filterIds = {
        'all': 'filter-btn-all',
        'correct': 'filter-btn-correct',
        'incorrect': 'filter-btn-incorrect',
        'flagged': 'filter-btn-flagged'
    };
    
    for (let type in filterIds) {
        const btn = document.getElementById(filterIds[type]);
        if (btn) {
            if (type === filterType) {
                btn.classList.add('active');
            } else {
                btn.classList.remove('active');
            }
        }
    }
    
    // Reload items list based on current active session history item
    const latestAttempt = state.history[0];
    if (latestAttempt) {
        renderReviewList(latestAttempt.answersBreakdown, filterType);
    }
}

// ==========================================
// 11. HISTORICAL ARCHIVE ENGINE
// ==========================================
function renderPerformanceHistory() {
    const tableBody = document.getElementById('history-table-body');
    const totalExamsEl = document.getElementById('hist-total-exams');
    const bestScoreEl = document.getElementById('hist-best-score');
    const avgAccuracyEl = document.getElementById('hist-avg-accuracy');
    
    if (state.history.length === 0) {
        tableBody.innerHTML = `
            <tr>
                <td colspan="6" class="text-center text-muted py-4">No exam history recorded yet. Complete an exam to start logging your stats!</td>
            </tr>
        `;
        totalExamsEl.textContent = '0';
        bestScoreEl.textContent = '--';
        avgAccuracyEl.textContent = '--';
        return;
    }
    
    // Computes aggregate summaries
    totalExamsEl.textContent = state.history.length;
    
    let best = 0;
    let sum = 0;
    state.history.forEach(item => {
        sum += item.scorePercent;
        if (item.scorePercent > best) best = item.scorePercent;
    });
    
    bestScoreEl.textContent = `${best}%`;
    avgAccuracyEl.textContent = `${Math.round(sum / state.history.length)}%`;
    
    // Populate Log Rows
    tableBody.innerHTML = '';
    
    state.history.forEach(item => {
        const tr = document.createElement('tr');
        tr.className = 'animate-fade-in';
        
        // Date Formats
        const date = new Date(item.timestamp);
        const dateStr = date.toLocaleDateString() + ' ' + date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
        
        const modeBadge = `<span class="runner-badge ${item.mode === 'exam' ? 'badge-orange' : ''}">${item.mode === 'exam' ? 'Exam' : 'Practice'}</span>`;
        
        const scoreClass = item.scorePercent >= 80 ? 'text-green font-bold' : (item.scorePercent >= 50 ? 'text-accent font-bold' : 'text-red font-bold');
        const scoreDisplay = `<span class="${scoreClass}">${item.scorePercent}% (${item.correctFraction})</span>`;
        
        tr.innerHTML = `
            <td>${dateStr}</td>
            <td><strong>${item.title}</strong></td>
            <td>${modeBadge}</td>
            <td>${scoreDisplay}</td>
            <td>${item.duration}</td>
            <td>
                <button class="btn btn-secondary py-2" id="btn-re-review-${item.id}">
                    <i class="fa-solid fa-magnifying-glass"></i> Review
                </button>
            </td>
        `;
        
        tableBody.appendChild(tr);
        
        // Click event to review past attempts in depth!
        document.getElementById(`btn-re-review-${item.id}`).addEventListener('click', () => {
            renderScorecard(item);
        });
    });
}

function clearPerformanceHistory() {
    if (confirm("Are you sure you want to permanently delete all your performance history and learning logs? This action cannot be undone.")) {
        playSound('incorrect');
        state.history = [];
        localStorage.removeItem(STORAGE_KEY_HISTORY);
        
        // Reset metrics
        updateDashboardMetrics();
        renderPerformanceHistory();
        
        alert("Performance history cleared successfully.");
    }
}

// ==========================================
// 12. ROUTING CONTROLLERS & EVENT ATTACHERS
// ==========================================
function setupEventListeners() {
    // Header Links
    document.getElementById('nav-btn-dashboard').addEventListener('click', () => navigateTo('view-dashboard'));
    document.getElementById('nav-btn-history').addEventListener('click', () => {
        renderPerformanceHistory();
        navigateTo('view-performance-history');
    });
    document.getElementById('btn-header-logo').addEventListener('click', () => navigateTo('view-dashboard'));
    
    // Subject Course Enter
    document.getElementById('btn-enter-adv-web').addEventListener('click', () => navigateTo('view-subject-hub'));
    
    // Back navigation buttons
    document.getElementById('btn-back-to-dashboard').addEventListener('click', () => navigateTo('view-dashboard'));
    document.getElementById('btn-back-to-hub').addEventListener('click', () => navigateTo('view-subject-hub'));
    
    // Core Course Exams Triggers
    document.getElementById('btn-start-exam-1').addEventListener('click', () => selectExamForConfig(0));
    document.getElementById('btn-start-exam-2').addEventListener('click', () => selectExamForConfig(1));
    document.getElementById('btn-start-custom-exam').addEventListener('click', () => selectExamForConfig('custom'));
    
    // Exam Setup Configuration listeners
    document.getElementById('mode-card-practice').addEventListener('click', () => {
        document.querySelector('input[name="exam_mode"][value="practice"]').checked = true;
        document.getElementById('mode-card-practice').classList.add('active');
        document.getElementById('mode-card-exam').classList.remove('active');
        playSound('click');
        updateSessionBrief();
    });
    
    document.getElementById('mode-card-exam').addEventListener('click', () => {
        document.querySelector('input[name="exam_mode"][value="exam"]').checked = true;
        document.getElementById('mode-card-exam').classList.add('active');
        document.getElementById('mode-card-practice').classList.remove('active');
        playSound('click');
        updateSessionBrief();
    });
    
    document.getElementById('select-question-limit').addEventListener('change', updateSessionBrief);
    
    // Launch runner
    document.getElementById('btn-launch-session').addEventListener('click', startExamRunner);
    
    // Quiz Actions in runner
    document.getElementById('btn-check-answer').addEventListener('click', triggerCheckAnswer);
    document.getElementById('btn-flag-question').addEventListener('click', toggleFlagActive);
    document.getElementById('btn-next-question').addEventListener('click', handleNextQuestion);
    document.getElementById('btn-prev-question').addEventListener('click', handlePrevQuestion);
    
    // Exit & Submit Runner Triggers
    document.getElementById('btn-submit-exam').addEventListener('click', triggerSubmitExamConfirmation);
    document.getElementById('btn-exit-runner').addEventListener('click', triggerAbandonRunner);
    
    // Modals confirm boxes
    document.getElementById('btn-cancel-exit').addEventListener('click', hideAbandonModal);
    document.getElementById('btn-confirm-exit').addEventListener('click', confirmAbandonRunner);
    
    // Theme & Sound Header toggles
    document.getElementById('btn-toggle-theme').addEventListener('click', toggleTheme);
    document.getElementById('btn-toggle-sound').addEventListener('click', toggleSound);
    
    // Scorecard Results Buttons
    document.getElementById('btn-results-retake').addEventListener('click', () => {
        confetti.stop();
        startExamRunner();
    });
    document.getElementById('btn-results-to-hub').addEventListener('click', () => {
        confetti.stop();
        updateDashboardMetrics();
        navigateTo('view-subject-hub');
    });
    
    // Scorecard Review Filters
    document.getElementById('filter-btn-all').addEventListener('click', () => handleReviewFilter('all'));
    document.getElementById('filter-btn-correct').addEventListener('click', () => handleReviewFilter('correct'));
    document.getElementById('filter-btn-incorrect').addEventListener('click', () => handleReviewFilter('incorrect'));
    document.getElementById('filter-btn-flagged').addEventListener('click', () => handleReviewFilter('flagged'));
    
    // Clear History Button
    document.getElementById('btn-clear-history').addEventListener('click', clearPerformanceHistory);
}

// Modal handling logic
function triggerAbandonRunner() {
    playSound('click');
    document.getElementById('exit-modal').classList.add('active');
}

function hideAbandonModal() {
    playSound('click');
    document.getElementById('exit-modal').classList.remove('active');
}

function confirmAbandonRunner() {
    playSound('incorrect');
    
    // Clear Active Timers
    if (state.currentSession.timerIntervalId) {
        clearInterval(state.currentSession.timerIntervalId);
    }
    
    document.getElementById('exit-modal').classList.remove('active');
    updateDashboardMetrics();
    navigateTo('view-subject-hub');
}

// Window load init
window.addEventListener('DOMContentLoaded', () => {
    // Load config states from localStorage
    loadLocalStorage();
    
    // Setup listeners
    setupEventListeners();
    
    // Initialize Dashboard UI summaries
    updateDashboardMetrics();
    
    console.log("PrepVerse Exam Engine loaded successfully. Ready for study sessions!");
});
