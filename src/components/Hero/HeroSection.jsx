import React from 'react';
import './HeroSection.css';

export default function HeroSection({ onExplore }) {
  const handleScrollClick = () => {
    if (onExplore) {
      onExplore();
    } else {
      const nextSection = document.getElementById('ecosystem') || document.getElementById('companies') || document.getElementById('deepdive');
      if (nextSection) {
        nextSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <section className="hero-section" id="hero">
      <div className="hero-bg-anim"></div>
      <div className="container hero-container">
        {/* Official Brand Emblem / Logo Image */}
        <div className="hero-emblem-wrap">
          <img
            src="./hogc-logo.jpg"
            alt="House of Giovanni Corsi - Official Logo"
            className="hero-emblem-img"
          />
        </div>

        {/* Small Sharp House Tag */}
        <div className="hero-label font-telemetry">
          <span>HOUSE OF GIOVANNI CORSI · SOVEREIGN ECOSYSTEM</span>
        </div>

        {/* Main Headline with Authentic Cormorant Garamond */}
        <h1 className="hero-title font-serif">
          HOGC UNIVERSE
        </h1>

        {/* Primary Sharp Quote */}
        <blockquote className="hero-quote font-serif">
          “Built as individual worlds. Connected as one universe.”
        </blockquote>

        {/* Sharp, Concise Editorial Statement */}
        <p className="hero-statement">
          A curated ecosystem uniting specialized enterprises across Technology, Talent, Brand Strategy, and Intelligent Mobility under one sovereign standard.
        </p>

        {/* Minimalist Telemetry Indicators */}
        <div className="hero-telemetry-row font-telemetry">
          <div className="hero-telemetry-item">
            <span className="telemetry-dot" />
            <span>GC TECH</span>
          </div>
          <div className="hero-telemetry-item">
            <span className="telemetry-dot" />
            <span>SAPIENSYNC</span>
          </div>
          <div className="hero-telemetry-item">
            <span className="telemetry-dot" />
            <span>GC MARKETING</span>
          </div>
          <div className="hero-telemetry-item">
            <span className="telemetry-dot" />
            <span>AUTOTOWN</span>
          </div>
        </div>

        {/* Scroll Trigger Animation (Replaces Old Action Buttons) */}
        <div 
          className="hero-scroll-trigger"
          onClick={handleScrollClick}
          role="button"
          tabIndex={0}
          aria-label="Scroll to discover the ecosystem"
        >
          <div className="scroll-track">
            <div className="scroll-indicator-pip" />
          </div>
          <span className="scroll-trigger-label font-telemetry">
            SCROLL TO DISCOVER
          </span>
        </div>
      </div>
    </section>
  );
}
