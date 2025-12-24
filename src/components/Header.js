import React from 'react';

const Header = () => {
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
       
        <h1 className="header-brand">
          Sammunat <span>LLC</span>
        </h1>

       
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