import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Check for logged in user
    const userData = localStorage.getItem('userData');
    const userToken = localStorage.getItem('userToken');
    if (userData && userToken) {
      setUser(JSON.parse(userData));
    }
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLogin = () => {
    navigate('/login');
  };

  const handleDashboard = () => {
    navigate('/dashboard-warga');
  };

  const handleLogout = () => {
    localStorage.removeItem('userData');
    localStorage.removeItem('userToken');
    setUser(null);
    navigate('/');
  };

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo-section">
          <div className="logo-text">
            <h1>HALO RRI</h1>
            <p>Platform Pelaporan Publik RRI</p>
          </div>
        </div>
        
        <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
          <ul className="nav-list">
            <li><Link to="/">Beranda</Link></li>
            <li><Link to="/laporan">Buat Laporan</Link></li>
            <li><Link to="/pelacakan">Lacak Laporan</Link></li>
            <li><a href="#statistik">Statistik</a></li>
          </ul>
        </nav>
        
        <div className="header-actions">
          {user ? (
            <div className="user-menu">
              <button className="user-btn" onClick={handleDashboard}>
                👤 {user.fullName}
              </button>
              <button className="logout-btn" onClick={handleLogout}>
                Keluar
              </button>
            </div>
          ) : (
            <>
              <button className="register-btn" onClick={() => navigate('/daftar')}>
                📝 Daftar
              </button>
              <button className="login-btn" onClick={handleLogin}>
                🔐 Login
              </button>
            </>
          )}
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
