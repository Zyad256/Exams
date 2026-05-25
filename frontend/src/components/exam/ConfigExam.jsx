import { useMemo, useState } from 'react';
import { useExamContext } from '../../context/ExamContext';
import { subjects } from '../../data/subjects';

const shuffleQuestions = (questions) => {
    const shuffled = [...questions];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
};

export default function ConfigExam() {
    const { navigateTo, currentSession, setCurrentSession, setCurrentQuestionIndex, activeSubject } = useExamContext();
    
    const [mode, setMode] = useState('practice');
    const [questionCount, setQuestionCount] = useState('all');
    const [timeLimit, setTimeLimit] = useState('30');
    
    const examId = currentSession.examId !== null ? currentSession.examId : 0;
    const examInfo = useMemo(() => {
        const subjectData = subjects[activeSubject] || subjects.advWeb;
        const examData = subjectData.exams;

        if (examId === 'custom') {
            return {
                examId: 'custom',
                title: 'Custom Mock: All Modules',
                questions: examData.flatMap(exam => exam.questions)
            };
        }

        return examData.find(e => e.examId === examId) || examData[0];
    }, [examId, activeSubject]);

    const totalAvailable = examInfo ? examInfo.questions.length : 0;
    const questionTypeCounts = examInfo.questions.reduce((counts, question) => {
        const type = question.type || 'mcq';
        return { ...counts, [type]: (counts[type] || 0) + 1 };
    }, {});

    const actualCount = questionCount === 'all' ? totalAvailable : Math.min(parseInt(questionCount), totalAvailable);

    const handleLaunch = () => {
        let selectedQuestions = examId === 'custom'
            ? shuffleQuestions(examInfo.questions)
            : [...examInfo.questions];

        if (questionCount !== 'all') {
            selectedQuestions = selectedQuestions.slice(0, parseInt(questionCount));
        }

        setCurrentSession({
            examId: examInfo.examId,
            title: examInfo.title,
            mode: mode,
            questionsCount: selectedQuestions.length,
            timeLimitMinutes: parseInt(timeLimit),
            questions: selectedQuestions,
            userResponses: {},
            flaggedQuestions: new Set(),
            timeElapsedSeconds: 0,
            timerIntervalId: null,
            startTime: Date.now(),
            isCompleted: false
        });

        setCurrentQuestionIndex(0);
        navigateTo('view-exam-runner');
    };

    return (
        <section id="view-exam-config" className="app-view active">
            <div className="view-header">
                <button className="btn-back" onClick={() => navigateTo('view-subject-hub')}>
                    <i className="fa-solid fa-chevron-left"></i> Back to Hub
                </button>
                <h1 className="view-title" id="config-exam-title">Configure Exam</h1>
                <p className="view-subtitle">{examInfo.title}</p>
            </div>

            <div className="config-container card">
                <div className="config-split">
                    {/* Left: Config Settings */}
                    <div className="config-settings">
                        <h3 className="config-section-title"><i className="fa-solid fa-sliders"></i> Session Settings</h3>
                        
                        {/* Mode Selector */}
                        <div className="form-group">
                            <label className="form-label">Select Session Mode:</label>
                            <div className="mode-options-grid">
                                <div className={`mode-card ${mode === 'practice' ? 'active' : ''}`} onClick={() => setMode('practice')}>
                                    <div className="mode-card-icon"><i className="fa-solid fa-graduation-cap"></i></div>
                                    <div className="mode-card-details">
                                        <h5>Practice Mode</h5>
                                        <p>No timer. Get instant feedback with detailed answer explanations after each question.</p>
                                    </div>
                                </div>
                                <div className={`mode-card ${mode === 'exam' ? 'active' : ''}`} onClick={() => setMode('exam')}>
                                    <div className="mode-card-icon"><i className="fa-solid fa-stopwatch"></i></div>
                                    <div className="mode-card-details">
                                        <h5>Real Exam Simulator</h5>
                                        <p>Strict timer. Grid navigation, flagging for review. Explanations shown only after submitting.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Question Limit Selection */}
                        <div className="form-group">
                            <label className="form-label">Number of Questions:</label>
                            <select className="form-control" value={questionCount} onChange={(e) => setQuestionCount(e.target.value)}>
                                <option value="all">All Available Questions ({totalAvailable})</option>
                                <option value="10">10 Questions (Quick Review)</option>
                                <option value="20">20 Questions (Medium Practice)</option>
                                <option value="30">30 Questions (Focused Session)</option>
                                {totalAvailable >= 50 && <option value="50">50 Questions (Comprehensive Mock)</option>}
                            </select>
                        </div>

                        {/* Timer Limit */}
                        <div className="form-group" style={{ opacity: mode === 'exam' ? 1 : 0.5, pointerEvents: mode === 'exam' ? 'auto' : 'none' }}>
                            <label className="form-label">Time Limit:</label>
                            <select className="form-control" value={timeLimit} onChange={(e) => setTimeLimit(e.target.value)} disabled={mode !== 'exam'}>
                                <option value="15">15 Minutes</option>
                                <option value="30">30 Minutes</option>
                                <option value="45">45 Minutes</option>
                                <option value="60">60 Minutes</option>
                            </select>
                        </div>
                    </div>

                    {/* Right: Info Panel & Confirm */}
                    <div className="config-summary-panel">
                        <div className="summary-illustration">
                            <i className="fa-solid fa-rocket text-accent"></i>
                        </div>
                        
                        <div className="summary-details">
                            <h4>Session Briefing</h4>
                            <ul className="briefing-list">
                                <li>
                                    <i className="fa-solid fa-circle-info"></i>
                                    <span>{actualCount} targeted questions.</span>
                                </li>
                                <li>
                                    <i className="fa-solid fa-list-check"></i>
                                    <span>Bank: {questionTypeCounts.mcq || 0} MCQ, {questionTypeCounts.comparison || 0} comparisons, {questionTypeCounts.essay || 0} essays.</span>
                                </li>
                                <li>
                                    <i className="fa-solid fa-clock"></i>
                                    <span>Mode: {mode === 'practice' ? 'Practice Mode' : 'Real Exam Simulator'}.</span>
                                </li>
                                <li>
                                    <i className="fa-solid fa-shield"></i>
                                    <span>Detailed statistics recorded to performance charts.</span>
                                </li>
                            </ul>
                        </div>

                        <button className="btn btn-primary btn-large btn-full-width" onClick={handleLaunch}>
                            <i className="fa-solid fa-bolt"></i> Launch Session
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
