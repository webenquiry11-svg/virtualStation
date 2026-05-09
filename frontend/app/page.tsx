import React from 'react';
import HeroSection from '../components/sections/HeroSection';
import AboutSection from '../components/sections/About/page';
import ServiceSection from '../components/sections/Service/page';
import WhyChooseSection from '../components/sections/WhyChoose/page';
import ContactSection from '../components/sections/Contacct/page';
import Footer from '../components/sections/Footer/page';

const page = () => {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <ServiceSection />
      <WhyChooseSection />
      <ContactSection />
      <Footer />
    </main>
  );
}

export default page;
