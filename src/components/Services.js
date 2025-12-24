import React from 'react';

const Services = () => {
  const services = [
    { title: '24/7 Support', desc: 'Always available to assist you with seamless service and expert support.', icon: '🛠️' },
    { title: 'Secure Integrations', desc: 'Safe and reliable connections prioritized with encrypted transactions.', icon: '🔒' },
    { title: 'Progress Tracking', desc: 'Stay updated with regular reports and transparency at every stage.', icon: '📊' },
    { title: 'Innovation Lab', desc: 'Cutting-edge solutions staying updated with latest trends and tech.', icon: '🚀' },
  ];

  return (
    <section className="services-section">
      <div style={{ textAlign: 'center', marginBottom: '60px' }}>
        <h2 className="section-title">What We <span>Offer</span></h2>
        <p className="section-subtitle" style={{ margin: '0 auto' }}>
          Our services are specifically designed to meet your business needs and drive growth.
        </p>
      </div>

      <div className="grid-offer">
        {services.map((service, index) => (
            <div key={index} className="card service-card">
            <div className="service-icon">{service.icon}</div>
            <h3>{service.title}</h3>
            <p>{service.desc}</p>
            <button className="btn-secondary">Learn More</button>
            </div>
        ))}
        </div>
    </section>
  );
};

export default Services;