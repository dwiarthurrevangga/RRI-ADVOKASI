import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Hero.css';

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section className="hero" id="beranda">
      <div className="hero-overlay">
        <div className="hero-content">
          <div className="hero-text">
            <h1>HALO RRI </h1>
            <h2>Platform Pelaporan Publik</h2>
            <p>
              HALO RRI adalah platform pelaporan publik yang memudahkan masyarakat untuk melaporkan isu-isu penting di sekitar mereka.
            </p>
            <div className="hero-buttons">
              <button 
                className="btn btn-primary"
                onClick={() => navigate('/laporan')}
              >
                Buat Laporan
              </button>
              <button 
                className="btn btn-secondary"
                onClick={() => navigate('/pelacakan')}
              >
                Lacak Laporan Anda
              </button>
            </div>
            <div className="hero-user-actions">
              <button 
                className="btn btn-outline"
                onClick={() => navigate('/daftar')}
              >
                📝 Daftar Akun Warga
              </button>
              <button 
                className="btn btn-outline"
                onClick={() => navigate('/dashboard-warga')}
              >
                👤 Dashboard Warga
              </button>
            </div>
          </div>
          <div className="hero-stats">
            <div className="stat-item">
              <h3>5,247</h3>
              <p>Laporan Diterima</p>
            </div>
            <div className="stat-item">
              <h3>3,891</h3>
              <p>Laporan Ditindaklanjuti</p>
            </div>
            <div className="stat-item">
              <h3>2,156</h3>
              <p>Berita Diproduksi</p>
            </div>
          </div>
        </div>
      </div>
      <div className="hero-waves">
        <svg viewBox="0 0 1440 320">
          <path fill="#ffffff" fillOpacity="0.8" d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,138.7C960,139,1056,117,1152,96C1248,75,1344,53,1392,42.7L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
