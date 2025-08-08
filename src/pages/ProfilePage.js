import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './ProfilePage.css';

const ProfilePage = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState(null);
  const [isEditingProfile, setIsEditingProfile] = useState(false);
  const [editFormData, setEditFormData] = useState({
    fullName: '',
    phone: '',
    address: ''
  });

  useEffect(() => {
    // Check if user is logged in
    const storedUser = localStorage.getItem('userData');
    if (!storedUser) {
      navigate('/login');
      return;
    }

    const user = JSON.parse(storedUser);
    setUserData(user);
    setEditFormData({
      fullName: user.fullName,
      phone: user.phone,
      address: user.address
    });
  }, [navigate]);

  const handleEditProfile = () => {
    setIsEditingProfile(true);
  };

  const handleCancelEdit = () => {
    setIsEditingProfile(false);
    setEditFormData({
      fullName: userData.fullName,
      phone: userData.phone,
      address: userData.address
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
      fullName: editFormData.fullName,
      phone: editFormData.phone,
      address: editFormData.address
    };
    
    // Save to localStorage
    localStorage.setItem('userData', JSON.stringify(updatedUserData));
    
    // Update state
    setUserData(updatedUserData);
    setIsEditingProfile(false);
    
    alert('Profil berhasil diperbarui!');
  };

  const handleBackToDashboard = () => {
    navigate('/dashboard-warga');
  };

  if (!userData) {
    return <div className="loading">Loading...</div>;
  }

  return (
    <div className="profile-page">
      <div className="container">
        <div className="profile-header">
          <button className="back-btn" onClick={handleBackToDashboard}>
            ← Kembali ke Dashboard
          </button>
          <h1>Profil Saya</h1>
        </div>

        <div className="profile-content">
          <div className="profile-card">
            <div className="profile-avatar">
              {userData.fullName.charAt(0).toUpperCase()}
            </div>
            
            {!isEditingProfile ? (
              <>
                <div className="profile-info">
                  <div className="info-item">
                    <label>Nama Lengkap:</label>
                    <span>{userData.fullName}</span>
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
                    <label>Alamat:</label>
                    <span>{userData.address}</span>
                  </div>
                  {userData.birthDate && (
                    <div className="info-item">
                      <label>Tanggal Lahir:</label>
                      <span>{new Date(userData.birthDate).toLocaleDateString('id-ID')}</span>
                    </div>
                  )}
                  {userData.age && (
                    <div className="info-item">
                      <label>Usia:</label>
                      <span>{userData.age} tahun</span>
                    </div>
                  )}
                  <div className="info-item">
                    <label>Terdaftar Sejak:</label>
                    <span>{new Date(userData.registeredAt).toLocaleDateString('id-ID')}</span>
                  </div>
                </div>
                <button className="edit-profile-btn" onClick={handleEditProfile}>
                  ✏️ Edit Profil
                </button>
              </>
            ) : (
              <form className="edit-profile-form" onSubmit={handleSaveProfile}>
                <div className="form-group">
                  <label htmlFor="fullName">Nama Lengkap *</label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={editFormData.fullName}
                    onChange={handleEditFormChange}
                    required
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="email">Email (tidak dapat diubah)</label>
                  <input
                    type="email"
                    id="email"
                    value={userData.email}
                    disabled
                    className="disabled-input"
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
                
                <div className="form-group">
                  <label htmlFor="address">Alamat *</label>
                  <textarea
                    id="address"
                    name="address"
                    value={editFormData.address}
                    onChange={handleEditFormChange}
                    required
                    rows="3"
                  ></textarea>
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

export default ProfilePage;
