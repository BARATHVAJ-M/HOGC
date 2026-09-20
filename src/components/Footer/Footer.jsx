import React from 'react';
import { ArrowUp, Mail, Globe, ExternalLink } from 'lucide-react';
import { COMPANIES, HOGC_CORE } from '../../data/ecosystemData';
import './Footer.css';

export default function Footer({ onNavigate }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const allWorlds = [
    {
      id: HOGC_CORE.id,
      name: HOGC_CORE.name,
      category: "Sovereign Holding & Foundation",
      externalUrl: '/',
      isCore: true
    },
    ...COMPANIES
  ];

  return (
    <footer className="footer-root">
      <div className="container footer-container">
        <div className="footer-top-row">
          {/* Brand Block with Official Logo Image */}
          <div className="footer-brand-block">
            <div className="footer-logo">
              <img
                src="./hogc-logo.jpg"
                alt="House of Giovanni Corsi"
                className="footer-logo-img"
              />
              <div className="footer-logo-titles">
                <span className="footer-logo-house font-serif">HOGC</span>
                <span className="footer-logo-sub font-telemetry">HOUSE OF GIOVANNI CORSI</span>
              </div>
            </div>
            <blockquote className="footer-motto font-serif italic text-gold">
              “Built as individual worlds. Connected as one universe.”
            </blockquote>
            <div className="footer-hq font-telemetry">
              <Globe size={13} className="text-gold" />
              <span>HEADQUARTERS: {HOGC_CORE.headquarters.toUpperCase()} · GLOBAL OPERATIONS</span>
            </div>
          </div>

          {/* Action & Return to Top */}
          <div className="footer-action-block">
            <a href="mailto:contact@hogc.in" className="footer-email-link font-telemetry">
              <Mail size={13} className="text-gold" />
              <span>contact@hogc.in</span>
            </a>

            <button className="footer-apex-btn font-telemetry" onClick={scrollToTop} aria-label="Return to top">
              <span>RETURN TO TOP</span>
              <ArrowUp size={13} />
            </button>
          </div>

        </div>

        {/* Operating Worlds Strip - Full Width Horizontal Row */}
        <div className="footer-worlds-block">
          <span className="footer-block-label font-telemetry">THE SOVEREIGN WORLDS</span>
          <div className="footer-worlds-list">
            {allWorlds.map((w) => (
              <a
                key={w.id}
                href={w.externalUrl !== '/' ? w.externalUrl : '#hero'}
                target={w.externalUrl !== '/' ? '_blank' : '_self'}
                rel="noopener noreferrer"
                className="footer-world-chip font-telemetry"
              >
                <span className="chip-dot" />
                <span className="chip-name">{w.name}</span>
                {w.externalUrl !== '/' && <ExternalLink size={11} className="chip-icon" />}
              </a>
            ))}
          </div>
        </div>

        {/* Bottom Legal / Copyright */}
        <div className="footer-bottom-row font-telemetry">
          <p>© {new Date().getFullYear()} HOGC UNIVERSE · HOUSE OF GIOVANNI CORSI. ALL RIGHTS RESERVED.</p>
          <div className="footer-bottom-meta">
            <span>SOVEREIGN ENTERPRISE PLATFORM</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
