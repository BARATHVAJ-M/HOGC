import React, { useState } from 'react';
import { 
  ArrowUpRight, ShieldCheck, 
  Cpu, Users, Megaphone, Car, Layers 
} from 'lucide-react';
import { HOGC_CORE, COMPANIES } from '../../data/ecosystemData';
import './PlanetDeepDive.css';

export default function PlanetDeepDive({ onSelectCompany }) {
  const [hoveredService, setHoveredService] = useState(null);

  const worlds = [
    {
      ...HOGC_CORE,
      isCore: true,
      category: "Venture Governance & Capital Architecture",
      pillar: "00 / FOUNDATION",
      icon: ShieldCheck,
      externalUrl: "/",
    },
    ...COMPANIES.map((c) => {
      let icon = Cpu;
      let pillar = "01 / TECHNOLOGY";

      if (c.id === 'sapiensync') {
        icon = Users;
        pillar = "02 / TALENT";
      } else if (c.id === 'gc-marketing') {
        icon = Megaphone;
        pillar = "03 / BRAND";
      } else if (c.id === 'autotown') {
        icon = Car;
        pillar = "04 / MOBILITY";
      }

      return { ...c, icon, pillar };
    })
  ];

  return (
    <section className="section planet-deepdive-section" id="companies">
      <div className="container">
        {/* Section Header */}
        <div className="deepdive-header">
          <div className="section-badge font-telemetry">
            <span className="section-badge-dot" />
            <span>SUBSIDIARY DIRECTORY · COMMERCIAL MANDATES</span>
          </div>
          <h2 className="deepdive-title font-serif">
            The Enterprise Portfolio
          </h2>
          <p className="deepdive-subtitle font-serif">
            "Each entity operates as an autonomous market leader in its vertical, reinforced by the capital, governance, and shared intelligence of HOGC."
          </p>
        </div>
      </div>

      {/* Sequential List of Entities (Full Bleed) */}
      <div className="deepdive-list">
        {worlds.map((world) => {
            const IconComponent = world.icon || Layers;

            return (
              <article
                key={world.id}
                id={`deepdive-${world.id}`}
                className="deepdive-card"
              >
                <div className="deepdive-card-inner">
                  <div className="deepdive-media-col">
                    <div className="deepdive-image-frame">
                      <img
                        src={world.realImage || world.texture}
                        alt={`${world.name} space capture`}
                        className="deepdive-space-img"
                      />
                      <div className="deepdive-media-badge font-telemetry">
                        <span>{world.pillar}</span>
                      </div>
                    </div>
                  </div>

                  {/* Right Column: Sharp Editorial Summary & Deliverables */}
                  <div className="deepdive-content-col">
                    <div className="deepdive-top-meta">
                      <div className="deepdive-category-tag font-telemetry">
                        <IconComponent size={13} className="text-gold" />
                        <span>{world.category}</span>
                      </div>
                    </div>

                    <h3 className="deepdive-world-name font-serif">{world.name}</h3>
                    
                    <blockquote className="deepdive-sharp-quote font-serif italic text-gold">
                      "{world.tagline}"
                    </blockquote>

                    <p className="deepdive-description">
                      {world.description}
                    </p>

                    {/* Core Deliverables as Horizontal Chips */}
                    <div className="deepdive-deliverables">
                      <div className="deliverables-chips">
                        {world.keyDeliverables.map((item, idx) => (
                          <span key={idx} className="deliverable-chip font-telemetry">
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Interactive Commercial Services Matrix with Hover Mini-Box */}
                    {world.services && world.services.length > 0 && (
                      <div className="deepdive-services-section">
                        <div className="services-section-heading font-telemetry">
                          <span className="heading-pip text-gold">✦</span>
                          <span>COMMERCIAL SERVICES & SPECIALIZATIONS (HOVER TO EXPLORE)</span>
                        </div>
                        <div className="services-interactive-grid">
                          {world.services.map((service, sIdx) => {
                            const isHovered = hoveredService === `${world.id}-${sIdx}`;
                            return (
                              <div
                                key={sIdx}
                                className={`service-interactive-chip font-telemetry ${isHovered ? 'active' : ''}`}
                                onMouseEnter={() => setHoveredService(`${world.id}-${sIdx}`)}
                                onMouseLeave={() => setHoveredService(null)}
                                tabIndex={0}
                              >
                                <span className="chip-indicator-dot" />
                                <span className="chip-title">{service.title}</span>
                                <span className="chip-arrow text-gold">↗</span>

                                {/* Floating Mini-Box Popover */}
                                {isHovered && (
                                  <div className="service-popover-card">
                                    <div className="popover-badge-row font-telemetry">
                                      <span className="popover-entity">{world.shortName || world.name}</span>
                                      {service.impact && (
                                        <span className="popover-impact-badge">{service.impact}</span>
                                      )}
                                    </div>
                                    <h4 className="popover-title font-serif">{service.title}</h4>
                                    {service.tagline && (
                                      <p className="popover-tagline font-serif italic text-gold">“{service.tagline}”</p>
                                    )}
                                    <p className="popover-desc">{service.desc}</p>
                                    {service.deliverable && (
                                      <div className="popover-deliverable-wrap">
                                        <span className="popover-del-label font-telemetry">TANGIBLE DELIVERABLE:</span>
                                        <p className="popover-del-text">{service.deliverable}</p>
                                      </div>
                                    )}
                                  </div>
                                )}
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    )}

                    {/* Action Links */}
                    <div className="deepdive-actions-row">
                      {world.externalUrl && world.externalUrl !== '/' ? (
                        <a
                          href={world.externalUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="deepdive-btn-primary font-telemetry"
                        >
                          <span>VISIT {world.name.toUpperCase()}</span>
                          <ArrowUpRight size={13} />
                        </a>
                      ) : (
                        <button
                          className="deepdive-btn-primary font-telemetry"
                          onClick={() => {
                            const el = document.getElementById('contact');
                            if (el) el.scrollIntoView({ behavior: 'smooth' });
                          }}
                        >
                          <span>ENGAGE FOUNDATION</span>
                          <ArrowUpRight size={13} />
                        </button>
                      )}

                      <button
                        className="deepdive-btn-secondary font-telemetry"
                        onClick={() => {
                          const el = document.getElementById('contact');
                          if (el) el.scrollIntoView({ behavior: 'smooth' });
                        }}
                      >
                        <span>INQUIRE WITH CORE</span>
                      </button>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
    </section>
  );
}
