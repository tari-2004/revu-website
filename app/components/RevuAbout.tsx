import { Target, Eye, Award, Users } from "lucide-react";

export default function AboutRevu() {
  return (
    <section id="about" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-20 items-center">
          
          {/* LEFT SIDE: Visual Brand Element */}
          <div className="w-full lg:w-1/2 relative">
            <div className="aspect-square bg-[#0A0A0A] rounded-[40px] flex items-center justify-center relative overflow-hidden group border border-slate-200 shadow-2xl">
              {/* Animated Gradient Pulse */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#66D154]/20 to-transparent opacity-50 group-hover:opacity-100 transition-opacity duration-700" />
              
              {/* Big Center "R" */}
              <span className="text-[12rem] font-black text-[#66D154] italic select-none tracking-tighter">
                R
              </span>

              {/* Floating Badge */}
              <div className="absolute top-10 right-10 p-4 bg-white rounded-2xl shadow-xl border border-slate-100 flex items-center gap-3 animate-bounce-slow">
                <div className="w-10 h-10 bg-[#66D154] rounded-xl flex items-center justify-center text-black">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Est. 2026</p>
                  <p className="text-xs font-black text-black tracking-tight">Premium Quality</p>
                </div>
              </div>
            </div>
            
            {/* Background Blob */}
            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-[#66D154]/10 blur-[100px] rounded-full -z-10" />
          </div>

          {/* RIGHT SIDE: Narrative Content */}
          <div className="w-full lg:w-1/2">
            <h2 className="text-[#66D154] font-black text-xs uppercase tracking-[0.4em] mb-6">
              Our Identity
            </h2>
            <h3 className="text-4xl md:text-5xl font-black text-black tracking-tighter leading-tight mb-8">
              Simplifying the <span className="text-slate-300 italic">Digital Journey.</span>
            </h3>
            
            <p className="text-slate-600 text-lg leading-relaxed mb-10 font-medium">
              Revu is a digital service platform dedicated to providing reliable and accessible online solutions for individuals, creators, and businesses. We focus on innovation, reliability, and user satisfaction, ensuring our services remain efficient and secure.
            </p>

            {/* Mission & Vision Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4 p-6 rounded-3xl bg-slate-50 border border-slate-100 hover:border-[#66D154]/30 transition-colors">
                <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center shadow-sm text-[#66D154]">
                  <Target className="w-5 h-5" />
                </div>
                <h4 className="font-black text-black uppercase tracking-widest text-[10px]">Our Mission</h4>
                <p className="text-xs text-slate-500 leading-relaxed font-medium">
                  To simplify access to essential digital services while helping people grow and succeed in the digital world.
                </p>
              </div>

              <div className="space-y-4 p-6 rounded-3xl bg-slate-50 border border-slate-100 hover:border-[#66D154]/30 transition-colors">
                <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center shadow-sm text-[#66D154]">
                  <Eye className="w-5 h-5" />
                </div>
                <h4 className="font-black text-black uppercase tracking-widest text-[10px]">Our Vision</h4>
                <p className="text-xs text-slate-500 leading-relaxed font-medium">
                  To become a trusted platform where people can access multiple digital services from one reliable source.
                </p>
              </div>
            </div>

            {/* Team/Community Teaser */}
            <div className="mt-12 flex items-center gap-4">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-slate-200" />
                ))}
              </div>
              <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">
                Join <span className="text-black">2,000+</span> users worldwide
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}