# RRI ADVOKASI - Platform Pelaporan Publik

Website platform advokasi publik Radio Republik Indonesia yang menghubungkan masyarakat dengan pemerintah untuk menciptakan perubahan positif melalui sistem pelaporan digital.

## Fitur Utama

### 📝 Sistem Pelaporan
- **Formulir Pelaporan Online** - Form lengkap dengan berbagai kategori isu
- **Upload Bukti Pendukung** - Mendukung foto, video, dan dokumen PDF
- **Deteksi Lokasi GPS** - Untuk memudahkan verifikasi lokasi kejadian
- **Mode Anonim** - Perlindungan identitas pelapor dalam pemberitaan

### 🔍 Pelacakan Status
- **ID Laporan Unik** - Setiap laporan mendapat nomor referensi
- **Timeline Real-time** - Pantau progress penanganan laporan
- **Notifikasi Update** - Pemberitahuan setiap ada perubahan status
- **Transparansi Proses** - Status dari diterima hingga publikasi berita

### � Statistik & Transparansi
- **Dashboard Publik** - Data terbuka jumlah laporan dan penanganan
- **Distribusi Kategori** - Visualisasi isu berdasarkan kategori
- **Indikator Kinerja** - Waktu respon dan tingkat penyelesaian
- **Laporan Berkala** - Unduh statistik bulanan dan tahunan

### 📰 Dampak & Berita
- **Kisah Sukses** - Laporan yang berhasil menciptakan perubahan
- **Berita Tindak Lanjut** - Perkembangan isu yang dilaporkan
- **Dampak Nyata** - Dokumentasi perubahan yang terjadi

## Fungsionalitas Berdasarkan Peran

### 🏛️ Untuk Warga (Pelapor)
- Buat laporan dengan mudah melalui formulir online
- Pilih kategori isu (Infrastruktur, Kesehatan, Pendidikan, dll)
- Upload bukti pendukung (foto, video, dokumen)
- Deteksi lokasi otomatis atau input manual
- Opsi pelaporan anonim untuk perlindungan identitas
- Dapatkan ID referensi untuk pelacakan
- Pantau status laporan secara real-time

### � Untuk Reporter RRI
- Dashboard khusus untuk mengelola laporan
- Filter laporan berdasarkan wilayah dan kategori
- Ubah status laporan selama proses investigasi
- Upload hasil investigasi dan produk berita
- Validasi laporan melalui pengecekan lapangan
- Hubungkan laporan dengan naskah berita

### 📝 Untuk Redaktur
- Oversight semua laporan dari berbagai wilayah  
- Assign laporan kepada reporter tertentu
- Review dan approve produk berita
- Monitor progress penanganan tim
- Berikan feedback dan catatan revisi
- Finalisasi status publikasi berita

### 🔧 Untuk Administrator
- Manajemen user dan hak akses
- Kelola kategori isu dan sistem
- Generate laporan statistik
- Konfigurasi notifikasi dan workflow
- Maintenance sistem dan database

## Teknologi

- **React 19.1.1** - Frontend framework modern
- **CSS3 dengan Grid & Flexbox** - Styling responsif
- **Responsive Design** - Optimal di semua perangkat
- **Form Validation** - Validasi input yang komprehensif
- **File Upload System** - Upload multiple file dengan validasi
- **Real-time Status Updates** - Update status secara langsung

## Struktur Komponen

```
src/
├── components/
│   ├── Header.js/css - Navigation dan login
│   ├── Hero.js/css - Hero section dengan statistik
│   ├── ReportingSection.js/css - Form pelaporan lengkap
│   ├── TrackingSection.js/css - Sistem pelacakan laporan
│   ├── StatsSection.js/css - Dashboard statistik publik
│   ├── NewsSection.js/css - Berita dampak dan pencapaian
│   └── Footer.js/css - Footer dengan informasi kontak
├── App.js - Main component
├── App.css - Global styles
└── index.js - Entry point
```

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
