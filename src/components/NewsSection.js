import React from 'react';
import './NewsSection.css';

const NewsSection = () => {
  const news = [
    {
      id: 1,
      title: "RRI Advokasi Berhasil Memfasilitasi Perbaikan 15 Jalan Rusak",
      excerpt: "Berkat laporan masyarakat melalui platform RRI Advokasi, Dinas PU berkomitmen memperbaiki 15 titik jalan rusak di Jakarta dalam 2 bulan ke depan.",
      date: "2025-08-03",
      image: "/images/jalan-perbaikan.jpg",
      category: "Infrastruktur",
      featured: true
    },
    {
      id: 2,
      title: "Keluhan Pelayanan RSUD Mendapat Respon Cepat",
      excerpt: "Laporan masyarakat tentang pelayanan RSUD yang lambat ditindaklanjuti dengan pembentukan tim khusus peningkatan layanan.",
      date: "2025-07-30",
      image: "/images/rumah-sakit.jpg",
      category: "Kesehatan"
    },
    {
      id: 3,
      title: "Masalah Banjir Perumahan Akhirnya Teratasi",
      excerpt: "Setelah 6 bulan dilaporkan melalui platform, masalah drainase di Perumahan Indah akhirnya diperbaiki oleh Dinas Lingkungan Hidup.",
      date: "2025-07-25",
      image: "/images/drainase.jpg",
      category: "Lingkungan"
    },
    {
      id: 4,
      title: "Sekolah Rusak Mendapat Bantuan Renovasi",
      excerpt: "Laporan kondisi gedung sekolah yang memprihatinkan berhasil menggerakkan Dinas Pendidikan untuk mengalokasikan anggaran renovasi.",
      date: "2025-07-20",
      image: "/images/sekolah-renovasi.jpg",
      category: "Pendidikan"
    },
    {
      id: 5,
      title: "Kampanye 'Suara Rakyat untuk Perubahan' Diluncurkan",
      excerpt: "RRI meluncurkan kampanye nasional untuk mendorong partisipasi masyarakat dalam pelaporan isu-isu publik melalui platform digital.",
      date: "2025-07-15",
      image: "/images/kampanye-suara.jpg",
      category: "Kampanye"
    }
  ];

  const featuredNews = news.find(item => item.featured);
  const regularNews = news.filter(item => !item.featured);

  return (
    <section className="news-section" id="berita">
      <div className="container">
        <div className="section-header">
          <h2>Berita & Dampak</h2>
          <p>Lihat bagaimana laporan masyarakat menghasilkan perubahan nyata melalui RRI Advokasi</p>
        </div>

        <div className="news-grid">
          {/* Featured News */}
          {featuredNews && (
            <div className="featured-news">
              <div className="news-image">
                <img src={featuredNews.image} alt={featuredNews.title} />
                <div className="featured-badge">Featured</div>
                <div className="news-category">{featuredNews.category}</div>
              </div>
              <div className="news-content">
                <h3>{featuredNews.title}</h3>
                <p>{featuredNews.excerpt}</p>
                <div className="news-meta">
                  <span className="news-date">
                    📅 {new Date(featuredNews.date).toLocaleDateString('id-ID', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </span>
                  <button className="read-more-btn">Baca Selengkapnya</button>
                </div>
              </div>
            </div>
          )}

          {/* Regular News */}
          <div className="regular-news">
            {regularNews.map(newsItem => (
              <div key={newsItem.id} className="news-card">
                <div className="news-card-image">
                  <img src={newsItem.image} alt={newsItem.title} />
                  <span className="news-card-category">{newsItem.category}</span>
                </div>
                <div className="news-card-content">
                  <h4>{newsItem.title}</h4>
                  <p>{newsItem.excerpt}</p>
                  <div className="news-card-meta">
                    <span className="news-card-date">
                      {new Date(newsItem.date).toLocaleDateString('id-ID')}
                    </span>
                    <button className="news-card-btn">Baca</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="news-newsletter">
          <div className="newsletter-content">
            <div className="newsletter-icon">📧</div>
            <div className="newsletter-text">
              <h3>Newsletter RRI Advokasi</h3>
              <p>Dapatkan update mingguan tentang dampak laporan dan perkembangan isu publik langsung di email Anda</p>
            </div>
            <div className="newsletter-form">
              <input type="email" placeholder="Masukkan email Anda" />
              <button type="submit">Berlangganan</button>
            </div>
          </div>
        </div>

        <div className="news-archive">
          <h3>Arsip Berita</h3>
          <div className="archive-links">
            <a href="#" className="archive-link">Berita 2025</a>
            <a href="#" className="archive-link">Berita 2024</a>
            <a href="#" className="archive-link">Press Release</a>
            <a href="#" className="archive-link">Event & Workshop</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
