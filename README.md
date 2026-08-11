# CrewDog — Landing Page Mockup

A static landing page mockup for **CrewDog**, an intelligence platform that helps
independent recruiters build a one-person oil & gas recruitment agency by tracking
projects and hiring signals worldwide.

This is a design mockup — no backend. The search box and links are illustrative.

## Project structure

```
.
├── index.html                     # Page markup
└── src/
    ├── css/
    │   └── styles.css             # All styles (design tokens + components)
    ├── js/
    │   └── main.js                # Section data + rendering + light interactivity
    └── assets/
        ├── logo/
        │   └── crewdog-logo.png   # Brand logo (header + footer + favicon)
        └── hero/
            └── hero-composite.png # Hero section image
```

## Running locally

It's a plain static site — no build step. Open `index.html` directly, or serve it:

```bash
# Python
python3 -m http.server 8000

# or Node
npx serve .
```

Then visit http://localhost:8000.

## Notes

- Fonts (**Archivo**) load from Google Fonts and icons from [Lucide](https://lucide.dev)
  via CDN, so an internet connection is needed for those to render.
- Repeating sections (features, steps, signals table, trust stats) are rendered
  from the `data` object in `src/js/main.js` — edit copy there in one place.
- Swap the images in `src/assets/logo` and `src/assets/hero` to rebrand.
