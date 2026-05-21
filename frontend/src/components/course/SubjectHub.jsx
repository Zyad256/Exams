import { useState } from 'react';
import { useExamContext } from '../../context/ExamContext';
import { examData } from '../../data/questions';

const chapters = [
    {
        id: 1,
        badge: 'Ch 1',
        title: 'Reliable, Scalable, & Maintainable Applications',
        preview: 'Hardware/software faults, load parameters, and latency vs. throughput trade-offs.',
        meta: 'Reliability, scalability, maintainability',
        sections: [
            {
                heading: 'Reliability',
                body: 'The system should continue to work correctly even when things go wrong. <strong>Faults</strong> (one component deviating) vs <strong>Failures</strong> (whole system stops).',
                bullets: [
                    '<strong>Hardware faults:</strong> Hard disks crashing, power outages → handle with redundancy (RAID, backup)',
                    '<strong>Software faults:</strong> Bugs causing crashes (e.g., Linux leap second bug)',
                    '<strong>Human errors:</strong> Leading cause of outages → minimize with well-designed APIs, sandbox environments, automated testing, and quick rollback'
                ]
            },
            {
                heading: 'Scalability',
                body: 'Dealing with growth. Use <strong>Load Parameters</strong> (requests/sec, read/write ratio). Measure with <strong>Percentiles</strong> — median (p50) and tail latencies (p99) matter more than averages.'
            },
            {
                heading: 'Maintainability',
                bullets: [
                    '<strong>Operability:</strong> Easy routine tasks, good monitoring & automation',
                    '<strong>Simplicity:</strong> Use abstraction to hide complexity',
                    '<strong>Evolvability:</strong> Easy to adapt to changing requirements'
                ]
            }
        ]
    },
    {
        id: 2,
        badge: 'Ch 2',
        title: 'Data Models & Query Languages',
        preview: 'Comparing Relational, Document, NoSQL, and Graph schemas for complex relationships.',
        meta: 'SQL, document models, graph models, query languages',
        sections: [
            {
                heading: '4 Layers of Abstraction',
                body: 'Application Developer → Storage Representation → Database Software → Hardware Engineers'
            },
            {
                heading: 'Relational (SQL)',
                body: 'Data in tables/tuples. <strong>Impedance Mismatch:</strong> disconnect between OOP code and relational tables. ORMs reduce but can\'t eliminate this.'
            },
            {
                heading: 'Document (NoSQL)',
                body: '<strong>Schema-on-Read</strong> (implicit, like dynamic typing) vs <strong>Schema-on-Write</strong> (explicit, like static typing). Good data locality but poor join support.'
            },
            {
                heading: 'Graph Model',
                body: 'For highly interconnected data. <strong>Property Graph</strong> (Neo4j, Cypher), <strong>Triple-Store</strong> (SPARQL), <strong>Datalog</strong>.'
            },
            {
                heading: 'Declarative vs Imperative',
                body: 'Declarative (SQL/CSS) specifies <em>what</em>, not <em>how</em>. Benefits: concise, hides implementation, enables parallel execution.'
            }
        ]
    },
    {
        id: 3,
        badge: 'Ch 3',
        title: 'Storage & Retrieval',
        preview: 'Diving into SSTables, Log-Structured Merge Trees, memtables, and Bloom filters.',
        meta: 'Indexes, LSM trees, B-trees, OLTP vs OLAP',
        sections: [
            {
                heading: 'Append-Only Log',
                body: 'Write O(1) — fast sequential append. Read O(n) — must scan entire file. Indexes speed up reads but slow writes.'
            },
            {
                heading: 'Hash Indexes (Bitcask)',
                body: 'In-memory hash map → byte offsets on disk. Uses <strong>compaction & merging</strong>, tombstone deletes, single writer thread. Limitation: all keys must fit in RAM, no range queries.'
            },
            {
                heading: 'SSTables & LSM-Trees',
                body: 'Segments sorted by key. <strong>Memtable</strong> (Red-Black/AVL) → flush to SSTable → WAL for crash recovery. Bloom filters prevent wasteful disk reads. Compaction: size-tiered vs leveled.'
            },
            {
                heading: 'B-Trees',
                body: 'Fixed-size pages (4KB), branching factor ~hundreds. Page splitting keeps tree balanced at O(log n). WAL (Redo Log) for crash resilience. Latches for concurrency.'
            },
            {
                heading: 'OLTP vs OLAP',
                body: '<strong>OLTP:</strong> User-facing, small record lookups, disk seek bottleneck. <strong>OLAP:</strong> Analyst queries, scan millions of records, disk bandwidth bottleneck. Data warehouses use ETL and column-oriented storage.'
            }
        ]
    },
    {
        id: 4,
        badge: 'Ch 4',
        title: 'Encoding & Evolution',
        preview: 'Data evolution systems, schema compatibility, JSON, XML, Protobuf, Thrift, and Avro.',
        meta: 'Serialization, compatibility, schemas, services',
        sections: [
            {
                heading: 'Compatibility',
                body: '<strong>Backward:</strong> Newer code reads older data (easy). <strong>Forward:</strong> Older code reads newer data (tricky — must ignore unknowns). Both essential for rolling upgrades.'
            },
            {
                heading: 'Encoding Formats',
                bullets: [
                    '<strong>Language-specific</strong> (Java Serializable, pickle): Convenient but security risk (RCE), single language lock-in',
                    '<strong>JSON/XML:</strong> Human-readable but number ambiguity, no binary support, Base64 adds 33% size',
                    '<strong>Protobuf/Thrift:</strong> Use field tags (numbers), compact binary, strong schema evolution',
                    '<strong>Avro:</strong> No tags — matches by field name. Most compact. Writer/Reader schema resolution. Great for Hadoop/Kafka'
                ]
            },
            {
                heading: 'Dataflow Modes',
                bullets: [
                    '<strong>Through Databases:</strong> Data outlives code; forward compat critical',
                    '<strong>Through Services (REST/RPC):</strong> RPC\'s "Location Transparency" is a flawed illusion',
                    '<strong>Message Passing:</strong> Brokers (Kafka, RabbitMQ) buffer, redeliver, and fan-out'
                ]
            }
        ]
    },
    {
        id: 5,
        badge: 'Ch 5',
        title: 'Replication & Distributed Nodes',
        preview: 'Single-leader, multi-leader, leaderless systems, quorums, and replication lag.',
        meta: 'Replication, consistency, failover, quorums',
        sections: [
            {
                heading: 'Single-Leader',
                body: 'One leader accepts writes, followers consume replication log. Sync (guaranteed up-to-date, blocks on crash) vs Async (leader never blocks, data loss risk).'
            },
            {
                heading: 'Failover Pitfalls',
                bullets: [
                    '<strong>Split Brain:</strong> Two nodes both believe they\'re leader → data corruption',
                    'Discarding un-replicated writes violates durability',
                    'Short timeouts cause unnecessary failovers'
                ]
            },
            {
                heading: 'Replication Lag Anomalies',
                bullets: [
                    '<strong>Read-after-write:</strong> User sees own writes vanish → read own profile from leader',
                    '<strong>Monotonic reads:</strong> Time goes backward → pin user to same replica',
                    '<strong>Consistent prefix:</strong> Effect before cause → route causal writes to same partition'
                ]
            },
            {
                heading: 'Multi-Leader & Leaderless',
                body: '<strong>Multi-leader:</strong> Multiple DCs, conflict resolution (LWW, merge, custom). <strong>Leaderless (Dynamo):</strong> Any node accepts writes, quorum w+r>n, sloppy quorums, hinted handoff, version vectors for concurrency.'
            }
        ]
    }
];

