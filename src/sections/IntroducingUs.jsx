import React from 'react';

const IntroducingUs = () => {
  const cards = [
    {
      title: "Business Without Bullsh*t",
      views: "60k+ Views",
      image: "https://framerusercontent.com/images/E950CKcOidEKjctbpSBeUV5Kb1Y.jpeg"
    },
    {
      title: "Naftali Moses",
      views: "300k+ Views",
      image: "https://framerusercontent.com/images/J5M8LiKESaZhfImYgVp78MNeMT8.png"
    },
    {
      title: "The Evolving Man",
      views: "2M+ Views",
      image: "https://framerusercontent.com/images/E950CKcOidEKjctbpSBeUV5Kb1Y.jpeg"
    },
    {
      title: "Sourcery",
      views: "30k+ Views",
      image: "https://framerusercontent.com/images/J5M8LiKESaZhfImYgVp78MNeMT8.png"
    }
  ];

  return (
    <section id="introducing-us" className="section-padding">
      <div className="container scroll-reveal">
        <div className="section-header centered">
          <span className="badge">INTRODUCING US</span>
          <h2 className="text-gradient">We help you turn raw conversations into extraordinary stories that fuel trust and drive deal flow</h2>
        </div>

        <div className="video-grid">
          {cards.map((card, idx) => (
            <div key={idx} className="video-card">
              <div className="video-card-inner">
                <img src={card.image} alt={card.title} />
                <div className="video-card-overlay">
                  <div className="play-button">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
                <div className="video-card-info">
                  <h3>{card.title}</h3>
                  <span className="views">{card.views}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IntroducingUs;
