import React, { useState } from 'react';
import './ReportingSection.css';
import { REPORT_CATEGORIES } from '../constants/categories';

const ReportingSection = () => {
  const [formData, setFormData] = useState({
    category: '',
    title: '',
    description: '',
    location: '',
    anonymous: false,
    files: []
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleFileUpload = (e) => {
    const files = Array.from(e.target.files);
    setFormData(prev => ({
      ...prev,
      files: [...prev.files, ...files]
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate report submission
    const reportId = 'RPT' + Date.now();
    alert(`Laporan berhasil dikirim!\nID Laporan: ${reportId}\nSimpan ID ini untuk melacak status laporan Anda.`);
    
    // Reset form
    setFormData({
      category: '',
      title: '',
      description: '',
      location: '',
      anonymous: false,
      files: []
    });
  };

  return (
    <section className="reporting-section" id="lapor">
      <div className="container">
        <div className="section-header">
          <h2>Buat Laporan Baru</h2>
          <p>Sampaikan aspirasi, keluhan, atau informasi penting untuk diangkat menjadi berita</p>
        </div>

        <div className="reporting-content">
          <div className="reporting-info">
            <div className="info-card">
              <div className="info-icon">📝</div>
              <h3>Cara Membuat Laporan</h3>
              <ul>
                <li>Pilih kategori yang sesuai dengan isu Anda</li>
                <li>Berikan judul yang jelas dan deskripsi lengkap</li>
                <li>Sertakan lokasi kejadian untuk memudahkan verifikasi</li>
                <li>Upload bukti pendukung jika ada</li>
                <li>Pilih apakah ingin menyamarkan identitas</li>
              </ul>
            </div>

            <div className="info-card">
              <div className="info-icon">🔒</div>
              <h3>Privasi & Keamanan</h3>
              <ul>
                <li>Data pribadi Anda dijamin kerahasiaaannya</li>
                <li>Anda dapat memilih untuk tetap anonim dalam pemberitaan</li>
                <li>Semua laporan akan diverifikasi sebelum ditindaklanjuti</li>
                <li>ID laporan akan diberikan untuk pelacakan status</li>
              </ul>
            </div>

            <div className="info-card">
              <div className="info-icon">⚡</div>
              <h3>Proses Penanganan</h3>
              <ul>
                <li><strong>Diterima:</strong> Laporan masuk ke sistem</li>
                <li><strong>Validasi:</strong> Tim reporter melakukan pengecekan</li>
                <li><strong>Produksi:</strong> Laporan diangkat menjadi berita</li>
                <li><strong>Publikasi:</strong> Berita disiarkan/diterbitkan</li>
              </ul>
            </div>
          </div>

          <div className="reporting-form">
            <form onSubmit={handleSubmit} className="report-form">
              <div className="form-group">
                <label htmlFor="category">Kategori Isu *</label>
                <select
                  id="category"
                  name="category"
                  value={formData.category}
                  onChange={handleInputChange}
                  required
                >
                  <option value="">Pilih Kategori</option>
                  {REPORT_CATEGORIES.map(cat => (
                    <option key={cat} value={cat}>{cat}</option>
                  ))}
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="title">Judul Laporan *</label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  value={formData.title}
                  onChange={handleInputChange}
                  placeholder="Masukkan judul yang jelas dan deskriptif"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="description">Deskripsi/Kronologi *</label>
                <textarea
                  id="description"
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  placeholder="Jelaskan secara detail isu yang ingin Anda laporkan..."
                  rows="6"
                  required
                ></textarea>
              </div>

              <div className="form-group">
                <label htmlFor="location">Lokasi Kejadian *</label>
                <input
                  type="text"
                  id="location"
                  name="location"
                  value={formData.location}
                  onChange={handleInputChange}
                  placeholder="Alamat lengkap atau deskripsi lokasi"
                  required
                />
                <button type="button" className="gps-btn">📍 Deteksi Lokasi</button>
              </div>

              <div className="form-group">
                <label htmlFor="files">Bukti Pendukung</label>
                <input
                  type="file"
                  id="files"
                  name="files"
                  onChange={handleFileUpload}
                  multiple
                  accept=".jpg,.jpeg,.png,.mp4,.pdf"
                />
                <small>Format yang didukung: JPG, PNG, MP4, PDF (Max 10MB per file)</small>
                {formData.files.length > 0 && (
                  <div className="uploaded-files">
                    {formData.files.map((file, index) => (
                      <span key={index} className="file-tag">
                        {file.name}
                      </span>
                    ))}
                  </div>
                )}
              </div>

              <div className="form-group checkbox-group">
                <label className="checkbox-label">
                  <input
                    type="checkbox"
                    name="anonymous"
                    checked={formData.anonymous}
                    onChange={handleInputChange}
                  />
                  <span className="checkmark"></span>
                  Saya ingin identitas saya dirahasiakan dalam pemberitaan
                </label>
              </div>

              <div className="form-actions">
                <button type="submit" className="submit-btn">
                  📤 Kirim Laporan
                </button>
                <button type="button" className="draft-btn">
                  💾 Simpan sebagai Draft
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReportingSection;
