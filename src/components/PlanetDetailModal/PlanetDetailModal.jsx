import React, { useEffect } from 'react';
import { X, ArrowLeft, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import './PlanetDetailModal.css';

export default function PlanetDetailModal({ planet, onClose, onContactCompany }) {
  useEffect(() => {
    if (!planet) return;
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow || '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [planet, onClose]);

  if (!planet) return null;

  return (
    <div
      className="planet-modal-backdrop"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="planet-modal-title"
    >
      <div
        className="planet-modal-shell"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Sticky Navigation Bar */}
        <div className="planet-modal-topbar font-telemetry">
          <button
            className="return-btn"
            onClick={onClose}
            aria-label="Return to Ecosystem"
          >
            <ArrowLeft size={14} />
            <span>RETURN TO DOSSIER</span>
          </button>

          <div className="topbar-planet-title">
            <span className="topbar-dot" />
            <span className="topbar-name">{planet.name}</span>
          </div>

          <button
            className="modal-close-icon"
            onClick={onClose}
            aria-label="Close modal"
          >
            <X size={18} />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="planet-modal-body">
          {/* Header Banner */}
          <div className="modal-hero-block">
            <span className="modal-category font-telemetry">{planet.category}</span>
            <h2 id="planet-modal-title" className="modal-planet-name font-serif">
              {planet.name}
            </h2>
            <blockquote className="modal-tagline font-serif italic text-gold">
              “{planet.tagline}”
            </blockquote>
            <p className="modal-description">{planet.description}</p>
          </div>

          {/* Core Services */}
          {planet.services && planet.services.length > 0 && (
            <div className="modal-services-section">
              <span className="modal-section-title font-telemetry">DISCIPLINE CAPABILITIES</span>
              <div className="modal-services-grid">
                {planet.services.map((srv, idx) => (
                  <div key={idx} className="modal-srv-card">
                    <h4 className="modal-srv-title font-telemetry">{srv.title}</h4>
                    <p className="modal-srv-desc">{srv.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Modal Action Footer */}
          <div className="modal-action-footer font-telemetry">
            <button
              className="btn btn-gold btn-lg"
              onClick={() => onContactCompany(planet.id)}
            >
              <span>INQUIRE WITH {planet.name.toUpperCase()}</span>
            </button>

            {planet.externalUrl && planet.externalUrl !== '/' && (
              <a
                href={planet.externalUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary btn-lg"
              >
                <span>VISIT OFFICIAL PORTAL</span>
                <ArrowUpRight size={13} />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
