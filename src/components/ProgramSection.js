import React from 'react';
import './ProgramSection.css';

const ProgramSection = () => {
  const programs = [
    {
      id: 1,
      title: "Sehat Bersama Dokter Cilik",
      description: "Program interaktif dengan dokter anak yang membahas tips kesehatan sehari-hari",
      time: "Senin - Jumat, 14:00 - 15:00 WIB",
      icon: "🩺",
      category: "Live Show"
    },
    {
      id: 2,
      title: "Cerita Gizi Si Kecil",
      description: "Edukasi tentang nutrisi dan gizi seimbang untuk pertumbuhan optimal anak",
      time: "Selasa & Kamis, 16:00 - 16:30 WIB",
      icon: "🥗",
      category: "Edukasi"
    },
    {
      id: 3,
      title: "Olahraga Asyik",
      description: "Program yang mengajak anak-anak untuk aktif bergerak dan berolahraga",
      time: "Sabtu, 10:00 - 11:00 WIB",
      icon: "⚽",
      category: "Aktivitas"
    },
    {
      id: 4,
      title: "Mental Health Kids",
      description: "Pembahasan tentang kesehatan mental dan emosional anak",
      time: "Minggu, 15:00 - 16:00 WIB",
      icon: "🧠",
      category: "Psikologi"
    }
  ];

  return (
    <section className="program-section" id="program">
      <div className="container">
        <div className="section-header">
          <h2>Program Unggulan</h2>
          <p>Nikmati berbagai program edukasi kesehatan yang dirancang khusus untuk anak-anak Indonesia</p>
        </div>
        
        <div className="programs-grid">
          {programs.map(program => (
            <div key={program.id} className="program-card">
              <div className="program-icon">
                {program.icon}
              </div>
              <div className="program-content">
                <span className="program-category">{program.category}</span>
                <h3>{program.title}</h3>
                <p>{program.description}</p>
                <div className="program-time">
                  <span>📅 {program.time}</span>
                </div>
                <button className="program-btn">Dengarkan</button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="program-schedule">
          <h3>Jadwal Siaran Mingguan</h3>
          <div className="schedule-grid">
            <div className="schedule-day">
              <h4>Senin - Jumat</h4>
              <ul>
                <li>06:00 - Morning Health Talk</li>
                <li>14:00 - Sehat Bersama Dokter Cilik</li>
                <li>18:00 - Family Health Time</li>
              </ul>
            </div>
            <div className="schedule-day">
              <h4>Sabtu - Minggu</h4>
              <ul>
                <li>10:00 - Olahraga Asyik</li>
                <li>15:00 - Mental Health Kids</li>
                <li>19:00 - Special Health Topics</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProgramSection;
