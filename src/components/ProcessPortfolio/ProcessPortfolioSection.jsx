import React, { useState } from 'react';
import { ArrowUpRight, Sparkles } from 'lucide-react';
import { WORK_PROJECTS } from '../../data/ecosystemData';
import './ProcessPortfolioSection.css';

const STEPS = [
  {
    step: "01",
    title: "DIAGNOSE",
    desc: "Diagnostic of enterprise requirements, existing technical debt, and commercial growth targets."
  },
  {
    step: "02",
    title: "ARCHITECT",
    desc: "Formulating synchronized cross-company solutions spanning technology, talent, and brand."
  },
  {
    step: "03",
    title: "ENGINEER",
    desc: "Rapid deployment of resilient cloud software, specialized talent pods, and go-to-market systems."
  },
  {
    step: "04",
    title: "DEPLOY",
    desc: "Orchestrated market rollouts backed by automated telemetry, SLAs, and continuous quality governance."
  },
  {
    step: "05",
    title: "COMPOUND",
    desc: "Long-term enterprise value compounding through ecosystem integration and shared infrastructure."
  }
];

const FILTER_TAGS = ['ALL', 'TECHNOLOGY', 'TALENT', 'BRAND', 'MOBILITY'];

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
            <span>OPERATIONAL METHODOLOGY & CASE ARCHIVE</span>
          </div>
          <h2 className="portfolio-title font-serif">Process & Portfolio</h2>
          <p className="portfolio-subtitle font-serif">
            “Synchronizing multi-company capabilities into a single standard of accountable execution.”
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

        {/* Distinct Eye-Catching Portfolio Grid */}
        <div className="portfolio-grid">
          {filteredProjects.map((proj) => (
            <article key={proj.id} className="portfolio-card">
              <div className="portfolio-card-top font-telemetry">
                <span className="portfolio-tag-badge">{proj.tag}</span>
                <span className="portfolio-status-pill">
                  <span className="status-live-dot" />
                  <span>{proj.status || 'LIVE PRODUCTION'}</span>
                </span>
              </div>
              
              <h3 className="portfolio-project-title font-serif">{proj.title || proj.name}</h3>
              <p className="portfolio-project-desc">{proj.desc}</p>

              {/* High-Impact Gold Metric Display */}
              <div className="portfolio-impact-box">
                <span className="impact-caption font-telemetry">VERIFIED BENCHMARK</span>
                <span className="impact-number font-telemetry">{proj.metric}</span>
              </div>

              {/* Technical Feature Tags */}
              {proj.features && proj.features.length > 0 && (
                <div className="portfolio-features-row">
                  {proj.features.map((feature, fIdx) => (
                    <span key={fIdx} className="feature-pill font-telemetry">
                      {feature}
                    </span>
                  ))}
                </div>
              )}
              
              <div className="portfolio-card-bottom font-telemetry">
                <span className="portfolio-client">CLIENT: {proj.client.toUpperCase()}</span>
                <button
                  className="portfolio-inquire-btn"
                  onClick={() => {
                    const el = document.getElementById('contact');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  <span>INQUIRE CASE</span>
                  <ArrowUpRight size={13} className="text-gold" />
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
