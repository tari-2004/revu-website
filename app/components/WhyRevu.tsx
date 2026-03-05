"use client";
import { motion } from "framer-motion";
import { ArrowUpRight, Shield, Zap, Globe } from "lucide-react";

export default function RevuHeroRedesign() {
  return (
    <section className="relative min-h-screen bg-[#050505] pt-32 pb-20 px-6 overflow-hidden">
      {/* Dynamic Background Mesh */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-[#66D154]/10 blur-[120px] rounded-full animate-pulse" />
        <div className="absolute bottom-[-5%] right-[-5%] w-[40%] h-[40%] bg-blue-500/5 blur-[100px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
          
          {/* Left: Headline Area */}
          <div className="lg:col-span-8">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-8"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#66D154] animate-ping" />
              <span className="text-[10px] font-black text-white/60 uppercase tracking-[0.3em]">v3.0 Engine Operational</span>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-6xl md:text-[120px] font-black text-white leading-[0.85] tracking-[-0.06em] uppercase"
            >
              Powering <br />
              <span className="text-[#66D154] italic">Digital</span> <br />
              Commerce.
            </motion.h1>
          </div>

          {/* Right: Micro-Info / CTA */}
          <div className="lg:col-span-4 pb-4">
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-slate-400 text-lg mb-8 font-medium leading-tight max-w-[300px]"
            >
              High-velocity utilities for the next generation of online creators and businesses.
            </motion.p>
            
            <motion.button 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full py-6 bg-[#66D154] text-black font-black uppercase text-xs tracking-widest rounded-2xl flex items-center justify-center gap-3 shadow-[0_20px_40px_rgba(102,209,84,0.2)]"
            >
              Initialize Access <ArrowUpRight size={18} />
            </motion.button>
          </div>
        </div>

        {/* Bottom Bento Preview */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-24 border-t border-white/10 pt-12">
          {[
            { label: "Uptime", val: "99.9%", icon: <Zap size={14} /> },
            { label: "Security", val: "AES-256", icon: <Shield size={14} /> },
            { label: "Latency", val: "< 200ms", icon: <Globe size={14} /> },
            { label: "Active Nodes", val: "2.4k", icon: <ArrowUpRight size={14} /> },
          ].map((stat, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 + i * 0.1 }}
              className="group cursor-crosshair"
            >
              <div className="text-[#66D154] mb-2 opacity-50 group-hover:opacity-100 transition-opacity">{stat.icon}</div>
              <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest">{stat.label}</p>
              <p className="text-xl font-black text-white">{stat.val}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}