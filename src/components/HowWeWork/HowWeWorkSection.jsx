import React from 'react';
import './HowWeWorkSection.css';

const STEPS = [
  {
    step: "01",
    title: "UNDERSTAND",
    quote: "Institutional Discovery",
    desc: "Rigorous diagnostic of enterprise requirements, technical constraints, and strategic growth horizons."
  },
  {
    step: "02",
    title: "STRATEGIZE",
    quote: "Architecture & Talent Blueprint",
    desc: "Formulating synchronized cross-company solutions uniting technology, specialized teams, and brand strategy."
  },
  {
    step: "03",
    title: "BUILD",
    quote: "Precision Engineering",
    desc: "Rapid deployment of resilient software systems, executive recruitment pipelines, and brand assets."
  },
  {
    step: "04",
    title: "LAUNCH",
    quote: "Zero-Defect Deployment",
    desc: "Orchestrated market rollouts backed by real-time telemetry, continuous validation, and SLA enforcement."
  },
  {
    step: "05",
    title: "COMPOUND",
    quote: "Sovereign Market Scale",
    desc: "Ongoing capability expansion, workflow optimization, and long-term enterprise value compounding."
  }
];

export default function HowWeWorkSection() {
  return (
    <section className="section how-we-work-section" id="process">
      <div className="container">
        {/* Header */}
        <div className="process-header">
          <div className="section-badge font-telemetry">
            <span className="section-badge-dot" />
            <span>OPERATIONAL FRAMEWORK</span>
          </div>
          <h2 className="process-title font-serif">The Five-Stage Methodology</h2>
          <p className="process-subtitle font-serif">
            “Synchronizing multi-company capabilities into a single standard of delivery.”
          </p>
        </div>

        {/* 5-Step Process Timeline Cards */}
        <div className="process-steps-grid">
          {STEPS.map((item) => (
            <div key={item.step} className="process-card">
              <div className="process-card-header font-telemetry">
                <span className="step-num text-gold font-serif">{item.step}</span>
                <span className="step-tag">{item.title}</span>
              </div>

              <h3 className="step-title font-serif">“{item.quote}”</h3>
              <p className="step-desc">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Minimalist Synergy Statement */}
        <div className="synergy-statement-box">
          <span className="synergy-badge font-telemetry">THE ECOSYSTEM ADVANTAGE</span>
          <h3 className="synergy-title font-serif">
            One Sovereign Interface. Unmatched Multi-World Execution.
          </h3>
          <p className="synergy-text">
            Clients never juggle disconnected agencies or misaligned priorities. You interface with one sovereign governance core, accessing specialized mastery across technology, workforce, brand, and mobility.
          </p>
        </div>
      </div>
    </section>
  );
}
