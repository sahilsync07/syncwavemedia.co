import React from 'react';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-glow-1" />
      <div className="hero-glow-2" />
      
      <div className="container hero-container">
        <h1>
          TAILORED CONTENT PRODUCTION AND<br />DISTRIBUTION FOR PODCASTS
        </h1>
        
        <p>
          We help Venture Capital Funds, AI & Tech companies scale their content engine to build influence,<br />expand visibility and have meaningful conversations with the people who matter
        </p>
        
        <button className="button-primary hero-btn">
          Book a call
        </button>

        {/* Floating Elements matched to original */}
        <div className="floating-card float-left-1">
           <div className="flex-row">
             <div className="heart-icon">
                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>
             </div>
             <div>
               <div className="fc-title">
                  <span className="dot-purple"></span> Total likes
               </div>
               <div className="fc-value">63,000</div>
             </div>
           </div>
        </div>

        <div className="floating-card float-left-2">
            <div className="fc-title mb-10">
                <span className="dot-purple"></span> Last 6 Months
            </div>
            <div className="chart-bars">
                <div className="chart-bar" style={{height: '20%'}}></div>
                <div className="chart-bar" style={{height: '35%'}}></div>
                <div className="chart-bar" style={{height: '30%'}}></div>
                <div className="chart-bar" style={{height: '50%'}}></div>
                <div className="chart-bar" style={{height: '65%'}}></div>
                <div className="chart-bar" style={{height: '90%'}}></div>
                <div className="chart-bar" style={{height: '40%'}}></div>
                <div className="chart-bar" style={{height: '100%'}}></div>
            </div>
            <div className="chart-labels">
               <span>Day counts</span>
               <span>91,000+</span>
            </div>
        </div>

        <div className="floating-card float-right-1">
            <div className="fc-socials">
                <div className="fc-social-icon"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8v-7.04H7.5v-2.76H10V9.82c0-2.38 1.4-3.71 3.52-3.71 1.05 0 2.14.19 2.14.19v2.36h-1.2c-1.19 0-1.56.74-1.56 1.5v1.8h2.64l-.42 2.76h-2.22v7.04c4.56-.93 8-4.96 8-9.8z"/></svg></div>
                <div className="fc-social-icon"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M21.58 7.19c-.23-.86-.91-1.54-1.77-1.77C18.25 5 12 5 12 5s-6.25 0-7.81.42c-.86.23-1.54.91-1.77 1.77C2 8.75 2 12 2 12s0 3.25.42 4.81c.23.86.91 1.54 1.77 1.77C5.75 19 12 19 12 19s6.25 0 7.81-.42c.86-.23 1.54-.91 1.77-1.77C22 15.25 22 12 22 12s0-3.25-.42-4.81zM10 15V9l5.2 3-5.2 3z"/></svg></div>
            </div>
        </div>

        <div className="floating-card float-right-2">
            <div className="fc-table-header">
                <div>Total Views</div>
                <div style={{color:'white', fontSize:'10px'}}>Last 7 days</div>
            </div>
            <div className="fc-table-row"><span>Day 1</span><span className="fc-table-val">+1000</span></div>
            <div className="fc-table-row"><span>Day 2</span><span className="fc-table-val">+2.44K</span></div>
            <div className="fc-table-row"><span>Day 3</span><span className="fc-table-val">+800</span></div>
            <div className="fc-table-row"><span>Day 4</span><span className="fc-table-val">+101K</span></div>
            <div className="fc-table-row"><span>Day 5</span><span className="fc-table-val">+500K</span></div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
