# Portofolio - Muhammad Syaiful (Next.js & Tailwind CSS)

Ini adalah proyek portofolio pribadi yang dimigrasikan dari HTML/CSS statis ke aplikasi Next.js modern menggunakan Tailwind CSS untuk styling.

## Teknologi yang Digunakan

*   **Next.js:** Framework React untuk aplikasi web siap produksi.
*   **React:** Library JavaScript untuk membangun antarmuka pengguna.
*   **Tailwind CSS:** Framework CSS utility-first untuk styling yang cepat dan mudah dikonfigurasi.
*   **TypeScript:** (Digunakan oleh Next.js secara internal untuk beberapa konfigurasi, meskipun kode aplikasi utama ditulis dalam JavaScript/JSX untuk kesederhanaan migrasi).

## Fitur

*   Halaman Beranda (`/`): Menyajikan pengantar dan ringkasan proyek-proyek.
*   Halaman Tentang (`/about`): Berisi informasi lebih lanjut tentang Muhammad Syaiful.
*   Halaman Kontak (`/contact`): Menyediakan formulir kontak dan detail kontak.

## Struktur Proyek

Proyek ini mengikuti konvensi App Router Next.js, dengan struktur direktori sebagai berikut:

```
portofolio/
├───public/                      # Direktori untuk aset statis (gambar, font, dll.)
│   └───asset/
│       ├───img/                 # Gambar proyek dan hero
│       └───logo/                # Logo media sosial dan logo utama
├───src/
│   └───app/                     # Direktori utama App Router
│       ├───(root)/              # Folder untuk route group, misalnya untuk shared layouts/components
│       ├───page.tsx             # Komponen halaman utama (/)
│       ├───about/               # Direktori untuk halaman About
│       │   └───page.tsx         # Komponen halaman About (/about)
│       ├───contact/             # Direktori untuk halaman Contact
│       │   └───page.tsx         # Komponen halaman Contact (/contact)
│       ├───layout.tsx           # Layout root untuk aplikasi (mencakup navbar dan footer)
│       └───globals.css          # Global CSS, termasuk direktif Tailwind CSS
├───.git/
├───.next/                       # Hasil build Next.js (dihasilkan secara otomatis)
├───node_modules/                # Dependensi proyek
├───package.json                 # Metadata proyek dan skrip
├───package-lock.json            # Lock file untuk dependensi
├───postcss.config.mjs           # Konfigurasi PostCSS, digunakan oleh Tailwind CSS
├───next.config.ts               # Konfigurasi Next.js
├───next-env.d.ts                # Deklarasi lingkungan Next.js TypeScript
├───README.md                    # File ini
├───tsconfig.json                # Konfigurasi TypeScript
└───... (file konfigurasi lainnya)
```

## Penjelasan Rute

Next.js App Router menggunakan sistem routing berbasis file-system. Setiap folder dalam `src/app` yang berisi file `page.tsx` akan otomatis menjadi rute.

*   **Rute Beranda:**
    *   Path: `/`
    *   Ditangani oleh: `src/app/page.tsx`
*   **Rute Tentang:**
    *   Path: `/about`
    *   Ditangani oleh: `src/app/about/page.tsx`
*   **Rute Kontak:**
    *   Path: `/contact`
    *   Ditangani oleh: `src/app/contact/page.tsx`

`layout.tsx` di `src/app` bertindak sebagai root layout, yang berarti konten di dalamnya (seperti Navbar dan Footer) akan dibagikan di semua halaman.

## Tailwind CSS

Tailwind CSS diintegrasikan langsung ke dalam proyek. Gaya-gaya dari `styles.css` asli telah dikonversi menjadi utility class Tailwind di setiap komponen halaman. Konfigurasi dasar Tailwind diatur melalui `postcss.config.mjs` dan diimpor di `src/app/globals.css`.

## Manajemen Aset

Semua aset statis seperti gambar (`.png`) dan ikon (`.svg`) terletak di direktori `public/asset/`. Next.js secara otomatis melayani file-file dari direktori `public`, sehingga mereka dapat diakses langsung dari root URL (misalnya, `/asset/img/hero.png`).

## Cara Memulai

Untuk menjalankan proyek ini secara lokal, ikuti langkah-langkah berikut:

1.  **Navigasi ke direktori proyek:**
    ```bash
    cd portofolio
    ```
2.  **Instal dependensi:**
    ```bash
    npm install
    # atau jika Anda menggunakan yarn
    # yarn install
    ```
3.  **Jalankan server pengembangan:**
    ```bash
    npm run dev
    # atau jika Anda menggunakan yarn
    # yarn dev
    ```
    Aplikasi akan berjalan di `http://localhost:3000`.

4.  **Membangun (Build) untuk Produksi:**
    ```bash
    npm run build
    # atau jika Anda menggunakan yarn
    # yarn build
    ```

5.  **Memulai (Start) Aplikasi Produksi:**
    ```bash
    npm run start
    # atau jika Anda menggunakan yarn
    # yarn start
    ```

---

Semoga README ini membantu Anda memahami struktur dan cara kerja proyek yang telah dimigrasikan ini!

## Penjelasan Elemen Tailwind CSS yang Digunakan

Proyek ini terutama memanfaatkan kelas utilitas Tailwind CSS untuk menentukan tata letak, tipografi, jarak, ukuran, warna, dan perilaku responsif. Daripada menulis aturan CSS kustom, kelas-kelas yang telah ditentukan ini diterapkan langsung di JSX.

