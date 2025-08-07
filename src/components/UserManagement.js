import React, { useState } from 'react';
import './UserManagement.css';

const UserManagement = () => {
  const [users, setUsers] = useState([
    {
      id: 1,
      username: 'budi_reporter',
      name: 'Budi Santoso',
      role: 'reporter',
      email: 'budi.santoso@rri.co.id',
      satker: 'RRI Lampung',
      status: 'active',
      lastLogin: '2025-08-07 08:30',
      demoPassword: 'reporter123'
    },
    {
      id: 2,
      username: 'sari_reporter',
      name: 'Sari Wulandari',
      role: 'reporter',
      email: 'sari.wulandari@rri.co.id',
      satker: 'RRI Bandar Lampung',
      status: 'active',
      lastLogin: '2025-08-06 16:45',
      demoPassword: 'reporter123'
    },
    {
      id: 3,
      username: 'ahmad_redaktur',
      name: 'Ahmad Fauzi',
      role: 'redaktur',
      email: 'ahmad.fauzi@rri.co.id',
      satker: 'RRI Lampung',
      status: 'active',
      lastLogin: '2025-08-07 07:15',
      demoPassword: 'redaktur123'
    },
    {
      id: 4,
      username: 'indra_admin',
      name: 'Indra Permana',
      role: 'admin',
      email: 'indra.permana@rri.co.id',
      satker: 'RRI Lampung',
      status: 'active',
      lastLogin: '2025-08-07 06:00',
      demoPassword: 'admin123'
    },
    {
      id: 5,
      username: 'rina_reporter',
      name: 'Rina Handayani',
      role: 'reporter',
      email: 'rina.handayani@rri.co.id',
      satker: 'RRI Metro',
      status: 'active',
      lastLogin: '2025-08-05 14:20',
      demoPassword: 'reporter123'
    },
    {
      id: 6,
      username: 'dedi_reporter',
      name: 'Dedi Supriyadi',
      role: 'reporter',
      email: 'dedi.supriyadi@rri.co.id',
      satker: 'RRI Pringsewu',
      status: 'inactive',
      lastLogin: '2025-08-01 10:30',
      demoPassword: 'reporter123'
    },
    {
      id: 7,
      username: 'maya_redaktur',
      name: 'Maya Sari Dewi',
      role: 'redaktur',
      email: 'maya.dewi@rri.co.id',
      satker: 'RRI Bandar Lampung',
      status: 'active',
      lastLogin: '2025-08-06 18:45'
    },
    {
      id: 8,
      username: 'warga_demo',
      name: 'Andi Wijaya',
      role: 'warga',
      email: 'andi.wijaya@gmail.com',
      satker: 'Masyarakat Umum',
      status: 'active',
      lastLogin: '2025-08-06 20:15',
      demoPassword: 'warga123'
    }
  ]);

  const [showAddUser, setShowAddUser] = useState(false);
  const [editingUser, setEditingUser] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    username: '',
    email: '',
    role: 'reporter',
    satker: '',
    password: ''
  });

  const satkerOptions = [
    'RRI Lampung',
    'RRI Bandar Lampung',
    'RRI Metro',
    'RRI Pringsewu',
    'RRI Tulang Bawang',
    'RRI Way Kanan',
    'RRI Tanggamus',
    'RRI Lampung Timur',
    'Masyarakat Umum'
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleAddUser = (e) => {
    e.preventDefault();
    const newUser = {
      id: users.length + 1,
      ...formData,
      status: 'active',
      lastLogin: '-'
    };
    setUsers([...users, newUser]);
    setFormData({
      name: '',
      username: '',
      email: '',
      role: 'reporter',
      satker: '',
      password: ''
    });
    setShowAddUser(false);
    alert('Pengguna berhasil ditambahkan!');
  };

  const handleEditUser = (user) => {
    setEditingUser(user.id);
    setFormData({
      name: user.name,
      username: user.username,
      email: user.email,
      role: user.role,
      satker: user.satker,
      password: ''
    });
  };

  const handleUpdateUser = (e) => {
    e.preventDefault();
    setUsers(users.map(user => 
      user.id === editingUser 
        ? { ...user, ...formData }
        : user
    ));
    setEditingUser(null);
    setFormData({
      name: '',
      username: '',
      email: '',
      role: 'reporter',
      satker: '',
      password: ''
    });
    alert('Pengguna berhasil diperbarui!');
  };

  const handleDeleteUser = (userId) => {
    if (window.confirm('Apakah Anda yakin ingin menghapus pengguna ini?')) {
      setUsers(users.filter(user => user.id !== userId));
      alert('Pengguna berhasil dihapus!');
    }
  };

  const toggleUserStatus = (userId) => {
    setUsers(users.map(user => 
      user.id === userId 
        ? { ...user, status: user.status === 'active' ? 'inactive' : 'active' }
        : user
    ));
  };

  const getRoleColor = (role) => {
    const colors = {
      'admin': '#e74c3c',
      'redaktur': '#9b59b6',
      'reporter': '#3498db',
      'warga': '#27ae60'
    };
    return colors[role] || '#95a5a6';
  };

  const getRoleLabel = (role) => {
    const labels = {
      'admin': 'Administrator',
      'redaktur': 'Redaktur',
      'reporter': 'Reporter',
      'warga': 'Warga'
    };
    return labels[role] || role;
  };

  return (
    <div className="user-management">
      <div className="management-header">
        <div className="container">
          <h2>Kelola Pengguna</h2>
          <p>Kelola akun pengguna sistem RRI Advokasi</p>
          <button 
            className="add-user-btn"
            onClick={() => setShowAddUser(true)}
          >
            👤 Tambah Pengguna
          </button>
        </div>
      </div>

      <div className="container">
        {/* Add/Edit User Form */}
        {(showAddUser || editingUser) && (
          <div className="user-form-overlay">
            <div className="user-form">
              <div className="form-header">
                <h3>{editingUser ? 'Edit Pengguna' : 'Tambah Pengguna Baru'}</h3>
                <button 
                  className="close-btn"
                  onClick={() => {
                    setShowAddUser(false);
                    setEditingUser(null);
                    setFormData({
                      name: '',
                      username: '',
                      email: '',
                      role: 'reporter',
                      satker: '',
                      password: ''
                    });
                  }}
                >
                  ×
                </button>
              </div>

              <form onSubmit={editingUser ? handleUpdateUser : handleAddUser}>
                <div className="form-grid">
                  <div className="form-group">
                    <label>Nama Lengkap *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label>Username *</label>
                    <input
                      type="text"
                      name="username"
                      value={formData.username}
                      onChange={handleInputChange}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label>Email *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label>Peran *</label>
                    <select
                      name="role"
                      value={formData.role}
                      onChange={handleInputChange}
                      required
                    >
                      <option value="reporter">Reporter</option>
                      <option value="redaktur">Redaktur</option>
                      <option value="admin">Administrator</option>
                      <option value="warga">Warga</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label>Satuan Kerja *</label>
                    <select
                      name="satker"
                      value={formData.satker}
                      onChange={handleInputChange}
                      required
                    >
                      <option value="">Pilih Satker</option>
                      {satkerOptions.map(satker => (
                        <option key={satker} value={satker}>{satker}</option>
                      ))}
                    </select>
                  </div>

                  <div className="form-group">
                    <label>Password {editingUser ? '(kosongkan jika tidak diubah)' : '*'}</label>
                    <input
                      type="password"
                      name="password"
                      value={formData.password}
                      onChange={handleInputChange}
                      required={!editingUser}
                    />
                  </div>
                </div>

                <div className="form-actions">
                  <button type="submit" className="submit-btn">
                    {editingUser ? '💾 Update' : '➕ Tambah'} Pengguna
                  </button>
                  <button 
                    type="button" 
                    className="cancel-btn"
                    onClick={() => {
                      setShowAddUser(false);
                      setEditingUser(null);
                    }}
                  >
                    Batal
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        {/* Users Table */}
        <div className="users-table">
          <div className="table-header">
            <h3>Daftar Pengguna ({users.length})</h3>
          </div>

          <div className="table-responsive">
            <table>
              <thead>
                <tr>
                  <th>Nama</th>
                  <th>Username</th>
                  <th>Email</th>
                  <th>Peran</th>
                  <th>Satker</th>
                  <th>Status</th>
                  <th>Login Terakhir</th>
                  <th>Aksi</th>
                </tr>
              </thead>
              <tbody>
                {users.map(user => (
                  <tr key={user.id}>
                    <td>
                      <div className="user-info">
                        <strong>{user.name}</strong>
                      </div>
                    </td>
                    <td>{user.username}</td>
                    <td>{user.email}</td>
                    <td>
                      <span 
                        className="role-badge"
                        style={{ backgroundColor: getRoleColor(user.role) }}
                      >
                        {getRoleLabel(user.role)}
                      </span>
                    </td>
                    <td>{user.satker}</td>
                    <td>
                      <button
                        className={`status-toggle ${user.status}`}
                        onClick={() => toggleUserStatus(user.id)}
                      >
                        {user.status === 'active' ? '✅ Aktif' : '❌ Nonaktif'}
                      </button>
                    </td>
                    <td>{user.lastLogin}</td>
                    <td>
                      <div className="action-buttons">
                        <button
                          className="edit-btn"
                          onClick={() => handleEditUser(user)}
                        >
                          ✏️
                        </button>
                        <button
                          className="delete-btn"
                          onClick={() => handleDeleteUser(user.id)}
                        >
                          🗑️
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserManagement;
