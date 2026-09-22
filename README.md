# SiteCrafters Development, React rebuild

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

- **Performance:** Vite + code-splitting, no jQuery / page-builder bloat, lazy-loaded images.
- **Design system:** Tailwind config with a custom light palette, typography and motion tokens.
- **Sections:** Services grid, Process timeline, filterable work gallery, contact form.
- **Multi-page routing:** `/`, `/about`, `/contact`, `/work/:slug` (case studies) plus hash anchors (`/#work`, `/#services`).
- **Accessibility:** Skip-to-content link, focus-visible rings, semantic landmarks, aria labels.
- **Motion:** Framer Motion entrance animations and smooth scroll behaviour.
- **SEO:** Meta description, Open Graph tags, semantic HTML, sensible heading hierarchy.

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
   ├─ downsyndrome-canada.png        ← Down Syndrome Canada (lead image for brand collection)
   ├─ uniontab.png                   ← UnionTab, featured
   ├─ signaturespan.png              ← Signature Span, featured
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
**Filenames are case-sensitive,** keep them exactly as listed above. If you
prefer a different filename or format, update the matching `image` field
in `src/data/portfolio.js` (or the `src` prop in `Hero.jsx` / `CtaBanner.jsx` /
`About.jsx`).

> Once a file exists at the expected path, the placeholder pattern is replaced
> automatically, no code changes needed.

## Project structure

```
src/
├─ components/   # Navbar, Hero, Work, Services, Process, CtaBanner, Footer, Icon, Media…
├─ data/         # portfolio.js: site copy, portfolio items, services, process
├─ pages/        # Home, About, Contact, NotFound
├─ styles/       # index.css (Tailwind layers + design tokens)
├─ App.jsx
└─ main.jsx
```

## Editing copy

All site copy lives in `src/data/portfolio.js` and the individual section
components, no CMS dependency, just edit and redeploy.

## Gallery categories & case studies

Each item in `PORTFOLIO` (`src/data/portfolio.js`) has:

- `categories`: one or more of `Web`, `Graphics`, `Social & Marketing`,
  `Branding`. These drive the gallery filter. A filter button only appears
  once at least one published project uses that category.
- `tags`: the smaller industry labels shown on each card (Union, Charity…).
- `url` *(optional)*: the live site. Cards without a case study link here in a new tab.
- `caseStudy` *(optional)*: add this and the card links to `/work/<slug>`
  instead. See the `placeholder-branding` entry for every supported field
  (`summary`, `client`, `year`, `role`, `services`, `hero`, `sections`,
  `outcomes`, `gallery`). Every image needs an `alt`.
- `draft: true` *(optional)*: shown in `npm run dev` only, never in a production build.

A card with neither `url` nor `caseStudy` renders as a plain, non-clickable card.

## Deploy

The output of `npm run build` is a static `dist/` folder that drops onto any
static host: Netlify, Vercel, Cloudflare Pages, GitHub Pages, S3 + CloudFront,
or the existing WordPress host's `public_html` if you want to swap in-place.

The site uses client-side routing, so the host must serve `index.html` for
unknown paths (e.g. `/about`, `/work/<slug>`) — an SPA fallback / rewrite rule.
