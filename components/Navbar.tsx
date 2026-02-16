
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
    <nav className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
      isScrolled ? 'bg-white/90 backdrop-blur-md shadow-md py-2' : 'bg-transparent py-4'
    }`}>
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center text-white font-bold group-hover:bg-red-700 transition-colors">
            W&P
          </div>
          <span className={`text-xl font-black ${isScrolled ? 'text-slate-900' : 'text-white'}`}>صوت السلام</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map(link => (
            <Link 
              key={link.path} 
              to={link.path}
              className={`text-sm font-bold transition-colors hover:text-red-500 ${
                location.pathname === link.path 
                  ? 'text-red-600 underline underline-offset-8 decoration-2' 
                  : isScrolled ? 'text-slate-700' : 'text-white'
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Mobile Burger */}
        <button 
          role="button"
          aria-label="تبديل القائمة"
          aria-expanded={isOpen}
          onClick={() => setIsOpen(!isOpen)}
          className={`md:hidden p-2 rounded-lg ${isScrolled ? 'text-slate-900' : 'text-white'}`}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
          </svg>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-slate-100 p-4 absolute top-full left-0 right-0 shadow-xl flex flex-col gap-4">
          {navLinks.map(link => (
            <Link 
              key={link.path} 
              to={link.path}
              onClick={() => setIsOpen(false)}
              className={`text-lg font-bold p-2 rounded-lg ${
                location.pathname === link.path ? 'bg-red-50 text-red-600' : 'text-slate-700'
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
