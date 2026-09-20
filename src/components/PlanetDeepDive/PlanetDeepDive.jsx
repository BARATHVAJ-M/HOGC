import React from 'react';
import { 
  ArrowUpRight, CheckCircle2, ShieldCheck, 
  Cpu, Users, Megaphone, Car, Layers 
} from 'lucide-react';
import { HOGC_CORE, COMPANIES } from '../../data/ecosystemData';
import './PlanetDeepDive.css';

export default function PlanetDeepDive({ onSelectCompany }) {
  const worlds = [
    {
      ...HOGC_CORE,
      isCore: true,
      category: "Sovereign Holding & Governance",
      pillar: "00 / FOUNDATION",
      icon: ShieldCheck,
      externalUrl: "/",
      sharpQuote: "Built as individual worlds. Connected as one universe.",
      sharpStatement: "Parent foundation providing strategic direction, shared infrastructure, and sovereign quality governance.",
      deliverables: ["Strategic Governance", "Ecosystem Infrastructure", "Capital Architecture", "Cross-Entity Synergy"]
    },
    ...COMPANIES.map((c, i) => {
      let icon = Cpu;
      let pillar = "01 / TECHNOLOGY";
      let sharpQuote = "Where technology meets business evolution.";
      let sharpStatement = "Architecting zero-latency enterprise systems, autonomous AI workflows, and resilient cloud platforms.";
      let deliverables = ["Custom Web & Cloud Platforms", "Autonomous AI Workflows", "API Architecture", "DevOps & Infrastructure"];

      if (c.id === 'sapiensync') {
        icon = Users;
        pillar = "02 / TALENT";
        sharpQuote = "Powering businesses with people and infrastructure.";
        sharpStatement = "Bridging visionary enterprises with specialized global talent, managed HR pipelines, and workspace execution.";
        deliverables = ["Executive Search & Talent Sourcing", "Managed Contract Teams", "HR Operations & Payroll", "Workspace Deployment"];
      } else if (c.id === 'gc-marketing') {
        icon = Megaphone;
        pillar = "03 / BRAND";
        sharpQuote = "Where businesses become brands.";
        sharpStatement = "Crafting timeless corporate identities, performance growth engines, and high-impact digital narratives.";
        deliverables = ["Brand Strategy & Identity", "Performance Marketing", "Content & Digital Storytelling", "Customer Acquisition"];
      } else if (c.id === 'autotown') {
        icon = Car;
        pillar = "04 / MOBILITY";
        sharpQuote = "Architects of intelligent mobility.";
        sharpStatement = "Engineering connected vehicle services, intelligent EV infrastructure, and next-generation mobility networks.";
        deliverables = ["EV Charging Infrastructure", "Smart Fleet Management", "Digital Vehicle Care", "Access & Mobility Systems"];
      }

      return {
        ...c,
        icon,
        pillar,
        sharpQuote,
        sharpStatement,
        deliverables
      };
    })
  ];

  return (
    <section className="section planet-deepdive-section" id="companies">
      <div className="container">
        {/* Section Header */}
        <div className="deepdive-header">
          <div className="section-badge font-telemetry">
            <span className="section-badge-dot" />
            <span>THE ENTERPRISE DOSSIER</span>
          </div>
          <h2 className="deepdive-title font-serif">
            The Five Sovereign Worlds
          </h2>
          <p className="deepdive-subtitle font-serif">
            “Each entity is an autonomous authority in its discipline, united under the House of Giovanni Corsi.”
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

                  {/* Right Column: Sharp Editorial Summary & Capabilities */}
                  <div className="deepdive-content-col">
                    <div className="deepdive-top-meta">
                      <div className="deepdive-category-tag font-telemetry">
                        <IconComponent size={13} className="text-gold" />
                        <span>{world.category}</span>
                      </div>
                    </div>

                    <h3 className="deepdive-world-name font-serif">{world.name}</h3>
                    
                    <blockquote className="deepdive-sharp-quote font-serif italic text-gold">
                      “{world.sharpQuote}”
                    </blockquote>

                    <p className="deepdive-sharp-statement">
                      {world.sharpStatement}
                    </p>

                    {/* Core Deliverables */}
                    <div className="deepdive-deliverables">
                      <span className="deliverables-heading font-telemetry">CORE CAPABILITIES</span>
                      <div className="deliverables-grid">
                        {world.deliverables.map((item, idx) => (
                          <div key={idx} className="deliverable-item">
                            <CheckCircle2 size={13} className="text-gold" />
                            <span className="font-telemetry">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>

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
