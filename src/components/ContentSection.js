import React, { useState } from 'react';
import './ContentSection.css';

const ContentSection = () => {
  const [activeTab, setActiveTab] = useState('artikel');

  const articles = [
    {
      id: 1,
      title: "5 Tips Menjaga Kesehatan Mata Anak di Era Digital",
      excerpt: "Panduan praktis untuk orang tua dalam melindungi kesehatan mata anak dari paparan layar berlebihan.",
      image: "/images/mata-anak.jpg",
      date: "2025-08-01",
      category: "Kesehatan Mata"
    },
    {
      id: 2,
      title: "Pentingnya Sarapan Sehat untuk Konsentrasi Belajar",
      excerpt: "Mengenal jenis-jenis sarapan yang dapat meningkatkan fokus dan energi anak untuk belajar.",
      image: "/images/sarapan-sehat.jpg",
      date: "2025-07-28",
      category: "Nutrisi"
    },
    {
      id: 3,
      title: "Cara Mengajarkan Anak Mencuci Tangan yang Benar",
      excerpt: "Langkah-langkah mudah dan menyenangkan untuk mengajarkan kebersihan tangan pada anak.",
      image: "/images/cuci-tangan.jpg",
      date: "2025-07-25",
      category: "Kebersihan"
    }
  ];

  const videos = [
    {
      id: 1,
      title: "Senam Sehat untuk Anak",
      duration: "15:30",
      thumbnail: "/images/senam-anak.jpg",
      views: "25K"
    },
    {
      id: 2,
      title: "Lagu Tentang Gizi Seimbang",
      duration: "03:45",
      thumbnail: "/images/lagu-gizi.jpg",
      views: "18K"
    },
    {
      id: 3,
      title: "Cara Menyikat Gigi yang Benar",
      duration: "08:20",
      thumbnail: "/images/sikat-gigi.jpg",
      views: "32K"
    }
  ];

  const podcasts = [
    {
      id: 1,
      title: "Tanya Dokter: Demam pada Anak",
      duration: "25:15",
      date: "2025-08-02",
      plays: "15K"
    },
    {
      id: 2,
      title: "Tips Mengatasi Anak Susah Makan",
      duration: "18:40",
      date: "2025-07-30",
      plays: "22K"
    },
    {
      id: 3,
      title: "Kesehatan Mental Anak Usia Sekolah",
      duration: "32:25",
      date: "2025-07-27",
      plays: "19K"
    }
  ];

  return (
    <section className="content-section" id="konten">
      <div className="container">
        <div className="section-header">
          <h2>Konten Edukasi</h2>
          <p>Akses berbagai materi edukasi kesehatan anak dalam format yang menarik</p>
        </div>

        <div className="content-tabs">
          <button 
            className={`tab-btn ${activeTab === 'artikel' ? 'active' : ''}`}
            onClick={() => setActiveTab('artikel')}
          >
            📖 Artikel
          </button>
          <button 
            className={`tab-btn ${activeTab === 'video' ? 'active' : ''}`}
            onClick={() => setActiveTab('video')}
          >
            📹 Video
          </button>
          <button 
            className={`tab-btn ${activeTab === 'podcast' ? 'active' : ''}`}
            onClick={() => setActiveTab('podcast')}
          >
            🎧 Podcast
          </button>
        </div>

        <div className="content-grid">
          {activeTab === 'artikel' && (
            <div className="articles-grid">
              {articles.map(article => (
                <div key={article.id} className="content-card article-card">
                  <div className="card-image">
                    <img src={article.image} alt={article.title} />
                    <span className="card-category">{article.category}</span>
                  </div>
                  <div className="card-content">
                    <h3>{article.title}</h3>
                    <p>{article.excerpt}</p>
                    <div className="card-meta">
                      <span>📅 {new Date(article.date).toLocaleDateString('id-ID')}</span>
                      <button className="read-more-btn">Baca Selengkapnya</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'video' && (
            <div className="videos-grid">
              {videos.map(video => (
                <div key={video.id} className="content-card video-card">
                  <div className="card-image">
                    <img src={video.thumbnail} alt={video.title} />
                    <div className="play-overlay">
                      <button className="play-btn">▶️</button>
                    </div>
                    <span className="video-duration">{video.duration}</span>
                  </div>
                  <div className="card-content">
                    <h3>{video.title}</h3>
                    <div className="card-meta">
                      <span>👁️ {video.views} views</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'podcast' && (
            <div className="podcasts-grid">
              {podcasts.map(podcast => (
                <div key={podcast.id} className="content-card podcast-card">
                  <div className="podcast-icon">🎙️</div>
                  <div className="card-content">
                    <h3>{podcast.title}</h3>
                    <div className="podcast-info">
                      <span>⏱️ {podcast.duration}</span>
                      <span>📅 {new Date(podcast.date).toLocaleDateString('id-ID')}</span>
                      <span>▶️ {podcast.plays} plays</span>
                    </div>
                    <button className="play-podcast-btn">Dengarkan</button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="content-cta">
          <h3>Ingin Akses Lebih Banyak Konten?</h3>
          <p>Daftar untuk mendapatkan akses ke seluruh perpustakaan konten edukasi RRI PEKA</p>
          <button className="cta-btn">Daftar Sekarang</button>
        </div>
      </div>
    </section>
  );
};

export default ContentSection;
