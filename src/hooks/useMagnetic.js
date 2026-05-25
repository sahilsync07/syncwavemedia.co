import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

export const useMagnetic = () => {
  const elementRef = useRef(null);

  useEffect(() => {
    const el = elementRef.current;
    if (!el) return;

    const handleMouseMove = (e) => {
      const rect = el.getBoundingClientRect();
      const elX = rect.left + rect.width / 2;
      const elY = rect.top + rect.height / 2;

      // Mouse delta coordinates relative to element center
      const deltaX = e.clientX - elX;
      const deltaY = e.clientY - elY;
      const distance = Math.hypot(deltaX, deltaY);

      const threshold = 60; // Max radius to snap/trigger magnetic pull

      if (distance < threshold) {
        // Apply magnetic pull toward cursor (40% interpolation factor)
        gsap.to(el, {
          x: deltaX * 0.4,
          y: deltaY * 0.4,
          ease: "power2.out",
          duration: 0.3
        });
      } else {
        // Return back to origin elastic coordinate
        gsap.to(el, {
          x: 0,
          y: 0,
          ease: "elastic.out(1, 0.3)",
          duration: 0.8
        });
      }
    };

    const handleMouseLeave = () => {
      gsap.to(el, {
        x: 0,
        y: 0,
        ease: "elastic.out(1, 0.3)",
        duration: 0.8
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    el.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      el.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return elementRef;
};
