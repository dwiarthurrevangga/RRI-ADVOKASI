import React from 'react';
import './StatsSection.css';

const StatsSection = () => {
  const currentYear = new Date().getFullYear();
  const currentMonth = new Date().toLocaleDateString('id-ID', { month: 'long' });

  const stats = {
    total: {
      reports: 5247,
      processed: 3891,
      published: 2156,
      categories: 10
    },
    monthly: {
      reports: 287,
      processed: 201,
      published: 145,
      avgTime: 2.3
    },
    categories: [
      { name: 'Infrastruktur', count: 1247, percentage: 23.8, color: '#3498db' },
      { name: 'Layanan Kesehatan', count: 892, percentage: 17.0, color: '#e74c3c' },
      { name: 'Pendidikan', count: 756, percentage: 14.4, color: '#f39c12' },
      { name: 'Sosial', count: 634, percentage: 12.1, color: '#9b59b6' },
      { name: 'Lingkungan', count: 523, percentage: 10.0, color: '#27ae60' },
      { name: 'Transportasi', count: 445, percentage: 8.5, color: '#34495e' },
      { name: 'Pemerintahan', count: 289, percentage: 5.5, color: '#e67e22' },
      { name: 'Ekonomi', count: 234, percentage: 4.5, color: '#1abc9c' },
      { name: 'Keamanan', count: 156, percentage: 3.0, color: '#95a5a6' },
      { name: 'Lainnya', count: 71, percentage: 1.4, color: '#7f8c8d' }
    ],
    regions: [
      { name: 'Kedaton', count: 1247, percentage: 23.8 },
      { name: 'Pahoman', count: 892, percentage: 17.0 },
      { name: 'Way Halim', count: 756, percentage: 14.4 },
      { name: 'Gunung Terang', count: 634, percentage: 12.1 },
      { name: 'Sukarame', count: 523, percentage: 10.0 },
      { name: 'Lainnya', count: 1195, percentage: 22.8 }
    ]
  };

  return (
    <section className="stats-section" id="statistik">
      <div className="container">
        <div className="section-header">
          <h2>Statistik & Laporan</h2>
          <p>Data transparansi penanganan laporan masyarakat oleh RRI</p>
        </div>

        {/* Overview Stats */}
        <div className="overview-stats">
          <div className="stat-card primary">
            <div className="stat-icon">📊</div>
            <div className="stat-content">
              <h3>{stats.total.reports.toLocaleString('id-ID')}</h3>
              <p>Total Laporan Diterima</p>
              <small>Sejak tahun {currentYear - 1}</small>
            </div>
          </div>
          
          <div className="stat-card success">
            <div className="stat-icon">✅</div>
            <div className="stat-content">
              <h3>{stats.total.processed.toLocaleString('id-ID')}</h3>
              <p>Laporan Diproses</p>
              <small>{((stats.total.processed/stats.total.reports)*100).toFixed(1)}% dari total</small>
            </div>
          </div>
          
          <div className="stat-card info">
            <div className="stat-icon">📺</div>
            <div className="stat-content">
              <h3>{stats.total.published.toLocaleString('id-ID')}</h3>
              <p>Berita Dipublikasikan</p>
              <small>{((stats.total.published/stats.total.reports)*100).toFixed(1)}% dari total</small>
            </div>
          </div>
          
          <div className="stat-card warning">
            <div className="stat-icon">📋</div>
            <div className="stat-content">
              <h3>{stats.total.categories}</h3>
              <p>Kategori Isu</p>
              <small>Tersedia untuk pelaporan</small>
            </div>
          </div>
        </div>

        {/* Monthly Stats */}
        <div className="monthly-stats">
          <h3>Statistik Bulan {currentMonth} {currentYear}</h3>
          <div className="monthly-grid">
            <div className="monthly-item">
              <div className="monthly-number">{stats.monthly.reports}</div>
              <div className="monthly-label">Laporan Masuk</div>
            </div>
            <div className="monthly-item">
              <div className="monthly-number">{stats.monthly.processed}</div>
              <div className="monthly-label">Laporan Diproses</div>
            </div>
            <div className="monthly-item">
              <div className="monthly-number">{stats.monthly.published}</div>
              <div className="monthly-label">Berita Dipublikasi</div>
            </div>
            <div className="monthly-item">
              <div className="monthly-number">{stats.monthly.avgTime}</div>
              <div className="monthly-label">Rata-rata Hari Proses</div>
            </div>
          </div>
        </div>

        {/* Category Distribution */}
        <div className="category-stats">
          <h3>Distribusi Laporan per Kategori</h3>
          <div className="category-grid">
            {stats.categories.map((category, index) => (
              <div key={index} className="category-item">
                <div className="category-header">
                  <div 
                    className="category-color" 
                    style={{ backgroundColor: category.color }}
                  ></div>
                  <div className="category-info">
                    <h4>{category.name}</h4>
                    <span>{category.count.toLocaleString('id-ID')} laporan</span>
                  </div>
                  <div className="category-percentage">
                    {category.percentage}%
                  </div>
                </div>
                <div className="category-bar">
                  <div 
                    className="category-fill"
                    style={{ 
                      width: `${category.percentage}%`,
                      backgroundColor: category.color 
                    }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Regional Distribution */}
        <div className="regional-stats">
          <h3>Distribusi Laporan per Wilayah</h3>
          <div className="regional-grid">
            {stats.regions.map((region, index) => (
              <div key={index} className="regional-item">
                <div className="regional-header">
                  <h4>{region.name}</h4>
                  <span>{region.count.toLocaleString('id-ID')}</span>
                </div>
                <div className="regional-bar">
                  <div 
                    className="regional-fill"
                    style={{ width: `${region.percentage}%` }}
                  ></div>
                </div>
                <div className="regional-percentage">
                  {region.percentage}%
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Performance Indicators */}
        <div className="performance-indicators">
          <h3>Indikator Kinerja</h3>
          <div className="indicator-grid">
            <div className="indicator-item">
              <div className="indicator-icon">⏱️</div>
              <div className="indicator-content">
                <h4>Waktu Respon</h4>
                <div className="indicator-value">≤ 24 jam</div>
                <p>Rata-rata waktu penerimaan laporan</p>
              </div>
            </div>
            
            <div className="indicator-item">
              <div className="indicator-icon">🎯</div>
              <div className="indicator-content">
                <h4>Tingkat Validasi</h4>
                <div className="indicator-value">74.2%</div>
                <p>Persentase laporan yang valid</p>
              </div>
            </div>
            
            <div className="indicator-item">
              <div className="indicator-icon">📈</div>
              <div className="indicator-content">
                <h4>Tingkat Publikasi</h4>
                <div className="indicator-value">41.1%</div>
                <p>Laporan yang menjadi berita</p>
              </div>
            </div>
            
            <div className="indicator-item">
              <div className="indicator-icon">👥</div>
              <div className="indicator-content">
                <h4>Kepuasan Pelapor</h4>
                <div className="indicator-value">87.5%</div>
                <p>Rating kepuasan penanganan</p>
              </div>
            </div>
          </div>
        </div>

        {/* Download Reports */}
        <div className="download-section">
          <h3>Unduh Laporan</h3>
          <p>Akses laporan lengkap dalam format yang mudah dibaca</p>
          <div className="download-buttons">
            <button className="download-btn">
              📊 Laporan Bulanan (PDF)
            </button>
            <button className="download-btn">
              📈 Laporan Tahunan (PDF)
            </button>
            <button className="download-btn">
              📋 Data Statistik (Excel)
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
