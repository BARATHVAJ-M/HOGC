import React, { useState, useEffect, useCallback } from 'react';
import Navbar from './components/Navbar/Navbar';
import ScrollProgress from './components/ScrollProgress/ScrollProgress';
import HeroSection from './components/Hero/HeroSection';
import EnterUniverseSection from './components/EnterUniverse/EnterUniverseSection';
import PlanetDeepDive from './components/PlanetDeepDive/PlanetDeepDive';
import ServicesSection from './components/ServicesOverview/ServicesSection';
import AboutSection from './components/About/AboutSection';
import ProcessPortfolioSection from './components/ProcessPortfolio/ProcessPortfolioSection';
import ContactSection from './components/Contact/ContactSection';
import PlanetDetailModal from './components/PlanetDetailModal/PlanetDetailModal';
import Footer from './components/Footer/Footer';
import ProgressiveLoader from './components/Loader/ProgressiveLoader';

export default function App() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState('hero');
  const [activePlanet, setActivePlanet] = useState(null);
  const [contactPreselected, setContactPreselected] = useState(null);

  // Monitor smooth scroll position & active chapter
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? Math.min(Math.max(scrollY / docHeight, 0), 1) : 0;
      setScrollProgress(progress);

      const sectionIds = ['hero', 'universe', 'companies', 'services', 'about', 'work', 'contact'];
      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const el = document.getElementById(sectionIds[i]);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= window.innerHeight * 0.45) {
            setActiveSection(sectionIds[i]);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigate = useCallback((id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  const handleSelectPlanet = useCallback((company) => {
    setActivePlanet(company);
  }, []);

  const handleClosePlanetModal = useCallback(() => {
    setActivePlanet(null);
  }, []);

  const handleContactCompany = useCallback((companyId) => {
    setActivePlanet(null);
    setContactPreselected(companyId);
    setTimeout(() => {
      const contactEl = document.getElementById('contact');
      if (contactEl) {
        contactEl.scrollIntoView({ behavior: 'smooth' });
      }
    }, 150);
  }, []);

  return (
    <div className="hogc-universe-app">
      {/* Short Luxury Progressive Loader */}
      <ProgressiveLoader />

      {/* Persistent Glass Navbar with Official Logo Image */}
      <Navbar onNavigate={handleNavigate} />

      {/* Subtle Right-Hand Vertical Scroll Indicator */}
      <ScrollProgress
        activeSection={activeSection}
        onNavigate={handleNavigate}
      />

      {/* Accessible, Luxury Editorial Content Layer */}
      <main className="content-layer">
        {/* Section 01: Hero with Official Emblem & Minimalist Scroll Trigger */}
        <HeroSection onExplore={() => handleNavigate('universe')} />

        {/* Section 02: Enter the HOGC Universe */}
        <EnterUniverseSection />

        {/* Section 03: Sequential Enterprise Dossier & Deliverables */}
        <PlanetDeepDive onSelectCompany={handleSelectPlanet} />

        {/* Section 04: Dedicated Capabilities Matrix */}
        <ServicesSection onSelectCompany={handleSelectPlanet} />

        {/* Section 05: About HOGC & The Founding House */}
        <AboutSection />

        {/* Unified Section 06: Process & Portfolio */}
        <ProcessPortfolioSection />
      </main>

      {/* Unified Background Wrapper for Contact and Footer */}
      <div className="contact-footer-wrapper">
        {/* Section 07: Direct Engagement & Inquiry */}
        <ContactSection preselectedInterest={contactPreselected} />

      {/* Reusable Company Detail Modal */}
      {activePlanet && (
        <PlanetDetailModal
          planet={activePlanet}
          onClose={handleClosePlanetModal}
          onContactCompany={handleContactCompany}
        />
      )}

      {/* Ecosystem Footer with Official Logo Image */}
        <Footer onNavigate={handleNavigate} />
      </div>
    </div>
  );
}
