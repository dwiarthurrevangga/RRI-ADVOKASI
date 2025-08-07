import React, { useState } from 'react';
import './TrackingSection.css';

const TrackingSection = () => {
  const [trackingId, setTrackingId] = useState('');
  const [reportStatus, setReportStatus] = useState(null);
  const [loading, setLoading] = useState(false);

  // Mock data for demonstration
  const mockReports = {
    'RPT1723456789': {
      id: 'RPT1723456789',
      title: 'Jalan Rusak di Jl. Sudirman',
      category: 'Infrastruktur',
      status: 'Dalam Proses Validasi',
      date: '2025-08-01',
      reporter: 'Anonim',
      timeline: [
        { status: 'Diterima', date: '2025-08-01 10:30', description: 'Laporan berhasil diterima sistem' },
        { status: 'Dalam Proses Validasi', date: '2025-08-01 14:20', description: 'Reporter sedang melakukan pengecekan lapangan' }
      ]
    },
    'RPT1723456790': {
      id: 'RPT1723456790',
      title: 'Pelayanan RSUD Lambat',
      category: 'Layanan Kesehatan',
      status: 'Diliput',
      date: '2025-07-28',
      reporter: 'Ahmad S.',
      timeline: [
        { status: 'Diterima', date: '2025-07-28 09:15', description: 'Laporan berhasil diterima sistem' },
        { status: 'Dalam Proses Validasi', date: '2025-07-28 11:30', description: 'Reporter melakukan verifikasi' },
        { status: 'Valid', date: '2025-07-29 08:45', description: 'Laporan terverifikasi valid' },
        { status: 'Diliput', date: '2025-07-30 16:20', description: 'Laporan diangkat menjadi berita' }
      ]
    }
  };

  const handleTrackingSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      const report = mockReports[trackingId];
      if (report) {
        setReportStatus(report);
      } else {
        setReportStatus('not_found');
      }
      setLoading(false);
    }, 1000);
  };

  const getStatusColor = (status) => {
    const colors = {
      'Diterima': '#f39c12',
      'Dalam Proses Validasi': '#3498db',
      'Valid': '#27ae60',
      'Tidak Valid': '#e74c3c',
      'Ditolak': '#95a5a6',
      'Diliput': '#9b59b6',
      'Selesai': '#27ae60'
    };
    return colors[status] || '#95a5a6';
  };

  const getStatusIcon = (status) => {
    const icons = {
      'Diterima': '📥',
      'Dalam Proses Validasi': '🔍',
      'Valid': '✅',
      'Tidak Valid': '❌',
      'Ditolak': '🚫',
      'Diliput': '📺',
      'Selesai': '🎉'
    };
    return icons[status] || '📋';
  };

  return (
    <section className="tracking-section" id="lacak">
      <div className="container">
        <div className="section-header">
          <h2>Lacak Status Laporan</h2>
          <p>Masukkan ID laporan untuk melihat status dan progress penanganan</p>
        </div>

        <div className="tracking-content">
          <div className="tracking-form">
            <form onSubmit={handleTrackingSubmit} className="track-form">
              <div className="form-group">
                <label htmlFor="trackingId">ID Laporan</label>
                <div className="input-group">
                  <input
                    type="text"
                    id="trackingId"
                    value={trackingId}
                    onChange={(e) => setTrackingId(e.target.value)}
                    placeholder="Masukkan ID laporan (contoh: RPT1723456789)"
                    required
                  />
                  <button type="submit" className="track-btn" disabled={loading}>
                    {loading ? '⏳' : '🔍'} {loading ? 'Mencari...' : 'Lacak'}
                  </button>
                </div>
              </div>
            </form>

            <div className="demo-ids">
              <p>Demo ID untuk testing:</p>
              <div className="demo-buttons">
                <button 
                  className="demo-btn" 
                  onClick={() => setTrackingId('RPT1723456789')}
                >
                  RPT1723456789
                </button>
                <button 
                  className="demo-btn" 
                  onClick={() => setTrackingId('RPT1723456790')}
                >
                  RPT1723456790
                </button>
              </div>
            </div>
          </div>

          {reportStatus === 'not_found' && (
            <div className="status-result not-found">
              <div className="status-icon">❓</div>
              <h3>Laporan Tidak Ditemukan</h3>
              <p>ID laporan yang Anda masukkan tidak ditemukan dalam sistem. Pastikan ID yang dimasukkan benar.</p>
            </div>
          )}

          {reportStatus && reportStatus !== 'not_found' && (
            <div className="status-result found">
              <div className="report-header">
                <div className="report-info">
                  <h3>{reportStatus.title}</h3>
                  <div className="report-meta">
                    <span className="report-id">ID: {reportStatus.id}</span>
                    <span className="report-category">{reportStatus.category}</span>
                    <span className="report-date">📅 {new Date(reportStatus.date).toLocaleDateString('id-ID')}</span>
                  </div>
                </div>
                <div className="current-status">
                  <div 
                    className="status-badge"
                    style={{ backgroundColor: getStatusColor(reportStatus.status) }}
                  >
                    {getStatusIcon(reportStatus.status)} {reportStatus.status}
                  </div>
                </div>
              </div>

              <div className="timeline">
                <h4>Timeline Penanganan</h4>
                <div className="timeline-items">
                  {reportStatus.timeline.map((item, index) => (
                    <div key={index} className="timeline-item">
                      <div 
                        className="timeline-dot"
                        style={{ backgroundColor: getStatusColor(item.status) }}
                      >
                        {getStatusIcon(item.status)}
                      </div>
                      <div className="timeline-content">
                        <h5>{item.status}</h5>
                        <p>{item.description}</p>
                        <span className="timeline-date">{item.date}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="status-guide">
          <h3>Panduan Status Laporan</h3>
          <div className="status-grid">
            <div className="status-item">
              <div className="status-icon" style={{ backgroundColor: '#f39c12' }}>📥</div>
              <div className="status-info">
                <h4>Diterima</h4>
                <p>Laporan telah masuk ke sistem dan menunggu penugasan reporter</p>
              </div>
            </div>
            <div className="status-item">
              <div className="status-icon" style={{ backgroundColor: '#3498db' }}>🔍</div>
              <div className="status-info">
                <h4>Dalam Proses Validasi</h4>
                <p>Reporter sedang melakukan pengecekan dan verifikasi lapangan</p>
              </div>
            </div>
            <div className="status-item">
              <div className="status-icon" style={{ backgroundColor: '#27ae60' }}>✅</div>
              <div className="status-info">
                <h4>Valid</h4>
                <p>Laporan telah terverifikasi dan memiliki nilai berita</p>
              </div>
            </div>
            <div className="status-item">
              <div className="status-icon" style={{ backgroundColor: '#9b59b6' }}>📺</div>
              <div className="status-info">
                <h4>Diliput</h4>
                <p>Laporan sedang dalam proses produksi berita</p>
              </div>
            </div>
            <div className="status-item">
              <div className="status-icon" style={{ backgroundColor: '#27ae60' }}>🎉</div>
              <div className="status-info">
                <h4>Selesai</h4>
                <p>Berita telah diproduksi dan disiarkan/diterbitkan</p>
              </div>
            </div>
            <div className="status-item">
              <div className="status-icon" style={{ backgroundColor: '#e74c3c' }}>❌</div>
              <div className="status-info">
                <h4>Tidak Valid/Ditolak</h4>
                <p>Laporan tidak dapat ditindaklanjuti dengan alasan tertentu</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrackingSection;
