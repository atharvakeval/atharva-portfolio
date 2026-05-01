# Atharva Keval — Portfolio

A professional cybersecurity-focused portfolio built with **React + Vite + Framer Motion**.

## 🚀 Quick Start

### 1. Install dependencies
```bash
npm install
```

### 2. Run locally
```bash
npm run dev
```
Open http://localhost:5173

### 3. Build for production
```bash
npm run build
```
Output goes to `dist/` folder.

---

## 📦 Tech Stack

- **React 18** — UI framework
- **Vite 5** — fast dev server + build tool
- **Framer Motion** — animations
- **Lucide React** — icons
- Pure CSS (no Tailwind, no UI library) — for full control & a smaller bundle

---

## 🌐 Deploy to Vercel (Recommended — 2 minutes)

### Option A: Via GitHub (best for updates)

1. Push this folder to GitHub:
   ```bash
   git init
   git add .
   git commit -m "first commit"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/atharva-portfolio.git
   git push -u origin main
   ```

2. Go to **https://vercel.com/new** → sign in with GitHub
3. Click **"Import"** next to your `atharva-portfolio` repo
4. Vercel auto-detects Vite — just click **"Deploy"**
5. Live in ~30 seconds at `atharva-portfolio.vercel.app`

Every `git push` after this auto-deploys. Done.

### Option B: Drag & drop (no GitHub)

1. Run `npm run build`
2. Go to **https://vercel.com** → New Project → drag the `dist/` folder

### Option C: Netlify (also great)

1. Run `npm run build`
2. Go to **https://app.netlify.com/drop**
3. Drag the `dist/` folder onto the page → live instantly

---

## 🎨 Customization Guide

### Update your photo
Replace `src/assets/atharva.jpeg` with a new photo (keep the same filename, or update the import in `src/components/Hero.jsx`).

### Update content
All text content lives in component files (data is at the top of each):
- Hero text → `src/components/Hero.jsx`
- About section → `src/components/About.jsx`
- Experience → `src/components/Experience.jsx`
- Projects → `src/components/Projects.jsx` (edit the `projects` array)
- Skills → `src/components/Skills.jsx` (edit the `skillGroups` array)
- Certifications → `src/components/Certifications.jsx` (edit `certs` array)
- Contact links → `src/components/Contact.jsx` (edit `contacts` array)

### Update LinkedIn / GitHub URLs
In `src/components/Contact.jsx`, replace the placeholder URLs:
```js
{ icon: Linkedin, label: 'LinkedIn', value: 'atharva-keval', href: 'https://linkedin.com/in/YOUR-HANDLE' },
{ icon: Github, label: 'GitHub', value: '@atharva-keval', href: 'https://github.com/YOUR-HANDLE' },
```

### Change colors
All theme colors are CSS variables in `src/index.css`:
```css
--accent: #00ff9d;        /* primary cyber-green */
--accent-glow: rgba(0, 255, 157, 0.15);
--bg: #050608;            /* main background */
```

### Change fonts
Fonts are loaded in `index.html` via Google Fonts. Currently:
- Display: **Syne** (bold headings)
- Body: **Space Grotesk**
- Mono: **JetBrains Mono**

---

## 📂 Project Structure

```
atharva-portfolio/
├── public/
├── src/
│   ├── assets/
│   │   └── atharva.jpeg
│   ├── components/
│   │   ├── Nav.jsx + Nav.css
│   │   ├── Hero.jsx + Hero.css
│   │   ├── About.jsx + About.css
│   │   ├── Experience.jsx + Experience.css
│   │   ├── Projects.jsx + Projects.css
│   │   ├── Skills.jsx + Skills.css
│   │   ├── Certifications.jsx + Certifications.css
│   │   ├── Contact.jsx + Contact.css
│   │   └── Footer.jsx + Footer.css
│   ├── App.jsx
│   ├── App.css
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
└── vite.config.js
```

---

## ✅ Pre-launch Checklist

- [ ] Update GitHub link in `Contact.jsx`
- [ ] Update LinkedIn link in `Contact.jsx`
- [ ] Add real GitHub repo links to projects in `Projects.jsx`
- [ ] Test on mobile (open dev URL on your phone via local network)
- [ ] Run `npm run build` and check `dist/` works (`npm run preview`)
- [ ] Deploy to Vercel
- [ ] (Optional) Add a custom domain like `atharvakeval.com`

---

## 🔧 Troubleshooting

**Photo not showing?** Make sure `src/assets/atharva.jpeg` exists.

**`npm install` fails?** Check Node.js version — needs Node 18+. Run `node -v`.

**Vercel build fails?** Check the build logs — usually a missing dependency. Run `npm run build` locally first to catch issues.

---

Built with care, in a single afternoon.
