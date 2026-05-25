import { useExamContext } from '../../context/ExamContext';
import { subjects } from '../../data/subjects';

export default function Dashboard() {
    const { navigateTo, setActiveSubject } = useExamContext();
    const getUniqueQuestionCount = (subjectKey) => {
        return subjects[subjectKey]?.exams
            ?.filter(e => typeof e.examId === 'number')
            ?.reduce((sum, exam) => sum + exam.questions.length, 0) || 0;
    };

    const advWebUniqueCount = getUniqueQuestionCount('advWeb');
    const cvUniqueCount = getUniqueQuestionCount('cv');
    return (
        <section id="view-dashboard" className="app-view active">


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
                            <span className="meta-item"><i className="fa-solid fa-question-circle"></i> {advWebUniqueCount} Total Items</span>
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

                        <button className="btn btn-primary btn-full-width" onClick={() => {
                            setActiveSubject('advWeb');
                            navigateTo('view-subject-hub');
                        }}>
                            Enter Course Hub <i className="fa-solid fa-arrow-right"></i>
                        </button>
                    </div>
                </div>

                {/* Computer Vision Card (NEW) */}
                <div className="subject-card active-subject card-glow" id="subject-cv">
                    <div className="subject-tag">NEW</div>
                    <div className="subject-card-body">
                        <div className="subject-icon-bg">
                            <i className="fa-solid fa-eye"></i>
                        </div>
                        <h3 className="subject-name">Computer Vision</h3>
                        <p className="subject-description">Image processing algorithms, HVS, edge and corner detection, and SIFT feature descriptors.</p>
                        
                        <div className="subject-meta">
                            <span className="meta-item"><i className="fa-solid fa-file-invoice"></i> {subjects.cv.examConfigs?.length || 3} Exams + Quizzes</span>
                            <span className="meta-item"><i className="fa-solid fa-question-circle"></i> {cvUniqueCount} Unique Items</span>
                        </div>

                        {/* Progress Bar inside Card */}
                        <div className="subject-progress-container">
                            <div className="progress-info">
                                <span>Chapters Completed (0-8)</span>
                                <span className="progress-ratio">100%</span>
                            </div>
                            <div className="progress-track">
                                <div className="progress-fill" style={{width: '100%'}}></div>
                            </div>
                        </div>

                        <button className="btn btn-primary btn-full-width" onClick={() => {
                            setActiveSubject('cv');
                            navigateTo('view-subject-hub');
                        }}>
                            Enter Course Hub <i className="fa-solid fa-arrow-right"></i>
                        </button>
                    </div>
                </div>

                {/* Coming Soon Cards */}
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
