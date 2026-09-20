import React, { useState, useEffect } from 'react';
import './ProgressiveLoader.css';

export default function ProgressiveLoader({ onFinished }) {
  const [loaded, setLoaded] = useState(false);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoaded(true);
      setTimeout(() => {
        setHidden(true);
        if (onFinished) onFinished();
      }, 350);
    }, 450);

    return () => clearTimeout(timer);
  }, [onFinished]);

  if (hidden) return null;

  return (
    <div className={`progressive-loader ${loaded ? 'fade-out' : ''}`}>
      <div className="loader-content">
        <img
          src="./hogc-logo.jpg"
          alt="House of Giovanni Corsi"
          className="loader-logo-img"
        />
        <h2 className="loader-brand font-serif">HOGC</h2>
        <p className="loader-sub font-telemetry">HOUSE OF GIOVANNI CORSI</p>
        <div className="loader-bar-wrap">
          <div className="loader-bar-fill" />
        </div>
      </div>
    </div>
  );
}
