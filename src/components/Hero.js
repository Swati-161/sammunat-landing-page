import React from 'react';

const Hero = () => {
  return (
    <section className="hero-gradient">
      <div className="hero-content" style={{ textAlign: 'center', marginBottom: '60px' }}>
        <h1 className="hero-title">
          Innovating Digital Solutions <br /> 
          <span>for Your Business</span>
        </h1>
        <p className="hero-subtitle" style={{ maxWidth: '700px', margin: '20px auto' }}>
          Building long-term partnerships to drive your success with custom tech solutions, 
          from enterprise CRMs to high-performance web applications.
        </p>
        <div className="hero-btns" style={{ marginTop: '30px', display: 'flex', gap: '15px', justifyContent: 'center' }}>
          <button>Get Started</button>
          <button className="btn-secondary">View Portfolio</button>
        </div>
      </div>

        <div className="stats-container">
        <div className="stat-item">
            <span className="stat-number">250+</span>
            <span className="stat-label">Completed Projects</span>
        </div>
        <div className="stat-item">
            <span className="stat-number">800+</span>
            <span className="stat-label">Happy Customers</span>
        </div>
        <div className="stat-item">
            <span className="stat-number">80+</span>
            <span className="stat-label">Expert Employees</span>
        </div>
        <div className="stat-item">
            <span className="stat-number">4.5+</span>
            <span className="stat-label">Average Rating</span>
        </div>
        </div>
    </section>
  );
};

export default Hero;