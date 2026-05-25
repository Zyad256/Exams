import React from 'react';
import { useExamContext } from '../../context/ExamContext';

export default function QuizResults() {
    const { currentSession, navigateTo } = useExamContext();

    if (!currentSession.isCompleted) {
        return (
            <section className="app-view active" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '60vh' }}>
                <h2>No Recent Results</h2>
                <button className="btn btn-primary" onClick={() => navigateTo('view-subject-hub')}>Return to Course Hub</button>
            </section>
        );
    }

    const { questions, userResponses, timeElapsedSeconds, score, mode } = currentSession;
    const totalScoreable = questions.filter(q => (q.type || 'mcq') !== 'essay').length;
    const isExamRound = mode === 'exam';

    return (
        <section id="view-exam-results" className="app-view active">
            <div className="view-header">
                <button className="btn-back" onClick={() => navigateTo('view-subject-hub')}>
                    <i className="fa-solid fa-chevron-left"></i> Back to Course Hub
                </button>
                <h1 className="view-title"><i className="fa-solid fa-square-poll-vertical text-accent"></i> Exam Statistics</h1>
                <p className="view-subtitle">Detailed breakdown of your recently submitted {isExamRound ? 'exam' : 'practice session'}.</p>
            </div>

            {/* High Level Stats Grid */}
            <div className="results-overview-grid">
                <div className="stat-card">
                    <i className="fa-solid fa-star stat-icon text-orange"></i>
                    <h3>Final Score</h3>
                    <div className="stat-value">{score} / {totalScoreable}</div>
                    <p className="stat-desc">{Math.round((score / totalScoreable) * 100)}% Accuracy</p>
                </div>
                <div className="stat-card">
                    <i className="fa-regular fa-clock stat-icon text-cyan"></i>
                    <h3>Time Taken</h3>
                    <div className="stat-value">{Math.floor(timeElapsedSeconds / 60)}m {timeElapsedSeconds % 60}s</div>
                    <p className="stat-desc">Remaining intact time logged</p>
                </div>
                <div className="stat-card">
                    <i className="fa-solid fa-crosshairs stat-icon text-purple"></i>
                    <h3>Missed Questions</h3>
                    <div className="stat-value">{totalScoreable - score}</div>
                    <p className="stat-desc">Areas to review closely below</p>
                </div>
            </div>

            {/* Breakdown Feed */}
            <div className="results-breakdown-feed">
                <h2 className="section-title"><i className="fa-solid fa-magnifying-glass-chart"></i> Question Insights</h2>
                
                {questions.map((q, idx) => {
                    if ((q.type || 'mcq') === 'essay') return null;
                    const userSelected = userResponses[idx];
                    const isCorrect = userSelected === q.answer;

                    // If they didn't answer it
                    const userAnswerText = userSelected 
                        ? q.options.find(o => o.letter === userSelected)?.text || 'Unknown'
                        : 'Skipped / Unanswered';
                    
                    const correctAnswerText = q.options.find(o => o.letter === q.answer)?.text || 'Unknown';

                    return (
                        <div key={idx} className={`result-question-card ${isCorrect ? 'correct' : 'incorrect'}`}>
                            <div className="rq-header">
                                <span className="question-number">Question {idx + 1}</span>
                                {isCorrect ? (
                                    <span className="rq-status text-green"><i className="fa-solid fa-check"></i> Correct</span>
                                ) : (
                                    <span className="rq-status text-red"><i className="fa-solid fa-xmark"></i> Incorrect</span>
                                )}
                            </div>
                            
                            <h4 className="rq-prompt">{q.question}</h4>

                            <div className="rq-answers-grid">
                                <div className="rq-answer-box user-answer">
                                    <h5>Your Answer</h5>
                                    <div className="answer-bubble">{userAnswerText}</div>
                                </div>
                                {!isCorrect && (
                                    <div className="rq-answer-box true-answer">
                                        <h5>Correct Answer</h5>
                                        <div className="answer-bubble">{correctAnswerText}</div>
                                    </div>
                                )}
                            </div>

                            <div className="rq-explanation card">
                                <h5><i className="fa-solid fa-lightbulb"></i> Explanation</h5>
                                <p>{q.explanation}</p>
                            </div>
                        </div>
                    );
                })}
            </div>

            {/* Footer Navigation Action */}
            <div className="results-footer-actions">
                <button className="btn btn-outline" onClick={() => navigateTo('view-performance-history')}>
                    <i className="fa-solid fa-chart-line"></i> View History Vault
                </button>
                <button className="btn btn-primary" onClick={() => navigateTo('view-dashboard')}>
                    <i className="fa-solid fa-house"></i> Return Home
                </button>
            </div>
        </section>
    );
}
