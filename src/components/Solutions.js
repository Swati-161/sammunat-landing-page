import React from 'react';

const Solutions = () => {
  return (
    <section className="solutions-section">
      <div style={{ textAlign: 'left', marginBottom: '50px' }}>
        <h2 className="section-title">Our Core <span>Solutions</span></h2>
        <p className="section-subtitle">
          We specialize in high-performance web development, mobile applications, and 
          strategic digital marketing tailored for seamless business workflows.
        </p>
      </div>

      <div className="grid-3">
        <div className="card solution-card">
          <div className="solution-tag">Enterprise</div>
          <h3>Web Development</h3>
          <p>Build robust, scalable websites and web apps using modern frameworks like React and Next.js.</p>
          <button className="btn-primary">Explore Solutions</button>
        </div>

        <div className="card solution-card">
          <div className="solution-tag">Mobile</div>
          <h3>App Development</h3>
          <p>Create intuitive, high-performance mobile experiences for Android and iOS that engage users.</p>
          <button className="btn-primary">Start Building</button>
        </div>

        <div className="card solution-card">
          <div className="solution-tag">Growth</div>
          <h3>Digital Marketing</h3>
          <p>Boost your online presence and lead generation through data-driven SEO and social strategies.</p>
          <button className="btn-primary">Learn More</button>
        </div>
      </div>
    </section>
  );
};

export default Solutions;