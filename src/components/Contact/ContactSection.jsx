import React, { useState, useEffect } from 'react';
import { Mail, Clock, MapPin, Send, CheckCircle2, ExternalLink } from 'lucide-react';
import { COMPANIES, HOGC_CORE } from '../../data/ecosystemData';
import './ContactSection.css';

const ENTITY_OPTIONS = [
  { id: 'all', label: 'Ecosystem Core' },
  { id: 'gc-tech', label: 'GC Tech' },
  { id: 'sapiensync', label: 'SapienSync' },
  { id: 'gc-marketing', label: 'GC Marketing' },
  { id: 'autotown', label: 'Autotown' },
];

export default function ContactSection({ preselectedInterest }) {
  const [selectedEntity, setSelectedEntity] = useState('all');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [isSending, setIsSending] = useState(false);

  useEffect(() => {
    if (preselectedInterest) {
      const match = ENTITY_OPTIONS.find(o => o.id === preselectedInterest);
      if (match) setSelectedEntity(match.id);
    }
  }, [preselectedInterest]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) return;

    setIsSending(true);

    const baseUrl = "https://hogchomepage-60067036113.development.catalystserverless.in";
    try {
      await fetch(`${baseUrl}/server/emailleadcollector/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name.trim(),
          email: formData.email.trim(),
          phone_no: "",
          source: `${formData.company.trim() || 'HOGC Portal'} [${selectedEntity}]`
        })
      });
    } catch (err) {
      console.warn("Lead collector telemetry:", err);
    }

    setIsSending(false);
    setSubmitted(true);
  };

  const allWorlds = [
    {
      id: HOGC_CORE.id,
      name: HOGC_CORE.name,
      externalUrl: '/',
    },
    ...COMPANIES
  ];

  return (
    <section className="section contact-section" id="contact">
      <div className="container">
        {/* Header */}
        <div className="contact-header-compact">
          <div className="section-badge font-telemetry">
            <span className="section-badge-dot" />
            <span>DIRECT ENGAGEMENT</span>
          </div>
          <h2 className="contact-title font-serif">Inquire With The Sovereign Core</h2>
        </div>

        {/* Main Horizontal Layout */}
        <div className="contact-horizontal-layout">
          
          {/* Left: Contact Info */}
          <div className="contact-info-panel">
            <h3 className="info-panel-title font-serif">Executive Liaison</h3>
            <p className="info-panel-desc">
              For institutional partnerships, capital ventures, or sovereign cross-entity contracts.
            </p>

            <div className="info-methods-row">
              <div className="method-col">
                <Mail size={14} className="text-gold" />
                <span className="method-val">contact@hogc.in</span>
              </div>
              <div className="method-col">
                <Clock size={14} className="text-gold" />
                <span className="method-val">&lt; 24h SLA</span>
              </div>
              <div className="method-col">
                <MapPin size={14} className="text-gold" />
                <span className="method-val">Global HQ · India</span>
              </div>
            </div>
            
            <div className="confidentiality-notice">
              <span className="conf-badge font-telemetry">CONFIDENTIALITY GUARANTEE</span>
              <p>All briefs shared with HOGC remain strictly confidential under mutual NDA.</p>
            </div>
          </div>

          {/* Right: Form */}
          <div className="contact-form-panel">
            {submitted ? (
              <div className="contact-success-state">
                <CheckCircle2 size={30} className="text-gold" />
                <h3 className="success-title font-serif">Transmission Received</h3>
                <p className="success-desc">
                  Thank you, <strong>{formData.name}</strong>. An executive partner will respond within 24 business hours.
                </p>
                <button
                  className="btn btn-secondary btn-sm font-telemetry"
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({ name: '', company: '', email: '', message: '' });
                  }}
                >
                  SEND ANOTHER INQUIRY
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="contact-horizontal-form">
                <div className="form-row-group">
                  <div className="form-group half">
                    <label htmlFor="c-name" className="form-label font-telemetry">NAME *</label>
                    <input
                      id="c-name" name="name" type="text" required
                      placeholder="e.g. Eleanor Vance"
                      value={formData.name} onChange={handleChange}
                      className="form-input"
                    />
                  </div>
                  <div className="form-group half">
                    <label htmlFor="c-email" className="form-label font-telemetry">CORPORATE EMAIL *</label>
                    <input
                      id="c-email" name="email" type="email" required
                      placeholder="e.g. evance@enterprise.com"
                      value={formData.email} onChange={handleChange}
                      className="form-input"
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="c-msg" className="form-label font-telemetry">MANDATE / REQUIREMENT *</label>
                  <textarea
                    id="c-msg" name="message" required rows={2}
                    placeholder="Describe your institutional requirement..."
                    value={formData.message} onChange={handleChange}
                    className="form-input"
                  />
                </div>

                <div className="form-footer-row">
                  <div className="entity-selector">
                    <span className="selector-label font-telemetry">ROUTING:</span>
                    <select 
                      className="entity-dropdown font-telemetry"
                      value={selectedEntity}
                      onChange={(e) => setSelectedEntity(e.target.value)}
                    >
                      {ENTITY_OPTIONS.map(opt => (
                        <option key={opt.id} value={opt.id}>{opt.label.toUpperCase()}</option>
                      ))}
                    </select>
                  </div>
                  
                  <button 
                    type="submit" 
                    className="btn btn-gold btn-sm font-telemetry"
                    disabled={isSending}
                  >
                    <span>{isSending ? 'TRANSMITTING...' : 'TRANSMIT'}</span>
                    <Send size={12} />
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
