import 'react';
import Header from './components/layout/Header';
import Dashboard from './components/dashboard/Dashboard';
import { useExamContext } from './context/ExamContext';
import './index.css';
import './mobile-hotfix.css';

import SubjectHub from './components/course/SubjectHub';

import PerformanceHistory from './components/history/PerformanceHistory';
import ConfigExam from './components/exam/ConfigExam';
import QuizRunner from './components/exam/QuizRunner';
import QuizResults from './components/exam/QuizResults';
import Footer from './components/layout/Footer';

function AppContent() {
  const { activeView } = useExamContext();

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <div className="bg-orb orb-1"></div>
      <div className="bg-orb orb-2"></div>
      <div className="bg-orb orb-3"></div>
      <div className="bg-orb orb-4"></div>

      <Header />
      
      <main className="app-main-content" style={{ flex: 1 }}>
        {activeView === 'view-dashboard' && <Dashboard />}
        {activeView === 'view-subject-hub' && <SubjectHub />}
        {activeView === 'view-performance-history' && <PerformanceHistory />}
        {activeView === 'view-exam-config' && <ConfigExam />}
        {activeView === 'view-exam-runner' && <QuizRunner />}
        {activeView === 'view-exam-results' && <QuizResults />}
      </main>

      <Footer />
    </div>
  );
}

export default function App() {
  return <AppContent />;
}
