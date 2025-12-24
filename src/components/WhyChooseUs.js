import React from 'react';

const WhyChooseUs = () => {
  return (
    <section className="why-choose-us">
      <div style={{ textAlign: 'center', marginBottom: '60px' }}>
        <h2 className="section-title">Why Choose <span>Sammunat</span> LLC</h2>
        <p className="section-subtitle" style={{ margin: '0 auto' }}>
          We bring solutions to make life easier for our clients through technical expertise and creative design.
        </p>
      </div>

      <div className="grid-3">
        <div className="card why-card">
          <div className="why-icon">🎨</div>
          <h3>Professional Design</h3>
          <p>Stand out with stunning visuals and a sleek, user-friendly design tailored to your brand identity.</p>
        </div>

        <div className="card why-card">
          <div className="why-icon">🛠️</div>
          <h3>Top-Notch Support</h3>
          <p>Our dedicated support team is always ready to assist you, ensuring smooth operations and quick solutions.</p>
        </div>

        <div className="card why-card">
          <div className="why-icon">🔑</div>
          <h3>Exclusive Tools</h3>
          <p>Unlock high-quality, exclusive assets and premium templates designed to elevate your brand presence.</p>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;