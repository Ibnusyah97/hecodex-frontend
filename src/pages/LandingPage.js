import React from 'react';
import AboutSection from '../components/AboutSection';
import ContactSection from '../components/contactSection/ContactSection';
import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';
import Header from '../components/Header';
import ServicesSection from '../components/services/ServicesSection';
import ToolSection from '../components/tools/ToolSection';
import HecodustSection from '../components/HecodustSection';
import RoadmapSection from '../components/RoadmapSection';

function LandingPage() {
  return (
    <>
      <Header />
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <ToolSection />
      <HecodustSection />
      <RoadmapSection />
      <ContactSection />
      <Footer />
    </>
  );
}

export default LandingPage;
