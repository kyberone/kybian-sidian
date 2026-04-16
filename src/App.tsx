import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Hammer, Settings, Construction, Truck, AlertTriangle, Cpu, Activity, Wrench, Package } from 'lucide-react';
import './App.css';

const initialParts = [
  { id: 'ACT-01', name: 'HYDRAULIC_ACTUATOR', status: 'CRITICAL', health: 12 },
  { id: 'SEN-04', name: 'VEIL_SCANNER', status: 'OPTIMAL', health: 98 },
  { id: 'POW-02', name: 'KYBIAN_REACTOR', status: 'STABLE', health: 74 },
  { id: 'ARM-09', name: 'DULL-GLASS_PLATING', status: 'DAMAGED', health: 45 },
];

function App() {
  const [scrap, setScrap] = useState(14402);
  const [parts, setParts] = useState(initialParts);
  const [isRepairing, setIsRepairing] = useState<string | null>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setScrap(prev => prev + Math.floor(Math.random() * 5));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handleRepair = (id: string) => {
    setIsRepairing(id);
    setTimeout(() => {
      setParts(parts.map(p => p.id === id ? { ...p, status: 'OPTIMAL', health: 100 } : p));
      setIsRepairing(null);
    }, 1500);
  };

  return (
    <div className="sidian-container">
      <div className="caution-border top" />
      <div className="industrial-overlay" />
      
      <header className="sid-header">
        <div className="header-content">
          <div className="logo-group">
            <Hammer size={40} className="sid-yellow" />
            <h1>SIDIAN CONSORTIUM</h1>
          </div>
          <div className="header-stats">
            <div className="stat-item">
              <Package size={14} className="sid-yellow" />
              <span>SCRAP_STOCK: {scrap.toLocaleString()} kg</span>
            </div>
            <div className="status-badge">
              <AlertTriangle size={16} />
              <span>SITE_STATUS: ACTIVE_EXCAVATION</span>
            </div>
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
            <div className="mech-label">MODEL: GRIT-WALKER MK.IV</div>
          </div>
        </section>

        <div className="sid-grid">
          {/* Maintenance Dashboard */}
          <section className="maintenance-section industrial-card">
            <div className="panel-head">
              <Settings size={20} className="sid-yellow" />
              <h3>GRIT-WALKER_MAINTENANCE</h3>
            </div>
            <div className="parts-list">
              {parts.map(part => (
                <div key={part.id} className="part-item">
                  <div className="part-info">
                    <span className="part-id">{part.id}</span>
                    <span className="part-name">{part.name}</span>
                  </div>
                  <div className="part-status-wrap">
                    <div className="health-bar">
                      <div 
                        className={`health-fill ${part.health < 30 ? 'critical' : part.health < 60 ? 'warning' : ''}`} 
                        style={{ width: `${part.health}%` }}
                      />
                    </div>
                    <span className="health-val">{part.health}%</span>
                  </div>
                  <button 
                    className="repair-btn"
                    onClick={() => handleRepair(part.id)}
                    disabled={isRepairing !== null || part.health === 100}
                  >
                    {isRepairing === part.id ? 'FIXING...' : <Wrench size={14} />}
                  </button>
                </div>
              ))}
            </div>
          </section>

          {/* Operations */}
          <section className="ops-section industrial-card">
            <div className="panel-head">
              <Activity size={20} className="sid-yellow" />
              <h3>CURRENT_OPERATIONS</h3>
            </div>
            <div className="ops-list">
              <div className="op-item">
                <Construction size={18} className="sid-yellow" />
                <div className="op-text">
                  <h4>VEIL-MINING</h4>
                  <p>Extracting raw Kybian-X from the unstable nebulae of Sector 7.</p>
                </div>
              </div>
              <div className="op-item">
                <Truck size={18} className="sid-yellow" />
                <div className="op-text">
                  <h4>LOGISTICS HUB</h4>
                  <p>Heavy transport for high-mass refined elements across the Mandate.</p>
                </div>
              </div>
              <div className="op-item">
                <Cpu size={18} className="sid-yellow" />
                <div className="op-text">
                  <h4>REFINERY V-4</h4>
                  <p>Smelting processes for ultra-dense plating.</p>
                </div>
              </div>
            </div>
          </section>
        </div>

        <section className="recruitment-panel industrial-card caution-bg">
           <div className="recruit-text">
             <h2 className="brutalist">JOIN THE LINE</h2>
             <p>Hazard pay. Daily rations. Death benefits. No questions asked.</p>
           </div>
           <button className="sid-btn dark">SIGN_UP</button>
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

