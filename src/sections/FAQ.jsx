import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: 'How long is the onboarding process?',
      answer: 'Our typical onboarding process takes about 7-10 business days. We coordinate visual branding alignments, map out your first content cycle, and ship pre-configured studio recording packages directly to you.'
    },
    {
      question: 'What equipment do we need on our end?',
      answer: 'We deliver complete hardware packages including broadcast-grade microphones, studio-grade LED lighting, acoustic treatment guides, and zero-latency local recording setups so you look and sound pristine.'
    },
    {
      question: 'Do you handle distribution to all channels?',
      answer: 'Yes. We manage multi-channel syndicate programs across YouTube, Spotify, Apple Podcasts, LinkedIn, and Twitter/X. Every output is optimized specifically for the target platform algorithms.'
    },
    {
      question: 'What is the pricing model?',
      answer: 'We operate on flat monthly retainer plans structured around your content frequency and syndication scope. No hidden hourly fees. Simply predictable premium production.'
    }
  ];

  return (
    <section id="faq" className="section-padding bg-dots">
      <div className="glow-orb glow-indigo-orb" style={{ top: '10%', left: '-10%' }} />
      
      <div className="container faq-container">
        {/* Header */}
        <div className="section-header centered">
          <span className="badge">FAQ</span>
          <h2 className="text-gradient-white" style={{ fontSize: 'clamp(28px, 4.5vw, 48px)' }}>
            Frequently Asked Questions
          </h2>
        </div>

        {/* Accordion Stack */}
        <div className="faq-list">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div 
                key={idx} 
                className={`premium-card faq-item ${isOpen ? 'active' : ''}`}
                style={{
                  borderTop: isOpen ? '1.5px solid var(--accent-indigo)' : '1px solid rgba(255, 255, 255, 0.05)',
                  transition: 'border-color 0.4s var(--ease-premium)'
                }}
              >
                <button 
                  onClick={() => setOpenIndex(isOpen ? -1 : idx)}
                  className="faq-button"
                  aria-expanded={isOpen}
                >
                  <span className="faq-question">{faq.question}</span>
                  <div className="faq-toggle-icon">
                    {/* Plus / Minus SVG indicator */}
                    <svg 
                      width="18" 
                      height="18" 
                      viewBox="0 0 24 24" 
                      fill="none" 
                      stroke="currentColor" 
                      strokeWidth="2" 
                      strokeLinecap="round" 
                      strokeLinejoin="round"
                      style={{
                        transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)',
                        transition: 'transform 0.4s var(--ease-premium)'
                      }}
                    >
                      <line x1="12" y1="5" x2="12" y2="19" />
                      <line x1="5" y1="12" x2="19" y2="12" />
                    </svg>
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                      className="faq-answer-wrapper"
                    >
                      <div className="faq-answer-content">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
