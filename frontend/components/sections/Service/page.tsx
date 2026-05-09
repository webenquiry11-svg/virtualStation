"use client";
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Autoplay } from 'swiper/modules';
import { motion } from 'framer-motion';
import { Box, Layers, Cpu, Smartphone, Gamepad2, Sparkles, ChevronRight, ChevronLeft } from 'lucide-react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

const ServicesCarousel = () => {
  const xrServices = [
    {
      title: "VR DEVELOPMENT",
      category: "IMMERSIVE TRAINING",
      icon: <Box size={32} />,
      description: "Engineered for immersive training and enterprise collaboration. We build risk-free virtual environments for mastering complex procedures safely.",
      tech: ["Virtual Reality", "Simulation"],
      color: "from-blue-500/40"
    },
    {
      title: "AR DEVELOPMENT",
      category: "SPATIAL OVERLAYS",
      icon: <Smartphone size={32} />,
      description: "Real-world enhancement utilizing precision digital twins. Interactive solutions that transform how businesses visualize data and surroundings.",
      tech: ["Augmented Reality", "Digital Twins"],
      color: "from-emerald-500/40"
    },
    {
      title: "XR DEVELOPMENT",
      category: "SPATIAL COMPUTING",
      icon: <Layers size={32} />,
      description: "Intelligent spatial solutions merging physical and digital realities through advanced tracking and spatial computing architectures.",
      tech: ["Mixed Reality", "Spatial Tracking"],
      color: "from-pink-500/40"
    },
    {
      title: "AI & METAVERSE",
      category: "DIGITAL ECOSYSTEMS",
      icon: <Cpu size={32} />,
      description: "Context-aware AI embedded within persistent ecosystems. Architecting secure metaverse platforms for real-time collaboration and commerce.",
      tech: ["Generative AI", "Metaverse"],
      color: "from-purple-500/40"
    },
    {
      title: "GAME DEVELOPMENT",
      category: "INTERACTIVE DESIGN",
      icon: <Gamepad2 size={32} />,
      description: "Advanced gamification mechanics paired with high-fidelity design. Performance-driven modules for corporate training and entertainment.",
      tech: ["Gamification", "3D Engines"],
      color: "from-yellow-500/40"
    }
  ];

  return (
    <section id="services" className="relative w-full bg-[#050505] py-32 px-6 overflow-hidden">
      
      {/* 1. AMBIENT BACKGROUND GLOW */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] bg-blue-600/5 blur-[180px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* HEADER */}
        <div className="text-center mb-20 space-y-4">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="flex items-center justify-center gap-3 text-blue-500 font-mono text-[10px] tracking-[0.5em] uppercase"
          >
            <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
            Core_Service_Buffer
          </motion.div>
          <h2 className="text-6xl md:text-8xl font-black text-white tracking-tighter uppercase leading-none">
            OUR <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">SERVICES.</span>
          </h2>
        </div>

        {/* 2. SWIPER CAROUSEL */}
        <div className="relative px-4 md:px-0">
          <Swiper
            effect={'coverflow'}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={'auto'}
            loop={true}
            autoplay={{
                delay: 4000,
                disableOnInteraction: false,
            }}
            coverflowEffect={{
              rotate: 15,
              stretch: 0,
              depth: 300,
              modifier: 1,
              slideShadows: false,
            }}
            pagination={{ clickable: true }}
            modules={[EffectCoverflow, Pagination, Autoplay]}
            className="w-full py-20"
            breakpoints={{
                320: { slidesPerView: 1 },
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
            }}
          >
            {xrServices.map((service, i) => (
              <SwiperSlide key={i} className="max-w-[450px]">
                <div className="group relative aspect-[4/5] md:aspect-[3/4] rounded-[3.5rem] bg-[#0c0c0c] border border-white/10 overflow-hidden p-10 flex flex-col justify-between transition-all duration-500 hover:border-blue-500/50 shadow-2xl">
                  
                  {/* Glass Top Gradient */}
                  <div className={`absolute -top-24 -right-24 w-80 h-80 bg-gradient-to-br ${service.color} to-transparent blur-[80px] opacity-20 group-hover:opacity-60 transition-opacity duration-700`} />
                  
                  <div className="relative z-10">
                    <div className="flex justify-between items-start mb-10">
                      <div className="p-5 rounded-[2rem] bg-white/5 border border-white/10 text-white group-hover:text-blue-400 transition-colors">
                        {service.icon}
                      </div>
                      <span className="text-[10px] font-mono text-gray-500 uppercase tracking-widest bg-white/5 px-4 py-2 rounded-full border border-white/10">
                        {service.category}
                      </span>
                    </div>
                    
                    <h3 className="text-3xl font-bold text-white mb-6 tracking-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-blue-400 transition-all">
                      {service.title}
                    </h3>
                    <p className="text-gray-400 text-lg font-light leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  {/* Footer Stats */}
                  <div className="relative z-10 pt-8 border-t border-white/5 flex items-center justify-between">
                    <div className="flex flex-wrap gap-2">
                        {service.tech.map((t, idx) => (
                            <span key={idx} className="text-[9px] font-bold text-blue-500/80 uppercase tracking-widest flex items-center gap-1">
                                <Sparkles size={10} /> {t}
                            </span>
                        ))}
                    </div>
                    <div className="text-white/20 group-hover:text-blue-500 transition-colors">
                        <ChevronRight size={24} />
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* 3. CAROUSEL INDICATOR FOOTER */}
        <div className="mt-10 flex justify-center gap-8 opacity-20">
             <div className="flex items-center gap-2 font-mono text-[9px] text-gray-500 uppercase tracking-[0.4em]">
                <ChevronLeft size={12} /> Swipe_to_Explore <ChevronRight size={12} />
             </div>
        </div>
      </div>

      <style jsx global>{`
        .swiper-pagination-bullet {
          background: rgba(255, 255, 255, 0.2) !important;
          opacity: 1 !important;
        }
        .swiper-pagination-bullet-active {
          background: #3b82f6 !important;
          width: 24px !important;
          border-radius: 4px !important;
          transition: all 0.3s ease !important;
        }
      `}</style>
    </section>
  );
};

export default ServicesCarousel;