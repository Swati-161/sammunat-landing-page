import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-brand">
          Sammunat <span>LLC</span> 
        </div>
        
        <div className="footer-info">
          <p>© 2025 Sammunat LLC. All rights reserved.</p>
          <div className="footer-socials">
             <a href="#link">LinkedIn</a>
             <a href="#link">Twitter</a>
             <a href="#link">GitHub</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;