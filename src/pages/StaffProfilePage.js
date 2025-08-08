import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './StaffProfilePage.css';

const StaffProfilePage = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState(null);
  const [isEditingProfile, setIsEditingProfile] = useState(false);
  const [editFormData, setEditFormData] = useState({
    name: '',
    email: '',
    phone: '',
    department: '',
    specialization: ''
  });

  useEffect(() => {
    // Check if staff user is logged in
    const storedUser = localStorage.getItem('user');
    if (!storedUser) {
      navigate('/login');
      return;
    }

    const user = JSON.parse(storedUser);
    if (!user.isAuthenticated) {
      navigate('/login');
      return;
    }

    // Set initial user data with extended information
    const extendedUserData = {
      ...user,
      email: `${user.username}@rri.co.id`,
      phone: '021-12345678',
      department: getDepartmentByRole(user.role),
      specialization: getSpecializationByRole(user.role),
      joinDate: '2023-01-15',
      employeeId: `RRI${user.role.toUpperCase()}${Math.floor(Math.random() * 1000).toString().padStart(3, '0')}`
    };

    setUserData(extendedUserData);
    setEditFormData({
      name: extendedUserData.name,
      email: extendedUserData.email,
      phone: extendedUserData.phone,
      department: extendedUserData.department,
      specialization: extendedUserData.specialization
    });
  }, [navigate]);

  const getDepartmentByRole = (role) => {
    switch (role) {
      case 'reporter': return 'Tim Liputan';
      case 'redaktur': return 'Tim Editorial';
      case 'admin': return 'Manajemen Sistem';
      default: return 'Staff';
    }
  };

  const getSpecializationByRole = (role) => {
    switch (role) {
      case 'reporter': return 'Investigasi Lapangan & Dokumentasi';
      case 'redaktur': return 'Review Konten & Quality Control';
      case 'admin': return 'Administrasi Sistem & User Management';
      default: return 'General';
    }
  };

  const getRoleDisplayName = (role) => {
    switch (role) {
      case 'reporter': return 'Reporter';
      case 'redaktur': return 'Redaktur';
      case 'admin': return 'Administrator';
      default: return 'Staff';
    }
  };

  const handleEditProfile = () => {
    setIsEditingProfile(true);
  };

  const handleCancelEdit = () => {
    setIsEditingProfile(false);
    setEditFormData({
      name: userData.name,
      email: userData.email,
      phone: userData.phone,
      department: userData.department,
      specialization: userData.specialization
    });
  };

  const handleEditFormChange = (e) => {
    const { name, value } = e.target;
    setEditFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSaveProfile = (e) => {
    e.preventDefault();
    
    // Update userData
    const updatedUserData = {
      ...userData,
      name: editFormData.name,
      email: editFormData.email,
      phone: editFormData.phone,
      department: editFormData.department,
      specialization: editFormData.specialization
    };
    
    // Save to localStorage
    localStorage.setItem('user', JSON.stringify(updatedUserData));
    
    // Update state
    setUserData(updatedUserData);
    setIsEditingProfile(false);
    
    alert('Profil berhasil diperbarui!');
  };

  const handleBackToDashboard = () => {
    navigate('/admin');
  };

  if (!userData) {
    return <div className="loading">Loading...</div>;
  }

  return (
    <div className="staff-profile-page">
      <div className="container">
        <div className="profile-header">
          <button className="back-btn" onClick={handleBackToDashboard}>
            ← Kembali ke Dashboard
          </button>
          <h1>Profil Staff</h1>
        </div>

        <div className="profile-content">
          <div className="profile-card">
            <div className="profile-badge">
              <div className="profile-avatar">
                {userData.name.charAt(0).toUpperCase()}
              </div>
              <div className="role-badge">
                {getRoleDisplayName(userData.role)}
              </div>
            </div>
            
            {!isEditingProfile ? (
              <>
                <div className="profile-info">
                  <div className="info-section">
                    <h3>Informasi Personal</h3>
                    <div className="info-grid">
                      <div className="info-item">
                        <label>Nama Lengkap:</label>
                        <span>{userData.name}</span>
                      </div>
                      <div className="info-item">
                        <label>Email:</label>
                        <span>{userData.email}</span>
                      </div>
                      <div className="info-item">
                        <label>Nomor Telepon:</label>
                        <span>{userData.phone}</span>
                      </div>
                      <div className="info-item">
                        <label>ID Karyawan:</label>
                        <span>{userData.employeeId}</span>
                      </div>
                    </div>
                  </div>

                  <div className="info-section">
                    <h3>Informasi Pekerjaan</h3>
                    <div className="info-grid">
                      <div className="info-item">
                        <label>Jabatan:</label>
                        <span>{getRoleDisplayName(userData.role)}</span>
                      </div>
                      <div className="info-item">
                        <label>Departemen:</label>
                        <span>{userData.department}</span>
                      </div>
                      <div className="info-item">
                        <label>Spesialisasi:</label>
                        <span>{userData.specialization}</span>
                      </div>
                      <div className="info-item">
                        <label>Bergabung Sejak:</label>
                        <span>{new Date(userData.joinDate).toLocaleDateString('id-ID')}</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <button className="edit-profile-btn" onClick={handleEditProfile}>
                  ✏️ Edit Profil
                </button>
              </>
            ) : (
              <form className="edit-profile-form" onSubmit={handleSaveProfile}>
                <div className="form-section">
                  <h3>Informasi Personal</h3>
                  <div className="form-grid">
                    <div className="form-group">
                      <label htmlFor="name">Nama Lengkap *</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={editFormData.name}
                        onChange={handleEditFormChange}
                        required
                      />
                    </div>
                    
                    <div className="form-group">
                      <label htmlFor="email">Email *</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={editFormData.email}
                        onChange={handleEditFormChange}
                        required
                      />
                    </div>
                    
                    <div className="form-group">
                      <label htmlFor="phone">Nomor Telepon *</label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={editFormData.phone}
                        onChange={handleEditFormChange}
                        required
                      />
                    </div>
                  </div>
                </div>

                <div className="form-section">
                  <h3>Informasi Pekerjaan</h3>
                  <div className="form-grid">
                    <div className="form-group">
                      <label htmlFor="department">Departemen *</label>
                      <input
                        type="text"
                        id="department"
                        name="department"
                        value={editFormData.department}
                        onChange={handleEditFormChange}
                        required
                      />
                    </div>
                    
                    <div className="form-group">
                      <label htmlFor="specialization">Spesialisasi *</label>
                      <textarea
                        id="specialization"
                        name="specialization"
                        value={editFormData.specialization}
                        onChange={handleEditFormChange}
                        required
                        rows="3"
                      ></textarea>
                    </div>
                  </div>
                </div>
                
                <div className="form-actions">
                  <button type="submit" className="save-btn">
                    💾 Simpan Perubahan
                  </button>
                  <button type="button" className="cancel-btn" onClick={handleCancelEdit}>
                    ❌ Batal
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StaffProfilePage;
