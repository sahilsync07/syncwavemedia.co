import React, { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';

const CountUp = ({ end, duration = 2000, suffix = "" }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasStarted(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!hasStarted) return;

    let startTimestamp = null;
    const numericEnd = parseInt(end, 10);
    if (isNaN(numericEnd)) return;

    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      setCount(Math.floor(progress * numericEnd));
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };

    window.requestAnimationFrame(step);
  }, [hasStarted, end, duration]);

  return <span ref={ref}>{count.toLocaleString()}{suffix}</span>;
};

const CustomerStory = () => {
  const [activeNode, setActiveNode] = useState(null);
  
  const nodes = [
    { id: 1, cx: 50, cy: 170, label: "Initial Launch", val: "10K Listeners", date: "Month 1", annotation: "SEO Setup & Platform Syndication launch" },
    { id: 2, cx: 170, cy: 130, label: "Viral Milestone", val: "450K Listeners", date: "Month 2", annotation: "Episode 12: Viral YouTube Shorts Clip goes viral" },
    { id: 3, cx: 290, cy: 80, label: "Top Charts", val: "800K Listeners", date: "Month 3", annotation: "Syndicated to Apple Top 50 Podcasting charts" },
    { id: 4, cx: 420, cy: 30, label: "VC Syndicate", val: "1.2M Listeners", date: "Month 4", annotation: "Partner syndication program begins" }
  ];

  return (
    <section id="story" className="section-padding bg-dots">
      <div className="glow-orb glow-cyan-orb" style={{ top: '10%', right: '10%' }} />
      
      <div className="container">
        {/* Section Header */}
        <div className="section-header centered">
          <span className="badge badge-magenta">Customer Story</span>
          <h2 className="text-gradient-white" style={{ fontSize: 'clamp(28px, 4.5vw, 48px)' }}>
            Growth That Drives Real Capital
          </h2>
        </div>

        {/* 50/50 Grid */}
        <div className="customer-story-split">
          
          {/* Left Column: Editorial Voice */}
          <div className="story-left">
            <div className="testimonial-quote-block">
              <div className="quote-glowing-graphic">“</div>
              <h3 className="testimonial-quote-text">
                "Syncwave scaled our podcast from zero to 100K monthly listeners in 3 months. Our investment flow is up 40%."
              </h3>
            </div>
            
            <div className="testimonial-author-row">
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&q=80" 
                alt="Partner Avatar" 
                className="author-avatar"
              />
              <div className="author-meta">
                <h4>Marcus Henderson</h4>
                <p>Partner, General Catalyst</p>
              </div>
            </div>

            {/* Monochrome Company Logo */}
            <div className="partner-logo-marquee">
              <span style={{ fontSize: '11px', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--text-muted)' }}>
                TRUSTED BY LEADING VCs
              </span>
              {/* Simple Text representation of VC name to avoid broken local assets */}
              <span style={{ fontSize: '14px', fontWeight: '700', letterSpacing: '-0.02em', color: '#64748B' }}>
                GENERAL CATALYST
              </span>
            </div>
          </div>

          {/* Right Column: Growth Metric Chart */}
          <div className="story-right">
            <div className="premium-card growth-chart-card" style={{ borderColor: 'rgba(6, 182, 212, 0.2)' }}>
              
              <div className="chart-header">
                <span className="chart-header-title">Listener growth</span>
                <span className="chart-header-value">1.2M listeners</span>
              </div>

              {/* Chart SVG */}
              <div className="chart-svg-container">
                <svg width="100%" height="100%" viewBox="0 0 460 200" preserveAspectRatio="none">
                  {/* Grid Lines */}
                  <line x1="0" y1="170" x2="460" y2="170" stroke="rgba(255,255,255,0.03)" strokeWidth="1" />
                  <line x1="0" y1="130" x2="460" y2="130" stroke="rgba(255,255,255,0.03)" strokeWidth="1" />
                  <line x1="0" y1="80" x2="460" y2="80" stroke="rgba(255,255,255,0.03)" strokeWidth="1" />
                  <line x1="0" y1="30" x2="460" y2="30" stroke="rgba(255,255,255,0.03)" strokeWidth="1" />

                  {/* Gradient Area under Curve */}
                  <defs>
                    <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="var(--accent-cyan)" stopOpacity="0.3" />
                      <stop offset="100%" stopColor="var(--accent-cyan)" stopOpacity="0.0" />
                    </linearGradient>
                  </defs>
                  
                  <path 
                    d="M 50 170 C 120 150, 150 130, 170 130 C 230 130, 270 80, 290 80 C 350 80, 390 30, 420 30 L 420 200 L 50 200 Z" 
                    fill="url(#chartGradient)"
                  />

                  {/* Connecting Line */}
                  <motion.path 
                    d="M 50 170 C 120 150, 150 130, 170 130 C 230 130, 270 80, 290 80 C 350 80, 390 30, 420 30" 
                    fill="none" 
                    stroke="var(--accent-cyan)" 
                    strokeWidth="3"
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                  />

                  {/* Hoverable Nodes */}
                  {nodes.map((node) => (
                    <circle 
                      key={node.id}
                      cx={node.cx} 
                      cy={node.cy} 
                      r={activeNode?.id === node.id ? 7 : 5}
                      className="chart-node-point"
                      onMouseEnter={() => setActiveNode(node)}
                      onMouseLeave={() => setActiveNode(null)}
                    />
                  ))}
                </svg>

                {/* Annotation Overlay popover */}
                {activeNode && (
                  <div 
                    className="chart-annotation-card"
                    style={{
                      position: 'absolute',
                      left: `${(activeNode.cx / 460) * 100}%`,
                      top: `${(activeNode.cy / 200) * 100 - 45}%`,
                      transform: 'translateX(-50%)',
                      border: '1px solid var(--accent-cyan)',
                      boxShadow: '0 0 15px rgba(6, 182, 212, 0.2)'
                    }}
                  >
                    <div className="chart-annotation-date">{activeNode.date} • {activeNode.val}</div>
                    <div style={{ color: 'white', fontWeight: '600' }}>{activeNode.label}</div>
                    <div style={{ color: 'var(--text-secondary)', fontSize: '10px', marginTop: '2px' }}>
                      {activeNode.annotation}
                    </div>
                  </div>
                )}
              </div>

              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '11px', color: 'var(--text-muted)', marginTop: '16px', padding: '0 12px' }}>
                <span>Month 1</span>
                <span>Month 2</span>
                <span>Month 3</span>
                <span>Month 4</span>
              </div>

            </div>
          </div>

        </div>

        {/* Numeric stats below split */}
        <div className="customer-stats-row">
          
          <div className="premium-card customer-stat-card">
            <span className="customer-stat-num">
              <CountUp end={500} suffix="+" />
            </span>
            <span className="customer-stat-lbl">Videos produced</span>
          </div>

          <div className="premium-card customer-stat-card">
            <span className="customer-stat-num">
              <CountUp end={50} suffix="M+" />
            </span>
            <span className="customer-stat-lbl">Views generated</span>
          </div>

          <div className="premium-card customer-stat-card">
            <span className="customer-stat-num">
              <CountUp end={100} suffix="K+" />
            </span>
            <span className="customer-stat-lbl">Syndicate subscribers</span>
          </div>

        </div>

      </div>
    </section>
  );
};

export default CustomerStory;
