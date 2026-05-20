import React from 'react';
import { useExamContext } from '../../context/ExamContext';

export default function PerformanceHistory() {
    const { history, navigateTo } = useExamContext();

    return (
        <section id="view-performance-history" className="app-view active">
            <div className="view-header">
                <button className="btn-back" onClick={() => navigateTo('view-dashboard')}>
                    <i className="fa-solid fa-chevron-left"></i> Back to Dashboard
                </button>
                <h1 className="view-title"><i className="fa-solid fa-chart-line text-accent"></i> Performance History</h1>
                <p className="view-subtitle">Review your past exam attempts and monitor your improvement over time.</p>
            </div>

            <div className="history-container card">
                {history.length === 0 ? (
                    <div className="empty-state">
                        <i className="fa-solid fa-ghost"></i>
                        <h3>No History Yet</h3>
                        <p>You haven't completed any exams. Head to the Course Hub to start a session.</p>
                        <button className="btn btn-primary" onClick={() => navigateTo('view-subject-hub')} style={{marginTop: '1rem'}}>
                            Go to Course Hub
                        </button>
                    </div>
                ) : (
                    <div className="table-responsive">
                        <table className="history-table">
                            <thead>
                                <tr>
                                    <th>Date</th>
                                    <th>Exam Title</th>
                                    <th>Mode</th>
                                    <th>Score</th>
                                    <th>Time Taken</th>
                                    <th>Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                {history.map((record, idx) => (
                                    <tr key={idx}>
                                        <td>{new Date(record.date).toLocaleDateString()}</td>
                                        <td>{record.title}</td>
                                        <td><span className={`mode-badge ${record.mode === 'exam' ? 'badge-purple' : 'badge-cyan'}`}>{record.mode}</span></td>
                                        <td>
                                            <div className="score-cell">
                                                <div className="score-val">{Math.round((record.score / record.total) * 100)}%</div>
                                                <div className="score-bar-bg">
                                                    <div className="score-bar-fill" style={{width: `${(record.score / record.total) * 100}%`}}></div>
                                                </div>
                                            </div>
                                        </td>
                                        <td>{Math.floor(record.timeElapsed / 60)}m {record.timeElapsed % 60}s</td>
                                        <td>
                                            {(record.score / record.total) >= 0.8 ? (
                                                <span className="status-pass"><i className="fa-solid fa-check-circle text-green"></i> Passed</span>
                                            ) : (
                                                <span className="status-fail"><i className="fa-solid fa-xmark-circle text-red"></i> Needs Review</span>
                                            )}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}
            </div>
        </section>
    );
}
