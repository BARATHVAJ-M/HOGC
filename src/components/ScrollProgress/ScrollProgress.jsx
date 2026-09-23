import React from 'react';
import './ScrollProgress.css';

const CHAPTERS = [
  { id: 'hero', number: '01', label: 'Overview' },
  { id: 'universe', number: '02', label: 'Ecosystem' },
  { id: 'companies', number: '03', label: 'Dossier' },
  { id: 'about', number: '04', label: 'House Story' },
  { id: 'work', number: '05', label: 'Process & Portfolio' },
  { id: 'contact', number: '06', label: 'Inquire' },
];

export default function ScrollProgress({ activeSection, onNavigate }) {
  const handleClick = (id) => {
    if (onNavigate) {
      onNavigate(id);
    } else {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <aside className="scroll-progress-nav" aria-label="Section indicator">
      <div className="progress-track" />
      <ul className="progress-list">
        {CHAPTERS.map((item) => {
          const isActive = activeSection === item.id;
          return (
            <li key={item.id} className="progress-item">
              <button
                className={`progress-btn ${isActive ? 'active' : ''}`}
                onClick={() => handleClick(item.id)}
                aria-label={`Jump to ${item.label}`}
              >
                <span className="progress-dot" />
                <span className="progress-tooltip font-telemetry">
                  <span className="tooltip-num font-mono">{item.number}</span>
                  <span className="tooltip-label">{item.label}</span>
                </span>
              </button>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}
