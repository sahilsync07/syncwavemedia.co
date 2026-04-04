import React, { useState } from 'react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: 'What kind of content do you specialize in?',
      answer: 'We specialize in high-performance video content for personal brands and businesses. This includes YouTube videos, podcasts, and social media shorts that are strategically designed to maximize engagement and authority.'
    },
    {
      question: 'How long does the typical production process take?',
      answer: 'Our typical turnaround time for a single video project is around 7-10 business days. For ongoing podcast management, we work with a weekly schedule to ensure consistent delivery.'
    },
    {
      question: 'Can you help with distribution as well?',
      answer: 'Yes! We don’t just produce the content; we also help you optimize and distribute it across all major platforms, including YouTube, Instagram, TikTok, and LinkedIn.'
    },
    {
      question: 'What is the pricing model?',
      answer: 'Our pricing depends on the scope and frequency of the projects. We offer both project-based and retainer-based options. Book a call with us to get a custom quote for your needs.'
    }
  ];

  return (
    <section id="faqs" className="section-padding faq-section">
      <div className="container scroll-reveal">
        <div className="section-header">
          <h2 className="text-gradient">Frequently Asked Questions</h2>
          <p>
            Everything you need to know about scaling your content with SyncwaveMedia.
          </p>
        </div>

        <div className="faq-list">
          {faqs.map((faq, idx) => (
            <div key={idx} className={`glass-card faq-item ${openIndex === idx ? 'active' : ''}`}>
               <button 
                  onClick={() => setOpenIndex(openIndex === idx ? -1 : idx)}
                  className="faq-button"
               >
                  <span className="faq-question">{faq.question}</span>
                  <div className="faq-icon">
                     <svg viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2 4L6 8L10 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                     </svg>
                  </div>
               </button>
               <div className="faq-answer">
                  {faq.answer}
               </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
