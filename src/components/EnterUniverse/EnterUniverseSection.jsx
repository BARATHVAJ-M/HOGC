import React from 'react';
import { COMPANIES } from '../../data/ecosystemData';
import './EnterUniverseSection.css';

export default function EnterUniverseSection() {
  return (
    <section className="section enter-universe-section" id="universe">
      {/* Section Header overlaying the whole section */}
      <div className="universe-header-wrap">
        <div className="section-badge font-telemetry">
          <span className="section-badge-dot" />
          <span>THE ECOSYSTEM MATRIX</span>
        </div>
        <h2 className="universe-headline font-serif">
          Four Specialized Disciplines. <br />
          <span className="text-gold italic">One Sovereign Collective.</span>
        </h2>
        <p className="universe-subtitle font-serif">
          “Each entity operates with sovereign autonomy while compounding under unified standards.”
        </p>
      </div>

      {/* 4 Split Backgrounds */}
      <div className="universe-quadrant">
        {COMPANIES.map((world, idx) => {
          const pillars = ['TECHNOLOGY', 'TALENT', 'BRAND', 'MOBILITY'];
          // Determine the best image from ecosystemData or fallback to a default space image
          const bgImage = world.realImage || world.texture || `/images/galaxy landing page.webp`;
          
          return (
            <div 
              key={world.id} 
              className="quadrant-card"
            >
              <div 
                className="quadrant-bg" 
                style={{ backgroundImage: `url('${bgImage}')` }}
              ></div>
              <div className="quadrant-overlay"></div>
              <div className="quadrant-content">
                <span className="quadrant-pillar font-telemetry">0{idx + 1} / {pillars[idx]}</span>
                <h3 className="quadrant-name font-serif">{world.name}</h3>
                <span className="quadrant-category font-telemetry">{world.category}</span>
                <p className="quadrant-quote font-serif">“{world.tagline}”</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
