import React from 'react';
import { motion } from 'motion/react';
import { Brain, Rocket } from 'lucide-react';

export default function Research() {
  return (
    <div className="relative max-w-7xl mx-auto px-6 py-12">
      
      {/* Ambient Background Glows */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-yellow/5 blur-[120px] rounded-full pointer-events-none -translate-y-1/4 translate-x-1/4" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-brand-blue/5 blur-[120px] rounded-full pointer-events-none translate-y-1/4 -translate-x-1/4" />

      <div className="relative z-10 flex flex-col md:flex-row justify-between items-start md:items-end mb-20 gap-8">
        <div className="relative">
          <span className="font-mono text-[10px] text-brand-blue uppercase tracking-[0.6em] mb-4 font-bold block">
            Neural_Framework_v3.2
          </span>
          <h2 className="text-6xl md:text-8xl font-black tracking-tighter text-brand-ink uppercase italic leading-[0.8] mb-4">
            DEEP<br/>LEARNING
          </h2>
          <div className="absolute -left-6 top-0 w-1 h-full bg-brand-yellow" />
        </div>
        
        <div className="max-w-md text-right md:text-left">
          <p className="text-slate-500 font-mono text-[10px] uppercase tracking-widest mb-4">
            Research focus: End-to-end autonomous racing via reinforcement learning.
          </p>
          <div className="h-[2px] w-full bg-slate-200" />
        </div>
      </div>

      <div className="relative z-10 grid md:grid-cols-2 gap-px bg-slate-200 border border-slate-200 overflow-hidden rounded-2xl shadow-xl shadow-slate-200/50">
        
        <motion.div 
          className="relative p-12 md:p-16 border-r border-slate-200 bg-white group overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-brand-blue/[0.1] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
          
          <div className="absolute top-6 right-6 w-4 h-4 border-t-2 border-r-2 border-slate-200 group-hover:border-brand-blue transition-colors duration-300" />

          <div className="relative z-10">
            <div className="w-14 h-14 bg-brand-blue/5 border border-brand-blue/10 group-hover:border-brand-blue/30 group-hover:bg-brand-blue/10 rounded-2xl flex items-center justify-center text-brand-blue mb-10 transition-all duration-300">
              <Brain className="w-6 h-6" />
            </div>
            <h3 className="text-3xl font-bold mb-6 italic tracking-tight text-brand-ink">PPO // STABILITY</h3>
            <p className="text-slate-600 font-light leading-relaxed mb-10">
              Proximal Policy Optimization for continuous control. Our baseline for collision-free trajectory tracking and adaptive braking.
            </p>
            <div className="flex items-center gap-4 mt-auto">
              <div className="flex-1 h-[2px] bg-gradient-to-r from-brand-blue/40 to-transparent" />
              <span className="font-mono text-[12px] text-brand-blue tracking-tighter font-bold">EFFICIENT_LEARNING</span>
            </div>
          </div>
        </motion.div>

        <motion.div 
          className="relative p-12 md:p-16 bg-white group overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-brand-yellow/[0.1] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
          
          <div className="absolute top-6 right-6 w-4 h-4 border-t-2 border-r-2 border-slate-200 group-hover:border-brand-yellow transition-colors duration-300" />

          <div className="relative z-10">
            <div className="w-14 h-14 bg-brand-yellow/5 border border-brand-yellow/10 group-hover:border-brand-yellow/40 group-hover:bg-brand-yellow/10 rounded-2xl flex items-center justify-center text-brand-yellow mb-10 transition-all duration-300">
              <Rocket className="w-6 h-6" />
            </div>
            <h3 className="text-3xl font-bold mb-6 italic tracking-tight text-brand-ink">DreamerV3 // PREDICTION</h3>
            <p className="text-slate-600 font-light leading-relaxed mb-10">
              World-model based RL. Drastically reducing real-world samples by training in highly accurate learned latent spaces.
            </p>
            <div className="flex items-center gap-4 mt-auto">
              <div className="flex-1 h-[2px] bg-gradient-to-r from-brand-yellow/60 to-transparent" />
              <span className="font-mono text-[12px] text-brand-yellow tracking-tighter font-bold">HIGH_SAMPLING_RATE</span>
            </div>
          </div>
        </motion.div>

      </div>
    </div>
  );
}