import React, { useState } from 'react';
import { WORK_PROJECTS, COMPANIES } from '../../data/ecosystemData';
import './OurWorkSection.css';

const FILTER_TAGS = ['ALL', 'TECHNOLOGY', 'TALENT', 'MARKETING', 'MOBILITY'];

export default function OurWorkSection({ onSelectCompany }) {
  const [activeFilter, setActiveFilter] = useState('ALL');

  const filteredProjects = activeFilter === 'ALL'
    ? WORK_PROJECTS
    : WORK_PROJECTS.filter((p) => p.tag.toUpperCase().includes(activeFilter));

  const getCompanyMeta = (tag) => {
    const found = COMPANIES.find(c =>
      c.category.toUpperCase().includes(tag) ||
      c.name.toUpperCase().includes(tag) ||
      tag.toUpperCase().includes(c.id.replace('gc-', ''))
    );
    return found || COMPANIES[0];
  };

  return (
    <section className="section our-work-section" id="work">
      <div className="container">
        {/* Header */}
        <div className="work-header">
          <div className="section-badge font-telemetry">
            <span className="section-badge-dot" />
            <span>PORTFOLIO & DEPLOYMENTS</span>
          </div>
          <h2 className="work-title font-serif">Selected Client Deployments</h2>
          <p className="work-subtitle font-serif">
            “Measurable outcomes engineered for venture-backed startups, sovereign institutions, and enterprise leaders.”
          </p>

          {/* Filter Pills */}
          <div className="work-filter-bar">
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
        </div>

        {/* Project Grid */}
        <div className="work-grid">
          {filteredProjects.map((proj) => {
            const companyMeta = getCompanyMeta(proj.tag);
            return (
              <article key={proj.id} className="work-card">
                <div className="work-card-top font-telemetry">
                  <span className="work-tag">{proj.tag}</span>
                  <span className="work-metric text-gold">{proj.metric}</span>
                </div>

                <h3 className="work-project-title font-serif">{proj.title}</h3>
                <p className="work-project-desc">{proj.desc}</p>

                <div className="work-card-bottom font-telemetry">
                  <span className="work-client">CLIENT: {proj.client.toUpperCase()}</span>
                  <button
                    className="work-inquire-btn"
                    onClick={() => {
                      const el = document.getElementById('contact');
                      if (el) el.scrollIntoView({ behavior: 'smooth' });
                    }}
                  >
                    INQUIRE →
                  </button>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
