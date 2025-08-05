import React from 'react';
import ReportingSection from '../components/ReportingSection';
import './ReportPage.css';

const ReportPage = () => {
  return (
    <div className="report-page">
      <div className="page-header">
        <div className="container">
          <h1>Buat Laporan Baru</h1>
          <p>Sampaikan aspirasi dan keluhan Anda untuk menciptakan perubahan positif</p>
        </div>
      </div>
      <ReportingSection />
    </div>
  );
};

export default ReportPage;
