import React from 'react';
import { ShieldCheck, Target, Eye, Globe } from 'lucide-react';
import './AboutSection.css';

export default function AboutSection() {
  const principles = [
    {
      num: "01",
      title: "UNCOMPROMISING CRAFT",
      statement: "We reject templated mediocrity. Every system, brand, and placement is engineered for lasting market leadership."
    },
    {
      num: "02",
      title: "AUTONOMOUS SOVEREIGNTY",
      statement: "Each entity retains vertical specialization and operational freedom, avoiding bureaucratic compromise."
    },
    {
      num: "03",
      title: "COMPOUNDING SYNERGY",
      statement: "When technology, talent, brand, and mobility synchronize, clients achieve velocity unattainable through fragmented vendors."
    }
  ];

  return (
    <section className="section about-section" id="about">
      <div className="container">
        {/* Section Header */}
        <div className="about-header">
          <div className="section-badge font-telemetry">
            <span className="section-badge-dot" />
            <span>THE FOUNDING HOUSE</span>
          </div>
          <h2 className="about-title font-serif">House of Giovanni Corsi</h2>
          <blockquote className="about-quote font-serif italic text-gold">
            “A curated ecosystem connecting visionary ideas with sovereign execution.”
          </blockquote>
        </div>

        {/* Vision & Mission Split Card */}
        <div className="vision-mission-grid">
          <div className="card mission-card">
            <div className="vm-badge font-telemetry">THE PHILOSOPHY</div>
            <h3 className="font-serif">Enduring Enterprise Value</h3>
            <p className="about-lead-quote font-serif italic">
              “Built as individual worlds. Connected as one universe.”
            </p>
            <p className="about-body">
              HOGC Enterprises is the founding pillar and governing core. We provide long-term capital stability, shared executive intelligence, and enterprise-grade infrastructure across every subsidiary.
            </p>
          </div>

          <div className="card vision-card">
            <div className="vm-badge font-telemetry">THE MANDATE</div>
            <h3 className="font-serif">The Sovereign Standard</h3>
            <p className="about-body">
              To eliminate vendor fragmentation by delivering integrated technology, executive talent, brand growth, and intelligent mobility through a unified, accountable standard of excellence.
            </p>
            <div className="hq-tag font-telemetry">
              <Globe size={13} className="text-gold" />
              <span>HEADQUARTERS: INDIA · GLOBAL EXECUTION</span>
            </div>
          </div>
        </div>

        {/* Three Core Principles */}
        <div className="about-principles-row">
          {principles.map((p, idx) => (
            <div key={idx} className="principle-box">
              <span className="principle-num font-serif text-gold">{p.num}</span>
              <h4 className="principle-title font-telemetry">{p.title}</h4>
              <p className="principle-statement">{p.statement}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
