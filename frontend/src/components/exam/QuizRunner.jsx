import React, { useState, useEffect } from 'react';
import { useExamContext } from '../../context/ExamContext';

export default function QuizRunner() {
    const { 
        navigateTo, 
        currentSession, 
        setCurrentSession, 
        history, 
        setHistory, 
        currentQuestionIndex, 
        setCurrentQuestionIndex,
        playSound
    } = useExamContext();

    const [timeLeft, setTimeLeft] = useState(currentSession.timeLimitMinutes * 60);
    const [practiceFeedback, setPracticeFeedback] = useState(null); // { isCorrect: boolean, explanation: string }

    const isExamMode = currentSession.mode === 'exam';
    const totalQs = currentSession.questionsCount;
    const currentQ = currentSession.questions[currentQuestionIndex];
    const currentQuestionType = currentQ?.type || 'mcq';
    const isEssayQuestion = currentQuestionType === 'essay';
    const displayQuestionText = currentQuestionType === 'comparison' && currentQ?.followUpQuestion
        ? currentQ.followUpQuestion
        : currentQ?.question;
    
    const selectedAnswer = currentSession.userResponses[currentQuestionIndex];
    const isFlagged = currentSession.flaggedQuestions.has(currentQuestionIndex);
    const unansweredCount = totalQs - Object.keys(currentSession.userResponses).length;

    // Timer Logic for Exam Mode
    useEffect(() => {
        if (!isExamMode || currentSession.isCompleted) return;
        
        const timerId = setInterval(() => {
            setTimeLeft((prev) => {
                if (prev <= 1) {
                    clearInterval(timerId);
                    handleSubmitExam();
                    return 0;
                }
                return prev - 1;
            });
        }, 1000);

        return () => clearInterval(timerId);
    }, [isExamMode, currentSession.isCompleted]);

    const formatTime = (seconds) => {
        const m = Math.floor(seconds / 60).toString().padStart(2, '0');
        const s = (seconds % 60).toString().padStart(2, '0');
        return `${m}:${s}`;
    };

    const handleSelectOption = (letter) => {
        if (isEssayQuestion || currentSession.isCompleted || (practiceFeedback && !isExamMode)) return;

        setCurrentSession(prev => {
            const updatedResponses = { ...prev.userResponses, [currentQuestionIndex]: letter };
            return { ...prev, userResponses: updatedResponses };
        });

        if (!isExamMode && currentQ) {
            const isCorrect = letter === currentQ.answer;
            playSound(isCorrect ? 'correct' : 'incorrect');
            setPracticeFeedback({
                selectedLetter: letter,
                isCorrect,
                explanation: currentQ.explanation
            });
        }
    };

    const handleEssayChange = (value) => {
        setCurrentSession(prev => {
            const updatedResponses = { ...prev.userResponses };
            if (value.trim()) {
                updatedResponses[currentQuestionIndex] = value;
            } else {
                delete updatedResponses[currentQuestionIndex];
            }
            return { ...prev, userResponses: updatedResponses };
        });
    };

    const handleRevealModelAnswer = () => {
        if (!currentQ?.modelAnswer) return;

        setPracticeFeedback({
            isEssay: true,
            isCorrect: true,
            explanation: currentQ.modelAnswer
        });

        setCurrentSession(prev => ({
            ...prev,
            userResponses: {
                ...prev.userResponses,
                [currentQuestionIndex]: prev.userResponses[currentQuestionIndex] || 'Reviewed model answer'
            }
        }));
    };

    const handleNext = () => {
        setPracticeFeedback(null);
        if (currentQuestionIndex < totalQs - 1) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
        }
    };

    const handlePrev = () => {
        setPracticeFeedback(null);
        if (currentQuestionIndex > 0) {
            setCurrentQuestionIndex(currentQuestionIndex - 1);
        }
    };

    const toggleFlag = () => {
        setCurrentSession(prev => {
            const newFlags = new Set(prev.flaggedQuestions);
            if (newFlags.has(currentQuestionIndex)) {
                newFlags.delete(currentQuestionIndex);
            } else {
                newFlags.add(currentQuestionIndex);
            }
            return { ...prev, flaggedQuestions: newFlags };
        });
    };

    const calculateScore = () => {
        let correctCount = 0;
        currentSession.questions.forEach((q, idx) => {
            if ((q.type || 'mcq') === 'essay') return;
            if (currentSession.userResponses[idx] === q.answer) correctCount++;
        });
        return correctCount;
    };

    const getScoreableQuestionCount = () => (
        currentSession.questions.filter(q => (q.type || 'mcq') !== 'essay').length
    );

    const handleSubmitExam = () => {
        // Calculate score and save to history
        const score = calculateScore();
        const timeElapsed = isExamMode ? (currentSession.timeLimitMinutes * 60) - timeLeft : Math.floor((Date.now() - currentSession.startTime) / 1000);
        
        const record = {
            examId: currentSession.examId,
            title: currentSession.title,
            mode: currentSession.mode,
            date: new Date().toISOString(),
            score,
            total: getScoreableQuestionCount(),
            timeElapsed
        };

        const newHistory = [record, ...history];
        setHistory(newHistory);
        localStorage.setItem('prepverse_exam_history_v1', JSON.stringify(newHistory));

        setCurrentSession(prev => ({ ...prev, isCompleted: true, timeElapsedSeconds: timeElapsed, score }));
        navigateTo('view-exam-results');
    };

    // Calculate progress percentage
    const progressPercent = ((currentQuestionIndex + 1) / totalQs) * 100;

    return (
        <section id="view-exam-runner" className="app-view active">
            {/* Runner Header Bar */}
            <div className="runner-header-bar card">
                <div className="runner-info">
                    <span className="runner-exam-title">{currentSession.title}</span>
                    <span className="runner-badge">{isExamMode ? 'Exam Mode' : 'Practice Mode'}</span>
                </div>
                
                {/* Center: Timer */}
                <div className="runner-timer-container">
                    <i className="fa-regular fa-clock timer-icon"></i>
                    <span className="timer-value">{isExamMode ? formatTime(timeLeft) : 'Practice (Untimed)'}</span>
                </div>

            </div>

            {/* Quiz Layout: Two columns */}
            <div className="quiz-layout">
                {/* Left: Interactive Q&A Area */}
                <div className="quiz-question-container">
                    {/* Progress Bar */}
                    <div className="quiz-progress-wrapper">
                        <div className="quiz-progress-text">
                            <span>Question <strong>{currentQuestionIndex + 1}</strong> of <strong>{totalQs}</strong></span>
                        </div>
                        <div className="quiz-progress-track">
                            <div className="quiz-progress-fill" style={{ width: `${progressPercent}%` }}></div>
                        </div>
                    </div>

                    {/* Question Card */}
                    <div className="question-box card animate-fade-in" key={currentQuestionIndex}>
                        <div className="question-tag">
                            QUESTION
                            {currentQ && (
                                <span className={`question-type-badge ${currentQuestionType}`}>
                                    {currentQuestionType === 'mcq' ? 'MCQ' : currentQuestionType}
                                </span>
                            )}
                        </div>

                        {currentQuestionType === 'comparison' && currentQ?.comparisonData && (
                            <div className="comparison-prompt">
                                <h3>{currentQ.question}</h3>
                                <div className="comparison-table-wrapper">
                                    <table className="comparison-table">
                                        <thead>
                                            <tr>
                                                {currentQ.comparisonData.headers.map((header) => (
                                                    <th key={header}>{header}</th>
                                                ))}
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {currentQ.comparisonData.rows.map((row, rowIndex) => (
                                                <tr key={`${currentQ.number}-row-${rowIndex}`}>
                                                    {row.map((cell, cellIndex) => (
                                                        <td key={`${currentQ.number}-${rowIndex}-${cellIndex}`}>{cell}</td>
                                                    ))}
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        )}

                        <h2 className="question-text">{displayQuestionText || 'Loading question text...'}</h2>
                        
                        {/* Options List */}
                        <div className="options-container">
                            {isEssayQuestion && (
                                <>
                                    <textarea
                                        className="essay-answer-area"
                                        value={selectedAnswer || ''}
                                        onChange={(event) => handleEssayChange(event.target.value)}
                                        placeholder="Write your answer here. Mention the key concepts, trade-offs, and examples you remember."
                                    />
                                    <div className="essay-word-count">
                                        {(selectedAnswer || '').trim().split(/\s+/).filter(Boolean).length} words
                                    </div>
                                </>
                            )}

                            {currentQ?.options?.map(opt => {
                                const isSelected = selectedAnswer === opt.letter;
                                const isCorrectAnswer = opt.letter === currentQ.answer;
                                let optionClasses = "option-btn";
                                if (isSelected) optionClasses += " selected";
                                
                                // Feedback coloring in practice mode
                                if (practiceFeedback && !isExamMode) {
                                    if (isCorrectAnswer) optionClasses += " correct-choice";
                                    else if (isSelected && !practiceFeedback.isCorrect) optionClasses += " incorrect-choice";
                                }

                                return (
                                    <button
                                        type="button"
                                        key={opt.letter} 
                                        className={optionClasses}
                                        onClick={() => handleSelectOption(opt.letter)}
                                        disabled={Boolean(practiceFeedback && !isExamMode)}
                                    >
                                        <div className="option-letter">{opt.letter}</div>
                                        <div className="option-text">{opt.text}</div>
                                        {practiceFeedback && !isExamMode && isSelected && (
                                            <span className={`answer-reaction ${practiceFeedback.isCorrect ? 'right' : 'wrong'}`}>
                                                <i className={`fa-solid ${practiceFeedback.isCorrect ? 'fa-check' : 'fa-xmark'}`}></i>
                                                {practiceFeedback.isCorrect ? 'Right' : 'Wrong'}
                                            </span>
                                        )}
                                        {practiceFeedback && !isExamMode && !isSelected && isCorrectAnswer && (
                                            <span className="answer-reaction right muted">
                                                <i className="fa-solid fa-check"></i>
                                                Answer
                                            </span>
                                        )}
                                    </button>
                                );
                            })}
                        </div>
                    </div>

                    {/* Explanation Box (Only shown in Practice Mode after responding) */}
                    {practiceFeedback && !isExamMode && (
                        <div className="explanation-box card animate-slide-up" style={{
                            borderColor: practiceFeedback.isCorrect ? 'var(--color-success)' : 'var(--color-error)'
                        }}>
                            <div className="explanation-header">
                                <span className="exp-badge" style={{
                                    backgroundColor: practiceFeedback.isCorrect ? 'rgba(34, 197, 94, 0.2)' : 'rgba(239, 68, 68, 0.2)',
                                    color: practiceFeedback.isCorrect ? 'var(--color-success)' : 'var(--color-error)'
                                }}>
                                    {practiceFeedback.isEssay ? 'Model Answer' : practiceFeedback.isCorrect ? 'Correct' : 'Incorrect'}
                                </span>
                                <h4>{practiceFeedback.isEssay ? 'Reference Answer' : 'Explanation & Database Insights'}</h4>
                            </div>
                            <div className="explanation-body">
                                {practiceFeedback.explanation.split('\n').filter(Boolean).map((line) => (
                                    <p key={line}>{line.replace(/\*\*/g, '')}</p>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Action Controls */}
                    <div className="quiz-navigation-controls">
                        <button className="btn btn-secondary btn-nav" onClick={handlePrev} disabled={currentQuestionIndex === 0}>
                            <i className="fa-solid fa-chevron-left"></i> Previous
                        </button>

                        {!isExamMode && isEssayQuestion && !practiceFeedback && (
                            <button className="btn btn-primary btn-nav" onClick={handleRevealModelAnswer}>
                                Show Model Answer <i className="fa-solid fa-book-open"></i>
                            </button>
                        )}
                        
                        {currentQuestionIndex === totalQs - 1 ? (
                            <button className="btn btn-red btn-nav animate-pulse" onClick={handleSubmitExam}>
                                Finish <i className="fa-solid fa-circle-check"></i>
                            </button>
                        ) : (
                            <button className="btn btn-secondary btn-nav" onClick={handleNext}>
                                Next <i className="fa-solid fa-chevron-right"></i>
                            </button>
                        )}
                    </div>
                </div>

                {/* Right: Navigator Sidebar */}
                <div className="quiz-sidebar-navigator card">
                    <div className="sidebar-header">
                        <h4>Navigation Console</h4>
                        <span className="questions-left-tag">{unansweredCount} Left</span>
                    </div>

                    <div className="runner-header-actions" style={{ marginBottom: '1.5rem' }}>
                        <button className={`btn ${isFlagged ? 'btn-orange' : 'btn-outline'}`} onClick={toggleFlag}>
                            <i className={`fa-solid ${isFlagged ? 'fa-flag' : 'fa-regular fa-flag'}`}></i> {isFlagged ? 'Flagged' : 'Flag for Review'}
                        </button>
                        <button className="btn btn-red" onClick={handleSubmitExam}>
                            <i className="fa-solid fa-circle-check"></i> Submit Exam
                        </button>
                    </div>

                    <p className="sidebar-help">Click any grid cell below to jump directly to that question.</p>
                    
                    {/* Question Grid */}
                    <div className="questions-grid-layout">
                        {currentSession.questions.map((_, idx) => {
                            let cellClasses = "grid-cell";
                            if (idx === currentQuestionIndex) cellClasses += " current";
                            else if (currentSession.userResponses[idx]) cellClasses += " answered";
                            
                            if (currentSession.flaggedQuestions.has(idx)) cellClasses += " flagged";

                            return (
                                <div 
                                    key={idx} 
                                    className={cellClasses}
                                    onClick={() => {
                                        setPracticeFeedback(null);
                                        setCurrentQuestionIndex(idx);
                                    }}
                                >
                                    {idx + 1}
                                </div>
                            );
                        })}
                    </div>

                    {/* Grid Legend */}
                    <div className="grid-legend">
                        <div className="legend-item">
                            <span className="legend-box current"></span>
                            <span>Current</span>
                        </div>
                        <div className="legend-item">
                            <span className="legend-box answered"></span>
                            <span>Answered</span>
                        </div>
                        <div className="legend-item">
                            <span className="legend-box flagged"></span>
                            <span>Flagged</span>
                        </div>
                        <div className="legend-item">
                            <span className="legend-box unanswered"></span>
                            <span>Unanswered</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
