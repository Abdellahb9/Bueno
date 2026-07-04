# Bueno — Fast Food Restaurant Website

Modern, frontend-only website for **Bueno**, a fast food restaurant at 154 Rue Mecca, Laâyoune 70000, Morocco.

## Tech Stack

- **React 18 + TypeScript** (Vite)
- **Tailwind CSS** — design tokens in `tailwind.config.js`
- **React Three Fiber + drei** — 3D burger hero (built from primitives, no model files)
- **Framer Motion** — scroll animations, tab transitions, carousel, mobile menu

## Getting Started

```bash
npm install
npm run dev      # start dev server (http://localhost:5173)
npm run build    # type-check + production build
npm run preview  # preview the production build
```

## Project Structure

```
src/
├── components/     # Reusable UI (Navbar, MenuCard, StarRating, Burger3D, …)
├── sections/       # Page sections (Hero, About, Menu, Gallery, Reviews, Location, Footer)
├── data/           # Mock data — edit these to change content
│   ├── restaurant.ts   # Name, address, phone, hours, socials
│   ├── menu.ts         # Menu items & categories
│   ├── reviews.ts      # Customer testimonials
│   └── gallery.ts      # Gallery images
└── App.tsx
```

## Connecting a Backend Later

All content lives in `src/data/*.ts` behind typed interfaces. To wire up an API:

1. Replace the static exports with fetch calls (e.g. `GET /api/menu`) keeping the same TypeScript shapes.
2. Swap the map placeholder in `src/sections/Location.tsx` for a Google Maps embed or Leaflet map.
3. Replace Unsplash placeholder URLs with real photography or CMS media.

## Notes

- Prices are in Moroccan dirham (MAD).
- Images are Unsplash placeholders loaded lazily.
- Animations respect `prefers-reduced-motion`.
