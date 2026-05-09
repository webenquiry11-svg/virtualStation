"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Menu } from 'lucide-react';
import Image from 'next/image';

const HeroSection = () => {
  return (
    <div id="home" className="relative min-h-screen w-full bg-[#050505] text-white overflow-hidden font-sans">
      
      {/* 1. EXACT GRADIENT HUD NAVBAR */}
      <nav className="fixed top-0 left-0 w-full z-[100] flex justify-center pt-8 px-4">
        <motion.div 
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="w-full max-w-[1300px] flex items-center justify-between px-6 md:px-10 py-3 
                     /* EXACT GRADIENT: Solid white on left to deep black on right */
                     bg-gradient-to-r from-white/95 via-[#222222]/90 to-black/95
                     backdrop-blur-3xl saturate-150 border border-white/10 rounded-3xl 
                     shadow-[0_25px_60px_rgba(0,0,0,0.8)]"
        >
          {/* LOGO AREA: Perfectly visible against the solid white starting gradient */}
          <div className="flex items-center gap-2 min-w-fit">
            <div className="relative w-32 md:w-[210px]">
              <Image 
                src="/logo.png"
                alt="Virtual Station Logo"
                width={210} 
                height={52}
                className="object-contain relative z-10 w-full h-auto"
                priority
              />
            </div>
          </div>

          {/* NAV LINKS: White high-contrast text to match reference image */}
          <ul className="hidden lg:flex items-center gap-12 text-[11px] uppercase tracking-[0.35em] font-bold font-mono text-white">
            <li><a href="#home" className="hover:text-blue-400 transition-all duration-300">Home</a></li>
            <li><a href="#story" className="hover:text-blue-400 transition-all duration-300">Story</a></li>
            <li><a href="#services" className="hover:text-blue-400 transition-all duration-300">Services</a></li>
            <li><a href="#industries" className="hover:text-blue-400 transition-all duration-300">Industries</a></li>
            <li><a href="#contact" className="hover:text-blue-400 transition-all duration-300">Contact</a></li>
          </ul>

          {/* ACTION AREA: Right-aligned Phone Icon & Init Call */}
          <div className="flex items-center gap-6">
            <div className="h-10 w-[1px] bg-white/10 hidden md:block" />
            <a href="tel:+91XXXXXXXXXX" className="flex items-center gap-4 group">
              <div className="w-11 h-11 rounded-2xl bg-blue-500/5 border border-white/10 flex items-center justify-center group-hover:bg-blue-600 group-hover:border-blue-600 transition-all duration-500">
                <Phone size={18} className="text-white group-hover:scale-110 transition-transform" />
              </div>
              <span className="hidden xl:block text-[10px] font-mono tracking-[0.4em] text-white/70 group-hover:text-white transition-colors">INIT_CALL</span>
            </a>
          </div>
        </motion.div>
      </nav>

      {/* 2. BACKGROUND ANIMATION LAYER */}
      <div className="absolute inset-0 z-0">
        <motion.div 
          animate={{ scale: [1, 1.15, 1], rotate: [0, 90, 0], opacity: [0.3, 0.4, 0.3] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute -top-[10%] -left-[10%] w-[70%] h-[70%] bg-blue-600/15 blur-[120px] rounded-full"
        />
        <div className="absolute inset-0 opacity-[0.1]" 
             style={{ backgroundImage: `linear-gradient(#4f46e5 1px, transparent 1px), linear-gradient(90deg, #4f46e5 1px, transparent 1px)`, backgroundSize: '60px 60px' }} />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_#050505_80%)] z-[5]" />
      </div>

      {/* 3. HERO CONTENT */}
      <main className="relative z-20 flex flex-col items-start justify-center min-h-screen px-6 md:px-24 pt-20">
        <motion.div
          initial={{ x: -40, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="max-w-6xl"
        >
          <div className="inline-block px-5 py-1.5 mb-10 border border-blue-500/40 rounded-full bg-blue-500/5 backdrop-blur-md">
            <span className="text-[10px] uppercase tracking-[0.5em] font-black text-blue-400">
              System_Authorized // Virtual_Station_v4
            </span>
          </div>

          <h1 className="text-5xl sm:text-7xl lg:text-[8.5rem] font-black leading-[0.8] tracking-tighter mb-10 uppercase">
            AI & METAVERSE <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-white/10">
              OVERWRITING <br /> REALITY
            </span>
          </h1>
          
          <div className="flex flex-col md:flex-row items-start md:items-center gap-12 mt-16">
            <p className="text-xs md:text-sm text-gray-500 font-medium tracking-[0.25em] uppercase max-w-xl leading-relaxed border-l-2 border-blue-600 pl-8">
              Forging ruthless AR, VR, and AI ecosystems to strip away decay and force a new Metaverse dominance.
            </p>
            
            <button className="group px-12 py-6 bg-white text-black font-black uppercase text-[11px] tracking-[0.3em] rounded-2xl hover:bg-blue-600 hover:text-white transition-all duration-500 shadow-2xl">
              Launch_Interface
            </button>
          </div>
        </motion.div>
      </main>

      {/* 4. SYSTEM TELEMETRY */}
      <div className="absolute bottom-12 right-12 hidden lg:block opacity-30 z-20">
        <div className="font-mono text-[9px] text-blue-400 space-y-2 text-right tracking-widest">
          <p>ENGINE: MERN_STACK_v4</p>
          <p>LOCAL_NODE: LUDHIANA_01</p>
          <p className="animate-pulse text-white uppercase">● Status: Optimal</p>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;