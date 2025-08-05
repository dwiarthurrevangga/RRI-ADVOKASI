import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLogin = () => {
    navigate('/login');
  };

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo-section">
          <img src="/logo-rri.png" alt="RRI Logo" className="logo" />
          <div className="logo-text">
            <h1>RRI ADVOKASI</h1>
            <p>Platform Pelaporan Publik RRI</p>
          </div>
        </div>
        
        <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
          <ul className="nav-list">
            <li><Link to="/">Beranda</Link></li>
            <li><Link to="/lapor">Buat Laporan</Link></li>
            <li><Link to="/lacak">Lacak Laporan</Link></li>
            <li><a href="#statistik">Statistik</a></li>
          </ul>
        </nav>
        
        <div className="header-actions">
          <button className="login-btn" onClick={handleLogin}>🔐 Login</button>
          <button className="menu-toggle" onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
