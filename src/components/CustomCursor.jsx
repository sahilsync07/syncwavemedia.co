import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const CustomCursor = () => {
  const outerRef = useRef(null);
  const dotRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const outer = outerRef.current;
    const dot = dotRef.current;
    const textEl = textRef.current;

    // Set initial offscreen positions
    gsap.set([outer, dot], { xPercent: -50, yPercent: -50 });

    // Instantiation of quickTo handles (bypasses full timeline overhead)
    const xDotTo = gsap.quickTo(dot, "x", { duration: 0.1, ease: "power3" });
    const yDotTo = gsap.quickTo(dot, "y", { duration: 0.1, ease: "power3" });

    const xOuterTo = gsap.quickTo(outer, "x", { duration: 0.4, ease: "power2.out" });
    const yOuterTo = gsap.quickTo(outer, "y", { duration: 0.4, ease: "power2.out" });

    const handleMouseMove = (e) => {
      xDotTo(e.clientX);
      yDotTo(e.clientY);
      xOuterTo(e.clientX);
      yOuterTo(e.clientY);
    };

    const handleMouseOver = (e) => {
      const target = e.target;
      const interactiveEl = target.closest('button, a, .video-card, .short-card, .clickable');
      
      if (interactiveEl) {
        if (interactiveEl.classList.contains('video-card') || interactiveEl.classList.contains('short-card')) {
          gsap.to(outer, { 
            scale: 2.2, 
            borderColor: 'var(--accent-magenta)', 
            backgroundColor: 'rgba(217, 70, 239, 0.1)',
            duration: 0.3 
          });
          if (textEl) {
            textEl.innerText = 'PLAY';
            gsap.to(textEl, { opacity: 1, duration: 0.2 });
          }
        } else {
          gsap.to(outer, { 
            scale: 1.6, 
            borderColor: 'var(--accent-indigo)', 
            backgroundColor: 'rgba(99, 102, 241, 0.1)',
            duration: 0.3 
          });
          if (textEl) {
            textEl.innerText = 'VIEW';
            gsap.to(textEl, { opacity: 1, duration: 0.2 });
          }
        }
      } else {
        gsap.to(outer, { 
          scale: 1.0, 
          borderColor: 'rgba(99, 102, 241, 0.6)', 
          backgroundColor: 'transparent',
          duration: 0.3 
        });
        if (textEl) {
          gsap.to(textEl, { opacity: 0, duration: 0.2 });
        }
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  return (
    <>
      <div 
        ref={outerRef} 
        className="custom-cursor-outer" 
        style={{ 
          position: 'fixed', 
          top: 0, 
          left: 0, 
          width: '32px', 
          height: '32px', 
          border: '1.5px solid rgba(99, 102, 241, 0.6)', 
          borderRadius: '50%', 
          pointerEvents: 'none', 
          zIndex: 9999,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          overflow: 'hidden'
        }}
      >
        <span 
          ref={textRef} 
          style={{ 
            color: 'white', 
            fontSize: '8px', 
            fontWeight: '700', 
            letterSpacing: '0.05em',
            opacity: 0,
            transition: 'opacity 0.2s'
          }}
        />
      </div>
      <div 
        ref={dotRef} 
        className="custom-cursor-dot" 
        style={{ 
          position: 'fixed', 
          top: 0, 
          left: 0, 
          width: '6px', 
          height: '6px', 
          backgroundColor: 'var(--accent-magenta)', 
          borderRadius: '50%', 
          pointerEvents: 'none', 
          zIndex: 9999 
        }} 
      />
    </>
  );
};

export default CustomCursor;
