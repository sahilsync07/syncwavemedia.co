import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import IntroducingUs from './sections/IntroducingUs';
import Process from './sections/Process';
import CustomerStory from './sections/CustomerStory';
import WhyWorkWithUs from './sections/WhyWorkWithUs';
import FAQ from './sections/FAQ';
import Footer from './components/Footer';
import './index.css';

function App() {
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, observerOptions);

    document.querySelectorAll('.scroll-reveal').forEach(el => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="app">
      <Navbar />
      <Hero />
      <IntroducingUs />
      <Process />
      <CustomerStory />
      <WhyWorkWithUs />
      <FAQ />
      <Footer />
    </div>
  );
}

export default App;
