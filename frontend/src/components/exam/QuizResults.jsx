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
                    const qType = q.type || 'mcq';
                    const userSelected = userResponses[idx];

                    // 1. Essay Type Question
                    if (qType === 'essay') {
                        const userEssayAnswer = userSelected || 'Skipped / No answer provided';
                        return (
                            <div key={idx} className="result-question-card" style={{ borderLeftColor: 'var(--color-orange)' }}>
                                <div className="rq-header">
                                    <span className="question-number">Question {idx + 1}</span>
                                    <span className="rq-status" style={{ color: 'var(--color-orange)' }}>
                                        <i className="fa-solid fa-pen-clip"></i> Essay Prompt
                                    </span>
                                </div>
                                
                                <h4 className="rq-prompt">{q.question}</h4>

                                <div className="rq-answers-grid">
                                    <div className="rq-answer-box user-answer" style={{ borderColor: 'rgba(249, 115, 22, 0.2)' }}>
                                        <h5>Your Response</h5>
                                        <div className="answer-bubble" style={{ minHeight: '100px', whiteSpace: 'pre-wrap' }}>
                                            {userEssayAnswer}
                                        </div>
                                    </div>
                                    <div className="rq-answer-box true-answer">
                                        <h5>Model / Reference Answer</h5>
                                        <div className="answer-bubble" style={{ minHeight: '100px', whiteSpace: 'pre-wrap', borderColor: 'rgba(99, 102, 241, 0.4)', background: 'rgba(99, 102, 241, 0.05)', color: 'var(--color-accent)' }}>
                                            {q.modelAnswer}
                                        </div>
                                    </div>
                                </div>

                                <div className="rq-explanation card">
                                    <h5><i className="fa-solid fa-lightbulb"></i> Grading Criteria & Insights</h5>
                                    <p>{q.explanation}</p>
                                </div>
                            </div>
                        );
                    }

                    // 2. Comparison Type Question
                    if (qType === 'comparison') {
                        const isCorrect = userSelected === q.answer;
                        const userAnswerText = userSelected 
                            ? q.options?.find(o => o.letter === userSelected)?.text || 'Unknown'
                            : 'Skipped / Unanswered';
                        const correctAnswerText = q.options?.find(o => o.letter === q.answer)?.text || 'Unknown';

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
                                
                                <div className="comparison-prompt-results">
                                    <h4 className="rq-prompt" style={{ marginBottom: '1rem' }}>{q.question}</h4>
                                    
                                    {q.comparisonData && (
                                        <div className="comparison-table-wrapper" style={{ margin: '1rem 0', borderRadius: '12px', border: '1px solid var(--border-color)', overflow: 'hidden' }}>
                                            <table className="comparison-table">
                                                <thead>
                                                    <tr>
                                                        {q.comparisonData.headers.map((header) => (
                                                            <th key={header}>{header}</th>
                                                        ))}
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {q.comparisonData.rows.map((row, rowIndex) => (
                                                        <tr key={`${q.number || idx}-row-${rowIndex}`}>
                                                            {row.map((cell, cellIndex) => (
                                                                <td key={`${q.number || idx}-${rowIndex}-${cellIndex}`}>{cell}</td>
                                                            ))}
                                                        </tr>
                                                    ))}
                                                </tbody>
                                            </table>
                                        </div>
                                    )}
                                    
                                    <h5 className="follow-up-title" style={{ marginTop: '1.5rem', color: 'var(--color-accent)', textTransform: 'uppercase', fontSize: '0.82rem', fontWeight: 800, letterSpacing: '0.05em' }}>
                                        <i className="fa-solid fa-circle-question"></i> Graded Follow-up Question
                                    </h5>
                                    <p className="rq-prompt" style={{ fontWeight: 'normal', fontSize: '1.15rem', marginTop: '0.35rem' }}>
                                        {q.followUpQuestion}
                                    </p>
                                </div>

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
                    }

                    // 3. Regular MCQ Question
                    const isCorrect = userSelected === q.answer;
                    const userAnswerText = userSelected 
                        ? q.options?.find(o => o.letter === userSelected)?.text || 'Unknown'
                        : 'Skipped / Unanswered';
                    const correctAnswerText = q.options?.find(o => o.letter === q.answer)?.text || 'Unknown';

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
