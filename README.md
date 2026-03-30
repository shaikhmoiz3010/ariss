# ARISS – Automation Simplified Website

A production-ready React + Vite + Tailwind CSS website based on the ARISS IoT product catalogue.

## Tech Stack

| Tool | Purpose |
|---|---|
| **Vite** | Blazing-fast dev server & build |
| **React 18** | Component-based UI |
| **Tailwind CSS v3** | Utility-first styling |
| **Framer Motion** | (Optional) — listed in package.json, ready to use |
| **Google Fonts** | Barlow Condensed (display) + DM Sans (body) |

## Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Start dev server
npm run dev

# 3. Build for production
npm run build

# 4. Preview production build
npm run preview
```

## Project Structure

```
ariss-website/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── Navbar.jsx           # Sticky top nav with mobile hamburger
│   │   ├── HeroSection.jsx      # Full-height hero with animated stats
│   │   ├── WhyARISS.jsx         # Key selling points + retrofit callout
│   │   ├── EcosystemSection.jsx # 9 IoT category tiles
│   │   ├── ProductsSection.jsx  # Filterable product grid
│   │   ├── ProductCard.jsx      # Reusable single-product card
│   │   ├── AppSection.jsx       # Smartlife app showcase
│   │   ├── VoiceSection.jsx     # Alexa / Google Home / Siri
│   │   └── Footer.jsx           # Contact + social links + nav
│   ├── data/
│   │   └── products.js          # All 17 products + ecosystem categories
│   ├── hooks/
│   │   └── useScrollReveal.js   # IntersectionObserver scroll animations
│   ├── App.jsx                  # Root component (composes all sections)
│   ├── main.jsx                 # React entry point
│   └── index.css                # Tailwind directives + global styles
├── index.html                   # HTML shell (loads Google Fonts)
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
└── package.json
```

## Design System

### Colours

| Token | Hex | Usage |
|---|---|---|
| `brand-orange` | `#E8540A` | Primary accent, CTAs |
| `brand-orange-light` | `#F5793A` | Hover states |
| `brand-orange-dark` | `#C44208` | Active/pressed states |
| `brand-black` | `#0A0A0A` | Headlines, navbar logo |
| `brand-gray-bg` | `#F7F6F4` | Page background |
| `brand-gray-light` | `#F0EFED` | Card backgrounds |

### Typography

- **Display**: `Barlow Condensed` (800 weight) — all headings
- **Body**: `DM Sans` — descriptions, labels, UI text

### Animation Classes

Add these classes in JSX for scroll-triggered entrance animations:

```jsx
<div className="reveal">...</div>          {/* fade up */}
<div className="reveal-left">...</div>     {/* slide from left */}
<div className="reveal-right">...</div>    {/* slide from right */}

{/* Add delay modifier for stagger */}
<div className="reveal delay-200">...</div>
```

The `useScrollReveal` hook wires up the IntersectionObserver globally in `App.jsx`.

## Sections (mapped to PDF pages)

| Section | PDF Pages | Component |
|---|---|---|
| Hero / Welcome | 1–2 | `HeroSection.jsx` |
| Why ARISS + Retrofit | 3, 5, 7 | `WhyARISS.jsx` |
| IoT Ecosystem | 4 | `EcosystemSection.jsx` |
| Products | 11–27 | `ProductsSection.jsx` + `ProductCard.jsx` |
| App Interface | 8–9 | `AppSection.jsx` |
| Voice Assistance | 6, 10 | `VoiceSection.jsx` |
| Contact / Footer | 29 | `Footer.jsx` |

## Adding a New Product

Edit `src/data/products.js` and add an entry to the `PRODUCTS` array:

```js
{
  id: 'my-new-product',      // unique slug
  name: 'My New Product',
  tagline: 'Short tagline',
  shortDesc: 'One or two sentence description.',
  accentColor: '#hexcolor',  // top strip colour on the card
  features: ['Feature 1', 'Feature 2'],
  badges: ['Badge A', 'Badge B'],
}
```

Then add it to the appropriate filter in `ProductsSection.jsx`.

## Extending with Framer Motion

Framer Motion is already in `package.json`. To upgrade a component:

```jsx
import { motion } from 'framer-motion'

// Replace <div className="reveal"> with:
<motion.div
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, margin: '-50px' }}
  transition={{ duration: 0.6 }}
>
```
