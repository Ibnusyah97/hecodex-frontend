import React from 'react';
import AboutSection from '../components/AboutSection';
import ContactSection from '../components/contactSection/ContactSection';
import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';
import Header from '../components/Header';
import NewsletterSection from '../components/NewsletterSection';
import ServicesSection from '../components/services/ServicesSection';
import ToolSection from '../components/tools/ToolSection';

function LandingPage() {
  return (
    <>
      <Header />
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <ToolSection />
      <NewsletterSection />
      <ContactSection />
      <Footer />
    </>
  );
}

export default LandingPage;
