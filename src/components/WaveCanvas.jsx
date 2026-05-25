import React, { useEffect, useRef } from 'react';

const WaveCanvas = () => {
  const canvasRef = useRef(null);
  const mouseRef = useRef({ x: 0, y: 0, targetX: 0, targetY: 0, active: false });
  const scrollRef = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationId;
    let width = (canvas.width = canvas.offsetWidth);
    let height = (canvas.height = canvas.offsetHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = canvas.offsetWidth;
      height = canvas.height = canvas.offsetHeight;
    };

    window.addEventListener('resize', handleResize);

    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current.targetX = e.clientX - rect.left;
      mouseRef.current.targetY = e.clientY - rect.top;
      mouseRef.current.active = true;
    };

    const handleMouseLeave = () => {
      mouseRef.current.active = false;
    };

    const handleScroll = () => {
      scrollRef.current = window.scrollY;
    };

    const parentNode = canvas.parentNode;
    if (parentNode) {
      parentNode.addEventListener('mousemove', handleMouseMove);
      parentNode.addEventListener('mouseleave', handleMouseLeave);
    }
    window.addEventListener('scroll', handleScroll);

    let phase = 0;

    const draw = () => {
      if (!ctx || !canvas) return;
      ctx.clearRect(0, 0, width, height);

      // Smooth interpolation for mouse position
      mouseRef.current.x += (mouseRef.current.targetX - mouseRef.current.x) * 0.08;
      mouseRef.current.y += (mouseRef.current.targetY - mouseRef.current.y) * 0.08;

      const linesCount = 5;
      const particleCount = 80; // Interpolation steps
      const scrollY = scrollRef.current;
      const scrollFactor = scrollY * 0.001;
      const baseFreq = 0.004 + scrollFactor * 0.002;
      const baseAmp = Math.max(10, 80 - scrollY * 0.06);
      const rippleRadius = 250;

      for (let l = 0; l < linesCount; l++) {
        ctx.beginPath();
        const lineOffset = l * (Math.PI / linesCount) * 1.5;
        const opacity = (1 - l / linesCount) * 0.35 + 0.05;

        // Linear gradient for fluid color changes across the viewport
        const gradient = ctx.createLinearGradient(0, 0, width, 0);
        gradient.addColorStop(0, `rgba(99, 102, 241, ${opacity * 0.2})`); // Indigo
        gradient.addColorStop(0.5, `rgba(6, 182, 212, ${opacity})`);       // Soundwave Cyan Accent Glow
        gradient.addColorStop(1, `rgba(217, 70, 239, ${opacity * 0.2})`);   // Magenta

        ctx.strokeStyle = gradient;
        ctx.lineWidth = l === 0 ? 3.0 : 1.5;

        for (let i = 0; i <= particleCount; i++) {
          const x = (width / particleCount) * i;
          let y = height / 2;

          const sineVal = Math.sin(x * baseFreq + phase + lineOffset);
          const cosineVal = Math.cos(x * (baseFreq * 0.6) - phase + lineOffset);
          let amp = baseAmp * (1.1 - l * 0.12);

          // Mouse local ripple calculation
          if (mouseRef.current.active) {
            const dx = x - mouseRef.current.x;
            const dist = Math.abs(dx);
            if (dist < rippleRadius) {
              const force = (1 - dist / rippleRadius);
              amp += force * 45 * Math.sin(phase * 4 + l);
            }
          }

          y += (sineVal * cosineVal) * amp;

          if (i === 0) {
            ctx.moveTo(x, y);
          } else {
            ctx.lineTo(x, y);
          }
        }
        ctx.stroke();
      }

      phase += 0.012 + (mouseRef.current.active ? 0.008 : 0);
      animationId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', handleResize);
      if (parentNode) {
        parentNode.removeEventListener('mousemove', handleMouseMove);
        parentNode.removeEventListener('mouseleave', handleMouseLeave);
      }
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      className="wave-canvas" 
      style={{ 
        position: 'absolute', 
        top: 0, 
        left: 0, 
        width: '100%', 
        height: '100%', 
        pointerEvents: 'none',
        zIndex: 1
      }} 
    />
  );
};

export default WaveCanvas;
