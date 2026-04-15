import React from 'react';
import { motion } from 'framer-motion';
import { Hammer, HardHat, Pickaxe, Settings, Construction, Truck, AlertTriangle } from 'lucide-react';
import './App.css';

function App() {
  return (
    <div className="sidian-container">
      <div className="caution-border top" />
      
      <header className="sid-header">
        <div className="header-content">
          <div className="logo-group">
            <Hammer size={40} className="sid-yellow" />
            <h1>SIDIAN CONSORTIUM</h1>
          </div>
          <div className="status-badge">
             <AlertTriangle size={16} />
             <span>SITE_STATUS: ACTIVE_EXCAVATION</span>
          </div>
        </div>
      </header>

      <main className="sid-main">
        <section className="hero-grid">
          <div className="industrial-card hero-info">
            <h2 className="sid-yellow">WE DIG. YOU PROFIT.</h2>
            <p>The Sidian Consortium is the galaxy's premier heavy-extraction union. From the asteroid belts of the Shallows to the volcanic moons of the Deep, we bring the ore to light.</p>
            <div className="btn-group">
              <button className="sid-btn">Contract a Crew</button>
              <button className="sid-btn outline">Equipment Catalog</button>
            </div>
          </div>
          <div className="hero-img-card">
            <img src="/images/sidian-hero.png" alt="Sidian Mech" />
            <div className="img-overlay" />
          </div>
        </section>

        <section className="ops-section">
          <h2 className="section-title">CURRENT OPERATIONS</h2>
          <div className="ops-grid">
            <div className="industrial-card">
              <Construction className="sid-yellow" />
              <h3>VEIL-MINING</h3>
              <p>Extracting raw Kybian-X from the unstable nebulae of Sector 7.</p>
            </div>
            <div className="industrial-card">
              <Truck className="sid-yellow" />
              <h3>LOGISTICS HUB</h3>
              <p>Heavy transport for high-mass refined elements across the Mandate.</p>
            </div>
            <div className="industrial-card">
              <Settings className="sid-yellow" />
              <h3>REFINERY V-4</h3>
              <p>Proprietary smelting processes for ultra-dense plating.</p>
            </div>
          </div>
        </section>

        <section className="recruitment-panel industrial-card">
           <div className="recruit-text">
             <h2>JOIN THE LINE</h2>
             <p>Hazard pay. Daily rations. Death benefits. No questions asked.</p>
           </div>
           <button className="sid-btn">SIGN_UP</button>
        </section>
      </main>

      <footer className="sid-footer">
        <div className="caution-border bottom" />
        <div className="footer-content">
          <p>© 342 AF SIDIAN CONSORTIUM // INDUSTRIAL UNION 09</p>
          <div className="footer-links">
            <a href="https://kybian.com">HUB</a>
            <a href="#safety">SAFETY</a>
            <a href="#compliance">COMPLIANCE</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
