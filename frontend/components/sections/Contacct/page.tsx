"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, MapPin, Mail, Phone, Globe, CheckCircle } from 'lucide-react';

const ContactSection = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      if (res.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
        setTimeout(() => setStatus('idle'), 4000);
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="relative w-full bg-[#050505] py-16 md:py-20 px-6 md:px-24 overflow-hidden border-t border-white/5">
      
      {/* BACKGROUND DEPTH: Subtle Blue Pulse */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-600/5 blur-[180px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* HEADER: BIG TYPOGRAPHY */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 md:mb-24 gap-8">
          <div className="max-w-xl">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="text-blue-500 font-mono text-[10px] tracking-[0.5em] uppercase mb-4"
            >
              // Initializing_Contact_Protocol
            </motion.div>
            <h2 className="text-6xl md:text-8xl font-black text-white tracking-tighter leading-none">
              BOOK YOUR CUSTOM <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">XR & METAVERSE DEMO.</span>
            </h2>
          </div>
          <div className="hidden md:block text-right text-gray-600 font-mono text-[10px] space-y-1">
            <p>LATENCY: OPTIMAL</p>
            <p>ENCRYPTION: AES-256</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          {/* LEFT: CONTACT TERMINAL DATA */}
          <div className="space-y-12">
            <div className="space-y-8">
              <p className="text-gray-400 text-lg font-light leading-relaxed max-w-sm">
                We deploy ruthless Virtual Reality and AI architectures directly to your enterprise.
              </p>
              
              <div className="space-y-6">
                {[
                  { icon: <Mail size={18} />, label: "Encrypted Mail", val: "contact@virtualstation.com" },
                  { icon: <MapPin size={18} />, label: "Base Node", val: "India" },
                  { icon: <Globe size={18} />, label: "Deployment", val: "Global Architecture" }
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-6 group">
                    <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-blue-500 group-hover:border-blue-500/50 transition-colors">
                      {item.icon}
                    </div>
                    <div>
                      <p className="text-[9px] font-mono text-gray-600 uppercase tracking-widest">{item.label}</p>
                      <p className="text-white font-medium">{item.val}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* DECORATIVE SYSTEM LOG */}
            <div className="p-6 rounded-3xl bg-white/[0.02] border border-white/5 font-mono text-[10px] text-gray-500 space-y-1">
               <p className="text-emerald-500/50">{">"} Connection established...</p>
               <p className="text-blue-500/50">{">"} Ready for message input_</p>
               {status === 'loading' && <p className="text-yellow-500/50">{">"} Transmitting payload...</p>}
               {status === 'success' && <p className="text-emerald-500">{">"} Transmission successful. Awaiting response_</p>}
               {status === 'error' && <p className="text-red-500/50">{">"} Transmission failed. Error in network relay_</p>}
            </div>
          </div>

          {/* RIGHT: ACCESS REQUEST FORM */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="p-10 md:p-12 rounded-[3rem] bg-[#0c0c0c] border border-white/10 shadow-2xl relative overflow-hidden group"
          >
            {/* Hover Glow */}
            <div className="absolute -inset-px bg-gradient-to-br from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

            <form onSubmit={handleSubmit} className="relative z-10 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-mono text-gray-500 uppercase tracking-widest ml-4">Identifier</label>
                  <input 
                    type="text" 
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Full Name" 
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-gray-700 focus:outline-none focus:border-blue-500/50 transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-mono text-gray-500 uppercase tracking-widest ml-4">Return_Path</label>
                  <input 
                    type="email" 
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="Email Address" 
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-gray-700 focus:outline-none focus:border-blue-500/50 transition-all"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-mono text-gray-500 uppercase tracking-widest ml-4">Subject_Line</label>
                <input 
                  type="text" 
                  required
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  placeholder="Project Title" 
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-gray-700 focus:outline-none focus:border-blue-500/50 transition-all"
                />
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-mono text-gray-500 uppercase tracking-widest ml-4">Data_Payload</label>
                <textarea 
                  rows={4} 
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Project details, timeline, and goals..." 
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-gray-700 focus:outline-none focus:border-blue-500/50 transition-all resize-none"
                />
              </div>

              <motion.button 
                type="submit"
                disabled={status === 'loading'}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-5 bg-white text-black rounded-2xl font-black uppercase text-[11px] tracking-[0.4em] flex items-center justify-center gap-3 group/btn hover:bg-[#005296] hover:text-white transition-all duration-500 shadow-[0_20px_40px_rgba(255,255,255,0.05)] disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status === 'loading' ? 'Transmitting...' : status === 'success' ? 'Message Sent' : 'Transmit_Message'} 
                <Send size={14} className="group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
              </motion.button>
            </form>
          </motion.div>

        </div>
      </div>

      {/* SUCCESS TOAST NOTIFICATION */}
      <AnimatePresence>
        {status === 'success' && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className="fixed bottom-8 right-8 md:bottom-12 md:right-12 z-[100] flex items-center gap-4 p-5 rounded-2xl bg-[#0c0c0c] border border-[#005296]/50 shadow-[0_10px_40px_rgba(0,82,150,0.3)]"
          >
            <CheckCircle size={24} className="text-emerald-400" />
            <div>
              <p className="text-white text-sm font-bold tracking-wide">Transmission Successful</p>
              <p className="text-gray-400 text-[11px] mt-0.5">Thank you! Your message has been received.</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default ContactSection;