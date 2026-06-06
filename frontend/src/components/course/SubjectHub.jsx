import { useState } from 'react';
import { useExamContext } from '../../context/ExamContext';
import { subjects } from '../../data/subjects';

export default function SubjectHub() {
    const { navigateTo, setCurrentSession, activeSubject } = useExamContext();
    const [selectedChapterId, setSelectedChapterId] = useState(null);
    const [mobileTab, setMobileTab] = useState('exams');
    
    const subjectData = subjects[activeSubject] || subjects.advWeb;
    const { chapters, exams, title, subtitle, icon } = subjectData;
    
    const selectedChapter = chapters.find(chapter => chapter.id === selectedChapterId);
    
    const totalQuestions = exams.reduce((sum, exam) => sum + exam.questions.length, 0);

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
                <h1 className="view-title"><i className={`fa-solid ${icon} text-accent`}></i> {title}</h1>
                <p className="view-subtitle">{subtitle}</p>
            </div>

            {/* Mobile Tab Switcher */}
            <div className="mobile-hub-tabs">
                <button 
                    className={`hub-tab ${mobileTab === 'exams' ? 'active' : ''}`}
                    onClick={() => { setMobileTab('exams'); setSelectedChapterId(null); }}
                >
                    <i className="fa-solid fa-paper-plane"></i> Exams
                </button>
                <button 
                    className={`hub-tab ${mobileTab === 'syllabus' ? 'active' : ''}`}
                    onClick={() => setMobileTab('syllabus')}
                >
                    <i className="fa-solid fa-book-open"></i> Syllabus
                </button>
            </div>

            <div className={`subject-details-grid mobile-view-${mobileTab}`}>
                
                {/* Left: Syllabus Map & Chapters Card */}
                <div className="syllabus-card card">
                    <h3 className="card-title"><i className="fa-solid fa-map-location-dot"></i> Course Syllabus</h3>
                    <p className="card-subtitle">Select any chapter to read its detailed summary on the right:</p>
                    
                    <ul className="syllabus-list">
                        {chapters.map((chapter) => (
                            <li
                                className={`syllabus-item syllabus-item-link ${selectedChapterId === chapter.id ? 'active' : ''}`}
                                key={chapter.id}
                                onClick={() => {
                                    const nextId = prev => prev === chapter.id ? null : chapter.id;
                                    setSelectedChapterId(nextId);
                                    if (nextId) setMobileTab('exams');
                                }}
                                tabIndex="0"
                                onKeyDown={(event) => {
                                    if (event.key === 'Enter' || event.key === ' ') {
                                        event.preventDefault();
                                        const nextId = prev => prev === chapter.id ? null : chapter.id;
                                        setSelectedChapterId(nextId);
                                        if (nextId) setMobileTab('exams');
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
                                    <p style={{
                                        display: '-webkit-box',
                                        WebkitLineClamp: 2,
                                        WebkitBoxOrient: 'vertical',
                                        overflow: 'hidden',
                                        textOverflow: 'ellipsis'
                                    }}>{chapter.preview}</p>
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
                            <button className="btn btn-secondary" onClick={() => { setSelectedChapterId(null); setMobileTab('syllabus'); }}>
                                <i className="fa-solid fa-chevron-left"></i> Back to Syllabus
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
                            {selectedChapter.sections.map((section, index) => (
                                <div className="chapter-blog-section" key={index} style={{ padding: '1rem 0', borderBottom: '1px solid var(--border-color)' }}>
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
                                    {section.iframeUrl && (
                                        <div style={{ position: 'relative', paddingBottom: section.heading?.includes('(MP4)') ? '80%' : '60%', height: 0, overflow: 'hidden', marginTop: '1rem', borderRadius: '8px', boxShadow: '0 4px 15px rgba(0,0,0,0.1)' }}>
                                            <iframe src={section.iframeUrl} frameBorder="0" width="100%" height="100%" allowFullScreen style={{ position: 'absolute', top: 0, left: 0 }}></iframe>
                                        </div>
                                    )}
                                    {section.externalUrl && (
                                        <a 
                                            href={section.externalUrl} 
                                            target="_blank" 
                                            rel="noopener noreferrer"
                                            style={{
                                                display: 'inline-flex',
                                                alignItems: 'center',
                                                gap: '0.6rem',
                                                marginTop: '1rem',
                                                padding: '0.75rem 1.5rem',
                                                background: 'linear-gradient(135deg, var(--color-primary), var(--color-accent))',
                                                color: '#fff',
                                                borderRadius: '10px',
                                                textDecoration: 'none',
                                                fontWeight: 600,
                                                fontSize: '0.92rem',
                                                boxShadow: '0 4px 15px rgba(99, 102, 241, 0.3)',
                                                transition: 'transform 0.2s, box-shadow 0.2s'
                                            }}
                                            onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 6px 20px rgba(99, 102, 241, 0.45)'; }}
                                            onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 4px 15px rgba(99, 102, 241, 0.3)'; }}
                                        >
                                            <i className={`fa-solid ${section.externalIcon || 'fa-up-right-from-square'}`}></i>
                                            {section.externalLabel || 'Open Resource'}
                                        </a>
                                    )}
                                </div>
                            ))}
                        </div>

                        {/* End of Lecture Quiz Prompt */}
                        {subjectData.exams?.some(e => e.examId === `quiz-${selectedChapter.id}`) && (
                            <div className="chapter-quiz-action card" style={{ marginTop: '2.5rem', textAlign: 'center', background: 'var(--bg-card)', border: '1px solid var(--color-primary)' }}>
                                <h3 style={{ marginBottom: '1rem', color: 'var(--color-primary)' }}><i className="fa-solid fa-clipboard-question"></i> Ready to test your knowledge?</h3>
                                <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>Take a rapid 5-question mock quiz curated entirely around Lecture {selectedChapter.id}.</p>
                                <button className="btn btn-primary" style={{ padding: '0.8rem 2rem', fontSize: '1.1rem' }} onClick={() => handleConfigureExam(`quiz-${selectedChapter.id}`)}>
                                    Take Lecture {selectedChapter.id} Quiz <i className="fa-solid fa-arrow-right"></i>
                                </button>
                            </div>
                        )}
                    </article>
                ) : (
                    <div className="exams-list-container animate-fade-in">
                        <h3 className="container-title"><i className="fa-solid fa-paper-plane text-accent"></i> Core Course Exams</h3>
                        
                        <div className="exams-grid">
                            {subjectData.examConfigs.map((config) => {
                                const questionCount = subjectData.exams.find(e => e.examId === config.id)?.questions.length || 0;
                                return (
                                    <div className="exam-card card-glow" key={config.id}>
                                        <div className="exam-card-header">
                                            <span className={`exam-badge ${config.color}`}>{config.badge}</span>
                                            <h4 className="exam-card-title">{config.title}</h4>
                                        </div>
                                        <p className="exam-card-desc">{config.desc}</p>
                                        <div className="exam-card-footer">
                                            <div className="exam-meta">
                                                <span><i className="fa-solid fa-question-circle"></i> {questionCount} {questionCount === 1 ? 'Question' : 'Questions'}</span>
                                            </div>
                                            <button className={`btn ${config.btnColor}`} onClick={() => handleConfigureExam(config.id)}>Configure Exam</button>
                                        </div>
                                    </div>
                                );
                            })}

                            <div className="exam-card card-glow">
                                <div className="exam-card-header">
                                    <span className="exam-badge badge-cyan">All Modules</span>
                                    <h4 className="exam-card-title">Custom Mock: Mixed Question Bank</h4>
                                </div>
                                <p className="exam-card-desc">Randomized practice across all available MCQs, comparisons, and essay review prompts.</p>
                                <div className="exam-card-footer">
                                    <div className="exam-meta">
                                        <span><i className="fa-solid fa-shuffle"></i> {totalQuestions} Total Items</span>
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
