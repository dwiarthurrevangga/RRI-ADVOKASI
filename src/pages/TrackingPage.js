import React from 'react';
import TrackingSection from '../components/TrackingSection';
import './TrackingPage.css';

const TrackingPage = () => {
  return (
    <div className="tracking-page">
      <div className="page-header">
        <div className="container">
          <h1>Lacak Status Laporan</h1>
          <p>Pantau perkembangan laporan Anda secara real-time</p>
        </div>
      </div>
      <TrackingSection />
    </div>
  );
};

export default TrackingPage;
