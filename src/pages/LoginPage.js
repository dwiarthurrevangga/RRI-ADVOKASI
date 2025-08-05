import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginPage.css';

const LoginPage = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    role: 'reporter'
  });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    // Simulate authentication
    setTimeout(() => {
      // Mock authentication logic
      if (formData.username && formData.password) {
        const userData = {
          username: formData.username,
          role: formData.role,
          name: formData.role === 'admin' ? 'Administrator' : 'Reporter',
          isAuthenticated: true
        };
        
        localStorage.setItem('user', JSON.stringify(userData));
        navigate('/admin');
      } else {
        alert('Username dan password harus diisi');
      }
      setLoading(false);
    }, 1000);
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <div className="login-header">
          <h1>Login Portal</h1>
          <p>Masuk ke dashboard RRI Advokasi</p>
        </div>

        <form onSubmit={handleSubmit} className="login-form">
          <div className="form-group">
            <label htmlFor="role">Peran</label>
            <select
              id="role"
              name="role"
              value={formData.role}
              onChange={handleInputChange}
              required
            >
              <option value="reporter">Reporter</option>
              <option value="redaktur">Redaktur</option>
              <option value="admin">Administrator</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              name="username"
              value={formData.username}
              onChange={handleInputChange}
              placeholder="Masukkan username"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              placeholder="Masukkan password"
              required
            />
          </div>

          <button type="submit" className="login-btn" disabled={loading}>
            {loading ? '⏳ Memproses...' : '🔑 Login'}
          </button>
        </form>

        <div className="demo-credentials">
          <h4>Demo Credentials:</h4>
          <div className="demo-accounts">
            <div className="demo-account">
              <strong>Reporter:</strong> reporter / password123
            </div>
            <div className="demo-account">
              <strong>Redaktur:</strong> redaktur / password123
            </div>
            <div className="demo-account">
              <strong>Admin:</strong> admin / password123
            </div>
          </div>
        </div>

        <div className="login-footer">
          <p>Tidak punya akun? Hubungi administrator untuk mendapatkan akses.</p>
          <button 
            type="button" 
            className="back-btn"
            onClick={() => navigate('/')}
          >
            ← Kembali ke Beranda
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
