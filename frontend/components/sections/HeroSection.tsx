"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Cpu } from 'lucide-react';

const HeroSection = () => {
  return (
    <div id="home" className="relative min-h-screen w-full bg-[#050505] text-white overflow-hidden font-sans">
      
      {/* 1. FIXED NAVBAR */}
      <nav className="fixed top-0 left-0 w-full z-[100] flex justify-center pt-6 px-4">
        <motion.div 
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full max-w-[1200px] flex items-center justify-between px-6 py-3 bg-white/5 backdrop-blur-2xl border border-white/10 rounded-full shadow-[0_8px_32px_0_rgba(0,0,0,0.8)]"
        >
          <div className="flex items-center gap-2 min-w-fit">
            <div className="p-1.5 bg-gradient-to-tr from-blue-600 to-emerald-400 rounded-lg">
              <Cpu size={18} className="text-white" />
            </div>
            <span className="text-lg font-bold tracking-tighter uppercase whitespace-nowrap">
              Virtual <span className="text-blue-400 font-light">Station</span>
            </span>
          </div>

          <ul className="hidden lg:flex items-center gap-8 text-[11px] uppercase tracking-[0.2em] font-bold text-gray-300">
            <li><a href="#home" className="hover:text-blue-400 transition-all">Home</a></li>
            <li><a href="#story" className="hover:text-blue-400 transition-all">Our Story</a></li>
            <li><a href="#services" className="hover:text-blue-400 transition-all">Services</a></li>
            <li><a href="#industries" className="hover:text-blue-400 transition-all">Industries</a></li>
            <li><a href="#contact" className="hover:text-blue-400 transition-all">Contact</a></li>
          </ul>

          <div className="flex items-center gap-5">
            <a href="#contact" aria-label="Contact Us">
              <Phone size={18} className="text-gray-400 hover:text-white cursor-pointer transition-colors" />
            </a>
          </div>
        </motion.div>
      </nav>

      {/* 2. CUSTOMIZED BACKGROUND LAYER */}
      <div className="absolute inset-0 z-0">
        {/* Animated Mesh Gradients */}
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute -top-[10%] -left-[10%] w-[70%] h-[70%] bg-blue-600/20 blur-[120px] rounded-full"
        />
        <motion.div 
          animate={{ 
            scale: [1, 1.3, 1],
            rotate: [0, -120, 0],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute top-[20%] -right-[10%] w-[60%] h-[60%] bg-emerald-500/10 blur-[100px] rounded-full"
        />

        {/* Technical Grid Overlay */}
        <div 
          className="absolute inset-0 opacity-[0.15]" 
          style={{ 
            backgroundImage: `linear-gradient(#4f46e5 1px, transparent 1px), linear-gradient(90deg, #4f46e5 1px, transparent 1px)`,
            backgroundSize: '60px 60px'
          }}
        ></div>

        {/* Scanline Animation */}
        <motion.div 
          animate={{ y: ['0%', '100%'] }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 w-full h-[2px] bg-gradient-to-r from-transparent via-blue-500/20 to-transparent z-10"
        />

        {/* Radial Darkening Overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_#050505_80%)] z-[5]"></div>
      </div>

      {/* 3. HERO CONTENT */}
      <main className="relative z-20 flex flex-col items-start justify-center min-h-screen px-6 md:px-24 pt-20">
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="max-w-4xl"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-block px-3 py-1 mb-6 border border-blue-500/30 rounded-full bg-blue-500/10"
          >
            <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-blue-400">
              Virtual Station - AR, VR, AI, XR
            </span>
          </motion.div>

          <h1 className="text-5xl md:text-[6.5rem] lg:text-[7rem] font-black leading-[0.85] tracking-tighter mb-4 uppercase">
            AI & Metaverse <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-blue-500/50">
              Overwriting Reality
            </span>
          </h1>
          
          <div className="flex items-center gap-6 mt-8">
            <div className="h-[1px] w-24 bg-gradient-to-r from-blue-500 to-transparent"></div>
            <p className="text-sm md:text-base text-gray-400 font-light tracking-[0.1em] uppercase max-w-2xl">
              We forge ruthless AR, VR, and AI ecosystems to strip away the decay and force a new Metaverse dominance.
            </p>
          </div>

          <div className="mt-12 flex gap-4">
            <button className="px-10 py-4 bg-white text-black font-bold uppercase text-xs tracking-widest rounded-full hover:bg-blue-500 hover:text-white transition-all duration-500 shadow-xl shadow-white/5">
              Explore Product
            </button>
            <button className="px-10 py-4 bg-white/5 border border-white/10 text-white font-bold uppercase text-xs tracking-widest rounded-full hover:bg-white/10 transition-all">
              Watch Vision
            </button>
          </div>
        </motion.div>
      </main>

      {/* 4. HUD / DECORATIVE ELEMENTS */}
      <div className="absolute bottom-10 right-10 hidden lg:block opacity-20 z-20">
        <div className="font-mono text-[10px] text-blue-400 space-y-1">
          <p>LATENCY: 0.002ms</p>
          <p>STABILITY: 99.9%</p>
          <p>XR_ENGINE_ACTIVE</p>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;