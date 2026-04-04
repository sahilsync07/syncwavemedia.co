import React from 'react';

const Process = () => {
  const steps = [
    {
      number: '01',
      title: 'Strategic Research',
      description: 'We deep dive into your niche to identify the exactly what your audience is searching for and what gaps exist in the current market.',
      icon: (
        <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      )
    },
    {
      number: '02',
      title: 'Expert Scripting',
      description: 'Our team crafts compelling scripts that hook your viewers in the first 3 seconds and keep them engaged until the very end.',
      icon: (
        <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
        </svg>
      )
    },
    {
      number: '03',
      title: 'Premium Editing',
      description: 'We use high-end visual storytelling techniques, sound design, and motion graphics to make your content stand out from the noise.',
      icon: (
        <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
        </svg>
      )
    }
  ];

  return (
    <section id="process" className="section-padding">
      <div className="container scroll-reveal">
        <div className="section-header centered">
          <span className="badge">How it works</span>
          <h2 className="text-gradient">We handle everything, from content creation to platform adaptation</h2>
        </div>

        <div className="grid-3">
          {steps.map((step, idx) => (
            <div key={idx} className="glass-card process-card">
              <div className="process-number">
                {step.number}
              </div>
              <div className="process-icon">{step.icon}</div>
              <h3>{step.title}</h3>
              <p>
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
