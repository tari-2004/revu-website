"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { Instagram, Twitter, Github, ArrowUp } from "lucide-react";

export default function RevuFooter() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="bg-[#050505] pt-32 pb-12 border-t border-white/5 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-24">
          
          {/* Brand Block */}
          <div className="md:col-span-2 space-y-8">
            <Link href="/" className="text-3xl font-black tracking-tighter uppercase text-white">
              RE<span className="text-[#66D154]">VU</span>
            </Link>
            <p className="text-slate-500 max-w-sm text-sm font-medium leading-relaxed italic">
              The next generation of digital infrastructure. High-speed utilities, automated growth, and elite web architecture.
            </p>
            <div className="flex gap-4">
              {[<Instagram size={18} />, <Twitter size={18} />, <Github size={18} />].map((icon, i) => (
                <button key={i} className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/40 hover:text-[#66D154] hover:bg-[#66D154]/10 transition-all border border-white/5">
                  {icon}
                </button>
              ))}
            </div>
          </div>

          {/* Links Block 1 */}
          <div>
            <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-[#66D154] mb-8">Navigation</h4>
            <ul className="space-y-4">
              {['Services', 'About Us', 'The Process', 'Support'].map(item => (
                <li key={item}>
                  <Link href={`#${item.toLowerCase().replace(" ", "-")}`} className="text-slate-400 hover:text-white text-xs font-bold uppercase tracking-widest transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Links Block 2 */}
          <div>
            <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-[#66D154] mb-8">Legal</h4>
            <ul className="space-y-4">
              {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map(item => (
                <li key={item}>
                  <Link href="#" className="text-slate-400 hover:text-white text-xs font-bold uppercase tracking-widest transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-[9px] font-black text-white/20 uppercase tracking-[0.5em]">
            © {new Date().getFullYear()} REVU DIGITAL SOLUTIONS. ALL RIGHTS RESERVED.
          </p>
          
          <button 
            onClick={scrollToTop}
            className="group flex items-center gap-3 text-[9px] font-black uppercase tracking-[0.3em] text-[#66D154]"
          >
            Back to top <ArrowUp size={14} className="group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  );
}