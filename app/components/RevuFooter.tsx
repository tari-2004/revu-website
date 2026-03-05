import { Instagram, Facebook, Twitter, ArrowUpRight } from "lucide-react";
import Link from "next/link";

export default function RevuFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0A0A0A] pt-24 pb-12 text-white border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-20">
          
          {/* Column 1: Brand Info */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-2 group">
              <span className="text-2xl font-black italic tracking-tighter uppercase">
                RE<span className="text-[#66D154]">VU</span>
              </span>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed max-w-[240px] font-medium">
              Simplifying access to essential digital services, social growth, and professional web development.
            </p>
            <div className="flex items-center gap-4">
              {[
                { icon: <Instagram size={18} />, href: "#" },
                { icon: <Facebook size={18} />, href: "#" },
                { icon: <Twitter size={18} />, href: "#" }
              ].map((social, i) => (
                <a 
                  key={i} 
                  href={social.href} 
                  className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-[#66D154] hover:border-[#66D154] transition-all"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Company */}
          <div>
            <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-[#66D154] mb-8">Company</h4>
            <ul className="space-y-4">
              {["About Us", "Services", "How It Works", "Contact"].map((link) => (
                <li key={link}>
                  <Link href={`#${link.toLowerCase().replace(/ /g, "-")}`} className="text-slate-400 hover:text-white text-sm font-medium transition-colors flex items-center gap-1 group">
                    {link} <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-all" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Services */}
          <div>
            <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-[#66D154] mb-8">Solutions</h4>
            <ul className="space-y-4">
              {["Digital Utilities", "Social Media Growth", "Website Development", "Custom Apps"].map((link) => (
                <li key={link}>
                  <Link href="#services" className="text-slate-400 hover:text-white text-sm font-medium transition-colors flex items-center gap-1 group">
                    {link} <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-all" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Legal */}
          <div>
            <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-[#66D154] mb-8">Legal</h4>
            <ul className="space-y-4">
              {["Privacy Policy", "Terms of Service", "Cookie Policy"].map((link) => (
                <li key={link}>
                  <Link href="#" className="text-slate-400 hover:text-white text-sm font-medium transition-colors">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest">
            © {currentYear} REVU DIGITAL SOLUTIONS. ALL RIGHTS RESERVED.
          </p>
          <div className="flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#66D154] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#66D154]"></span>
            </span>
            <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">System Operational</span>
          </div>
        </div>
      </div>
    </footer>
  );
}