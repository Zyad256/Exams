import { useExamContext } from '../../context/ExamContext';
import { examData } from '../../data/questions';

export default function Dashboard() {
    const { navigateTo } = useExamContext();
    const totalQuestionBankItems = examData.reduce((sum, exam) => sum + exam.questions.length, 0);

    return (
        <section id="view-dashboard" className="app-view active">
            {/* Hero Section */}
            <div className="card dashboard-hero card-glow">
                <div className="hero-content">
                    <h1 className="hero-title">Welcome back,<br /><span className="text-gradient">Ready to crush it?</span></h1>
                    <p className="hero-subtitle">Your personalized learning hub. Master data-intensive applications through active recall and deep-dive simulations.</p>
                    
                    <div className="stats-quick-grid">
                        <div className="stat-quick-item">
                            <span className="stat-label">Exams Taken</span>
                            <span className="stat-value" id="dash-exams-taken">0</span>
                        </div>
                        <div className="stat-divider"></div>
                        <div className="stat-quick-item">
                            <span className="stat-label">Avg. Score</span>
                            <span className="stat-value text-accent" id="dash-avg-score">0%</span>
                        </div>
                        <div className="stat-divider"></div>
                        <div className="stat-quick-item">
                            <span className="stat-label">Questions</span>
                            <span className="stat-value" id="dash-q-answered">0</span>
                        </div>
                        <div className="stat-divider"></div>
                        <div className="stat-quick-item">
                            <span className="stat-label"><i className="fa-solid fa-fire text-orange"></i> Streak</span>
                            <span className="stat-value text-orange" id="dash-streak">1</span>
                        </div>
                    </div>
                </div>
                <div className="hero-graphics">
                    {/* Progress Ring Visuals */}
                    <div className="progress-ring-container">
                        <svg className="progress-ring-svg" width="140" height="140">
                            <circle cx="70" cy="70" r="60" fill="transparent" stroke="rgba(255,255,255,0.05)" strokeWidth="8"/>
                            <circle className="progress-ring-bar" cx="70" cy="70" r="60" fill="transparent" stroke="url(#primaryGradient)" strokeWidth="8" strokeDasharray="377" strokeDashoffset="377" strokeLinecap="round" id="dash-progress-ring"/>
                            <defs>
                                <linearGradient id="primaryGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                    <stop offset="0%" stopColor="var(--color-primary)" />
                                    <stop offset="100%" stopColor="var(--color-accent)" />
                                </linearGradient>
                            </defs>
                        </svg>
                        <div className="progress-ring-text">
                            <span className="progress-percent" id="dash-progress-text">0%</span>
                            <span className="progress-sub">Mastery</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Subject Section Title */}
            <div className="section-header-row">
                <h2 className="section-title"><i className="fa-solid fa-book-open text-accent"></i> Available Subjects</h2>
                <p className="section-description">Select a subject to view chapters, exams, and build your personalized prep sessions.</p>
            </div>

            {/* Subjects Grid */}
            <div className="subjects-grid">
                {/* Advanced Web Card (ACTIVE) */}
                <div className="subject-card active-subject card-glow" id="subject-adv-web">
                    <div className="subject-tag">ACTIVE</div>
                    <div className="subject-card-body">
                        <div className="subject-icon-bg">
                            <i className="fa-solid fa-code"></i>
                        </div>
                        <h3 className="subject-name">Advanced Programming Web</h3>
                        <p className="subject-description">Mastering Chapters 1 to 5: Database concepts, NoSQL storage structures, LSM Trees, SSTables, and Distributed Replication systems.</p>
                        
                        <div className="subject-meta">
                            <span className="meta-item"><i className="fa-solid fa-file-invoice"></i> 3 Exams + Simulator</span>
                            <span className="meta-item"><i className="fa-solid fa-question-circle"></i> {totalQuestionBankItems} Total Items</span>
                        </div>

                        {/* Progress Bar inside Card */}
                        <div className="subject-progress-container">
                            <div className="progress-info">
                                <span>Chapters Completed (1-5)</span>
                                <span className="progress-ratio">100%</span>
                            </div>
                            <div className="progress-track">
                                <div className="progress-fill" style={{width: '100%'}}></div>
                            </div>
                        </div>

                        <button className="btn btn-primary btn-full-width" onClick={() => navigateTo('view-subject-hub')}>
                            Enter Course Hub <i className="fa-solid fa-arrow-right"></i>
                        </button>
                    </div>
                </div>

                {/* Coming Soon Cards */}
                <div className="subject-card locked card-glow">
                    <div className="subject-tag locked-tag">COMING SOON</div>
                    <div className="subject-card-body">
                        <div className="subject-icon-bg">
                            <i className="fa-solid fa-eye"></i>
                        </div>
                        <h3 className="subject-name">Computer Vision</h3>
                        <p className="subject-description">Image processing algorithms, object detection, segmentation, and advanced facial recognition models.</p>
                        <button className="btn btn-secondary btn-full-width" disabled>
                            <i className="fa-solid fa-lock"></i> Locked
                        </button>
                    </div>
                </div>

                <div className="subject-card locked card-glow">
                    <div className="subject-tag locked-tag">COMING SOON</div>
                    <div className="subject-card-body">
                        <div className="subject-icon-bg">
                            <i className="fa-solid fa-brain"></i>
                        </div>
                        <h3 className="subject-name">Machine Learning</h3>
                        <p className="subject-description">Supervised learning, deep neural networks, model evaluation, and predictive analytics.</p>
                        <button className="btn btn-secondary btn-full-width" disabled>
                            <i className="fa-solid fa-lock"></i> Locked
                        </button>
                    </div>
                </div>

                <div className="subject-card locked card-glow">
                    <div className="subject-tag locked-tag">COMING SOON</div>
                    <div className="subject-card-body">
                        <div className="subject-icon-bg">
                            <i className="fa-solid fa-network-wired"></i>
                        </div>
                        <h3 className="subject-name">Internet of Things</h3>
                        <p className="subject-description">Embedded systems, sensor networks, edge computing protocols, and real-time data streaming architectures.</p>
                        <button className="btn btn-secondary btn-full-width" disabled>
                            <i className="fa-solid fa-lock"></i> Locked
                        </button>
                    </div>
                </div>

                <div className="subject-card locked card-glow">
                    <div className="subject-tag locked-tag">COMING SOON</div>
                    <div className="subject-card-body">
                        <div className="subject-icon-bg">
                            <i className="fa-solid fa-magnifying-glass"></i>
                        </div>
                        <h3 className="subject-name">Information Retrieval</h3>
                        <p className="subject-description">Search engine design, inverted indices, TF-IDF ranking algorithms, and natural language processing basics.</p>
                        <button className="btn btn-secondary btn-full-width" disabled>
                            <i className="fa-solid fa-lock"></i> Locked
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
