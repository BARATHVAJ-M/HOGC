import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import './Navbar.css';

export default function Navbar({ onNavigate }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Ecosystem', id: 'universe' },
    { label: 'Dossier', id: 'companies' },
    { label: 'House Story', id: 'about' },
    { label: 'Process & Portfolio', id: 'work' },
  ];

  const handleLinkClick = (id) => {
    setMobileMenuOpen(false);
    if (onNavigate) {
      onNavigate(id);
    } else {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}>
      <div className="navbar-container">
        {/* Brand Logo with Official Image */}
        <button
          className="navbar-brand"
          onClick={() => handleLinkClick('hero')}
          aria-label="House of Giovanni Corsi - Return to Top"
        >
          <img
            src="./hogc-logo.jpg"
            alt="HOGC - House of Giovanni Corsi"
            className="navbar-logo-img"
          />
          <div className="navbar-brand-text">
            <span className="navbar-brand-title font-serif">HOGC</span>
            <span className="navbar-brand-sub font-telemetry">HOUSE OF GIOVANNI CORSI</span>
          </div>
        </button>

        {/* Desktop Navigation Links */}
        <nav className="navbar-desktop-nav" aria-label="Main Navigation">
          {navItems.map((item) => (
            <button
              key={item.id}
              className="nav-link font-telemetry"
              onClick={() => handleLinkClick(item.id)}
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* CTA Contact Button */}
        <div className="navbar-actions">
          <button
            className="navbar-cta-btn font-telemetry"
            onClick={() => handleLinkClick('contact')}
          >
            <span>INQUIRE</span>
            <ArrowUpRight size={13} />
          </button>

          {/* Mobile Menu Toggle Button */}
          <button
            className="mobile-toggle-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="mobile-menu-drawer">
          <div className="mobile-nav-links">
            {navItems.map((item) => (
              <button
                key={item.id}
                className="mobile-nav-link font-telemetry"
                onClick={() => handleLinkClick(item.id)}
              >
                {item.label}
              </button>
            ))}
            <button
              className="btn btn-gold btn-sm mobile-cta-link font-telemetry"
              onClick={() => handleLinkClick('contact')}
            >
              <span>INQUIRE WITH CORE</span>
              <ArrowUpRight size={14} />
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
