# Media folder

Drop your image files into the matching sub-folders below. The site shows a
polished placeholder for any missing image, so layout stays intact until you
upload.

```
public/media/
├─ hero/
│  ├─ ux-designer-illustration.png   (hero illustration  — ~1600×1200)
│  └─ designer-juggling-tasks.png    (mid-page CTA image — ~1600×1200)
├─ about/
│  └─ portrait.jpg                   (about page photo   — ~1200×1500 portrait)
└─ portfolio/
   ├─ apssp.png
   ├─ downsyndrome-canada.png            ← Down Syndrome Canada (lead image for the brand-collection card)
   ├─ camp321.png
   ├─ peel-transition.png
   ├─ atu1573.png
   ├─ teachers-union.png
   ├─ guri-stone.png
   ├─ maple-valley-contracting.png
   ├─ wedding.png
   ├─ salvatores.png
   └─ pay321.png
```

**Accepted formats:** .png, .jpg, .jpeg, .webp, .avif, .svg
**Filenames are case-sensitive.** Keep them exactly as listed.

If you'd rather use different names, update the `image` field for the
matching item in `src/data/portfolio.js` (or the `src` prop in Hero.jsx /
CtaBanner.jsx / About.jsx for the non-portfolio images).
