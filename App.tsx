
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
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App: React.FC = () => {
  return (
    <Router>
      <div className="min-h-screen flex flex-col font-['Cairo']">
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

        <footer className="bg-slate-950 text-white py-12 px-4 border-t border-slate-900">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8 text-center md:text-right">
            <div>
              <h3 className="text-2xl font-black mb-2">مشروع الحرب والسلام</h3>
              <p className="text-slate-400 text-sm">موقع تعليمي وتوعوي لبناء مستقبل يسوده الحوار</p>
            </div>
            <div className="space-y-2">
              <h4 className="font-bold text-red-500">إعداد الطالبات:</h4>
              <p className="text-sm">الاء المحجوبي • مريم الزواري • ملاك مخلوف</p>
              <p className="text-xs text-slate-500">تاسعة أساسي 1 - 2025/2026</p>
            </div>
          </div>
        </footer>

        <ChatBot />
      </div>
    </Router>
  );
};

export default App;
