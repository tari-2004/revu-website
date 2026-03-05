"use client";
import { motion } from "framer-motion";
import { Zap, TrendingUp, Laptop, ArrowUpRight, CheckCircle2 } from "lucide-react";

const services = [
  {
    title: "Digital Services",
    icon: <Zap className="w-6 h-6" />,
    description: "Automated utilities for the modern digital era. Data, airtime, and bills—delivered instantly.",
    items: ["Instant Data Top-up", "Global Airtime", "Utility Bills"],
    tag: "Most Popular",
    className: "md:col-span-2 bg-[#0A0A0A] text-white border-white/10",
    iconBg: "bg-[#66D154] text-black",
  },
  {
    title: "Social Growth",
    icon: <TrendingUp className="w-6 h-6" />,
    description: "Strengthen your brand presence across platforms.",
    items: ["Audience Growth", "Engagement"],
    tag: "Growth",
    className: "md:col-span-1 bg-white text-black border-slate-200",
    iconBg: "bg-black text-[#66D154]",
  },
  {
    title: "Web Development",
    icon: <Laptop className="w-6 h-6" />,
    description: "Custom, high-performance websites built for conversion.",
    items: ["Landing Pages", "Business Sites", "Web Apps"],
    tag: "Creative",
    className: "md:col-span-1 bg-white text-black border-slate-200",
    iconBg: "bg-black text-[#66D154]",
  },
  {
    title: "Why Revu?",
    icon: <CheckCircle2 className="w-6 h-6" />,
    description: "99.9% Uptime with 24/7 automated support and processing.",
    items: ["Secure Payments", "Fast Delivery"],
    tag: "Trust",
    className: "md:col-span-2 bg-[#F4F4F4] text-black border-slate-200",
    iconBg: "bg-[#66D154] text-black",
  }
];

export default function RevuServices() {
  return (
    <section id="services" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Animated Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mb-16"
        >
          <h2 className="text-[#66D154] font-black text-xs uppercase tracking-[0.4em] mb-4">
            Our Ecosystem
          </h2>
          <h3 className="text-5xl md:text-7xl font-black text-black tracking-tighter leading-[0.9]">
            Tools for the <br />
            <span className="text-slate-300 italic">Hyper-Digital.</span>
          </h3>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: index * 0.1, ease: [0.23, 1, 0.32, 1] }}
              className={`group relative p-8 rounded-[32px] border flex flex-col justify-between overflow-hidden transition-all duration-500 hover:shadow-2xl ${service.className}`}
            >
              {/* Subtle Background Glow for Dark Card */}
              {service.title === "Digital Services" && (
                <div className="absolute top-0 right-0 w-64 h-64 bg-[#66D154]/10 blur-[80px] rounded-full pointer-events-none" />
              )}

              <div>
                <div className="flex justify-between items-start mb-12">
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center shadow-lg transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3 ${service.iconBg}`}>
                    {service.icon}
                  </div>
                  <span className={`text-[9px] font-black uppercase tracking-widest px-3 py-1 rounded-full border ${service.title === "Digital Services" ? "border-white/20 text-white/50" : "border-black/10 text-black/40"}`}>
                    {service.tag}
                  </span>
                </div>

                <h4 className="text-2xl font-black uppercase tracking-tight mb-4">
                  {service.title}
                </h4>
                <p className={`text-sm leading-relaxed mb-8 max-w-[280px] font-medium ${service.title === "Digital Services" ? "text-slate-400" : "text-slate-500"}`}>
                  {service.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-8">
                  {service.items.map((item, i) => (
                    <span key={i} className={`text-[10px] font-bold px-3 py-1 rounded-lg ${service.title === "Digital Services" ? "bg-white/5 text-white/70" : "bg-black/5 text-black/70"}`}>
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              <button className={`flex items-center gap-2 text-[10px] font-black uppercase tracking-widest transition-all ${service.title === "Digital Services" ? "text-[#66D154]" : "text-black"}`}>
                Initialize <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}