import { useEffect } from 'react';
import Lenis from 'lenis';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const SmoothScroll = () => {
  useEffect(() => {
    // 1. Initialize Lenis with custom damping coefficients
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Custom premium easeOutExponential
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1.0,
      infinite: false,
    });

    // 2. Synchronize ScrollTrigger with Lenis updates
    lenis.on('scroll', ScrollTrigger.update);

    // 3. Bind Lenis animation frame updates to the GSAP Ticker
    const updateRaf = (time) => {
      // Lenis expects milliseconds, GSAP ticker provides seconds
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(updateRaf);
    gsap.ticker.lagSmoothing(0); // Prevents sudden jumps during heavy rendering load

    // 4. Handle window resizing updates
    const resizeObserver = new ResizeObserver(() => {
      ScrollTrigger.refresh();
    });
    resizeObserver.observe(document.body);

    return () => {
      lenis.destroy();
      gsap.ticker.remove(updateRaf);
      resizeObserver.disconnect();
    };
  }, []);

  return null;
};

export default SmoothScroll;
