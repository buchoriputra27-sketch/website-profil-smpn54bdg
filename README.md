# Website Profil Smpn54bdg

Buatkan website profil resmi untuk "SMP Negeri 54 Kota Bandung" dengan desain yang sangat modern, mewah, bersih (clean aesthetic), menggunakan konsep glassmorphism, gradasi warna Biru Laut (Primary), Putih, dan aksen Kuning Keemasan, serta animasi transisi yang halus (smooth fade-in). Slogan sekolah adalah "five, four, best". Website ini harus memiliki 5 halaman utama dengan navigasi header dan footer yang responsif (dilengkapi logo /images/logo.png):



1. Halaman Beranda (Home):

- Hero Section yang memukau dengan slogan "five, four, best", teks sambutan, tombol CTA interaktif, dan foto gerbang sekolah di /images/gerbang.jpeg.

- Kartu Statistik Interaktif melayang: 777 Siswa, 24 Rombongan Belajar, Akreditasi B (30 September 2018), 33 Tenaga Kependidikan.

- Bagian Sorotan Budaya BISA (Bersih, Indah, Sehat, Asri) dengan ikon modern.



2. Halaman Tentang Kami (About Us):

- Visi & 5 Poin Misi lengkap secara berurutan.

- Penjelasan detail konsep Budaya BISA dan karakter Bandung Masagi.

- Timeline Sejarah Sekolah (dari rintisan filial 2013 hingga SK pendirian 14 Februari 2015).

- Grid Kartu Profil Riwayat Pimpinan & Struktur Pimpinan Aktif:

  * Kepala Sekolah: Hendra Prijatna, S.Pd., M.Pd. (HANYA teks nama dan jabatan saja, TANPA tag gambar foto karena status Plt).

  * Wakasek Kurikulum: Elin Lindiawati R, S.Pd. (foto: /images/wkasek-kurikulum.jpeg)

  * Wakasek Kesiswaan: Desi Kusmawati, S.Pd. (foto: /images/wakasek-kesiswaan.jpeg)

  * Wakasek Humas: Farrashati R, S.Pd. (foto: /images/wakasek-humas.jpeg)

  * Wakasek Sarana: Aulia Wisuda P, S.Kom. (foto: /images/wakasek-sarana.jpg)

  * Kepala Tata Usaha: Nono, S.A.P (foto: /images/kepala-tu.jpeg)



3. Halaman Fasilitas Sekolah (Facilities):

- Galeri foto sarana dan prasarana lengkap dengan fitur Interactive Lightbox Modal (ketika foto diklik, muncul pop-up ukuran penuh beserta judul dan deskripsi).

- Foto fasilitas yang harus dimuat: Laboratorium IPA (/images/lab-ipa.jpeg & /images/alat-ipa.jpeg), Laboratorium Komputer (/images/komputer.jpeg), Perpustakaan (/images/perpustakaan.jpeg & /images/perpustakaan-2.jpeg), Ruang Kelas (/images/ruang-kelas.jpeg), Toilet Putra (/images/toilet-cowo.jpeg), Toilet Putri (/images/toilet-cewe.jpeg), dan Ruang UKS (/images/uks.jpeg).



4. Halaman Ekstrakurikuler & Testimoni ("Kata Mereka"):

- Daftar 10 Ekstrakurikuler lengkap dengan Tombol Filter Hari Interaktif (Semua, Selasa, Rabu, Kamis, Jumat):

  1. Tarung Derajat | Selasa | 14.45 - 16.45 | Lapangan Upacara

  2. Marching Band | Jumat | 15.00 - 17.30 | Lapangan Voli

  3. Pramuka | Rabu | 14.30 - 17.30 | Lapangan Upacara

  4. Karawitan | Rabu | 15.00 - 17.00 | Lapangan Upacara

  5. Volly Ball | Rabu | 15.00 - 17.00 | Lapangan Voli

  6. Tari | Kamis | 14.45 - 16.45 | Ruang Kelas

  7. Pajarpara | Kamis | 15.00 - 17.00 | Lapangan Upacara

  8. PMR | Jumat | 13.00 - 15.00 | Lapangan Upacara / Kelas

  9. Futsal | Jumat | 15.00 - 17.00 | Triditi

  10. Sepak Bola | Jumat | 15.00 - 17.00 | Lapang Tulip

- Bagian Testimoni Siswa ("Kata Mereka") menampilkan kutipan wawancara asli dan foto profil dari 6 perwakilan siswa: Fadil (/images/fadila.jpeg), Khansa (/images/khansa.jpeg), Aulia (/images/aulia.jpeg), Abidzar (/images/abidzar.jpeg), Filzah (/images/filzdah.jpg), dan Ammar (/images/ammar.jpeg).



5. Halaman Kontak & Bantuan (Contact):

- Informasi Alamat (Jl. Raya Utsman Bin Affan, Rancanumpang, Gedebage, Bandung), Email (smpn54bandung@gmail.com), Instagram (@bdg.smpn54), YouTube (@smpn54bandung8), dan Jam Operasional (Senin-Jumat 07.00-14.00 WIB). PERINGATAN KERAS: JANGAN MENAMPILKAN NOMOR TELEPON ATAU IKON TELEPON APA PUN.

- Formulir Pesan Interaktif yang terhubung langsung ke tabel `messages` di Supabase, lengkap dengan notifikasi sukses saat pesan terkirim.



6. Fitur Global Tambahan:

- Widget Floating AI Chatbot di sudut kanan bawah dengan tombol quick replies (Alamat, Budaya BISA, Jadwal Ekskul, Jam Operasional) yang menjawab secara cerdas berdasarkan data resmi sekolah.

- Halaman Rahasia Admin (`/admin`) dengan login password sederhana (`smpn54best`) untuk melihat daftar pesan masuk dari Supabase secara real-time.

This project was built with [Lovable](https://lovable.dev).

**Live app**: https://website-profil-smpn54bdg.lovable.app

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/8678a0dd-e3ff-4e51-a664-68e92060d559).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
