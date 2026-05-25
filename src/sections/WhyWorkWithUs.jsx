import React, { useRef } from 'react';
import { motion } from 'framer-motion';

const BentoSpotlightCard = ({ children, className = "" }) => {
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    const card = cardRef.current;
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    card.style.setProperty('--mouse-x', `${x}px`);
    card.style.setProperty('--mouse-y', `${y}px`);
  };

  return (
    <div 
      ref={cardRef} 
      onMouseMove={handleMouseMove} 
      className={`premium-card bento-hover-glow ${className}`}
      style={{
        position: 'relative',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between'
      }}
    >
      <div 
        className="spotlight-radial-overlay"
        style={{
          position: 'absolute',
          inset: 0,
          pointerEvents: 'none',
          background: 'radial-gradient(350px circle at var(--mouse-x, -9999px) var(--mouse-y, -9999px), rgba(99, 102, 241, 0.08), transparent 80%)',
          zIndex: 1
        }}
      />
      <div className="card-content-wrapper" style={{ position: 'relative', zIndex: 2, height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
        {children}
      </div>
    </div>
  );
};

const WhyWorkWithUs = () => {
  return (
    <section id="why-us" className="section-padding bg-dots">
      <div className="glow-orb glow-magenta-orb" style={{ top: '20%', left: '-10%' }} />
      <div className="glow-orb glow-indigo-orb" style={{ bottom: '20%', right: '-10%' }} />
      
      <div className="container">
        {/* Header */}
        <div className="section-header centered">
          <span className="badge">Why Syncwave Media</span>
          <h2 className="text-gradient-white" style={{ fontSize: 'clamp(28px, 4.5vw, 48px)' }}>
            Engineered for High-Fidelity Results
          </h2>
          <p style={{ marginTop: '8px' }}>
            Our structural bento showcases what sets us apart from ordinary agencies.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="bento-grid">
          
          {/* Card 1: 4.8M Views Delivered (Col-span 2) */}
          <BentoSpotlightCard className="col-span-2" style={{ minHeight: '340px' }}>
            <div>
              <span className="kicker">Audience Impact</span>
              <div className="bento-card-header">
                <h3>4.8M Views Delivered</h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '14px', marginTop: '4px' }}>
                  Consistent exponential growth trajectory across tech syndicates.
                </p>
              </div>
            </div>
            
            {/* Growth Curve Chart SVG */}
            <div className="bento-line-chart-container">
              <svg width="100%" height="100%" viewBox="0 0 500 150" preserveAspectRatio="none">
                <defs>
                  <linearGradient id="chartGlow" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="var(--accent-cyan)" stopOpacity="0.4" />
                    <stop offset="100%" stopColor="var(--accent-cyan)" stopOpacity="0.0" />
                  </linearGradient>
                </defs>
                {/* Area path */}
                <path 
                  d="M0 150 Q100 130 180 90 T350 40 T500 10 L500 150 Z" 
                  fill="url(#chartGlow)"
                />
                {/* Line path */}
                <motion.path 
                  d="M0 150 Q100 130 180 90 T350 40 T500 10" 
                  fill="none" 
                  stroke="var(--accent-cyan)" 
                  strokeWidth="3"
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.8, ease: "easeOut" }}
                />
                {/* Dots along path */}
                <circle cx="180" cy="90" r="4" fill="var(--accent-cyan)" />
                <circle cx="350" cy="40" r="4" fill="var(--accent-cyan)" />
                <circle cx="500" cy="10" r="5" fill="white" />
              </svg>
            </div>
          </BentoSpotlightCard>

          {/* Card 2: 48h SLA (Col-span 1) */}
          <BentoSpotlightCard>
            <div>
              <span className="kicker" style={{ color: 'var(--accent-magenta)' }}>Turnaround Speed</span>
              <div className="bento-card-header">
                <h3 style={{ textShadow: '0 0 10px rgba(217, 70, 239, 0.2)' }}>48h SLA</h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '13px', marginTop: '4px' }}>
                  Rapid editing, review cycles, and immediate publishing slots.
                </p>
              </div>
            </div>
            
            {/* Circular Timer SVG */}
            <div className="bento-timer-wrapper">
              <svg className="timer-svg" viewBox="0 0 100 100">
                <defs>
                  <linearGradient id="timerGradient" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="var(--accent-magenta)" />
                    <stop offset="100%" stopColor="var(--accent-indigo)" />
                  </linearGradient>
                </defs>
                <circle className="timer-circle-track" cx="50" cy="50" r="45" />
                <motion.circle 
                  className="timer-circle-glow" 
                  cx="50" 
                  cy="50" 
                  r="45" 
                  initial={{ strokeDashoffset: 283 }}
                  whileInView={{ strokeDashoffset: 70 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.5, ease: "easeOut" }}
                />
                <text className="timer-text" x="50" y="50">48h</text>
              </svg>
              
              <div className="timer-bullet-list">
                <div className="timer-bullet-item">
                  <div className="timer-bullet-dot" />
                  <span>Immediate script feedback</span>
                </div>
                <div className="timer-bullet-item">
                  <div className="timer-bullet-dot" />
                  <span>Draft review under 24 hours</span>
                </div>
              </div>
            </div>
          </BentoSpotlightCard>

          {/* Card 3: VC Network Syndicate (Col-span 1) */}
          <BentoSpotlightCard>
            <div>
              <span className="kicker">Distribution Reach</span>
              <div className="bento-card-header">
                <h3>VC Syndicate</h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '13px', marginTop: '4px' }}>
                  Direct syndicate pipeline into partner circles and investor networks.
                </p>
              </div>
            </div>

            <div className="partner-logos-cloud">
              <div className="partner-logo-box">a16z</div>
              <div className="partner-logo-box">Sequoia</div>
              <div className="partner-logo-box">Founders Fund</div>
              <div className="partner-logo-box">Gen Catalyst</div>
            </div>
          </BentoSpotlightCard>

          {/* Card 4: 10X ROI Audio Transformation (Col-span 2) */}
          <BentoSpotlightCard className="col-span-2">
            <div>
              <span className="kicker" style={{ color: 'var(--accent-cyan)' }}>Production Quality</span>
              <div className="bento-card-header">
                <h3>10X ROI Content Engine</h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '14px', marginTop: '4px' }}>
                  Raw feeds vs. Syncwave sound engineered multi-track master.
                </p>
              </div>
            </div>

            <div className="audio-comparison-container">
              {/* Raw Audio Row */}
              <div className="audio-track-row">
                <div className="audio-track-label raw">Raw Feed</div>
                <div className="audio-bars-wrapper">
                  {[20, 10, 30, 15, 20, 10, 25, 10, 15, 30, 20, 10, 25, 15, 20, 10, 30, 15].map((h, i) => (
                    <div 
                      key={i} 
                      className="audio-bar" 
                      style={{ height: `${h}%`, width: '4px' }} 
                    />
                  ))}
                </div>
              </div>

              {/* Syncwave Produced Row */}
              <div className="audio-track-row">
                <div className="audio-track-label syncwave">Syncwave Master</div>
                <div className="audio-bars-wrapper glow">
                  {[40, 80, 50, 90, 60, 100, 70, 90, 50, 80, 60, 100, 70, 90, 60, 80, 50, 90].map((h, i) => (
                    <motion.div 
                      key={i} 
                      className="audio-bar" 
                      style={{ height: `${h}%`, width: '4px' }}
                      animate={{ height: [`${h}%`, `${h * 0.7}%`, `${h}%`] }}
                      transition={{ 
                        repeat: Infinity, 
                        duration: 1.2 + (i % 3) * 0.2, 
                        ease: "easeInOut" 
                      }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </BentoSpotlightCard>

        </div>
      </div>
    </section>
  );
};

export default WhyWorkWithUs;
