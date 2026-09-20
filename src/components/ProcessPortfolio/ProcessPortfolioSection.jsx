import React, { useState } from 'react';
import { WORK_PROJECTS } from '../../data/ecosystemData';
import './ProcessPortfolioSection.css';

const STEPS = [
  {
    step: "01",
    title: "DISCOVER",
    desc: "Diagnostic of enterprise requirements and strategic horizons."
  },
  {
    step: "02",
    title: "ARCHITECT",
    desc: "Formulating synchronized cross-company solutions."
  },
  {
    step: "03",
    title: "ENGINEER",
    desc: "Rapid deployment of resilient software and teams."
  },
  {
    step: "04",
    title: "EXECUTE",
    desc: "Orchestrated market rollouts backed by telemetry."
  },
  {
    step: "05",
    title: "SCALE",
    desc: "Long-term enterprise value compounding."
  }
];

const FILTER_TAGS = ['ALL', 'TECHNOLOGY', 'TALENT', 'MARKETING', 'MOBILITY'];

export default function ProcessPortfolioSection() {
  const [activeFilter, setActiveFilter] = useState('ALL');

  const filteredProjects = activeFilter === 'ALL'
    ? WORK_PROJECTS
    : WORK_PROJECTS.filter((p) => p.tag.toUpperCase().includes(activeFilter));

  return (
    <section className="section unified-portfolio-section" id="work">
      <div className="container">
        {/* Section Header */}
        <div className="portfolio-header">
          <div className="section-badge font-telemetry">
            <span className="section-badge-dot" />
            <span>OPERATIONAL METHODOLOGY & DEPLOYMENTS</span>
          </div>
          <h2 className="portfolio-title font-serif">Process & Portfolio</h2>
          <p className="portfolio-subtitle font-serif">
            “Synchronizing multi-company capabilities into a single standard of delivery.”
          </p>
        </div>

        {/* Unified 5-Step Process Row */}
        <div className="process-horizontal-row">
          {STEPS.map((item) => (
            <div key={item.step} className="process-step-item">
              <span className="step-num text-gold font-serif">{item.step}</span>
              <h3 className="step-title font-telemetry">{item.title}</h3>
              <p className="step-desc">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Minimal Divider */}
        <div className="portfolio-divider" />

        {/* Filter Bar */}
        <div className="portfolio-filter-bar">
          {FILTER_TAGS.map((tag) => (
            <button
              key={tag}
              className={`filter-btn font-telemetry ${activeFilter === tag ? 'active' : ''}`}
              onClick={() => setActiveFilter(tag)}
            >
              {tag}
            </button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div className="portfolio-grid">
          {filteredProjects.map((proj) => (
            <article key={proj.id} className="portfolio-card">
              <div className="portfolio-card-top font-telemetry">
                <span className="portfolio-tag">{proj.tag}</span>
                <span className="portfolio-metric text-gold">{proj.metric}</span>
              </div>
              
              <h3 className="portfolio-project-title font-serif">{proj.title}</h3>
              <p className="portfolio-project-desc">{proj.desc}</p>
              
              <div className="portfolio-card-bottom font-telemetry">
                <span className="portfolio-client">CLIENT: {proj.client.toUpperCase()}</span>
                <button
                  className="portfolio-inquire-btn text-gold"
                  onClick={() => {
                    const el = document.getElementById('contact');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  INQUIRE
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
