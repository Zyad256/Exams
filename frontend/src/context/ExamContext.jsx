/* eslint-disable react-refresh/only-export-components */
import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';

const ExamContext = createContext();

export const ExamProvider = ({ children }) => {
    // 1. STATE MANAGEMENT
    const [activeView, setActiveView] = useState('view-dashboard');
    const [activeSubject, setActiveSubject] = useState('advWeb'); // Added for dynamic course hubs
    const [soundEnabled, setSoundEnabled] = useState(() => {
        const storedSound = localStorage.getItem('prepverse_sound_preference');
        return storedSound !== null ? storedSound === 'true' : true;
    });
    const [history, setHistory] = useState(() => {
        const storedHistory = localStorage.getItem('prepverse_exam_history_v1');
        return storedHistory ? JSON.parse(storedHistory) : [];
    });
    const [streak, setStreak] = useState(1);
    const [theme, setTheme] = useState(() => {
        const storedTheme = localStorage.getItem('prepverse_theme_preference');
        return storedTheme || 'dark-theme';
    });

    // Active exam session variables
    const [currentSession, setCurrentSession] = useState({
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
    });
    
    // Active navigation pointer
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

    // Sync theme preferences with document body
    useEffect(() => {
        document.body.className = theme;
    }, [theme]);

    // Theme toggle
    const toggleTheme = useCallback(() => {
        setTheme((prevTheme) => {
            const newTheme = prevTheme === 'dark-theme' ? 'light-theme' : 'dark-theme';
            localStorage.setItem('prepverse_theme_preference', newTheme);
            return newTheme;
        });
    }, []);

    // View navigation
    const navigateTo = (viewId) => {
        setActiveView(viewId);
        window.scrollTo(0, 0);
    };

    // Audio Synthesis System
    const audioCtxRef = React.useRef(null);
    
    const initAudioContext = () => {
        if (!audioCtxRef.current) {
            audioCtxRef.current = new (window.AudioContext || window.webkitAudioContext)();
        }
    };

    const playSound = React.useCallback((type) => {
        if (!soundEnabled) return;
        try {
            initAudioContext();
            const audioCtx = audioCtxRef.current;
            if (audioCtx.state === 'suspended') {
                audioCtx.resume();
            }
            
            const now = audioCtx.currentTime;
            
            switch (type) {
                case 'correct': {
                    const osc1 = audioCtx.createOscillator();
                    const osc2 = audioCtx.createOscillator();
                    const gainNode = audioCtx.createGain();
                    
                    osc1.type = 'triangle';
                    osc1.frequency.setValueAtTime(523.25, now);
                    osc1.frequency.setValueAtTime(659.25, now + 0.08);
                    
                    osc2.type = 'sine';
                    osc2.frequency.setValueAtTime(783.99, now + 0.16);
                    osc2.frequency.setValueAtTime(1046.50, now + 0.24);
                    
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
                    const osc = audioCtx.createOscillator();
                    const gainNode = audioCtx.createGain();
                    
                    osc.type = 'sawtooth';
                    osc.frequency.setValueAtTime(220.00, now);
                    osc.frequency.exponentialRampToValueAtTime(130.81, now + 0.35);
                    
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
                case 'complete': {
                    const chords = [329.63, 392.00, 523.25];
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
                        osc.stop(now + 0.9);
                    });
                    break;
                }
            }
        } catch (e) {
            console.error("Audio error", e);
        }
    }, [soundEnabled]);

    const value = React.useMemo(() => ({
        activeView, navigateTo,
        activeSubject, setActiveSubject,
        theme, toggleTheme,
        soundEnabled, setSoundEnabled, playSound,
        history, setHistory,
        streak, setStreak,
        currentSession, setCurrentSession,
        currentQuestionIndex, setCurrentQuestionIndex
    }), [
        activeView,
        activeSubject,
        theme,
        toggleTheme,
        soundEnabled,
        playSound,
        history,
        streak,
        currentSession,
        currentQuestionIndex
    ]);

    return (
        <ExamContext.Provider value={value}>
            {children}
        </ExamContext.Provider>
    );
};

export const useExamContext = () => useContext(ExamContext);
