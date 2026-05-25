import React from 'react';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import IntroducingUs from './sections/IntroducingUs';
import Process from './sections/Process';
import CustomerStory from './sections/CustomerStory';
import WhyWorkWithUs from './sections/WhyWorkWithUs';
import FAQ from './sections/FAQ';
import Footer from './components/Footer';
import SmoothScroll from './components/SmoothScroll';
import CustomCursor from './components/CustomCursor';
import './index.css';

function App() {
  return (
    <div className="app">
      {/* Scroll & Cursor Orchestration */}
      <SmoothScroll />
      <CustomCursor />
      
      {/* High-Fidelity Noise Texture Overlay */}
      <div className="noise-overlay" />

      {/* Structural Vertical Grid Lines */}
      <div className="grid-lines-overlay">
        <div className="grid-line" />
        <div className="grid-line" />
        <div className="grid-line" />
        <div className="grid-line" />
        <div className="grid-line" />
      </div>

      {/* Page Sections */}
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
