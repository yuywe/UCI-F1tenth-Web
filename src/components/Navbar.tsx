import React, { useState } from 'react';
import { motion, useScroll, useTransform, useSpring, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';
import logo from '/apple-touch-icon.png';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Flowing progress bar math
  const { scrollYProgress } = useScroll();
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 25,
    restDelta: 0.001
  });
  const carX = useTransform(smoothProgress, [0, 1], ["0%", "100%"]);

  // Helper to close menu when a link is clicked
  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/90 backdrop-blur-md border-b border-slate-100 h-20">
      
      {/* Race Progress Bar - "The Track" */}
      <div className="absolute bottom-0 left-0 w-full h-[2px] bg-slate-100/50 overflow-visible z-50">
        <motion.div 
          className="absolute top-0 h-full bg-brand-blue shadow-[0_0_10px_rgba(0,163,255,0.4)]"
          style={{ width: carX }}
        >
          <div className="absolute right-0 top-3 h-full flex items-center">
             <motion.div 
               className="relative -translate-y-[10px]"
               animate={{ y: [-10, -10.3, -10, -9.7, -10] }}
               transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
             >
                <img src="/images/car_sihlouette.png" alt="Car" className="w-8 h-3 text-brand-blue fill-brand-blue drop-shadow-[0_0_15px_rgba(0,163,255,0.5)]" />
                <div className="absolute right-full h-1 w-20 bg-gradient-to-l from-brand-blue to-transparent opacity-40 blur-[2px]" />
             </motion.div>
          </div>
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between relative z-50">
        {/* Logo Section */}
        <div className="flex items-center gap-3">
          <img src={logo} alt="F1TENTH@UCI Logo" width="40" height="40" className="w-10 h-10 md:w-12 md:h-12" />
          <div>
            {/* Switched H1 to a span to fix Lighthouse SEO heading hierarchy rules */}
            <span className="text-lg md:text-xl font-display font-bold tracking-tight leading-none block text-brand-ink">F1TENTH</span>
            <span className="font-mono text-[10px] md:text-[12px] uppercase tracking-[0.1em] text-slate-400">Autonomous Racing</span>
          </div>
        </div>
        
        <div className="hidden lg:flex items-center gap-8 xl:gap-10 font-mono text-[12px] xl:text-[14px] uppercase tracking-[0.2em] text-slate-500">
          <a href="#tech" className="hover:text-brand-blue transition-colors">Stack_01</a>
          <a href="#simulators" className="hover:text-brand-blue transition-colors">Sim_02</a>
          <a href="#events" className="hover:text-brand-blue transition-colors">Events_03</a>
          <a href="#join" className="hover:text-brand-blue transition-colors">Join_04</a>
          <a href="#gallery" className="hover:text-brand-blue transition-colors">Gallery_05</a>

        </div>

        <button 
          onClick={() => window.open('https://github.com/uci-f1tenth', '_blank')} 
          className="hidden md:block px-6 py-2 bg-brand-ink text-white font-display font-bold text-xs rounded-full hover:bg-brand-blue hover:shadow-xl hover:shadow-blue-500/30 transition-all uppercase tracking-widest"
        >
          Race Stack
        </button>

        <button 
          className="lg:hidden p-2 text-brand-ink hover:text-brand-blue transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle mobile menu"
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute top-20 left-0 w-full bg-white/95 backdrop-blur-xl border-b border-slate-200 shadow-2xl lg:hidden z-40"
          >
            <div className="flex flex-col px-6 py-8 gap-6 font-mono text-[14px] uppercase tracking-[0.2em] text-slate-600">
              <a href="#tech" onClick={handleLinkClick} className="hover:text-brand-blue transition-colors w-full text-left">Stack_01</a>
              <div className="w-full h-px bg-slate-100" />
              
              <a href="#simulators" onClick={handleLinkClick} className="hover:text-brand-blue transition-colors w-full text-left">Sim_02</a>
              <div className="w-full h-px bg-slate-100" />
              
              <a href="#events" onClick={handleLinkClick} className="hover:text-brand-blue transition-colors w-full text-left">Events_03</a>
              <div className="w-full h-px bg-slate-100" />
              
              <a href="#join" onClick={handleLinkClick} className="hover:text-brand-blue transition-colors w-full text-left">Join_04</a>
              <div className="w-full h-px bg-slate-100" />
              
              <a href="#gallery" onClick={handleLinkClick} className="hover:text-brand-blue transition-colors w-full text-left">Gallery_05</a>
              <div className="w-full h-px bg-slate-100" />

              <button 
                onClick={() => {
                  window.open('https://github.com/uci-f1tenth', '_blank');
                  handleLinkClick();
                }} 
                className="mt-4 w-full py-4 bg-brand-ink text-white font-display font-bold text-xs rounded-full hover:bg-brand-blue transition-all uppercase tracking-widest text-center"
              >
                Access Race Stack
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}