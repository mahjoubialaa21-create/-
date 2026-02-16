
import React, { useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import ChatBot from './components/ChatBot';
import Home from './pages/Home';
import Causes from './pages/Causes';
import Impacts from './pages/Impacts';
import Solutions from './pages/Solutions';

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname]);
  return null;
};

const App: React.FC = () => {
  return (
    <Router>
      <div className="min-h-screen flex flex-col font-['Cairo'] selection:bg-red-600 selection:text-white">
        <ScrollToTop />
        <Navbar />
        
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/causes" element={<Causes />} />
            <Route path="/impacts" element={<Impacts />} />
            <Route path="/solutions" element={<Solutions />} />
          </Routes>
        </main>

        <footer className="bg-slate-950/90 backdrop-blur-md text-white py-16 px-6 border-t border-slate-900">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center text-center md:text-right">
            <div>
              <div className="flex items-center justify-center md:justify-start gap-4 mb-6">
                <div className="w-12 h-12 bg-red-600 rounded-2xl flex items-center justify-center font-black">W&P</div>
                <h3 className="text-3xl font-black tracking-tighter">مشروع الحرب والسلام</h3>
              </div>
              <p className="text-slate-400 text-lg leading-relaxed max-w-md">موقع تعليمي وتوعوي يهدف إلى تسليط الضوء على قضايا النزاعات المسلحة وبناء مستقبل يسوده الحوار والتسامح.</p>
            </div>
            <div className="glass-card p-8 rounded-3xl border border-white/5 shadow-2xl">
              <h4 className="font-black text-red-500 text-xl mb-4">إعداد الطالبات:</h4>
              <div className="grid grid-cols-1 gap-2 text-slate-200 font-bold">
                <p>الاء المحجوبي</p>
                <p>مريم الزواري</p>
                <p>ملاك مخلوف</p>
              </div>
              <div className="mt-6 pt-6 border-t border-white/5">
                <p className="text-sm text-slate-500">تاسعة أساسي 1 • السنة الدراسية 2025/2026</p>
                <p className="text-xs text-slate-600 mt-2">© جميع الحقوق محفوظة لفريق البحث</p>
              </div>
            </div>
          </div>
        </footer>

        <ChatBot />
      </div>
    </Router>
  );
};

export default App;
