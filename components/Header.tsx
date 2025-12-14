import React, { useState, useEffect } from 'react';
import { Menu, X, Instagram } from 'lucide-react';
import { BRAND_NAME, INSTAGRAM_URL } from '../constants';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Início', href: '#home' },
    { label: 'Sobre', href: '#about' },
    { label: 'Coleção', href: '#gallery' },
    { label: 'Contato', href: '#contact' },
  ];

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo Area */}
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-rose-200 rounded-full flex items-center justify-center text-rose-700">
             {/* Placeholder for actual logo */}
             <span className="font-serif font-bold text-xl">B</span>
          </div>
          <span className={`font-serif text-2xl font-bold tracking-wide ${isScrolled ? 'text-stone-800' : 'text-stone-800'}`}>
            {BRAND_NAME}
          </span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.label}
              href={link.href}
              className="text-stone-600 hover:text-rose-600 font-medium transition-colors text-sm uppercase tracking-wider"
            >
              {link.label}
            </a>
          ))}
          <a 
            href={INSTAGRAM_URL} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-rose-500 text-white px-5 py-2 rounded-full hover:bg-rose-600 transition-colors shadow-md text-sm font-bold"
          >
            <Instagram size={18} />
            <span>Siga-nos</span>
          </a>
        </nav>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-stone-800"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg py-6 px-4 flex flex-col gap-4 border-t">
          {navLinks.map((link) => (
            <a 
              key={link.label}
              href={link.href}
              className="text-stone-600 text-lg py-2 border-b border-gray-100 text-center"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
           <a 
            href={INSTAGRAM_URL} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 bg-gradient-to-r from-purple-500 to-rose-500 text-white px-5 py-3 rounded-lg font-bold"
          >
            <Instagram size={20} />
            <span>Instagram</span>
          </a>
        </div>
      )}
    </header>
  );
};

export default Header;