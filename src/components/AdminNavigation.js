import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './AdminNavigation.css';

const AdminNavigation = ({ userRole }) => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('user');
    navigate('/');
  };

  const menuItems = [
    { path: '/admin', label: 'Dashboard', icon: '📊', roles: ['admin', 'redaktur', 'reporter'] },
    { path: '/admin/reports', label: 'Kelola Laporan', icon: '📝', roles: ['admin', 'redaktur', 'reporter'] },
    { path: '/admin/users', label: 'Kelola Pengguna', icon: '👥', roles: ['admin'] },
  ];

  const filteredMenuItems = menuItems.filter(item => item.roles.includes(userRole));

  return (
    <nav className="admin-navigation">
      <div className="nav-header">
        <h3>Menu Admin</h3>
      </div>
      
      <ul className="nav-menu">
        {filteredMenuItems.map((item) => (
          <li key={item.path}>
            <Link 
              to={item.path} 
              className={`nav-link ${location.pathname === item.path ? 'active' : ''}`}
            >
              <span className="nav-icon">{item.icon}</span>
              {item.label}
            </Link>
          </li>
        ))}
      </ul>

      <div className="nav-footer">
        <button onClick={handleLogout} className="logout-btn">
          🚪 Keluar
        </button>
      </div>
    </nav>
  );
};

export default AdminNavigation;
