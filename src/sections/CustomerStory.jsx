import React from 'react';

const CustomerStory = () => {
  const testimonials = [
    {
      name: "Andy Oury",
      quote: "The quality of work and delivery time are unmatched. They truly develop a unique brand style, giving you a one-of-a-kind presence.",
      role: "BWB Podcast Host",
      image: "https://framerusercontent.com/images/E950CKcOidEKjctbpSBeUV5Kb1Y.jpeg"
    },
    {
      name: "Ronson Moses",
      quote: "They've been transformative for my podcast's growth and I constantly receive compliments on the visual style they developed.",
      role: "Podcast Host",
      image: "https://framerusercontent.com/images/J5M8LiKESaZhfImYgVp78MNeMT8.png"
    },
    {
      name: "Benjamin Goresky",
      quote: "They helped refine my brand style and created some very creative videos for my podcast. Clear communication, fast turnarounds, and easy to work with!",
      role: "The EVM Podcast Host",
      image: "https://framerusercontent.com/images/E950CKcOidEKjctbpSBeUV5Kb1Y.jpeg"
    }
  ];

  return (
    <section id="customer-story" className="section-padding secondary-bg">
      <div className="container scroll-reveal">
        <div className="section-header centered">
          <span className="badge">Customer story</span>
          <h2 className="text-gradient large">Game changer! Helped me connect with my audience like never before</h2>
        </div>

        <div className="testimonial-grid">
          {testimonials.map((t, idx) => (
            <div key={idx} className="glass-card testimonial-card">
              <p className="quote">"{t.quote}"</p>
              <div className="speaker-profile">
                <img src={t.image} alt={t.name} />
                <div className="speaker-info">
                  <h3>{t.name}</h3>
                  <span>{t.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="stat-grid">
          <div className="stat-box">
            <span className="stat-value">500+</span>
            <span className="stat-label">Videos created</span>
          </div>
          <div className="stat-box">
            <span className="stat-value">50M+</span>
            <span className="stat-label">Million+ views</span>
          </div>
          <div className="stat-box">
            <span className="stat-value">1M+</span>
            <span className="stat-label">Total Viewcount (hrs)</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomerStory;
