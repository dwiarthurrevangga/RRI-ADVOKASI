import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        {/* Logo & Description Section */}
        <div className="footer-section footer-brand">
          <div className="footer-logo">

            <div className="footer-logo-text">
              <h3>HALO RRI</h3>
              <p>Platform Pelaporan Publik RRI</p>
            </div>
          </div>
          <p className="footer-description">
            Radio Republik Indonesia Advokasi hadir sebagai jembatan antara masyarakat dan pemerintah 
            untuk menciptakan perubahan positif melalui pelaporan isu-isu publik yang dapat dipertanggungjawabkan.
          </p>
          <div className="footer-social">
            <a href="#" className="social-link" title="Facebook">
              <span className="social-icon">📘</span>
              Facebook
            </a>
            <a href="#" className="social-link" title="Instagram">
              <span className="social-icon">📷</span>
              Instagram
            </a>
            <a href="#" className="social-link" title="Twitter">
              <span className="social-icon">🐦</span>
              Twitter  
            </a>
            <a href="#" className="social-link" title="YouTube">
              <span className="social-icon">📺</span>
              YouTube
            </a>
          </div>
        </div>

        {/* Contact Section */}
        <div className="footer-section footer-contact">
          <h4>📞 Kontak Kami</h4>
          <div className="contact-info">
            <div className="contact-item">
              <span className="contact-icon">📍</span>
              <div className="contact-details">
                <strong>Alamat:</strong><br />
                Jl. Gatot Subroto No.26, Pahoman, Engal, Kota Bandar Lampung<br />
                Lampung 35213
              </div>
            </div>
            <div className="contact-item">
              <span className="contact-icon">📞</span>
              <div className="contact-details">
                <strong>Telepon:</strong><br />
                (0721) 265-772
              </div>
            </div>
            <div className="contact-item">
              <span className="contact-icon">✉️</span>
              <div className="contact-details">
                <strong>Email:</strong><br />
                advokasi@rri.co.id
              </div>
            </div>
            <div className="contact-item">
              <span className="contact-icon">🕒</span>
              <div className="contact-details">
                <strong>Jam Operasional:</strong><br />
                Senin - Jumat: 08:00 - 16:00 WIB
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Status System Bar */}
      <div className="footer-status-bar">
        <div className="status-content">
          <div className="status-info">
            <h4>📊 Status Sistem</h4>
            <p>
              Platform: <span className="status-online">🟢 Online</span> • 
              Laporan Hari Ini: <strong>23</strong> • 
              Sedang Diproses: <strong>18</strong> • 
              Selesai: <strong>5</strong>
            </p>
          </div>
          <button className="cta-button" onClick={() => window.location.href = '/lapor'}>
            📝 Buat Laporan Sekarang
          </button>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <div className="footer-bottom-content">
          <div className="footer-copyright">
            <p>&copy; 2025 Radio Republik Indonesia Advokasi. Semua hak dilindungi.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
