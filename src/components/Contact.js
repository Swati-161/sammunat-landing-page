import React from 'react';

const Contact = () => {
  return (
    <section className="contact-section" id="contact">
      <div style={{ textAlign: 'center', marginBottom: '40px' }}>
        <h2 className="section-title">Ready to <span>Innovate?</span></h2>
        <p className="section-subtitle" style={{ margin: '0 auto' }}>
          Fill out the form below, and our team will get back to you within 24 hours.
        </p>
      </div>

      <div className="contact-container">
        <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
          <div className="form-group">
            <label>Full Name</label>
            <input type="text" placeholder="John Doe" required />
          </div>
          
          <div className="form-group">
            <label>Email Address</label>
            <input type="email" placeholder="john@company.com" required />
          </div>

          <div className="form-group">
            <label>How can we help?</label>
            <textarea placeholder="Tell us about your project..." rows="5" required></textarea>
          </div>

          <button type="submit" className="submit-btn">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;