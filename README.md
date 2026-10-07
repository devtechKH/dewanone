# DewanOne V9.9.5.6.31.3.7 - Kapuas Hulu Icon Premium Complete 2026 - PWA Ready

**Bumi Uncak Kapuas • Icon Resmi • 14 Modul • 9 Tahap Alur Bisnis • SAKIP • RPJMD Bridge • SIPD Control 631**

Versi PWA siap install di iPhone & Android seperti aplikasi asli.

## 🚀 Siap Deploy ke GitHub & Cloudflare?

Ya, 100% siap. Ini adalah **static single HTML + PWA assets** tanpa server.

### File PWA Lengkap:
- `index.html` (1.4MB - sudah include icon base64 + SAKIP lengkap + Panduan lengkap)
- `manifest.json` - Konfigurasi PWA
- `sw.js` - Service Worker (offline cache)
- `icons/` - 8 ukuran icon (72-512) + apple-touch-icon
- `favicon.png`
- `_headers` - Header untuk Cloudflare Pages
- `_redirects` - SPA fallback
- `.nojekyll` - Untuk GitHub Pages

## 📱 Fitur PWA

- ✅ Install di Android (Chrome → Install App / Add to Home Screen)
- ✅ Install di iPhone (Safari → Share → Add to Home Screen)
- ✅ Offline ready (cache first)
- ✅ Standalone mode (tanpa address bar browser)
- ✅ Splash screen & theme color #0f172a
- ✅ Auto-update check (prompt reload jika versi baru)
- ✅ Shortcuts: Dashboard, Register Usulan, SAKIP, SIPD Control

## 🌐 Deploy ke GitHub Pages

1. Buat repo baru di GitHub, misal `dewanone-kapuas-hulu`
2. Upload semua file di folder ini ke repo (drag & drop atau git push)
```bash
git init
git add .
git commit -m "DewanOne Premium 2026 PWA - Kapuas Hulu Icon Complete"
git branch -M main
git remote add origin https://github.com/USERNAME/dewanone-kapuas-hulu.git
git push -u origin main
```
3. Di GitHub → Settings → Pages → Source: Deploy from branch `main` / root
4. Tunggu 1-2 menit → dapat URL `https://USERNAME.github.io/dewanone-kapuas-hulu/`
5. Buka di HP → akan muncul banner Install

## ☁️ Deploy ke Cloudflare Pages (Recommended - lebih cepat)

1. Login ke https://dash.cloudflare.com → Pages → Create a project → Connect to Git
2. Pilih repo `dewanone-kapuas-hulu`
3. Build settings:
   - Framework preset: None
   - Build command: (kosongkan)
   - Build output directory: `/` atau `.`
4. Deploy → dapat URL `https://dewanone-kapuas-hulu.pages.dev`
5. Custom domain (opsional): Pages → Custom domains → Add → `dewanone.kapuashulukab.go.id`

Cloudflare akan otomatis baca `_headers` dan `_redirects`.

## 🔐 Catatan Keamanan Supabase

Di file ini, `SUPABASE_URL` dan `SUPABASE_KEY` (anon key) hardcode di HTML. Ini **aman** untuk anon key (RLS tetap proteksi), tapi untuk best practice:

- Untuk GitHub public: anon key boleh public, tapi jangan commit `service_role` key
- Untuk production: bisa ganti dengan env vars di Cloudflare Pages → Settings → Environment variables → tambahkan `SUPABASE_URL` dan `SUPABASE_KEY`, lalu edit HTML untuk baca dari `window.ENV`

Saat ini sudah pakai RLS, jadi role & unit tetap aman (filter di Supabase, bukan browser).

## 📲 Cara Install di HP

**Android (Chrome):**
- Buka URL → tunggu 3 detik → banner "Install DewanOne di HP" muncul di bawah → Tap Install → Konfirmasi
- Atau: Menu Chrome (titik 3) → Install App / Add to Home Screen

**iPhone (Safari):**
- Buka URL di Safari (wajib Safari, bukan Chrome iOS)
- Tap tombol Share (kotak dengan panah ke atas di bawah) → Add to Home Screen → Add
- Buka dari Home Screen → akan jalan fullscreen tanpa address bar

## 🧪 Test PWA

- Buka Chrome DevTools → Application → Manifest → cek manifest terdeteksi
- Application → Service Workers → cek sw.js active
- Lighthouse → PWA → Run audit → harus 100% PWA

## 📦 Versi File

- V9.9.5.6.31.3.7 MASTER ADAPTIF RPJMD RENSTRA BRIDGE FIX FINAL + Icon Kapuas Hulu + Panduan Lengkap + SAKIP Lengkap Premium
- Size: ~1.4MB (sudah include icon base64 72KB)
- Database & logika 100% asli, tidak diubah

© 2026 Setwan Kapuas Hulu - Bumi Uncak Kapuas
Icon Resmi Perda No 7/2019
