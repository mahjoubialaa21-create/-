
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'الرئيسية', path: '/' },
    { name: 'الأسباب', path: '/causes' },
    { name: 'الآثار', path: '/impacts' },
    { name: 'الحلول', path: '/solutions' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
      isScrolled ? 'bg-slate-950/80 backdrop-blur-xl shadow-2xl py-2 border-b border-slate-800/50' : 'bg-transparent py-6'
    }`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-3 group">
          <div className="w-12 h-12 bg-red-600 rounded-2xl rotate-3 flex items-center justify-center text-white font-black group-hover:rotate-0 transition-all shadow-lg shadow-red-900/40">
            W&P
          </div>
          <span className="text-2xl font-black text-white tracking-tighter">صوت السلام</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map(link => (
            <Link 
              key={link.path} 
              to={link.path}
              className={`text-sm font-black transition-all hover:text-red-500 uppercase tracking-widest ${
                location.pathname === link.path 
                  ? 'text-red-600' 
                  : 'text-slate-300 hover:text-white'
              }`}
            >
              {link.name}
              {location.pathname === link.path && (
                <span className="block h-1 w-full bg-red-600 mt-1 rounded-full animate__animated animate__zoomIn"></span>
              )}
            </Link>
          ))}
        </div>

        {/* Mobile Burger */}
        <button 
          role="button"
          aria-label="تبديل القائمة"
          aria-expanded={isOpen}
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-3 rounded-2xl bg-white/5 text-white hover:bg-white/10 transition-all border border-white/10"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
          </svg>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="md:hidden bg-slate-950/95 backdrop-blur-3xl border-b border-slate-800 p-6 absolute top-full left-0 right-0 shadow-2xl flex flex-col gap-4 animate__animated animate__fadeInDown">
          {navLinks.map(link => (
            <Link 
              key={link.path} 
              to={link.path}
              onClick={() => setIsOpen(false)}
              className={`text-xl font-black p-4 rounded-3xl transition-all ${
                location.pathname === link.path ? 'bg-red-600/10 text-red-500' : 'text-slate-300 hover:bg-white/5'
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
