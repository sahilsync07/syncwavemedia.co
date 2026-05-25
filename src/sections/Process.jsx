import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Process = () => {
  const containerRef = useRef(null);
  const trackRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const track = trackRef.current;
    if (!container || !track) return;

    // Calculate dynamic translation value on layout refresh
    const getXTranslation = () => -(track.scrollWidth - window.innerWidth);

    const scrollAnim = gsap.to(track, {
      x: getXTranslation,
      ease: "none", // Must be linear for precise scroll-mapping
      scrollTrigger: {
        trigger: container,
        pin: true,
        scrub: 1, // Inertia damping factor
        start: "top top",
        end: () => `+=${track.scrollWidth - window.innerWidth}`,
        invalidateOnRefresh: true, // Recalculates coordinates on resize
      }
    });

    // Sequential entrance reveal for internal steps on track entry
    const cards = track.querySelectorAll('.process-card');
    cards.forEach((card, i) => {
      gsap.fromTo(card, 
        { opacity: 0, y: 50 },
        { 
          opacity: 1, 
          y: 0, 
          duration: 0.6,
          ease: "power2.out",
          scrollTrigger: {
            trigger: card,
            containerAnimation: scrollAnim, // Binds trigger to horizontal timeline coordinate
            start: "left 90%",
            toggleActions: "play none none reverse",
          }
        }
      );
    });

    return () => {
      if (scrollAnim.scrollTrigger) scrollAnim.scrollTrigger.kill();
      scrollAnim.kill();
    };
  }, []);

  const steps = [
    {
      number: '01',
      kicker: 'Setup',
      title: 'Creative Setup',
      description: 'Custom hardware recommendations, workspace setups, and brand asset alignment to establish an elite studio aesthetic.',
      icon: (
        <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 18.75a6 6 0 0 0 6-6v-1.5m-6 7.5a6 6 0 0 1-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 0 1-3-3V4.5a3 3 0 1 1 6 0v8.25a3 3 0 0 1-3 3Z" />
        </svg>
      )
    },
    {
      number: '02',
      kicker: 'Launch',
      title: 'Rapid Editing',
      description: '48h turnaround editing schedules with custom kinetic text, sound design, soundwave cues, and visual hook iterations.',
      icon: (
        <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="m15.75 10.5 4.72-4.72a.75.75 0 0 1 1.28.53v11.38a.75.75 0 0 1-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25h-9A2.25 2.25 0 0 0 2.25 7.5v9a2.25 2.25 0 0 0 2.25 2.25Z" />
        </svg>
      )
    },
    {
      number: '03',
      kicker: 'Scale',
      title: 'Multi-Channel Growth',
      description: 'Syndicated content distribution across Spotify, Apple Podcasts, YouTube Shorts, LinkedIn, and Twitter to build venture brand authority.',
      icon: (
        <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 14.25v2.25m3-4.5v4.5m3-6.75v6.75m3-9v9M6 20.25h12A2.25 2.25 0 0 0 20.25 18V6A2.25 2.25 0 0 0 18 3.75H6A2.25 2.25 0 0 0 3.75 6v12A2.25 2.25 0 0 0 6 20.25Z" />
        </svg>
      )
    }
  ];

  return (
    <div ref={containerRef} id="process" className="process-scrolly-container">
      <div className="sticky-element bg-dots" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        <div className="container" style={{ marginBottom: '48px' }}>
          <span className="badge">The Production Pipeline</span>
          <h2 className="text-gradient-white" style={{ fontSize: 'clamp(28px, 4.5vw, 48px)', maxWidth: '800px' }}>
            We handle everything, from content creation to platform adaptation.
          </h2>
        </div>

        <div className="horizontal-window">
          <div ref={trackRef} className="horizontal-track">
            {steps.map((step, idx) => (
              <div key={idx} className="premium-card process-card">
                <div className="process-card-bg-number">{step.number}</div>
                
                <div className="process-card-content">
                  <div className="process-dot-connector">
                    <div className="process-dot" />
                    <div className="process-line" style={{
                      backgroundImage: 'repeating-linear-gradient(90deg, var(--accent-indigo) 0px, var(--accent-indigo) 4px, transparent 4px, transparent 8px)',
                      backgroundSize: '8px 100%',
                      animation: 'flowLine 1.5s linear infinite'
                    }} />
                  </div>

                  <div className="process-icon-wrapper">
                    {step.icon}
                  </div>
                  
                  <span className="kicker" style={{ fontSize: '10px', padding: '2px 8px', marginBottom: '8px' }}>{step.kicker}</span>
                  <h3>{step.title}</h3>
                  <p style={{ marginTop: '8px', color: 'var(--text-secondary)' }}>{step.description}</p>
                </div>
              </div>
            ))}

            {/* CTA Card at the end of the track */}
            <div className="premium-card process-card process-cta-card">
              <div className="process-card-bg-number">➔</div>
              
              <div className="process-card-content">
                <div className="process-dot-connector">
                  <div className="process-dot" style={{ backgroundColor: 'var(--accent-magenta)' }} />
                  <div className="process-line" style={{
                    backgroundImage: 'repeating-linear-gradient(90deg, var(--accent-magenta) 0px, var(--accent-magenta) 4px, transparent 4px, transparent 8px)',
                    backgroundSize: '8px 100%',
                    animation: 'flowLine 1.5s linear infinite'
                  }} />
                </div>

                <div className="process-icon-wrapper" style={{ borderColor: 'rgba(217, 70, 239, 0.2)' }}>
                  <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                  </svg>
                </div>
                
                <span className="badge badge-magenta" style={{ fontSize: '10px', padding: '2px 8px', marginBottom: '8px' }}>Scale</span>
                <h3>Ready to scale?</h3>
                <p style={{ marginTop: '8px', color: 'var(--text-secondary)' }}>Let's map out a customized content funnel for your venture brand today.</p>
                
                <button 
                  className="btn btn-magenta" 
                  style={{ marginTop: '20px', width: '100%' }}
                  onClick={() => {
                    const el = document.getElementById('footer');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  Book Discovery Call
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Styles for line animation */}
      <style>{`
        @keyframes flowLine {
          to {
            background-position: 24px 0;
          }
        }
      `}</style>
    </div>
  );
};

export default Process;
