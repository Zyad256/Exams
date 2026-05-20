import 'react';
import { useExamContext } from '../../context/ExamContext';

export default function Header() {
    const { activeView, navigateTo, theme, toggleTheme, soundEnabled, setSoundEnabled } = useExamContext();

    return (
        <header className="app-header">
            <div className="header-container">
                <div className="logo-section" onClick={() => navigateTo('view-dashboard')}>
                    <div className="logo-icon-wrapper">
                        <i className="fa-solid fa-graduation-cap logo-icon"></i>
                    </div>
                    <div className="logo-text">
                        <span className="logo-brand">basmaja</span>
                        <span className="logo-subtitle">Exam Hub</span>
                    </div>
                </div>

                <nav className="nav-links">
                    <button 
                        className={`nav-link ${activeView === 'view-dashboard' || activeView === 'view-subject-hub' ? 'active' : ''}`}
                        onClick={() => navigateTo('view-dashboard')}
                    >
                        <i className="fa-solid fa-house"></i> Dashboard
                    </button>
                    <button 
                        className={`nav-link ${activeView === 'view-performance-history' ? 'active' : ''}`}
                        onClick={() => navigateTo('view-performance-history')}
                    >
                        <i className="fa-solid fa-chart-line"></i> Performance History
                    </button>
                </nav>

                <div className="header-controls">
                    <button className="control-btn" onClick={() => setSoundEnabled(!soundEnabled)} title="Toggle Sound">
                        <i className={`fa-solid ${soundEnabled ? 'fa-volume-high' : 'fa-volume-xmark'}`}></i>
                    </button>
                    <button className="control-btn" onClick={toggleTheme} title="Toggle Theme">
                        <i className={`fa-solid ${theme === 'dark-theme' ? 'fa-sun' : 'fa-moon'}`}></i>
                    </button>
                </div>
            </div>
        </header>
    );
}
