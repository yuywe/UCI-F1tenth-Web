import React from 'react';
import { motion } from 'motion/react';
import { Users, Crosshair } from 'lucide-react';
import { div } from 'motion/react-m';

/*const teamMembers = [
  
];*/

export default function Team() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-12 overflow-hidden">
      <div className="mb-12">
        <span className="font-mono text-[10px] text-brand-blue font-bold tracking-[0.4em] uppercase mb-4 block flex items-center gap-2">
          <Users className="w-4 h-4" /> The_Collective
        </span>
        <h2 className="text-4xl md:text-6xl font-black italic tracking-tighter text-brand-ink uppercase">Meet the Team</h2>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="relative aspect-[16/9] md:aspect-[21/9] w-full rounded-2xl overflow-hidden bg-brand-ink border border-white/10 mb-20 shadow-2xl group"
      >
        <img 
          src="./images/team_photo.JPG" 
          alt="F1TENTH Team Group Shot" 
          className="absolute inset-0 w-full h-full object-cover  transition-opacity duration-700"
        />
        <div className="absolute inset-0 bg-brand-blue/5 mix-blend-overlay pointer-events-none" />
        <div className="absolute bottom-6 right-6 md:bottom-8 md:right-8 z-20 flex gap-4 pointer-events-none bg-black/60 px-4 py-2 rounded-lg backdrop-blur-md border border-white/10">
            <div className="flex items-center gap-3">
              <Crosshair className="w-4 h-4 text-brand-blue" />
              <div className="flex flex-col">
                  <span className="font-mono text-[9px] text-white/80 uppercase tracking-widest font-bold">2026</span>
                  <span className="text-white font-bold text-[10px] tracking-widest uppercase">Active Roster</span>
              </div>
            </div>
        </div>
      </motion.div>

      {/* <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
        {teamMembers.map((member, idx) => (
          <motion.div
            key={member.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1, duration: 0.5 }}
            viewport={{ once: true }}
            className="group relative aspect-[3/4] rounded-2xl overflow-hidden bg-brand-ink border border-white/5 cursor-pointer shadow-lg hover:border-brand-blue/30 transition-all duration-300"
          >
            <img 
              src={member.image} 
              alt={`Headshot of ${member.name}`}
              loading="lazy"
              className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-300 grayscale group-hover:grayscale-0"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-ink via-brand-ink/60 to-transparent opacity-95 group-hover:opacity-80 transition-opacity duration-300" />
            
            <div className="absolute bottom-0 left-0 w-full p-5 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
              <span className="font-mono text-[9px] text-brand-blue font-bold uppercase tracking-widest mb-1 block">
                {member.division}
              </span>
              <h3 className="text-lg md:text-xl font-bold text-white tracking-tight leading-none mb-1">
                {member.name}
              </h3>
              <p className="text-white/80 font-mono text-[10px] uppercase tracking-widest font-bold">
                {member.role}
              </p>
            </div>
            
            <div className="absolute top-3 right-3 w-3 h-3 border-t border-r border-white/40 group-hover:border-brand-blue transition-colors duration-300" />
          </motion.div>
        ))}
    
      </div>*/}
    </div>
  );
}