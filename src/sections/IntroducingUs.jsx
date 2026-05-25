import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const IntroducingUs = () => {
  const containerRef = useRef(null);
  const textRef = useRef(null);
  const cardsWrapperRef = useRef(null);
  
  const [isPlayingMain, setIsPlayingMain] = useState(false);
  const [hoveredShort, setHoveredShort] = useState(null);

  const shorts = [
    {
      id: 1,
      title: "Business Without Bullsh-t",
      views: "60K+ Views",
      wistiaId: "wwlq9568h8",
      platform: "YouTube"
    },
    {
      id: 2,
      title: "Naftali Moses",
      views: "300K+ Views",
      wistiaId: "1dewosnj6d",
      platform: "LinkedIn"
    },
    {
      id: 3,
      title: "The Evolving Man",
      views: "2M+ Views",
      wistiaId: "9pe3on5x5s",
      platform: "TikTok"
    },
    {
      id: 4,
      title: "Sourcery",
      views: "30K+ Views",
      wistiaId: "tni2sji1uc",
      platform: "Reels"
    }
  ];

  useEffect(() => {
    const container = containerRef.current;
    const cards = gsap.utils.toArray('.short-card');
    const textNode = textRef.current;
    if (!textNode || !container) return;

    // Split text into words for word-by-word reveal
    const words = textNode.textContent.trim().split(/\s+/);
    textNode.innerHTML = "";
    
    words.forEach((word) => {
      const span = document.createElement("span");
      span.textContent = word + " ";
      span.style.display = "inline-block";
      span.style.marginRight = "8px";
      span.style.opacity = "0.15";
      span.style.color = "rgba(255, 255, 255, 0.15)";
      span.style.transition = "color 0.3s, text-shadow 0.3s";
      textNode.appendChild(span);
    });

    const spanElements = textNode.querySelectorAll("span");

    // GSAP Master scrollytelling timeline
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        start: "top top",
        end: "+=220%", // Length of pinned interaction
        pin: true,
        scrub: 1,
        invalidateOnRefresh: true
      }
    });

    // Step 1: Word-by-word reveal
    tl.to(spanElements, {
      opacity: 1,
      color: "#FFFFFF",
      textShadow: "0px 0px 15px rgba(217, 70, 239, 0.4)",
      stagger: 0.04,
      ease: "power1.out"
    }, 0);

    // Step 2: Fade & Scale Shorts cards into view
    tl.fromTo(cardsWrapperRef.current,
      { opacity: 0, scale: 0.8 },
      { opacity: 1, scale: 1, ease: "power2.out" },
      0.3
    );

    // Step 3: Fan out cards outwards from a stack (x: 0, rotate: 0) to fanned layout
    const fanningConfig = [
      { x: -100, rotate: -8 },
      { x: -30, rotate: -3 },
      { x: 30, rotate: 3 },
      { x: 100, rotate: 8 }
    ];

    cards.forEach((card, idx) => {
      const cfg = fanningConfig[idx] || { x: 0, rotate: 0 };
      tl.fromTo(card,
        { x: 0, rotate: 0 },
        { x: cfg.x, rotate: cfg.rotate, ease: "sine.inOut" },
        0.4
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach(t => {
        if (t.trigger === container) t.kill();
      });
    };
  }, []);

  return (
    <section ref={containerRef} id="introducing-us" className="introducing-us-scrolly-container">
      <div className="sticky-element bg-dots" style={{ padding: '80px 0' }}>
        <div className="container" style={{ display: 'flex', flexDirection: 'column', height: '100%', justifyContent: 'space-between' }}>
          
          {/* Header */}
          <div className="section-header centered" style={{ marginBottom: '24px' }}>
            <span className="badge badge-magenta">Introducing Us</span>
            <h2 ref={textRef} className="introducing-scrolly-text">
              We help you turn raw conversations into extraordinary stories that fuel trust and drive deal flow.
            </h2>
          </div>

          {/* Main 16:9 Showcase Video Player */}
          <div className="video-showcase-wrapper" style={{ flexGrow: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%', maxWidth: '800px', margin: '0 auto' }}>
            <div 
              className="premium-card video-showcase-card"
              style={{ boxShadow: '0 0 30px rgba(217, 70, 239, 0.25)', border: '1px solid rgba(217, 70, 239, 0.3)' }}
              onClick={() => setIsPlayingMain(true)}
            >
              {!isPlayingMain ? (
                <>
                  <img 
                    src="https://images.unsplash.com/photo-1478737270239-2f02b77fc618?w=1200&q=80" 
                    alt="Production Engine Showcase" 
                    className="video-showcase-thumbnail"
                  />
                  <div className="play-btn-circle">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                  <div style={{ position: 'absolute', bottom: '20px', left: '20px', zIndex: 10 }}>
                    <p style={{ color: 'white', fontWeight: '700', fontSize: '14px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                      Watch Our Production Engine Reel
                    </p>
                  </div>
                </>
              ) : (
                <div style={{ position: 'relative', width: '100%', height: '100%' }}>
                  <iframe 
                    width="100%" 
                    height="100%" 
                    src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1" 
                    title="YouTube video player" 
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    allowFullScreen
                    style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', border: '0', borderRadius: 'inherit' }}
                  />
                  <button 
                    onClick={(e) => {
                      e.stopPropagation();
                      setIsPlayingMain(false);
                    }}
                    style={{ position: 'absolute', top: '15px', right: '15px', background: 'rgba(0,0,0,0.8)', border: 'var(--border-glass)', borderRadius: '50%', width: '36px', height: '36px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', zIndex: 20 }}
                  >
                    ✕
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Sub-Grid (9:16 Shorts Engine) with Wistia Video Embeds */}
          <div ref={cardsWrapperRef} className="shorts-container">
            <div className="shorts-grid">
              {shorts.map((s) => (
                <div 
                  key={s.id} 
                  className="short-card"
                >
                  <div className="short-platform-icon" style={{ zIndex: 4 }}>
                    {s.platform === 'YouTube' && '▶'}
                    {s.platform === 'LinkedIn' && 'in'}
                    {s.platform === 'TikTok' && '🎵'}
                    {s.platform === 'Reels' && '📸'}
                  </div>

                  <iframe 
                    src={`https://fast.wistia.net/embed/iframe/${s.wistiaId}?videoFoam=true&autoPlay=true&silentAutoPlay=true&loop=true&playbar=false&smallPlayButton=false&volumeControl=false&fullscreenButton=false&controlsVisibleOnLoad=false&endVideoBehavior=loop`}
                    title={s.title}
                    allow="autoplay; fullscreen"
                    allowTransparency="true"
                    frameBorder="0"
                    scrolling="no"
                    className="wistia_embed short-video-loop"
                    name="wistia_embed"
                    width="100%"
                    height="100%"
                    style={{
                      position: 'absolute',
                      inset: 0,
                      width: '100%',
                      height: '100%',
                      border: 'none',
                      borderRadius: 'inherit',
                      zIndex: 1
                    }}
                  />

                  <div className="short-card-overlay" style={{ pointerEvents: 'none' }}>
                    <span className="short-views-badge">{s.views}</span>
                    <h4 className="short-card-title">{s.title}</h4>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default IntroducingUs;
