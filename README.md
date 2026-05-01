# Atharva Keval — Portfolio

A professional cybersecurity-focused portfolio built with **React + Vite + Framer Motion**.

## 📦 Tech Stack

- **React 18** — UI framework
- **Vite 5** — fast dev server + build tool
- **Framer Motion** — animations
- **Lucide React** — icons
- Pure CSS (no Tailwind, no UI library) — for full control & a smaller bundle

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
