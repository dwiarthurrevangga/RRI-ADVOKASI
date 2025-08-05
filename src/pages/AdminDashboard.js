import React from 'react';
import { Routes, Route } from 'react-router-dom';
import AdminNavigation from '../components/AdminNavigation';
import StatsSection from '../components/StatsSection';
import ReportManagement from '../components/ReportManagement';
import UserManagement from '../components/UserManagement';
import './AdminDashboard.css';

const AdminDashboard = () => {
  const user = JSON.parse(localStorage.getItem('user') || '{}');

  return (
    <div className="admin-dashboard">
      <div className="dashboard-header">
        <div className="container">
          <h1>Dashboard {user.role === 'admin' ? 'Administrator' : user.role === 'redaktur' ? 'Redaktur' : 'Reporter'}</h1>
          <p>Selamat datang, {user.name}</p>
        </div>
      </div>

      <div className="dashboard-content">
        <AdminNavigation userRole={user.role} />
        
        <div className="dashboard-main">
          <Routes>
            <Route path="/" element={<StatsSection />} />
            <Route path="/reports" element={<ReportManagement userRole={user.role} />} />
            {user.role === 'admin' && (
              <Route path="/users" element={<UserManagement />} />
            )}
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
