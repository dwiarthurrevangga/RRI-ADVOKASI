import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginPage.css';

const LoginPage = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    role: 'citizen'
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
      // Check for citizen login (from localStorage or demo data)
      if (formData.role === 'citizen') {
        // Check demo account first
        if (formData.username === 'andi.wijaya@gmail.com' && formData.password === 'warga123') {
          const demoUserData = {
            id: 999,
            fullName: 'Andi Wijaya',
            email: 'andi.wijaya@gmail.com',
            phone: '081234567890',
            address: 'Jl. Demo No. 123, Bandar Lampung',
            birthDate: '1995-05-15',
            age: 30,
            registeredAt: new Date().toISOString(),
            role: 'citizen'
          };
          localStorage.setItem('userData', JSON.stringify(demoUserData));
          localStorage.setItem('userToken', 'citizen-token-' + Date.now());
          navigate('/dashboard-warga');
          setLoading(false);
          return;
        }
        
        // Check registered users from localStorage
        const storedUser = localStorage.getItem('userData');
        if (storedUser) {
          const userData = JSON.parse(storedUser);
          if (userData.email === formData.username) {
            // In real app, you'd verify password here
            localStorage.setItem('userToken', 'citizen-token-' + Date.now());
            navigate('/dashboard-warga');
            setLoading(false);
            return;
          }
        }
        alert('Email atau password salah. Gunakan akun demo: andi.wijaya@gmail.com / warga123 atau daftar akun baru.');
        setLoading(false);
        return;
      }

      // Mock authentication logic for staff
      const validCredentials = {
        'budi_reporter': { password: 'reporter123', role: 'reporter', name: 'Budi Santoso' },
        'sari_reporter': { password: 'reporter123', role: 'reporter', name: 'Sari Wulandari' },
        'rina_reporter': { password: 'reporter123', role: 'reporter', name: 'Rina Handayani' },
        'ahmad_redaktur': { password: 'redaktur123', role: 'redaktur', name: 'Ahmad Fauzi' },
        'maya_redaktur': { password: 'redaktur123', role: 'redaktur', name: 'Maya Sari Dewi' },
        'indra_admin': { password: 'admin123', role: 'admin', name: 'Indra Permana' }
      };

      const credential = validCredentials[formData.username];
      if (credential && credential.password === formData.password && credential.role === formData.role) {
        const userData = {
          username: formData.username,
          role: formData.role,
          name: credential.name,
          isAuthenticated: true
        };
        
        localStorage.setItem('user', JSON.stringify(userData));
        navigate('/admin');
      } else {
        alert('Username, password, atau role tidak sesuai. Periksa kembali credential Anda.');
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
              <option value="citizen">Warga</option>
              <option value="reporter">Reporter</option>
              <option value="redaktur">Redaktur</option>
              <option value="admin">Administrator</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="username">
              {formData.role === 'citizen' ? 'Email' : 'Username'}
            </label>
            <input
              type={formData.role === 'citizen' ? 'email' : 'text'}
              id="username"
              name="username"
              value={formData.username}
              onChange={handleInputChange}
              placeholder={formData.role === 'citizen' ? 'Masukkan email' : 'Masukkan username'}
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
              <strong>Warga:</strong> andi.wijaya@gmail.com / warga123
            </div>
            <div className="demo-account">
              <strong>Reporter:</strong> budi_reporter / reporter123
            </div>
            <div className="demo-account">
              <strong>Redaktur:</strong> ahmad_redaktur / redaktur123
            </div>
            <div className="demo-account">
              <strong>Admin:</strong> indra_admin / admin123
            </div>
          </div>
        </div>

        <div className="login-footer">
          {formData.role === 'citizen' ? (
            <p>
              Belum punya akun? 
              <button 
                type="button" 
                className="register-link"
                onClick={() => navigate('/daftar')}
              >
                Daftar di sini
              </button>
            </p>
          ) : (
            <p>Tidak punya akun? Hubungi administrator untuk mendapatkan akses.</p>
          )}
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
