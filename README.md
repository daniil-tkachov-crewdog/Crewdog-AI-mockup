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
        ├── logo/                  # drop the real logo here
        └── hero/                  # drop the real hero composite here
```

The logo and hero render as **empty upload placeholders** (matching the design),
ready for real assets to be dropped into `src/assets/logo` and `src/assets/hero`.

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
- To add real imagery, place files in `src/assets/logo` / `src/assets/hero` and
  replace the `.imgslot` placeholder markup in `index.html` with `<img>` tags.