export default function SubjectHub() {
    const { navigateTo, setCurrentSession } = useExamContext();
    const [selectedChapterId, setSelectedChapterId] = useState(null);
    const selectedChapter = chapters.find(chapter => chapter.id === selectedChapterId);
    
    const examCounts = {
        exam1: examData.find(exam => exam.examId === 0)?.questions.length || 0,
        exam2: examData.find(exam => exam.examId === 1)?.questions.length || 0,
        exam3: examData.find(exam => exam.examId === 2)?.questions.length || 0,
        total: examData.reduce((sum, exam) => sum + exam.questions.length, 0)
    };

    const handleConfigureExam = (examId) => {
        setCurrentSession(prev => ({ ...prev, examId }));
        navigateTo('view-exam-config');
    };

    return (
        <section id="view-subject-hub" className="app-view active">
            <div className="view-header">
                <button className="btn-back" onClick={() => navigateTo('view-dashboard')}>
                    <i className="fa-solid fa-chevron-left"></i> Back to Dashboard
                </button>
                <h1 className="view-title"><i className="fa-solid fa-code text-accent"></i> Advanced Programming Web</h1>
                <p className="view-subtitle">Designing Data-Intensive Applications Syllabus (Chapters 1 to 5)</p>
            </div>

            <div className="subject-details-grid">
                
                {/* Left: Syllabus Map & Chapters Card */}
                <div className="syllabus-card card">
                    <h3 className="card-title"><i className="fa-solid fa-map-location-dot"></i> Course Syllabus</h3>
                    <p className="card-subtitle">Select any chapter to read its detailed summary on the right:</p>
                    
                    <ul className="syllabus-list">
                        {chapters.map((chapter) => (
                            <li
                                className={`syllabus-item syllabus-item-link ${selectedChapterId === chapter.id ? 'active' : ''}`}
                                key={chapter.id}
                                onClick={() => setSelectedChapterId(prev => prev === chapter.id ? null : chapter.id)}
                                tabIndex="0"
                                onKeyDown={(event) => {
                                    if (event.key === 'Enter' || event.key === ' ') {
                                        event.preventDefault();
                                        setSelectedChapterId(prev => prev === chapter.id ? null : chapter.id);
                                    }
                                }}
                                style={{
                                    borderLeft: selectedChapterId === chapter.id ? '4px solid var(--color-accent)' : '1px solid transparent',
                                    background: selectedChapterId === chapter.id ? 'rgba(255, 255, 255, 0.04)' : ''
                                }}
                            >
                                <div className="ch-badge" style={{
                                    background: selectedChapterId === chapter.id ? 'rgba(6, 182, 212, 0.15)' : '',
                                    borderColor: selectedChapterId === chapter.id ? 'var(--color-accent)' : ''
                                }}>{chapter.badge}</div>
                                <div className="ch-info">
                                    <h4>{chapter.title}</h4>
                                    <p>{chapter.preview}</p>
                                </div>
                                <i className="fa-solid fa-arrow-right ch-open-icon" style={{
                                    transform: selectedChapterId === chapter.id ? 'rotate(90deg)' : 'none',
                                    color: selectedChapterId === chapter.id ? 'var(--color-accent)' : ''
                                }}></i>
                            </li>
                        ))}
                    </ul>
                    {selectedChapterId !== null && (
                        <button className="btn btn-outline btn-full-width" style={{ marginTop: '1rem' }} onClick={() => setSelectedChapterId(null)}>
                            <i className="fa-solid fa-circle-question"></i> Show Core Exams
                        </button>
                    )}
                </div>

                {/* Right Column: Dynamic Panel (Exams OR Chapter Blog Summary) */}
                {selectedChapter ? (
                    <article className="chapter-blog-page card card-glow animate-fade-in" style={{ padding: '2rem', height: 'fit-content' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingBottom: '1rem', borderBottom: '1px solid var(--border-color)' }}>
                            <span className="chapter-blog-kicker" style={{ margin: 0 }}>{selectedChapter.badge} Summary</span>
                            <button className="btn btn-secondary" onClick={() => setSelectedChapterId(null)}>
                                <i className="fa-solid fa-chevron-left"></i> Back to Exams
                            </button>
                        </div>

                        <header className="chapter-blog-hero" style={{ paddingTop: '1.5rem', paddingBottom: '1.5rem' }}>
                            <h2 style={{ fontSize: '1.8rem', fontWeight: 800, marginBottom: '0.5rem', lineHeight: '1.2' }}>{selectedChapter.title}</h2>
                            <p style={{ fontSize: '1rem', color: 'var(--text-secondary)', lineHeight: '1.5' }}>{selectedChapter.preview}</p>
                            <div className="chapter-blog-meta" style={{ marginTop: '1rem' }}>
                                <span><i className="fa-solid fa-layer-group"></i> {selectedChapter.meta}</span>
                            </div>
                        </header>

                        <div className="chapter-blog-body ch-summary-content" style={{ background: 'transparent', border: 'none', padding: 0 }}>
                            {selectedChapter.sections.map((section) => (
                                <div className="chapter-blog-section" key={section.heading} style={{ padding: '1rem 0', borderBottom: '1px solid var(--border-color)' }}>
                                    <h3 style={{ fontSize: '1.15rem', color: 'var(--color-accent)', marginBottom: '0.6rem', display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 750 }}>
                                        <i className="fa-solid fa-bookmark" style={{ fontSize: '0.85rem' }}></i> {section.heading}
                                    </h3>
                                    {section.body && (
                                        <p 
                                            style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: '1.6', marginBottom: '0.5rem' }} 
                                            dangerouslySetInnerHTML={{ __html: section.body }} 
                                        />
                                    )}
                                    {section.bullets && (
                                        <ul style={{ listStyle: 'none', paddingLeft: '0.5rem' }}>
                                            {section.bullets.map((bullet) => (
                                                <li 
                                                    key={bullet} 
                                                    style={{ 
                                                        fontSize: '0.86rem', 
                                                        color: 'var(--text-secondary)', 
                                                        lineHeight: '1.6', 
                                                        padding: '0.25rem 0 0.25rem 1rem', 
                                                        position: 'relative' 
                                                    }} 
                                                    dangerouslySetInnerHTML={{ __html: bullet }} 
                                                />
                                            ))}
                                        </ul>
                                    )}
                                </div>
                            ))}
                        </div>
                    </article>
                ) : (
                    <div className="exams-list-container animate-fade-in">
                        <h3 className="container-title"><i className="fa-solid fa-paper-plane text-accent"></i> Core Course Exams</h3>
                        
                        <div className="exams-grid">
                            <div className="exam-card card-glow">
                                <div className="exam-card-header">
                                    <span className="exam-badge badge-cyan">Chapters 1-3</span>
                                    <h4 className="exam-card-title">Exam 1: LSM Trees, NoSQL, & DB Concepts</h4>
                                </div>
                                <p className="exam-card-desc">Comprehensive test covering read/write amplification, NoSQL models, SSTable immutability...</p>
                                <div className="exam-card-footer">
                                    <div className="exam-meta">
                                        <span><i className="fa-solid fa-question-circle"></i> {examCounts.exam1} Questions</span>
                                    </div>
                                    <button className="btn btn-primary" onClick={() => handleConfigureExam(0)}>Configure Exam</button>
                                </div>
                            </div>

                            <div className="exam-card card-glow">
                                <div className="exam-card-header">
                                    <span className="exam-badge badge-purple">Chapter 5</span>
                                    <h4 className="exam-card-title">Exam 2: Replication & Distributed Systems</h4>
                                </div>
                                <p className="exam-card-desc">Tests your knowledge of single-leader, multi-leader, and leaderless replication protocols...</p>
                                <div className="exam-card-footer">
                                    <div className="exam-meta">
                                        <span><i className="fa-solid fa-question-circle"></i> {examCounts.exam2} Questions</span>
                                    </div>
                                    <button className="btn btn-primary" onClick={() => handleConfigureExam(1)}>Configure Exam</button>
                                </div>
                            </div>

                            <div className="exam-card card-glow">
                                <div className="exam-card-header">
                                    <span className="exam-badge badge-orange">Chapters 1-5</span>
                                    <h4 className="exam-card-title">Exam 3: Comparisons & Deep Analysis</h4>
                                </div>
                                <p className="exam-card-desc">Comparison tables, follow-up MCQs, and open-ended essay questions...</p>
                                <div className="exam-card-footer">
                                    <div className="exam-meta">
                                        <span><i className="fa-solid fa-table-columns"></i> {examCounts.exam3} Deep Questions</span>
                                    </div>
                                    <button className="btn btn-orange" onClick={() => handleConfigureExam(2)}>Configure Exam</button>
                                </div>
                            </div>

                            <div className="exam-card card-glow">
                                <div className="exam-card-header">
                                    <span className="exam-badge badge-cyan">Chapters 1-5</span>
                                    <h4 className="exam-card-title">Custom Mock: Mixed Question Bank</h4>
                                </div>
                                <p className="exam-card-desc">Randomized practice across all available MCQs, comparisons, and essay review prompts from chapters 1 to 5.</p>
                                <div className="exam-card-footer">
                                    <div className="exam-meta">
                                        <span><i className="fa-solid fa-shuffle"></i> {examCounts.total} Total Items</span>
                                    </div>
                                    <button className="btn btn-primary" onClick={() => handleConfigureExam('custom')}>Configure Mock</button>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
}
