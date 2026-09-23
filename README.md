# HOGC Universe — Official Web Portal

> **House of Giovanni Corsi** — Built as individual worlds. Connected as one universe.

## Live Site
🌐 [https://BARATHVAJ-M.github.io/HOGC/](https://BARATHVAJ-M.github.io/HOGC/)

## Overview
The official sovereign holding & foundation website for HOGC Universe — a curated enterprise ecosystem uniting four specialized companies:

| Entity | Domain |
|--------|--------|
| **GC Tech** | Digital Transformation & AI Solutions |
| **SapienSync** | Talent & Workforce Solutions |
| **GC Marketing** | Brand Strategy & Digital Marketing |
| **Autotown** | Intelligent Mobility & EV Infrastructure |

## Tech Stack
- **Framework**: React 18 + Vite
- **Styling**: Vanilla CSS — luxury editorial dark theme
- **Typography**: Cormorant Garamond (serif), Montserrat (sans)
- **Animations**: CSS-only planet breathing, atmospheric pulse, subtle float
- **Deployment**: GitHub Pages via `gh-pages`

## Local Development

```bash
npm install
npm run dev
```

## Build & Deploy

```bash
npm run build       # Production build → dist/
npm run deploy      # Build + push to gh-pages branch
```

## Architecture

```
src/
├── components/
│   ├── Hero/              # 01 — Landing with official HOGC emblem
│   ├── EnterUniverse/     # 02 — Four animated half-planet columns
│   ├── PlanetDeepDive/    # 03 — Full-bleed dossier cards per entity
│   ├── About/             # 04 — Founding house philosophy & mandate
│   ├── ProcessPortfolio/  # 05 — Methodology + project portfolio
│   ├── Contact/           # 06 — Direct engagement form
│   ├── Footer/            #    — Ecosystem footer (shared bg with contact)
│   ├── Navbar/            #    — Persistent glass navigation
│   ├── ScrollProgress/    #    — Right-side vertical section indicator
│   └── Loader/            #    — Progressive luxury loader
├── data/
│   └── ecosystemData.js   # Single source of truth for all entity data
└── index.css              # Design system tokens & global styles
```

## License
© 2026 HOGC Universe · House of Giovanni Corsi. All rights reserved.
