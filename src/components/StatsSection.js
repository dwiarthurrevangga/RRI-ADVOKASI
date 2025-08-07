import React, { useState, useEffect } from 'react';
import './StatsSection.css';
import { REPORT_CATEGORIES } from '../constants/categories';

const StatsSection = () => {
  const [loading, setLoading] = useState(true);
  const [stats, setStats] = useState(null);
  const [error, setError] = useState(null);
  const [lastUpdated, setLastUpdated] = useState(null);
  const [loadingProgress, setLoadingProgress] = useState(0);
  
  const currentYear = new Date().getFullYear();
  const currentMonth = new Date().toLocaleDateString('id-ID', { month: 'long' });

  // Simulate loading statistics data
  useEffect(() => {
    const loadStats = async () => {
      try {
        setLoading(true);
        setError(null);
        setLoadingProgress(0);
        
        // Simulate loading progress
        const progressInterval = setInterval(() => {
          setLoadingProgress(prev => {
            if (prev >= 90) {
              clearInterval(progressInterval);
              return 90;
            }
            return prev + Math.random() * 20;
          });
        }, 100);
        
        // Simulate API call delay
        await new Promise(resolve => setTimeout(resolve, 1500));
        
        // Complete progress
        setLoadingProgress(100);
        clearInterval(progressInterval);
        
        // Generate category data using the constants to ensure consistency
        const categoryColors = ['#3498db', '#e74c3c', '#f39c12', '#9b59b6', '#27ae60', '#34495e', '#e67e22', '#1abc9c', '#95a5a6', '#7f8c8d'];
        const categoryCounts = [1247, 892, 756, 634, 523, 445, 289, 234, 156, 71];
        const totalReports = categoryCounts.reduce((sum, count) => sum + count, 0);
        
        const categoryStats = REPORT_CATEGORIES.map((categoryName, index) => ({
          name: categoryName,
          count: categoryCounts[index],
          percentage: ((categoryCounts[index] / totalReports) * 100).toFixed(1),
          color: categoryColors[index]
        }));

        const statsData = {
          total: {
            reports: 5247,
            processed: 3891,
            published: 2156,
            categories: REPORT_CATEGORIES.length
          },
          monthly: {
            reports: 287,
            processed: 201,
            published: 145,
            avgTime: 2.3
          },
          categories: categoryStats,
          regions: [
            { name: 'Kedaton', count: 1247, percentage: 23.8 },
            { name: 'Pahoman', count: 892, percentage: 17.0 },
            { name: 'Way Halim', count: 756, percentage: 14.4 },
            { name: 'Gunung Terang', count: 634, percentage: 12.1 },
            { name: 'Sukarame', count: 523, percentage: 10.0 },
            { name: 'Lainnya', count: 1195, percentage: 22.8 }
          ]
        };
        
        setStats(statsData);
        setLastUpdated(new Date());
      } catch (err) {
        setError('Gagal memuat data statistik. Silakan coba lagi.');
        console.error('Error loading stats:', err);
      } finally {
        setLoading(false);
      }
    };

    loadStats();
  }, []);

  const handleRefresh = () => {
    // Re-load stats when refresh button is clicked
    setStats(null);
    setLoading(true);
    setError(null);
    
    // Simulate refresh delay
    setTimeout(() => {
      const statsData = {
        total: {
          reports: 5247 + Math.floor(Math.random() * 100),
          processed: 3891 + Math.floor(Math.random() * 50),
          published: 2156 + Math.floor(Math.random() * 25),
          categories: REPORT_CATEGORIES.length
        },
        monthly: {
          reports: 287 + Math.floor(Math.random() * 20),
          processed: 201 + Math.floor(Math.random() * 15),
          published: 145 + Math.floor(Math.random() * 10),
          avgTime: (2.3 + Math.random() * 0.5).toFixed(1)
        },
        categories: REPORT_CATEGORIES.map((categoryName, index) => {
          const baseCount = [1247, 892, 756, 634, 523, 445, 289, 234, 156, 71][index];
          const count = baseCount + Math.floor(Math.random() * 50);
          const total = 5247 + Math.floor(Math.random() * 100);
          return {
            name: categoryName,
            count: count,
            percentage: ((count / total) * 100).toFixed(1),
            color: ['#3498db', '#e74c3c', '#f39c12', '#9b59b6', '#27ae60', '#34495e', '#e67e22', '#1abc9c', '#95a5a6', '#7f8c8d'][index]
          };
        }),
        regions: [
          { name: 'Kedaton', count: 1247 + Math.floor(Math.random() * 50), percentage: 23.8 },
          { name: 'Pahoman', count: 892 + Math.floor(Math.random() * 40), percentage: 17.0 },
          { name: 'Way Halim', count: 756 + Math.floor(Math.random() * 30), percentage: 14.4 },
          { name: 'Gunung Terang', count: 634 + Math.floor(Math.random() * 25), percentage: 12.1 },
          { name: 'Sukarame', count: 523 + Math.floor(Math.random() * 20), percentage: 10.0 },
          { name: 'Lainnya', count: 1195 + Math.floor(Math.random() * 60), percentage: 22.8 }
        ]
      };
      setStats(statsData);
      setLastUpdated(new Date());
      setLoading(false);
    }, 1000);
  };

  if (error) {
    return (
      <section className="stats-section" id="statistik">
        <div className="container">
          <div className="section-header">
            <h2>Statistik & Laporan</h2>
            <p>Data transparansi penanganan laporan masyarakat oleh RRI</p>
          </div>
          
          <div className="error-state">
            <div className="error-icon">⚠️</div>
            <h3>Gagal Memuat Statistik</h3>
            <p>{error}</p>
            <button onClick={handleRefresh} className="refresh-btn">
              🔄 Coba Lagi
            </button>
          </div>
        </div>
      </section>
    );
  }

  if (loading) {
    return (
      <section className="stats-section" id="statistik">
        <div className="container">
          <div className="section-header">
            <h2>Statistik & Laporan</h2>
            <p>Data transparansi penanganan laporan masyarakat oleh RRI</p>
          </div>
          
          <div className="loading-state">
            <div className="loading-spinner">
              <div className="spinner"></div>
            </div>
            <h3>Memuat Data Statistik...</h3>
            <p>Mengambil data terbaru dari server</p>
            <div className="progress-bar">
              <div 
                className="progress-fill" 
                style={{ width: `${loadingProgress}%` }}
              ></div>
            </div>
            <div className="progress-text">
              {Math.round(loadingProgress)}% selesai
            </div>
          </div>
          
          {/* Loading skeleton */}
          <div className="overview-stats loading">
            <div className="stat-card skeleton">
              <div className="skeleton-icon"></div>
              <div className="skeleton-content">
                <div className="skeleton-text large"></div>
                <div className="skeleton-text medium"></div>
                <div className="skeleton-text small"></div>
              </div>
            </div>
            <div className="stat-card skeleton">
              <div className="skeleton-icon"></div>
              <div className="skeleton-content">
                <div className="skeleton-text large"></div>
                <div className="skeleton-text medium"></div>
                <div className="skeleton-text small"></div>
              </div>
            </div>
            <div className="stat-card skeleton">
              <div className="skeleton-icon"></div>
              <div className="skeleton-content">
                <div className="skeleton-text large"></div>
                <div className="skeleton-text medium"></div>
                <div className="skeleton-text small"></div>
              </div>
            </div>
            <div className="stat-card skeleton">
              <div className="skeleton-icon"></div>
              <div className="skeleton-content">
                <div className="skeleton-text large"></div>
                <div className="skeleton-text medium"></div>
                <div className="skeleton-text small"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="stats-section" id="statistik">
      <div className="container">
        <div className="section-header">
          <h2>Statistik & Laporan</h2>
          <p>Data transparansi penanganan laporan masyarakat oleh RRI</p>
          <button onClick={handleRefresh} className="refresh-btn" title="Perbarui Data">
            🔄 Perbarui Data
          </button>
          {lastUpdated && (
            <div className="last-updated">
              Terakhir diperbarui: {lastUpdated.toLocaleString('id-ID')}
            </div>
          )}
        </div>

        {/* Overview Stats */}
        <div className={`overview-stats ${loading ? 'loading' : 'loaded'}`}>
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
