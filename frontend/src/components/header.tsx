import React from 'react';
import './header.css';

const Header: React.FC = () => {
  return (
    <header className="amc-header">
      <div className="amc-logo">
        <img src="logo.png" alt="AMC Theatres Logo" />
      </div>
      <nav className="amc-nav">
        <a href="#">See a Movie</a>
        <a href="#">Find a Theatre</a>
        <a href="#">Food & Drinks</a>
        <a href="#">More</a>
      </nav>
      <div className="amc-search">
        <input type="text" placeholder="Search" />
        <button>Search</button>
      </div>
      <div className="amc-actions">
        <a href="#">Sign In</a>
        <span>OR</span>
        <a href="#">Join Now</a>
      </div>
    </header>
  );
};

export default Header;
