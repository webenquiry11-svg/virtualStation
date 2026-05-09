"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Globe, Cpu, Zap, Activity } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="story" className="relative w-full bg-[#050505] py-16 md:py-20 px-6 md:px-24">
      
      {/* 1. SEAMLESS TRANSITION OVERLAY */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#005296]/50 to-transparent shadow-[0_0_20px_rgba(0,82,150,0.5)]" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* TOP SECTION: LARGE TYPOGRAPHY STACK */}
        <div className="flex flex-col gap-12 mb-16 md:mb-24">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="flex items-center gap-4 text-[#005296] font-mono text-[11px] tracking-[0.5em] uppercase"
          >
            <span className="w-8 h-[1px] bg-[#005296]"></span>
            Intelligence Overview
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-6xl md:text-[9rem] font-black tracking-tight leading-[0.8] text-white uppercase"
          >
            OUR <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#005296] to-[#005296]/50">
              STORY.
            </span>
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="max-w-3xl text-gray-400 text-xl md:text-2xl font-light leading-relaxed"
          >
            Virtual Station was born from a harsh reality: standard digital interfaces are dead ends. Founded in India, we engineer AI, XR, and Metaverse technologies that forces human performance past conventional boundaries.
          </motion.p>
        </div>

        {/* NARRATIVE TEXT BLOCKS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24 pt-12 border-t border-white/10">
          
          <p className="text-gray-400 text-lg md:text-xl font-light leading-relaxed">
            What started in localized game development now dictates operations across industrial facilities, high-stakes training environments, and enterprise ecosystems where real work executes. Architected in India for global deployment, Virtual Station arms operators, developers, and corporations to scale their capabilities without physical constraints.
          </p>
          
          <p className="text-gray-400 text-lg md:text-xl font-light leading-relaxed">
            Today, as a premier spatial computing developer, Virtual Station operates at the absolute intersection of human ambition and synthetic intelligence, forging immersive technology that delivers uncompromising impact where it truly matters.
          </p>
        </div>

        {/* DECORATIVE INTERACTIVE LINE */}
        <div className="mt-24 flex items-center gap-8">
            <div className="flex-1 h-px bg-gradient-to-r from-[#005296]/50 to-transparent"></div>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-white text-black text-[10px] font-black uppercase tracking-[0.3em] rounded-full shadow-[0_0_30px_rgba(255,255,255,0.2)]"
            >
              Explore Protocol
            </motion.button>
            <div className="flex-1 h-px bg-gradient-to-l from-[#005296]/50 to-transparent"></div>
        </div>
      </div>

      {/* BACKGROUND GRAPHIC: Subtle moving scanlines */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-20">
         <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:100px_100px]"></div>
      </div>
    </section>
  );
};

export default AboutSection;
