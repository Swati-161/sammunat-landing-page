import React from 'react';

const Benefits = () => {
  return (
    <section className="benefits-section">
      <div style={{ textAlign: 'left', marginBottom: '50px' }}>
        <h2 className="section-title">Benefits of Partnering with  <span> Sammunat </span> LLC</h2>
        <p className="section-subtitle">
          We provide more than just code; we help you stand out, attract top talent, 
          generate quality leads, and secure strategic investments.
        </p>
      </div>

      <div className="grid-3">
        <div className="card benefit-card">
          <div className="benefit-icon">💡</div>
          <h3>Thought Leadership</h3>
          <p>Position your brand as an industry expert with cutting-edge tech integration and insightful strategy.</p>
        </div>

        <div className="card benefit-card">
          <div className="benefit-icon">👥</div>
          <h3>Better Hiring</h3>
          <p>Attract top-tier tech professionals by showcasing your commitment to modern, scalable infrastructure.</p>
        </div>

        <div className="card benefit-card">
          <div className="benefit-icon">📈</div>
          <h3>Lead Generation</h3>
          <p>Convert visitors into customers with high-performance web experiences and data-driven CRM systems.</p>
        </div>
      </div>
    </section>
  );
};

export default Benefits;