Berikut adalah rincian pola Tailwind CSS umum dan kelas-kelas spesifik yang diamati:

1.  **Tata Letak dan Flexbox:**
    *   `flex`: Menerapkan `display: flex;` ke elemen, menjadikannya kontainer flex.
    *   `flex-col`: Menyusun item flex secara vertikal (`flex-direction: column;`).
    *   `items-center`: Menyelaraskan item flex di sepanjang sumbu silang (`align-items: center;`).
    *   `justify-between`: Mendistribusikan ruang di antara dan di sekitar item konten di sepanjang sumbu utama (`justify-content: space-between;`).
    *   `gap-[value]`: Mengatur celah antara grid atau flex item. Nilai kustom seperti `gap-[60px]` digunakan ketika nilai skala spasi Tailwind standar tidak mencukupi.
    *   `grid`: Membuat kontainer grid (`display: grid;`).
    *   `grid-cols-2`, `grid-cols-3`: Mendefinisikan jumlah kolom dalam grid. Contoh: `grid-template-columns: repeat(2, minmax(0, 1fr));`.
    *   `relative`: Mengatur konteks posisi untuk anak-anak yang diposisikan secara absolut (`position: relative;`).

2.  **Ukuran (Lebar dan Tinggi):**
    *   `w-full`: Mengatur lebar menjadi 100% (`width: 100%;`).
    *   `h-[value]`: Mengatur tinggi tetap. Contoh: `h-[100px]` untuk `height: 100px;`.
    *   `max-w-[value]`: Mengatur lebar maksimum. Contoh: `max-w-[1228px]` untuk `max-width: 1228px;`.
    *   `min-h-[value]`: Mengatur tinggi minimum. Contoh: `min-h-[120px]` untuk `min-height: 120px;`.

3.  **Jarak (Padding dan Margin):**
    *   `px-5`: Menerapkan padding horizontal (`padding-left: 1.25rem; padding-right: 1.25rem;`).
    *   `py-10`: Menerapkan padding vertikal (`padding-top: 2.5rem; padding-bottom: 2.5rem;`).
    *   `p-3`: Menerapkan padding di semua sisi (`padding: 0.75rem;`).
    *   `mt-12`: Mengatur margin-top (`margin-top: 3rem;`).
    *   `mb-[value]`: Mengatur margin-bottom dengan nilai kustom. Contoh: `mb-[27px]` untuk `margin-bottom: 27px;`.

4.  **Tipografi:**
    *   `text-[value]`: Mengatur ukuran font dengan nilai kustom. Contoh: `text-[29px]` untuk `font-size: 29px;`.
    *   `font-normal`: Mengatur bobot font menjadi normal (`font-weight: 400;`).
    *   `font-poppins`: (Kemungkinan pengaturan keluarga font kustom di `tailwind.config.js` atau `globals.css` jika bukan font Tailwind default, atau diterapkan langsung ke body).
    *   `text-[#hex_code]`: Mengatur warna teks dengan nilai heksadesimal kustom. Contoh: `text-[#282828]`.
    *   `leading-tight`, `leading-normal`, `leading-relaxed`: Mengatur tinggi baris.
    *   `text-black`, `text-gray-500`: Mengatur warna teks menggunakan palet warna default Tailwind.
    *   `text-center`: Menyelaraskan teks ke tengah (`text-align: center;`).
    *   `no-underline`: Menghapus dekorasi teks (`text-decoration: none;`).

5.  **Batas dan Latar Belakang:**
    *   `bg-[#hex_code]`: Mengatur warna latar belakang dengan nilai heksadesimal kustom. Contoh: `bg-[#f5f5f5]`.
    *   `bg-black`, `bg-white`: Mengatur warna latar belakang menggunakan palet warna default Tailwind.
    *   `border`: Menerapkan batas default.
    *   `border-[#ccc]`: Mengatur warna batas dengan nilai heksadesimal kustom.
    *   `border-t-2`: Mengatur batas atas dengan lebar 2px.
    *   `border-black`: Mengatur warna batas menjadi hitam.
    *   `rounded-[value]`: Menerapkan `border-radius`. Contoh: `rounded-[5px]`.

6.  **Interaktivitas dan Penampilan:**
    *   `overflow-hidden`: Memotong konten yang meluap dari kotak padding elemen (`overflow: hidden;`).
    *   `object-cover`: Mengubah ukuran konten untuk menutupi kontainer (`object-fit: cover;`).
    *   `object-left`: Menyelaraskan konten ke sisi kiri kontainernya (`object-position: left;`).
    *   `resize-y`: Mengizinkan pengubahan ukuran vertikal elemen (`resize: vertical;`).
    *   `cursor-pointer`: Mengubah kursor mouse menjadi pointer (`cursor: pointer;`).
    *   `transition-all`, `duration-300`: Menerapkan transisi CSS untuk animasi yang halus (`transition-property: all; transition-duration: 300ms;`).
    *   `hover:bg-black`, `hover:text-white`: Menerapkan gaya pada status hover (`:hover` pseudo-class).

7.  **Nilai Kustom:**
    Banyak properti menggunakan nilai arbitrer yang diapit dalam tanda kurung siku, seperti `h-[100px]`, `gap-[60px]`, `text-[29px]`, `max-w-[1228px]`, `bg-[#f5f5f5]`. Ini adalah fitur Tailwind yang kuat yang memungkinkan penggunaan nilai spesifik apa pun yang tidak tersedia dalam sistem desain default tanpa memperluas `tailwind.config.js`.
