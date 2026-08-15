# Sagar — Finance and Fiction (static site)

Fully static: `index.html` contains all content (every section, including
02 / Projects and 03 / Focus). Nothing is injected by JavaScript, so the page
renders identically on GitHub Pages, Netlify, or by double-clicking the file.

## Files
- `index.html` — the whole page
- `styles.css` — all styling
- `script.js` — optional polish only (rotating quotes, scroll progress,
  reveal animations, offset-aware smooth anchor scrolling)
- `assets/about-portrait.jpg` — About section image

## Deploy on GitHub Pages
1. Push these files to the repository root (keep `assets/` alongside `index.html`).
2. Settings → Pages → Source: `Deploy from a branch`, branch `main`, folder `/ (root)`.
