import React from 'react';
import { motion } from 'motion/react';
import { Terminal, Code, Cpu, Megaphone, ArrowRight, FileText } from 'lucide-react';

const divisions = [
  {
    icon: <Code className="w-5 h-5" />,
    title: "Software & AI",
    desc: "ROS2, PyTorch, C++. Train the models and write the autonomy stack.",
    status: "OPEN"
  },
  {
    icon: <Cpu className="w-5 h-5" />,
    title: "Hardware & Chassis",
    desc: "CAD, PCB Design, Mechatronics. Build and maintain the physical units.",
    status: "OPEN"
  },
  {
    icon: <Megaphone className="w-5 h-5" />,
    title: "Operations & Media",
    desc: "Logistics, Sponsorships, Video. Manage the collective's brand and track days.",
    status: "NEED"
  }
];

export default function Join() {
  const getStatusStyle = (status) => {
    if (status === 'NEED' || status === 'URGENT_NEED') {
      return 'border-brand-yellow/30 text-brand-yellow bg-brand-yellow/10';
    }
    if (status === 'OPEN') {
      return 'border-green-500/30 text-green-500 bg-green-500/10';
    }
    return 'border-white/10 text-white/40 bg-white/5';
  };
  return (
    <div className="max-w-7xl mx-auto px-6 py-16">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="relative bg-brand-ink rounded-3xl overflow-hidden border border-slate-800 shadow-2xl"
      >
        {/* Background Grid Accent */}
        <div className="absolute inset-0 technical-grid opacity-10 pointer-events-none" />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-blue/10 blur-[120px] rounded-full pointer-events-none translate-x-1/3 -translate-y-1/3" />

        <div className="grid lg:grid-cols-2 relative z-10">
          <div className="p-12 md:p-20 flex flex-col justify-center border-b lg:border-b-0 lg:border-r border-slate-800">
            <div className="flex items-center gap-3 mb-8">
              <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
              <span className="font-mono text-[12px] text-brand-blue font-bold tracking-[0.3em] uppercase block">
                Rolling_Recruitment_Active
              </span>
            </div>
            
            <h2 className="text-5xl md:text-7xl font-black italic tracking-tighter text-white uppercase mb-6 leading-[0.9]">
              JOIN THE <br/><span className="text-stroke text-white">COLLECTIVE</span>
            </h2>
            
            <p className="text-slate-400 text-lg leading-relaxed mb-12 font-light">
              We are engineers, designers, and researchers pushing the boundaries of autonomous racing at UCI. If you code for speed, you should be one of us. <br/><br/>
              <span className="text-white/60 italic text-sm">No previous robotics experience required.</span>
            </p>

            <div className="flex flex-row flex-wrap gap-4">
              
              <button 
                onClick={() => window.open('https://discord.gg/fW2hf9Xtfy', '_blank')} 
                className="group relative inline-flex items-center cursor-pointer justify-center gap-3 px-6 py-4 bg-transparent border border-white/20 text-white font-bold text-sm tracking-widest uppercase overflow-hidden transition-all hover:bg-blue-600 w-full sm:w-[200px]"
              >
                <Terminal className="w-4 h-4" />
                <span>General</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                
                <div className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-white/50" />
                <div className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-white/50" />
              </button>

              <button 
                onClick={() => window.open('https://forms.gle/LefG1JNm1nLGyLeb8', '_blank')} 
                className="group relative inline-flex items-center cursor-pointer  justify-center gap-3 px-6 py-4 bg-transparent border border-white/20 text-white font-bold text-sm tracking-widest uppercase overflow-hidden transition-all hover:border-brand-yellow hover:bg-brand-yellow/5 w-full sm:w-[200px]"
              >
                <FileText className="w-4 h-4 group-hover:text-brand-yellow transition-colors" />
                <span>Research</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 group-hover:text-brand-yellow transition-all" />
                
                <div className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-white/50" />
                <div className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-white/50" />
              </button>

            </div>
          </div>

          <div className="p-12 md:p-20 bg-black/20 flex flex-col justify-center">
            <h3 className="font-mono text-[12px] text-white/50 uppercase tracking-widest mb-8">
              // Open_Team_Divisions
            </h3>
            
            <div className="flex flex-col gap-6">
              {divisions.map((div, idx) => (
                <div key={idx} className="group flex items-start gap-6 p-6 bg-brand-ink/50 border border-slate-800 hover:border-brand-blue/50 transition-colors">
                
                  <div className="w-12 h-12 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 group-hover:text-brand-blue group-hover:bg-brand-blue/10 transition-colors shrink-0">
                    {div.icon}
                  </div>
                  <div>
                    <div className="flex items-center justify-between mb-2 gap-4">
                      <h4 className="text-white font-bold text-lg tracking-tight">{div.title}</h4>
                      <span className={`font-mono text-[8px] px-2 py-1 border rounded uppercase tracking-widest ${
                        div.status === 'NEED' || div.status === 'URGENT_NEED'
                          ? 'border-brand-yellow/30 text-brand-yellow bg-brand-yellow/10' 
                          : div.status === 'OPEN'
                          ? 'border-green-500/30 text-green-500 bg-green-500/10'
                          : 'border-white/10 text-white/40 bg-white/5'
                      }`}>
                        {div.status}
                      </span>
                    </div>
                    <p className="text-slate-400 text-sm leading-relaxed">
                      {div.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </motion.div>
    </div>
  );
}