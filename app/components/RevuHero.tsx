"use client";
import { motion, Variants } from "framer-motion";
import { ArrowRight, ChevronRight } from "lucide-react";

export default function RevuHero() {
  // 1. Added explicit "Variants" type to the objects
  const containerVars: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.3 }
    }
  };

  const itemVars: Variants = {
    hidden: { y: 40, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1, 
      transition: { 
        duration: 0.8, 
        // 2. Added "as const" to fix the Bezier Array error
        ease: [0.16, 1, 0.3, 1] as const 
      } 
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-[#050505]">
      {/* Dynamic Background Mesh (Soft Pulse) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
          className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] bg-[#66D154]/10 blur-[120px] rounded-full" 
        />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-[#4EB83D]/5 blur-[100px] rounded-full" />
      </div>

      <motion.div 
        variants={containerVars}
        initial="hidden"
        animate="visible"
        className="max-w-7xl mx-auto px-6 relative z-10 text-center"
      >
        {/* Floating Micro-Badge */}
        <motion.div variants={itemVars} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.03] border border-white/10 backdrop-blur-md mb-10">
          <div className="w-1.5 h-1.5 rounded-full bg-[#66D154] animate-pulse shadow-[0_0_10px_#66D154]" />
          <span className="text-[9px] font-black uppercase tracking-[0.3em] text-white/50">System v2.0 Live</span>
        </motion.div>

        {/* The "Power" Headline */}
        <motion.h1 variants={itemVars} className="text-6xl md:text-9xl font-black text-white tracking-[-0.06em] leading-[0.85] mb-8">
          DIGITAL <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-b from-[#66D154] to-[#3a7c30]">
            VELOCITY.
          </span>
        </motion.h1>

        {/* High-End Subtext */}
        <motion.p variants={itemVars} className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed font-medium">
          Automated utilities for the modern digital era. 
          <span className="text-white"> High-speed growth, delivered instantly.</span>
        </motion.p>

        {/* CTA Section */}
        <motion.div variants={itemVars} className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <button className="group relative px-12 py-6 bg-[#66D154] rounded-2xl overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-[0_0_50px_rgba(102,209,84,0.25)]">
            <span className="relative z-10 text-black font-black uppercase tracking-widest text-xs flex items-center gap-2">
              Get Started <ArrowRight size={16} />
            </span>
          </button>
          
          <button className="flex items-center gap-3 px-8 py-6 text-white/50 hover:text-white transition-colors text-[10px] font-black uppercase tracking-widest group">
            Explore Services <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <div className="w-[1px] h-12 bg-gradient-to-b from-[#66D154] to-transparent" />
          <span className="text-[8px] font-black uppercase tracking-[0.4em] text-white/20 rotate-90 origin-left translate-x-1">Scroll</span>
        </motion.div>
      </motion.div>
    </section>
  );
}