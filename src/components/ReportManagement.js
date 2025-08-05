import React, { useState } from 'react';
import './ReportManagement.css';

const ReportManagement = ({ userRole }) => {
  const [selectedStatus, setSelectedStatus] = useState('all');
  const [selectedCategory, setSelectedCategory] = useState('all');

  // Mock data for reports
  const reports = [
    {
      id: 'RPT1723456789',
      title: 'Jalan Rusak di Jl. Sudirman',
      category: 'Infrastruktur',
      status: 'Dalam Proses Validasi',
      date: '2025-08-01',
      reporter: 'Anonim',
      assignedTo: 'John Reporter',
      priority: 'High',
      location: 'Jakarta Selatan',
      description: 'Jalan berlubang sepanjang 500m menyebabkan kemacetan dan kecelakaan kecil.'
    },
    {
      id: 'RPT1723456790',
      title: 'Pelayanan RSUD Lambat',
      category: 'Layanan Kesehatan',
      status: 'Diliput',
      date: '2025-07-28',
      reporter: 'Ahmad S.',
      assignedTo: 'Sarah Reporter',
      priority: 'Medium',
      location: 'Bandung',
      description: 'Antrian panjang dan pelayanan yang lambat di RSUD Bandung.'
    },
    {
      id: 'RPT1723456791',
      title: 'Sekolah Kekurangan Guru',
      category: 'Pendidikan',
      status: 'Diterima',
      date: '2025-08-03',
      reporter: 'Maria T.',
      assignedTo: null,
      priority: 'Medium',
      location: 'Surabaya',
      description: 'SD Negeri 123 kekurangan 5 guru untuk tahun ajaran baru.'
    }
  ];

  const filteredReports = reports.filter(report => {
    const statusMatch = selectedStatus === 'all' || report.status === selectedStatus;
    const categoryMatch = selectedCategory === 'all' || report.category === selectedCategory;
    return statusMatch && categoryMatch;
  });

  const handleStatusChange = (reportId, newStatus) => {
    // In real app, this would call an API
    console.log(`Changing status of ${reportId} to ${newStatus}`);
    alert(`Status laporan ${reportId} diubah ke: ${newStatus}`);
  };

  const handleAssignReport = (reportId, reporter) => {
    // In real app, this would call an API
    console.log(`Assigning report ${reportId} to ${reporter}`);
    alert(`Laporan ${reportId} ditugaskan ke: ${reporter}`);
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

  const getPriorityColor = (priority) => {
    const colors = {
      'High': '#e74c3c',
      'Medium': '#f39c12',
      'Low': '#27ae60'
    };
    return colors[priority] || '#95a5a6';
  };

  return (
    <div className="report-management">
      <div className="management-header">
        <div className="container">
          <h2>Kelola Laporan</h2>
          <p>Kelola dan pantau semua laporan masuk dari masyarakat</p>
        </div>
      </div>

      <div className="container">
        <div className="filters">
          <div className="filter-group">
            <label>Filter Status:</label>
            <select 
              value={selectedStatus} 
              onChange={(e) => setSelectedStatus(e.target.value)}
              className="filter-select"
            >
              <option value="all">Semua Status</option>
              <option value="Diterima">Diterima</option>
              <option value="Dalam Proses Validasi">Dalam Proses Validasi</option>
              <option value="Valid">Valid</option>
              <option value="Diliput">Diliput</option>
              <option value="Selesai">Selesai</option>
              <option value="Ditolak">Ditolak</option>
            </select>
          </div>

          <div className="filter-group">
            <label>Filter Kategori:</label>
            <select 
              value={selectedCategory} 
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="filter-select"
            >
              <option value="all">Semua Kategori</option>
              <option value="Infrastruktur">Infrastruktur</option>
              <option value="Layanan Kesehatan">Layanan Kesehatan</option>
              <option value="Pendidikan">Pendidikan</option>
              <option value="Sosial">Sosial</option>
              <option value="Lingkungan">Lingkungan</option>
            </select>
          </div>
        </div>

        <div className="reports-grid">
          {filteredReports.map(report => (
            <div key={report.id} className="report-card">
              <div className="report-header">
                <div className="report-id">ID: {report.id}</div>
                <div 
                  className="priority-badge"
                  style={{ backgroundColor: getPriorityColor(report.priority) }}
                >
                  {report.priority}
                </div>
              </div>

              <div className="report-title">
                <h3>{report.title}</h3>
                <div className="report-meta">
                  <span className="category-tag">{report.category}</span>
                  <span className="location-tag">📍 {report.location}</span>
                </div>
              </div>

              <div className="report-description">
                <p>{report.description}</p>
              </div>

              <div className="report-details">
                <div className="detail-item">
                  <strong>Pelapor:</strong> {report.reporter}
                </div>
                <div className="detail-item">
                  <strong>Tanggal:</strong> {new Date(report.date).toLocaleDateString('id-ID')}
                </div>
                <div className="detail-item">
                  <strong>Ditugaskan ke:</strong> {report.assignedTo || 'Belum ditugaskan'}
                </div>
              </div>

              <div className="report-status">
                <div 
                  className="status-badge"
                  style={{ backgroundColor: getStatusColor(report.status) }}
                >
                  {report.status}
                </div>
              </div>

              <div className="report-actions">
                {userRole === 'admin' || userRole === 'redaktur' ? (
                  <>
                    <select 
                      onChange={(e) => handleStatusChange(report.id, e.target.value)}
                      className="action-select"
                      defaultValue=""
                    >
                      <option value="" disabled>Ubah Status</option>
                      <option value="Dalam Proses Validasi">Proses Validasi</option>
                      <option value="Valid">Tandai Valid</option>
                      <option value="Tidak Valid">Tandai Tidak Valid</option>
                      <option value="Diliput">Sedang Diliput</option>
                      <option value="Selesai">Selesai</option>
                      <option value="Ditolak">Tolak</option>
                    </select>
                    
                    {!report.assignedTo && (
                      <button 
                        onClick={() => handleAssignReport(report.id, 'Current User')}
                        className="assign-btn"
                      >
                        📋 Ambil Tugas
                      </button>
                    )}
                  </>
                ) : (
                  <select 
                    onChange={(e) => handleStatusChange(report.id, e.target.value)}
                    className="action-select"
                    defaultValue=""
                  >
                    <option value="" disabled>Ubah Status</option>
                    <option value="Dalam Proses Validasi">Mulai Validasi</option>
                    <option value="Valid">Valid</option>
                    <option value="Tidak Valid">Tidak Valid</option>
                  </select>
                )}
                
                <button className="detail-btn">👁️ Detail</button>
              </div>
            </div>
          ))}
        </div>

        {filteredReports.length === 0 && (
          <div className="no-reports">
            <h3>Tidak ada laporan ditemukan</h3>
            <p>Coba ubah filter untuk melihat laporan lainnya</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ReportManagement;
