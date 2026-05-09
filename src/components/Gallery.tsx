import React from 'react';
import { motion } from 'motion/react';
import { Camera } from 'lucide-react';

const photos = [
  { id: 1, src: "/images/arthuranddaniel.jpg", title: "Chassis Calibration", tag: "HARDWARE" },
  { id: 2, src: "/images/track_day.jpg", title: "Track Day", tag: "FIELD_TEST" },
  { id: 3, src: "/images/maus.png", title: "Cutie Lil Guy", tag: "Maus" },
];

export default function Gallery() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
        <div>
          <span className="font-mono text-[10px] text-brand-blue font-bold tracking-[0.4em] uppercase mb-4 block flex items-center gap-2">
            <Camera className="w-4 h-4" /> Visual_Logs
          </span>
          <h2 className="text-4xl md:text-6xl font-black italic tracking-tighter text-brand-ink uppercase">Gallery</h2>
        </div>
        <div className="flex items-center gap-2 px-4 py-2 bg-slate-200/50 border border-slate-200 rounded-full">
          <span className="w-2 h-2 rounded-full bg-brand-blue animate-pulse" />
          <span className="font-mono text-[10px] text-slate-700 font-bold uppercase tracking-widest">
            {photos.length} Records Found
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {photos.map((photo, idx) => (
          <motion.div
            key={photo.id}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: idx * 0.1, duration: 0.5 }}
            viewport={{ once: true }}
            className="group relative aspect-square rounded-2xl overflow-hidden bg-brand-ink border border-slate-200 shadow-lg"
          >
            <img 
              src={photo.src} 
              alt={photo.title}
              loading="lazy"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 opacity-100"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-ink via-brand-ink/40 to-transparent opacity-95 transition-opacity duration-300" />
            
            <div className="absolute bottom-0 left-0 w-full p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
              <span className="font-mono text-[10px] text-brand-blue font-bold uppercase tracking-widest mb-2 block border border-brand-blue/30 bg-brand-blue/10 w-max px-2 py-1 rounded">
                {photo.tag}
              </span>
              <h3 className="text-xl font-bold text-white tracking-tight">{photo.title}</h3>
            </div>
            
            <div className="absolute top-4 right-4 w-4 h-4 border-t-2 border-r-2 border-white/40 group-hover:border-brand-blue transition-colors duration-300" />
            <div className="absolute bottom-4 right-4 font-mono text-[9px] font-bold text-white/80 tracking-widest">
              REC_{String(idx + 1).padStart(3, '0')}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}