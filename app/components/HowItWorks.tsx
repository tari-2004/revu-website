import { UserPlus, MousePointerClick, CheckCircle2 } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Create Account",
    desc: "Sign up on the Revu platform in less than 60 seconds to get started.",
    icon: <UserPlus className="w-6 h-6 text-[#66D154]" />
  },
  {
    number: "02",
    title: "Select Service",
    desc: "Choose from our range of digital utilities, social growth, or web dev.",
    icon: <MousePointerClick className="w-6 h-6 text-[#66D154]" />
  },
  {
    number: "03",
    title: "Fast Delivery",
    desc: "Complete your request and watch our automated systems deliver results.",
    icon: <CheckCircle2 className="w-6 h-6 text-[#66D154]" />
  }
];

export default function HowItWorks() {
  return (
    <section id="process" className="py-24 bg-[#0A0A0A] text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-[#66D154] font-black text-xs uppercase tracking-[0.4em] mb-4">
            The Process
          </h2>
          <h3 className="text-4xl md:text-5xl font-black tracking-tighter leading-tight">
            Simple. Fast. <span className="text-[#66D154]">Seamless.</span>
          </h3>
          <p className="text-slate-400 mt-6 max-w-xl mx-auto font-medium">
            We’ve stripped away the complexity so you can focus on what matters—your digital growth.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
          {/* Connector Line (Desktop Only) */}
          <div className="hidden md:block absolute top-1/4 left-0 w-full h-[1px] bg-white/5 z-0" />

          {steps.map((step, i) => (
            <div key={i} className="relative z-10 group text-center md:text-left">
              {/* Number Background */}
              <div className="text-8xl font-black text-white/5 absolute -top-12 left-1/2 -translate-x-1/2 md:left-0 md:translate-x-0 group-hover:text-[#66D154]/10 transition-colors duration-500">
                {step.number}
              </div>

              <div className="relative">
                {/* Icon Box */}
                <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-8 mx-auto md:mx-0 group-hover:border-[#66D154] group-hover:bg-[#66D154]/5 transition-all duration-500">
                  {step.icon}
                </div>

                <h4 className="text-xl font-black uppercase tracking-tight mb-4">
                  {step.title}
                </h4>
                <p className="text-slate-400 text-sm leading-relaxed font-medium max-w-[260px] mx-auto md:mx-0">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Callout */}
        <div className="mt-20 p-8 rounded-3xl bg-gradient-to-r from-[#66D154]/10 to-transparent border border-[#66D154]/20 flex flex-col md:flex-row items-center justify-between gap-6">
           <p className="text-sm font-bold tracking-tight">Ready to experience the speed of Revu?</p>
           <button className="px-8 py-3 bg-[#66D154] text-black font-black text-[10px] uppercase tracking-[0.2em] rounded-xl hover:scale-105 transition-transform">
              Get Started Now
           </button>
        </div>
      </div>
    </section>
  );
}