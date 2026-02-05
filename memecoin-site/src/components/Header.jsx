import React, { useState } from 'react'
import MoltIDSymbol from '../assets/images/moltid-symbol.png';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-zinc-950/95 backdrop-blur-lg border-b border-zinc-800">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex flex-col">
            <span className="text-2xl font-extrabold tracking-tight leading-tight">
              <span className="text-orange-500">Molt</span>
              <span className="text-white">ID</span>
            </span>
            <p className="text-[0.65rem] text-gray-500 uppercase tracking-widest">
              AI AGENT IDENTITY
            </p>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <button 
              onClick={() => scrollToSection('stats')} 
              className="text-gray-400 hover:text-orange-500 transition-colors font-medium text-[0.95rem]"
            >
              Stats
            </button>
            <button 
              onClick={() => scrollToSection('about')} 
              className="text-gray-400 hover:text-orange-500 transition-colors font-medium text-[0.95rem]"
            >
              About
            </button>
            <a 
              href="https://x.com/moltid_agent" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-400 hover:text-white transition-colors font-medium text-[0.95rem] px-4 py-2 border border-zinc-700 hover:border-zinc-600 rounded-lg"
            >
              Join MoltID
            </a>
            <a 
              href="https://gmgn.ai/base/token/0x68b5a255a2c450adfb2fdf610a8605d3966a1c31" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2.5 rounded-lg font-semibold text-[0.95rem] transition-all hover:-translate-y-0.5"
            >
              Buy on GMGN.AI
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden flex flex-col gap-1 p-2"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span className="w-6 h-0.5 bg-white transition-all"></span>
            <span className="w-6 h-0.5 bg-white transition-all"></span>
            <span className="w-6 h-0.5 bg-white transition-all"></span>
          </button>
        </div>

        {/* Mobile Navigation */}
        {menuOpen && (
          <nav className="md:hidden flex flex-col gap-4 pb-4 border-t border-zinc-800 pt-4">
            <button 
              onClick={() => scrollToSection('stats')} 
              className="text-gray-400 hover:text-orange-500 text-left py-2 transition-colors"
            >
              Stats
            </button>
            <button 
              onClick={() => scrollToSection('about')} 
              className="text-gray-400 hover:text-orange-500 text-left py-2 transition-colors"
            >
              About
            </button>
            <a 
              href="https://x.com/moltid_agent" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-400 hover:text-white border border-zinc-700 hover:border-zinc-600 px-4 py-3 rounded-lg text-center transition-all"
            >
              Join MoltID
            </a>
            <a 
              href="https://gmgn.ai/base/token/0x68b5a255a2c450adfb2fdf610a8605d3966a1c31" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold text-center transition-all"
            >
              Buy on GMGN.AI
            </a>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;