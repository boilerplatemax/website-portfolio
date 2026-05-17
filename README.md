# SiteCrafters Development — React rebuild

Modern, hand-built React.js rebuild of [sitecraftersdev.com](https://sitecraftersdev.com/).
Vite + React 18 + Tailwind CSS + Framer Motion + React Router.

## Getting started

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build to /dist
npm run preview  # preview the prod build
```

## What's improved over the WordPress original

- **Performance** — Vite + code-splitting, no jQuery / page-builder bloat, lazy-loaded images.
- **Design system** — Tailwind config with a custom palette, typography, dark mode and motion tokens.
- **New sections** — Services grid, Process timeline, Marquee tech-stack ribbon, animated counters, contact form.
- **Multi-page routing** — `/`, `/about`, `/contact` plus hash anchors (`/#work`, `/#services`).
- **Accessibility** — Skip-to-content link, focus-visible rings, semantic landmarks, aria labels, `prefers-color-scheme`.
- **Dark mode** — Toggle in the navbar, persisted in `localStorage`, follows system preference by default.
- **Motion** — Framer Motion entrance animations, animated counter stats, smooth typed-rotator hero (custom hook, no `typed.js` dep).
- **SEO** — Meta description, Open Graph tags, semantic HTML, sensible heading hierarchy.

## Where to drop your media

The site reads images from `/public/media/...` and falls back to a polished
placeholder when a file is missing, so layout is preserved while you upload.

Drop your files in **exactly** these locations and filenames:

```
public/media/
├─ hero/
│  ├─ ux-designer-illustration.png       ← hero illustration  (recommended ~1600×1200, .png or .webp)
│  └─ designer-juggling-tasks.png        ← mid-page CTA image (recommended ~1600×1200, .png or .webp)
├─ about/
│  └─ portrait.jpg                       ← About page portrait/team photo (recommended 1200×1500 portrait, .jpg or .webp)
└─ portfolio/
   ├─ apssp.png
   ├─ downsyndrome-canada.png        ← Down Syndrome Canada (main hub)
   ├─ downsyndrome-foundation.png    ← Down Syndrome Foundation (sister site)
   ├─ skills-development.png         ← Skills Development (sister site)
   ├─ camp321.png
   ├─ peel-transition.png
   ├─ atu1573.png
   ├─ teachers-union.png
   ├─ guri-stone.png
   ├─ maple-valley-contracting.png
   ├─ wedding.png
   ├─ salvatores.png
   └─ pay321.png            ← portfolio screenshots (recommended 1600×1000, .png/.webp/.jpg)
```

**Accepted file types:** `.png`, `.jpg`, `.jpeg`, `.webp`, `.avif`, `.svg`.
**Filenames are case-sensitive** — keep them exactly as listed above. If you
prefer a different filename or format, update the matching `image` field
in `src/data/portfolio.js` (or the `src` prop in `Hero.jsx` / `CtaBanner.jsx` /
`About.jsx`).

> Once a file exists at the expected path, the placeholder pattern is replaced
> automatically — no code changes needed.

## Project structure

```
src/
├─ components/   # Navbar, Hero, Work, Stats, Services, Process, CtaBanner, Footer, Icon, Media…
├─ data/         # portfolio.js — site copy, portfolio items, services, process, stats
├─ hooks/        # useTypewriter, useTheme
├─ pages/        # Home, About, Contact, NotFound
├─ styles/       # index.css (Tailwind layers + design tokens)
├─ App.jsx
└─ main.jsx
```

## Editing copy

All site copy lives in `src/data/portfolio.js` and the individual section
components — no CMS dependency, just edit and redeploy.

## Deploy

The output of `npm run build` is a static `dist/` folder that drops onto any
static host: Netlify, Vercel, Cloudflare Pages, GitHub Pages, S3 + CloudFront,
or the existing WordPress host's `public_html` if you want to swap in-place.
