"use client";
import React, { useRef } from 'react';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import { Shield, Zap, Music, Cloud, Terminal } from 'lucide-react';

const WhyChooseSection = () => {
  const containerRef = useRef(null);
  
  // Refined offset: "start center" means animation starts when the section top hits the screen center
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"] 
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 50, // Slower stiffness for more "weight"
    damping: 20,
    restDelta: 0.001
  });

  // Precise mapping to ensure it stays within the line boundaries
  const vehicleY = useTransform(smoothProgress, [0, 1], ["0%", "100%"]);

  const steps = [
    {
      title: "SPATIAL VELOCITY",
      subtitle: "The XR Core",
      desc: "Optimized engines designed for high-frequency data handling, ensuring seamless immersion in digital environments.",
      icon: <Terminal size={20} />,
      stat: "99.9% Uptime",
      iconClass: "text-[#005296]",
      subtitleClass: "text-[#005296]"
    },
    {
      title: "CLOUD ORCHESTRATION",
      subtitle: "The DevOps Layer",
      desc: "Deploying secure, containerized environments for low-latency global delivery across edge nodes.",
      icon: <Cloud size={20} />,
      stat: "Sub-20ms Ping",
      iconClass: "text-emerald-400",
      subtitleClass: "text-emerald-500"
    },
    {
      title: "SONIC SPATIALITY",
      subtitle: "The Creative Soul",
      desc: "Integrating immersive audio engines where soulful musical performance fused with 360° soundscapes.",
      icon: <Music size={20} />,
      stat: "Spatial Audio",
      iconClass: "text-pink-400",
      subtitleClass: "text-pink-500"
    },
    {
      title: "SECURITY & SCALE",
      subtitle: "The Enterprise Shield",
      desc: "Professional-grade encryption and scalable routing implemented across global employment networks.",
      icon: <Shield size={20} />,
      stat: "AES-256 Auth",
      iconClass: "text-purple-400",
      subtitleClass: "text-purple-500"
    }
  ];

  return (
    <section id="industries" ref={containerRef} className="relative w-full bg-[#050505] py-16 md:py-20 px-4 md:px-24 overflow-hidden">
      
      <div className="max-w-7xl mx-auto mb-16 md:mb-24">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="flex items-center gap-4 text-[#005296] font-mono text-[10px] tracking-[0.5em] uppercase mb-4"
        >
          <span className="w-12 h-[1px] bg-[#005296]/50"></span>
          System_Evolution_Matrix
        </motion.div>
        <h2 className="text-4xl md:text-6xl lg:text-8xl font-black text-white tracking-tighter leading-none">
          THE <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/20">EVOLUTION.</span>
        </h2>
      </div>

      <div className="max-w-5xl mx-auto relative">
        
        {/* FIXED TRACK LOGIC */}
        <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-[1px] bg-white/10 md:-translate-x-1/2 z-0">
          {/* THE VEHICLE: Now uses a more stable container-relative position */}
          <motion.div 
            style={{ 
              top: vehicleY,
            }}
            className="absolute left-1/2 -translate-x-1/2 w-[3px] h-32 z-20"
          >
            {/* The actual visible glowing vehicle */}
            <div className="w-full h-full bg-gradient-to-b from-[#005296] via-emerald-400 to-transparent shadow-[0_0_25px_rgba(0,82,150,0.8)] rounded-full" />
            {/* The "Head" Pulse */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 bg-white rounded-full shadow-[0_0_15px_white]" />
          </motion.div>
        </div>

        {steps.map((step, i) => (
          <div 
            key={i} 
            className={`relative flex flex-col md:flex-row items-center justify-between mb-16 md:mb-20 last:mb-0 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
          >
            <motion.div 
              initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8 }}
            className="w-full md:w-[45%] group pl-16 md:pl-0"
            >
              <div className="p-8 rounded-[2rem] bg-[#0c0c0c] border border-white/5 hover:border-white/10 transition-all duration-300">
                <div className="flex items-center gap-4 mb-4">
                  <div className={`p-3 rounded-xl bg-white/5 border border-white/10 ${step.iconClass} group-hover:scale-110 transition-transform`}>
                    {step.icon}
                  </div>
                  <div>
                     <p className={`text-[9px] font-black uppercase tracking-[0.2em] ${step.subtitleClass} mb-0.5`}>{step.subtitle}</p>
                     <h3 className="text-xl font-bold text-white tracking-tight">{step.title}</h3>
                  </div>
                </div>

                <p className="text-gray-400 text-sm font-light leading-relaxed mb-6">
                  {step.desc}
                </p>

                <div className="flex items-center gap-4 pt-4 border-t border-white/5">
                   <div className="flex flex-col">
                      <span className="text-[8px] text-gray-600 uppercase font-bold tracking-widest">Protocol_Metric</span>
                      <span className="text-xs font-mono text-white tracking-tighter uppercase">{step.stat}</span>
                   </div>
                </div>
              </div>
            </motion.div>

            <div className="hidden md:block w-[45%]" />
          </div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto mt-12 flex flex-col items-center">
         <div className="h-20 w-px bg-gradient-to-b from-[#005296]/30 to-transparent" />
      </div>
    </section>
  );
};

export default WhyChooseSection;