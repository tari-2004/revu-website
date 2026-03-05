import { ArrowRight, Send } from "lucide-react";

export default function RevuCTA() {
  return (
    <section className="py-20 bg-white px-6">
      <div className="max-w-7xl mx-auto">
        <div className="relative bg-[#0A0A0A] rounded-[40px] p-12 md:p-20 overflow-hidden text-center">
          {/* Decorative Glow */}
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-[#66D154]/20 blur-[100px] rounded-full" />
          <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-[#66D154]/10 blur-[100px] rounded-full" />

          <div className="relative z-10 max-w-2xl mx-auto">
            <h3 className="text-4xl md:text-6xl font-black text-white tracking-tighter mb-6">
              Start Your <span className="text-[#66D154]">Digital Journey</span> With Revu.
            </h3>
            <p className="text-slate-400 text-lg mb-10 font-medium">
              Join Revu today and access reliable digital services designed to help you operate and grow online.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button className="w-full sm:w-auto px-10 py-5 bg-[#66D154] text-black font-black rounded-2xl hover:scale-105 transition-transform flex items-center justify-center gap-3 uppercase tracking-widest text-xs">
                Create Account <ArrowRight className="w-4 h-4" />
              </button>
              <button className="w-full sm:w-auto px-10 py-5 bg-white/5 text-white border border-white/10 font-black rounded-2xl hover:bg-white/10 transition-all flex items-center justify-center gap-3 uppercase tracking-widest text-xs">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}