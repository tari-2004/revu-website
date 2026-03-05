"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

export default function RevuNavbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 inset-x-0 z-[100] px-4 md:px-8 py-6"
    >
      <nav 
        className={`max-w-6xl mx-auto flex items-center justify-between px-4 md:px-8 py-3 rounded-2xl transition-all duration-700 border ${
          scrolled 
            ? "bg-black/80 backdrop-blur-2xl border-white/10 shadow-[0_0_40px_rgba(0,0,0,0.5)] py-2" 
            : "bg-white/5 backdrop-blur-md border-white/5 shadow-sm"
        }`}
      >
        {/* LOGO AREA */}
        <Link href="/" className="flex items-center gap-3 group shrink-0">
          <div className="relative w-9 h-9 overflow-hidden rounded-xl bg-[#111111] border border-white/10 flex items-center justify-center transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3">
             <span className="text-[#66D154] font-black italic text-lg z-10">R</span>
             {/* Glow effect on hover */}
             <div className="absolute inset-0 bg-[#66D154]/20 opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>
          <div className="flex flex-col">
            <span className="font-black tracking-tighter text-lg uppercase text-white">
              RE<span className="text-[#66D154]">VU</span>
            </span>
            <div className="flex items-center gap-1.5 overflow-hidden">
              <motion.span 
                animate={{ opacity: [0.4, 1, 0.4] }}
                transition={{ repeat: Infinity, duration: 2 }}
                className="relative flex h-1 w-1"
              >
                <span className="relative inline-flex rounded-full h-1 w-1 bg-[#66D154]"></span>
              </motion.span>
              <span className="text-[6px] font-black text-white/40 uppercase tracking-[0.3em]">Network Active</span>
            </div>
          </div>
        </Link>

        {/* NAVIGATION LINKS: Centered Glass Pill */}
        <div className="hidden lg:flex items-center bg-white/5 border border-white/5 px-2 py-1.5 rounded-xl gap-1">
          {[
            { name: "Services", href: "#services" },
            { name: "About", href: "#about" },
            { name: "Process", href: "#process" },
            { name: "Support", href: "#contact" }
          ].map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="px-5 py-2 text-[9px] font-black uppercase tracking-[0.2em] text-white/50 hover:text-[#66D154] hover:bg-white/5 rounded-lg transition-all duration-300 relative group"
            >
              {link.name}
              <motion.div 
                className="absolute bottom-1 left-5 right-5 h-[1px] bg-[#66D154] scale-x-0 group-hover:scale-x-100 transition-transform origin-center"
              />
            </a>
          ))}
        </div>

        {/* CTA BUTTON: Micro-interaction ready */}
        <div className="flex items-center gap-4 shrink-0">
          <Link
            href="#contact"
            className="relative group px-6 py-2.5 bg-[#66D154] rounded-xl overflow-hidden transition-all duration-300 hover:shadow-[0_0_30px_rgba(102,209,84,0.4)] active:scale-95"
          >
            <span className="relative z-10 text-black text-[9px] font-black uppercase tracking-[0.2em]">
              Access App
            </span>
            {/* Glossy overlay effect */}
            <div className="absolute inset-0 bg-gradient-to-tr from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
          </Link>
        </div>
      </nav>
    </motion.header>
  );
}