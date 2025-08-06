import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './CitizenDashboard.css';

const CitizenDashboard = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState(null);
  const [activeTab, setActiveTab] = useState('overview');
  const [reports, setReports] = useState([]);

  useEffect(() => {
    // Check if user is logged in
    const storedUser = localStorage.getItem('userData');
    if (!storedUser) {
      navigate('/login');
      return;
    }

    const user = JSON.parse(storedUser);
    setUserData(user);

    // Load user reports (demo data)
    const demoReports = [
      {
        id: 'RPT-2024-001',
        title: 'Jalan Rusak di Jl. Sudirman',
        category: 'Infrastruktur',
        status: 'Selesai',
        statusColor: '#27ae60',
        date: '2024-01-15',
        description: 'Jalan berlubang besar di depan Mall Sudirman yang membahayakan pengendara.',
        location: 'Jl. Sudirman No. 123, Jakarta Pusat',
        priority: 'Tinggi',
        response: 'Laporan telah ditindaklanjuti oleh Dinas PU. Perbaikan jalan telah selesai dilaksanakan.',
        timeline: [
          { date: '2024-01-15', status: 'Laporan Diterima', description: 'Laporan berhasil diterima dan terdaftar dalam sistem' },
          { date: '2024-01-16', status: 'Dalam Review', description: 'Tim RRI sedang memverifikasi laporan' },
          { date: '2024-01-18', status: 'Diteruskan', description: 'Laporan diteruskan ke Dinas Pekerjaan Umum' },
          { date: '2024-01-25', status: 'Dalam Proses', description: 'Dinas PU mulai melakukan perbaikan' },
          { date: '2024-02-01', status: 'Selesai', description: 'Perbaikan jalan telah selesai dilaksanakan' }
        ]
      },
      {
        id: 'RPT-2024-002',
        title: 'Fasilitas Kesehatan Kurang Memadai',
        category: 'Layanan Kesehatan',
        status: 'Dalam Proses',
        statusColor: '#f39c12',
        date: '2024-02-10',
        description: 'Puskesmas kekurangan tenaga medis dan obat-obatan untuk melayani masyarakat.',
        location: 'Puskesmas Kebon Jeruk, Jakarta Barat',
        priority: 'Sedang',
        response: 'Laporan sedang dikoordinasikan dengan Dinas Kesehatan DKI Jakarta.',
        timeline: [
          { date: '2024-02-10', status: 'Laporan Diterima', description: 'Laporan berhasil diterima dan terdaftar dalam sistem' },
          { date: '2024-02-11', status: 'Dalam Review', description: 'Tim RRI sedang memverifikasi laporan' },
          { date: '2024-02-13', status: 'Diteruskan', description: 'Laporan diteruskan ke Dinas Kesehatan DKI' },
          { date: '2024-02-15', status: 'Dalam Proses', description: 'Dinas Kesehatan sedang mengevaluasi kebutuhan' }
        ]
      },
      {
        id: 'RPT-2024-003',
        title: 'Pencemaran Air Sungai',
        category: 'Lingkungan',
        status: 'Menunggu Review',
        statusColor: '#e74c3c',
        date: '2024-02-20',
        description: 'Sungai Ciliwung tercemar limbah pabrik yang mencemarkan air dan membunuh ikan.',
        location: 'Sungai Ciliwung, Depok',
        priority: 'Tinggi',
        response: 'Laporan masih dalam tahap verifikasi oleh tim RRI.',
        timeline: [
          { date: '2024-02-20', status: 'Laporan Diterima', description: 'Laporan berhasil diterima dan terdaftar dalam sistem' },
          { date: '2024-02-21', status: 'Menunggu Review', description: 'Menunggu verifikasi dari tim RRI' }
        ]
      }
    ];

    setReports(demoReports);
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('userData');
    localStorage.removeItem('userToken');
    navigate('/');
  };

  const getStatusBadgeClass = (status) => {
    switch (status) {
      case 'Selesai':
        return 'status-completed';
      case 'Dalam Proses':
        return 'status-progress';
      case 'Menunggu Review':
        return 'status-pending';
      case 'Ditolak':
        return 'status-rejected';
      default:
        return 'status-pending';
    }
  };

  if (!userData) {
    return <div className="loading">Loading...</div>;
  }

  return (
    <div className="citizen-dashboard">
      <div className="dashboard-header">
        <div className="container">
          <div className="header-content">
            <div className="user-info">
              <div className="user-avatar">
                {userData.fullName.charAt(0).toUpperCase()}
              </div>
              <div className="user-details">
                <h1>Selamat datang, {userData.fullName}</h1>
                <p>Dashboard Warga - RRI Advokasi</p>
              </div>
            </div>
            <button className="logout-btn" onClick={handleLogout}>
              Keluar
            </button>
          </div>
        </div>
      </div>

      <div className="dashboard-content">
        <div className="container">
          <div className="dashboard-tabs">
            <button 
              className={`tab-btn ${activeTab === 'overview' ? 'active' : ''}`}
              onClick={() => setActiveTab('overview')}
            >
              📊 Ringkasan
            </button>
            <button 
              className={`tab-btn ${activeTab === 'reports' ? 'active' : ''}`}
              onClick={() => setActiveTab('reports')}
            >
              📋 Laporan Saya
            </button>
            <button 
              className={`tab-btn ${activeTab === 'profile' ? 'active' : ''}`}
              onClick={() => setActiveTab('profile')}
            >
              👤 Profil
            </button>
          </div>

          <div className="tab-content">
            {activeTab === 'overview' && (
              <div className="overview-section">
                <div className="stats-grid">
                  <div className="stat-card">
                    <div className="stat-icon">📝</div>
                    <div className="stat-info">
                      <h3>{reports.length}</h3>
                      <p>Total Laporan</p>
                    </div>
                  </div>
                  <div className="stat-card">
                    <div className="stat-icon">✅</div>
                    <div className="stat-info">
                      <h3>{reports.filter(r => r.status === 'Selesai').length}</h3>
                      <p>Laporan Selesai</p>
                    </div>
                  </div>
                  <div className="stat-card">
                    <div className="stat-icon">🔄</div>
                    <div className="stat-info">
                      <h3>{reports.filter(r => r.status === 'Dalam Proses').length}</h3>
                      <p>Dalam Proses</p>
                    </div>
                  </div>
                  <div className="stat-card">
                    <div className="stat-icon">⏳</div>
                    <div className="stat-info">
                      <h3>{reports.filter(r => r.status === 'Menunggu Review').length}</h3>
                      <p>Menunggu Review</p>
                    </div>
                  </div>
                </div>

                <div className="recent-reports">
                  <h2>Laporan Terbaru</h2>
                  <div className="reports-list">
                    {reports.slice(0, 3).map((report) => (
                      <div key={report.id} className="report-summary">
                        <div className="report-header">
                          <h3>{report.title}</h3>
                          <span className={`status-badge ${getStatusBadgeClass(report.status)}`}>
                            {report.status}
                          </span>
                        </div>
                        <p className="report-date">Dilaporkan: {new Date(report.date).toLocaleDateString('id-ID')}</p>
                        <p className="report-category">Kategori: {report.category}</p>
                      </div>
                    ))}
                  </div>
                  <button 
                    className="view-all-btn"
                    onClick={() => setActiveTab('reports')}
                  >
                    Lihat Semua Laporan
                  </button>
                </div>
              </div>
            )}

            {activeTab === 'reports' && (
              <div className="reports-section">
                <div className="section-header">
                  <h2>Laporan Saya</h2>
                  <button 
                    className="new-report-btn"
                    onClick={() => navigate('/laporan')}
                  >
                    + Buat Laporan Baru
                  </button>
                </div>

                <div className="reports-grid">
                  {reports.map((report) => (
                    <div key={report.id} className="report-card">
                      <div className="report-card-header">
                        <div className="report-id">ID: {report.id}</div>
                        <span className={`status-badge ${getStatusBadgeClass(report.status)}`}>
                          {report.status}
                        </span>
                      </div>
                      
                      <h3 className="report-title">{report.title}</h3>
                      
                      <div className="report-meta">
                        <span className="category-tag">{report.category}</span>
                        <span className="priority-tag">{report.priority}</span>
                      </div>
                      
                      <p className="report-description">{report.description}</p>
                      
                      <div className="report-details">
                        <div className="detail-item">
                          <strong>Lokasi:</strong> {report.location}
                        </div>
                        <div className="detail-item">
                          <strong>Tanggal:</strong> {new Date(report.date).toLocaleDateString('id-ID')}
                        </div>
                      </div>

                      <div className="timeline">
                        <h4>Timeline Penanganan</h4>
                        <div className="timeline-items">
                          {report.timeline.map((item, index) => (
                            <div key={index} className="timeline-item">
                              <div className="timeline-dot"></div>
                              <div className="timeline-content">
                                <div className="timeline-status">{item.status}</div>
                                <div className="timeline-date">{new Date(item.date).toLocaleDateString('id-ID')}</div>
                                <div className="timeline-description">{item.description}</div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      {report.response && (
                        <div className="response-section">
                          <h4>Tanggapan:</h4>
                          <p>{report.response}</p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'profile' && (
              <div className="profile-section">
                <h2>Profil Saya</h2>
                <div className="profile-card">
                  <div className="profile-avatar">
                    {userData.fullName.charAt(0).toUpperCase()}
                  </div>
                  <div className="profile-info">
                    <div className="info-item">
                      <label>Nama Lengkap:</label>
                      <span>{userData.fullName}</span>
                    </div>
                    <div className="info-item">
                      <label>Email:</label>
                      <span>{userData.email}</span>
                    </div>
                    <div className="info-item">
                      <label>Nomor Telepon:</label>
                      <span>{userData.phone}</span>
                    </div>
                    <div className="info-item">
                      <label>Alamat:</label>
                      <span>{userData.address}</span>
                    </div>
                    <div className="info-item">
                      <label>Terdaftar Sejak:</label>
                      <span>{new Date(userData.registeredAt).toLocaleDateString('id-ID')}</span>
                    </div>
                  </div>
                  <button className="edit-profile-btn">
                    Edit Profil
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CitizenDashboard;
