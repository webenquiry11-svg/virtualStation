"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Github, Instagram, Linkedin, Twitter, ArrowUp, Zap, Cpu, Globe } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative w-full bg-[#050505] pt-32 pb-10 px-8 md:px-24 overflow-hidden border-t border-white/5">
      
      {/* 1. BACKGROUND KINETIC TYPOGRAPHY */}
      <div className="absolute top-0 left-0 w-full overflow-hidden pointer-events-none select-none opacity-[0.02] flex whitespace-nowrap">
        <motion.h2 
          animate={{ x: [0, -1000] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="text-[15rem] font-black tracking-tighter uppercase text-white"
        >
          VIRTUAL STATION • AR • VR • AI • XR • METAVERSE • GAME DEV • VIRTUAL STATION • 
        </motion.h2>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* 2. MAIN FOOTER CONTENT */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-24">
          
          {/* Brand Identity Module */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
               <h2 className="text-4xl font-black text-white tracking-tighter uppercase leading-none">
                COMMANDING THE <br /> <span className="text-blue-500">NATIONAL GRID.</span>
              </h2>
              <p className="text-gray-500 text-sm font-light leading-relaxed max-w-sm">
                Virtual Station
              </p>
            </div>
            
            <div className="flex gap-3">
              {[
                { icon: <Github size={18} />, link: "https://github.com/Ayushsharma-tech" },
                { icon: <Linkedin size={18} />, link: "#" },
                { icon: <Instagram size={18} />, link: "https://www.instagram.com/acoustic_ehsaas/" },
                { icon: <Twitter size={18} />, link: "#" }
              ].map((social, i) => (
                <motion.a
                  key={i}
                  href={social.link}
                  whileHover={{ y: -5, scale: 1.1 }}
                  className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:border-[#005296] transition-all shadow-xl"
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Services & Main Nav Module */}
          <div className="lg:col-span-3 grid grid-cols-2 lg:grid-cols-1 gap-10">
            <div className="space-y-4">
              <h4 className="text-[10px] font-mono text-[#005296] uppercase tracking-[0.4em] font-black">Main_Navigation</h4>
              <ul className="space-y-3 text-xs text-gray-400 font-bold uppercase tracking-widest">
                <li className="hover:text-white cursor-pointer transition-colors flex items-center gap-2 group">
                  <span className="w-0 group-hover:w-4 h-px bg-[#005296] transition-all" /> Core Override (Home)
                </li>
                <li className="hover:text-white cursor-pointer transition-colors flex items-center gap-2 group">
                  <span className="w-0 group-hover:w-4 h-px bg-[#005296] transition-all" /> Our Story
                </li>
                <li className="hover:text-white cursor-pointer transition-colors flex items-center gap-2 group">
                  <span className="w-0 group-hover:w-4 h-px bg-[#005296] transition-all" /> Contact
                </li>
              </ul>
            </div>
            
            <div className="space-y-4">
              <h4 className="text-[10px] font-mono text-[#005296] uppercase tracking-[0.4em] font-black">Services</h4>
              <ul className="space-y-3 text-xs text-gray-400 font-bold uppercase tracking-widest">
                <li className="hover:text-white cursor-pointer transition-colors flex items-center gap-2 group">
                  <span className="w-0 group-hover:w-4 h-px bg-[#005296] transition-all" /> AR Development
                </li>
                <li className="hover:text-white cursor-pointer transition-colors flex items-center gap-2 group">
                  <span className="w-0 group-hover:w-4 h-px bg-[#005296] transition-all" /> VR Development
                </li>
                <li className="hover:text-white cursor-pointer transition-colors flex items-center gap-2 group">
                  <span className="w-0 group-hover:w-4 h-px bg-[#005296] transition-all" /> XR Development
                </li>
                <li className="hover:text-white cursor-pointer transition-colors flex items-center gap-2 group">
                  <span className="w-0 group-hover:w-4 h-px bg-[#005296] transition-all" /> AI & Metaverse
                </li>
                <li className="hover:text-white cursor-pointer transition-colors flex items-center gap-2 group">
                  <span className="w-0 group-hover:w-4 h-px bg-[#005296] transition-all" /> Game Development
                </li>
              </ul>
            </div>
          </div>

          {/* Industries Telemetry Module */}
          <div className="lg:col-span-4 grid grid-cols-2 gap-8 p-8 rounded-[2.5rem] bg-white/[0.02] border border-white/5 backdrop-blur-3xl">
            <div className="space-y-4">
              <h4 className="text-[10px] font-mono text-emerald-500 uppercase tracking-[0.4em] font-black flex items-center gap-2">
                <Cpu size={12} /> Industries
              </h4>
              <ul className="space-y-3 text-[10px] text-gray-500 font-mono uppercase tracking-widest">
                <li className="hover:text-white transition-colors">Manufacturing</li>
                <li className="hover:text-white transition-colors">Industrial Agriculture</li>
                <li className="hover:text-white transition-colors">Corporate Logistics</li>
                <li className="hover:text-white transition-colors">Chemical Processing</li>
              </ul>
            </div>
            <div className="space-y-4 pt-8 md:pt-0">
              <h4 className="text-[10px] font-mono text-transparent uppercase tracking-[0.4em] font-black flex items-center gap-2 select-none">
                <Cpu size={12} /> Placeholder
              </h4>
              <ul className="space-y-3 text-[10px] text-gray-500 font-mono uppercase tracking-widest">
                <li className="hover:text-white transition-colors">Urban Infrastructure</li>
                <li className="hover:text-white transition-colors">Medical Simulation</li>
                <li className="hover:text-white transition-colors">Digital Real Estate</li>
                <li className="hover:text-white transition-colors">Defense & Combat</li>
              </ul>
            </div>
          </div>
        </div>

        {/* 3. FINAL BASELINE */}
        <div className="flex flex-col md:flex-row items-center justify-between pt-12 border-t border-white/5 gap-8">
          <div className="flex items-center gap-6">
             <p className="text-[9px] font-mono text-gray-700 uppercase tracking-[0.2em]">
               © {currentYear} Virtual Station
             </p>
             <div className="h-3 w-px bg-white/10 hidden md:block" />
             <p className="text-[9px] font-mono text-gray-700 uppercase tracking-[0.2em]">
               Optimized for Spatial Environments
             </p>
          </div>

          <motion.button
            onClick={scrollToTop}
            whileHover={{ y: -5 }}
            className="group flex items-center gap-3 text-[10px] font-black text-white uppercase tracking-[0.5em]"
          >
            Terminal_Top <ArrowUp size={16} className="text-[#005296] group-hover:animate-bounce" />
          </motion.button>
        </div>
      </div>

      {/* DECORATIVE LIGHTING */}
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[#005296]/10 blur-[120px] rounded-full pointer-events-none" />
    </footer>
  );
};

export default Footer;