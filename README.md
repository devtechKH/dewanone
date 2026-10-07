# DewanOne V9.9.5.6.31.3.7 — GitHub + Cloudflare Pages + PWA

## Struktur
- `index.html` — aplikasi utama
- `manifest.webmanifest` — PWA manifest
- `sw.js` — service worker / offline shell
- `_headers` — header Cloudflare Pages
- `icons/` — icon PWA

## Deploy ke GitHub
Upload seluruh isi folder ini ke repository, dengan `index.html` di root repository.

## Deploy ke Cloudflare Pages
Framework preset: None
Build command: kosong
Build output directory: `/` (root repository)

## PWA
Setelah HTTPS aktif:
- Android: buka URL → Add to Home Screen / Install app.
- iPhone: Safari → Share → Add to Home Screen.

Catatan: aplikasi tetap memerlukan koneksi internet untuk Supabase dan library CDN (Tailwind, Lucide, Chart.js, XLSX). Service worker menyediakan shell/offline fallback, bukan mode database offline penuh.
