import React from 'react';

const WhyWorkWithUs = () => {
  const points = [
    "24*7 Support",
    "Quick Revisions",
    "Flexible Timings",
    "Trend Reports",
    "Growth Analysis"
  ];

  return (
    <section id="why-work-with-us" className="section-padding">
      <div className="container centered scroll-reveal">
        <div className="section-header centered">
          <span className="badge">why work with us</span>
          <h2 className="text-gradient">We're simply the best at what we do</h2>
        </div>

        <div className="badge-grid">
          {points.map((point, idx) => (
            <div key={idx} className="badge-chip">
              <span className="dot"></span>
              {point}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyWorkWithUs;
