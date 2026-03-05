import { Mail, MessageCircle, Instagram, Send } from "lucide-react";

export default function RevuContact() {
  return (
    <section id="contact" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          
          {/* Left: Contact Info */}
          <div>
            <h2 className="text-[#66D154] font-black text-xs uppercase tracking-[0.4em] mb-6">Get In Touch</h2>
            <h3 className="text-4xl font-black text-black tracking-tighter mb-8">Have a question? <br/> We're here to help.</h3>
            
            <div className="space-y-8 mt-12">
              <div className="flex items-center gap-6 group">
                <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center shadow-sm text-[#66D154] group-hover:bg-[#66D154] group-hover:text-black transition-all">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">Email Us</p>
                  <p className="text-sm font-bold text-black">hello@revu.com</p>
                </div>
              </div>

              <div className="flex items-center gap-6 group">
                <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center shadow-sm text-[#66D154] group-hover:bg-[#66D154] group-hover:text-black transition-all">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">WhatsApp</p>
                  <p className="text-sm font-bold text-black">+234 (0) 800 REVU WEB</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Contact Form */}
          <div className="bg-white p-8 md:p-12 rounded-[32px] border border-slate-200 shadow-xl">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Name</label>
                  <input type="text" placeholder="John Doe" className="w-full px-6 py-4 bg-slate-50 border-none rounded-2xl focus:ring-2 focus:ring-[#66D154] outline-none transition-all text-sm font-medium" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Email</label>
                  <input type="email" placeholder="john@example.com" className="w-full px-6 py-4 bg-slate-50 border-none rounded-2xl focus:ring-2 focus:ring-[#66D154] outline-none transition-all text-sm font-medium" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Message</label>
                <textarea rows={4} placeholder="How can we help you?" className="w-full px-6 py-4 bg-slate-50 border-none rounded-2xl focus:ring-2 focus:ring-[#66D154] outline-none transition-all text-sm font-medium resize-none"></textarea>
              </div>
              <button className="w-full py-5 bg-black text-white font-black rounded-2xl hover:bg-[#66D154] hover:text-black transition-all flex items-center justify-center gap-3 uppercase tracking-widest text-xs">
                Send Message <Send className="w-4 h-4" />
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}