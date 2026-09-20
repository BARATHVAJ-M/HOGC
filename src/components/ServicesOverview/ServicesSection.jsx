import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { COMPANIES } from '../../data/ecosystemData';
import './ServicesSection.css';

export default function ServicesSection({ onSelectCompany }) {
  return (
    <section className="section services-overview-section" id="services">
      <div className="container">
        {/* Header */}
        <div className="services-header-compact">
          <div className="section-badge font-telemetry">
            <span className="section-badge-dot" />
            <span>ENTERPRISE MATRIX</span>
          </div>
          <h2 className="services-title font-serif">Core Capabilities</h2>
        </div>

        {/* Compact 4-Column Layout */}
        <div className="services-compact-grid">
          {COMPANIES.map((company, index) => (
            <div key={company.id} className="service-col-compact">
              <div className="col-top font-telemetry">
                <span className="col-num text-gold">0{index + 1}</span>
                <span className="col-name">{company.name.toUpperCase()}</span>
              </div>
              
              <h3 className="col-category font-serif">{company.category}</h3>
              
              <div className="col-services-list">
                {company.services.slice(0, 3).map((srv, idx) => (
                  <div key={idx} className="col-service-item">
                    <span className="srv-bullet" />
                    <span className="font-telemetry">{srv.title}</span>
                  </div>
                ))}
              </div>
              
              <button
                className="col-action-btn font-telemetry"
                onClick={() => {
                  const el = document.getElementById('contact');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                <span>ENGAGE</span>
                <ArrowUpRight size={10} />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
