import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import WaveCanvas from '../components/WaveCanvas';
import { useMagnetic } from '../hooks/useMagnetic';

const Hero = () => {
  const containerRef = useRef(null);
  const primaryBtnRef = useMagnetic();
  const secondaryBtnRef = useMagnetic();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  // Parallax translation: Right stack floats up faster
  const yLeft = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const yRight = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const opacityLeft = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  // Live engagement counter
  const [likes, setLikes] = useState(24128);
  useEffect(() => {
    const interval = setInterval(() => {
      setLikes(prev => prev + Math.floor(Math.random() * 4) + 1);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section ref={containerRef} id="hero" className="hero bg-dots">
      {/* Background elements */}
      <div style={{ opacity: 0.15 }}>
        <WaveCanvas />
      </div>
      <div className="glow-orb glow-indigo-orb" style={{ top: '-10%', left: '-10%' }} />
      <div className="glow-orb glow-cyan-orb" style={{ bottom: '10%', right: '-10%' }} />
      
      {/* Grid container */}
      <div className="container hero-grid">
        {/* Left Column */}
        <motion.div 
          style={{ y: yLeft, opacity: opacityLeft }}
          className="hero-left"
        >
          <span className="badge">Next-Gen Podcast Engine</span>
          <h1 className="hero-title text-gradient-white">
            Scaling Podcast<br />
            Engines for VCs<br />
            & AI Leaders.
          </h1>
          <p>
            We handle script writing, studio edits, micro-content cutdowns, and multi-channel syndication. Focus on the conversation; we take care of the reach.
          </p>
          <div className="hero-actions">
            <button 
              ref={primaryBtnRef} 
              className="btn btn-primary"
              onClick={() => {
                const el = document.getElementById('footer');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Book Consultation
            </button>
            <button 
              ref={secondaryBtnRef} 
              className="btn btn-secondary"
              onClick={() => {
                const el = document.getElementById('introducing-us');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Watch Reel
            </button>
          </div>
        </motion.div>

        {/* Right Column */}
        <motion.div 
          style={{ y: yRight }}
          className="hero-right"
        >
          <div className="hero-widget-stack">
            {/* Widget A: Likes Tracker */}
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="floating-widget widget-likes"
            >
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <motion.div 
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ repeat: Infinity, duration: 1.2, ease: "easeInOut" }}
                  className="heart-icon"
                >
                  <svg fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                  </svg>
                </motion.div>
                <div>
                  <div className="widget-label-row">
                    <span className="widget-pulse-dot magenta"></span>
                    <span>Live Engagement</span>
                  </div>
                  <h3 style={{ fontSize: '24px', fontWeight: '700', color: 'white' }}>
                    {likes.toLocaleString()}
                  </h3>
                </div>
              </div>
            </motion.div>

            {/* Widget B: Performance Bar Chart */}
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="floating-widget widget-chart"
            >
              <div className="widget-label-row">
                <span className="widget-pulse-dot"></span>
                <span>Audience Metrics (Growth)</span>
              </div>
              <div className="chart-bars">
                {[40, 65, 50, 85, 70, 100, 90].map((height, i) => (
                  <motion.div 
                    key={i}
                    initial={{ height: 0 }}
                    animate={{ height: `${height}%` }}
                    transition={{ duration: 1, delay: 0.6 + i * 0.1, ease: "easeOut" }}
                    className="chart-bar"
                  />
                ))}
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '10px', color: 'var(--text-secondary)', marginTop: '4px' }}>
                <span>Mon</span>
                <span>Sun</span>
              </div>
            </motion.div>

            {/* Widget C: Platform Icons */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="floating-widget widget-orbit"
            >
              <div className="widget-label-row" style={{ justifyContent: 'center' }}>
                <span>Syndication network</span>
              </div>
              <div className="social-icons-row">
                {/* Spotify */}
                <a href="#" className="social-icon">
                  <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm4.586 14.424c-.18.295-.565.387-.86.207-2.377-1.454-5.37-1.783-8.892-.982-.336.076-.67-.135-.746-.47-.077-.337.135-.67.472-.746 3.856-.882 7.15-.502 9.816 1.13.295.18.387.563.21 1.061zm1.226-2.723c-.226.367-.707.487-1.074.26-2.72-1.672-6.87-2.157-10.082-1.182-.413.125-.845-.107-.97-.52-.125-.413.107-.847.52-.972 3.676-1.116 8.245-.575 11.35 1.332.366.226.486.706.257 1.082zm.107-2.82c-3.26-1.937-8.65-2.12-11.75-1.18-.5.152-1.025-.133-1.177-.635-.152-.5.133-1.027.635-1.178 3.58-1.086 9.53-.87 13.29 1.36.45.267.6.845.333 1.295-.268.452-.847.603-1.298.338z"/>
                  </svg>
                </a>
                {/* YouTube */}
                <a href="#" className="social-icon">
                  <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.163a3.003 3.003 0 00-2.11-2.11C19.517 3.545 12 3.545 12 3.545s-7.516 0-9.387.507A3.003 3.003 0 00.502 6.163C0 8.07 0 12 0 12s0 3.93.502 5.837a3.003 3.003 0 002.11 2.11c1.871.507 9.387.507 9.387.507s7.517 0 9.387-.507a3.003 3.003 0 002.11-2.11C24 15.93 24 12 24 12s0-3.93-.502-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </a>
                {/* Apple Podcasts */}
                <a href="#" className="social-icon">
                  <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15.9c-.3.1-.6.1-.9.1s-.6 0-.9-.1v-2.3c.3.1.6.1.9.1s.6 0 .9-.1v2.3zm0-3.2v-.6c1.1-.3 2-1.3 2-2.5 0-1.4-1.1-2.5-2.5-2.5S10 9.2 10 10.6c0 1.2.9 2.2 2 2.5v.6c-1.7-.3-3-1.8-3-3.6C9 8.1 10.8 6.3 13 6.3s4 1.8 4 3.8c0 1.8-1.3 3.3-3 3.6z"/>
                  </svg>
                </a>
                {/* LinkedIn */}
                <a href="#" className="social-icon">
                  <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </a>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
