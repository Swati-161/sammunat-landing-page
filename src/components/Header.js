import React from 'react';

const Header = () => {
  // Function to handle the smooth scroll
  const scrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <header className="header">
      <div className="header-container" style={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center', 
        width: '100%', 
        maxWidth: '1300px', 
        margin: '0 auto' 
      }}>
       
        {/* Changed to an <a> tag with the scrollToTop function */}
        <a href="/" className="header-brand" onClick={scrollToTop} style={{ textDecoration: 'none' }}>
          Sammunat <span>LLC</span>
        </a>

        <nav>
          <a href="/hiring" className="header-link hiring-badge">
            We are Hiring
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;