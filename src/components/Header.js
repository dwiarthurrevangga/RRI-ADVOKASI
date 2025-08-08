import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [user, setUser] = useState(null);
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    // Check for logged in user
    const userData = localStorage.getItem('userData');
    const userToken = localStorage.getItem('userToken');
    if (userData && userToken) {
      setUser(JSON.parse(userData));
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Hanya hide header jika scroll lebih dari 100px
      if (currentScrollY < 100) {
        setIsHeaderVisible(true);
      } else {
        // Jika scroll ke bawah, hide header
        if (currentScrollY > lastScrollY) {
          setIsHeaderVisible(false);
        } 
        // Jika scroll ke atas, show header
        else {
          setIsHeaderVisible(true);
        }
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLogin = () => {
    navigate('/login');
  };

  const handleDashboard = () => {
    navigate('/dashboard-warga');
  };

  const handleProfile = () => {
    navigate('/profil');
  };

  const handleLogout = () => {
    localStorage.removeItem('userData');
    localStorage.removeItem('userToken');
    setUser(null);
    navigate('/');
  };

  return (
    <header className={`header ${isHeaderVisible ? 'header-visible' : 'header-hidden'}`}>
      <div className="header-container">
        <div className="logo-section">
          <img src="/logo-rri.svg" alt="RRI Logo" className="logo-rri" />
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
            {!user && (
              <>
                <li><Link to="/daftar">Daftar</Link></li>
                <li><Link to="/login">Login</Link></li>
              </>
            )}
          </ul>
        </nav>
        
        <div className="header-actions">
          {user ? (
            <div className="user-menu">
              <button className="user-btn" onClick={handleProfile}>
                👤 {user.fullName}
              </button>
              <button className="logout-btn" onClick={handleLogout}>
                Keluar
              </button>
            </div>
          ) : null}
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
