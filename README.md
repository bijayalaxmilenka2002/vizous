# Vizous Interio — Luxury Bespoke Interiors & Modular Furniture

[![Vite](https://img.shields.io/badge/Vite-6.0-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)
[![JavaScript](https://img.shields.io/badge/ES6-Modules-F7DF1E?logo=javascript&logoColor=black)](https://developer.mozilla.org/)
[![CSS3](https://img.shields.io/badge/CSS3-Design_System-1572B6?logo=css3&logoColor=white)](https://developer.mozilla.org/)
[![Vercel Ready](https://img.shields.io/badge/Deploy-Vercel-black?logo=vercel&logoColor=white)](https://vercel.com/)
[![Database](https://img.shields.io/badge/Storage-MongoDB_Atlas_Ready-47A248?logo=mongodb&logoColor=white)](https://www.mongodb.com/atlas)

> **Official website repository for Vizous Interio** — Flagship Experience Centre at Laxmisagar Square, Cuttack Road, Bhubaneswar, and a 15,000+ sq.ft precision manufacturing plant at Bhagabanpur Industrial Estate, Patrapada.

---

## 🏛️ Project Overview

Vizous Interio is an architectural interior design and bespoke modular furniture brand based in Odisha, India. This repository delivers an end-to-end, ultra-fast, multi-page web application engineered for brand storytelling, transparent pricing, visual portfolio immersion, authentic media showcase, and instant lead capture.

### Key Highlights
- **10-Year Written Warranty**: Authentic termite-free, borer-proof IS:710 BWP Marine Plywood backed by German Hettich & Häfele hardware.
- **45-Day Guaranteed Handover**: Penalty-backed delivery commitment from 3D design approval to installation.
- **Factory-Direct Pricing**: Eliminates 20–30% middleman markups by fabricating in-house on German Homag CNC machinery in Bhagabanpur, Bhubaneswar.
- **Zero-Dependency Architecture**: Built on pure semantic HTML5, high-fidelity Vanilla CSS3, and modern ES6 modules bundled with Vite for instantaneous load times and 100/100 Lighthouse performance.

---

## ✨ Features & Architecture

### 1. Interactive Interior Cost Estimator
A real-time 3-step calculation engine built directly into the homepage:
- **Configuration Cards**: Select from 1BHK, 2BHK, 3BHK, 4BHK / Villa, Kitchen Only, and Commercial spaces.
- **Finish Tiers**: Choose between *Essential Craft*, *Premium Signature*, and *Luxury Elite*.
- **Instant Obsidian Estimate Display**: Displays transparent price estimates (e.g., `₹ 3.20 Lakhs – ₹ 4.80 Lakhs`) with zero encoding corruption.
- **Action Triggers**: Lock in a free 3D design session, save estimate locally, or send formatted quote directly to WhatsApp.

### 2. Comprehensive 37-Item Media & Video Gallery ([media.html](media.html))
- **Live Social Proof**: Direct integration with official Instagram (`@vizous_interio`, 965+ posts) and YouTube channel (`@vizousinterio3422`).
- **Interactive Multi-Category Filtering**: Real-time category switches across *All Media (37)*, *4K Video Walkthroughs*, *Modular Kitchens & Wardrobes*, *Living Rooms & Bedrooms*, *Doors & Windows*, *Commercial & Institutional*, and *Factory & Automation*.
- **4K Video Player & High-Res Lightbox**: Custom modal player for verified project walkthroughs (`k7Zh-a7PyKk`, `7ETOi3lKVQY`, `Gc-_NirqGrI`, `jxiODXemNPY`, `32sQ8lsV-Eo`, `agUh1dXPNf4`) and responsive photo lightbox with keyboard navigation.

### 3. Editorial Architecture & Design Blog ([blog.html](blog.html))
- High-end magazine layout featuring editorial typography, curated design articles, embedded walkthrough videos, expert designer insights, and actionable kitchen/wardrobe planning tips.

### 4. Commercial, Institutional & Healthcare Casework
Dedicated specialized verticals engineered for enterprise and institutional clients:
- **[educational.html](educational.html)**: Modular dual desks, composite STEM & science laboratory workstations, faculty cabins, and university library book stacks.
- **[healthcare.html](healthcare.html)**: Antimicrobial pharmacy storage, diagnostic lab casework, doctor consultation chambers, and hospital reception suites.

### 5. Vizous Assistant (Design Consultation Widget)
Floating architectural assistant launcher and conversational widget:
- **Active Presence**: Minimal luxury launcher with live green activity indicator and "Vizous Assistant" branding.
- **Architectural Knowledge Engine**: Answers questions regarding modular kitchen layouts, sliding wardrobes, TV units, 10-year warranty, pricing, and factory location.
- **Automatic Lead Capture**: Detects 10-digit Indian phone numbers (e.g. `9040087614`), automatically logs the lead to storage, triggers a notification toast, and offers one-tap WhatsApp / direct call actions.
- **Conversation Reset**: Dedicated header reset button (`↺`) to clear history and reload fresh suggestions.

### 6. MongoDB Atlas-Ready Persistence (`storage.js`)
All visitor activity is structured as BSON/JSON documents using standard 24-character hexadecimal MongoDB `ObjectId`s:
- **Collections**:
  - `vizous_leads`: Form submissions, consultation bookings, and chat phone captures.
  - `vizous_estimates`: Saved cost calculations with space type, finish tier, and estimated range.
  - `vizous_chat_history`: Conversation streams with sender, text, suggested pills, and actions.
  - `vizous_pincode_checks`: Pincode serviceability logs.
- **Export Utility**: `window.exportLeadsAsJSON()` outputs import-ready JSON files for `mongoimport`.

---

## 📄 Site Map (18 Dedicated Pages)

| # | Page | File | Description |
|---|------|------|-------------|
| 1 | **Home** | [index.html](index.html) | Flagship homepage with hero split, cost estimator, process steps, and brand highlights. |
| 2 | **About Us** | [about.html](about.html) | Brand story, milestone stat counters (15+ yrs, 3,000+ homes), and factory philosophy. |
| 3 | **Modular Kitchens** | [modular-kitchen.html](modular-kitchen.html) | 6 layouts (L-Shape, U-Shape, Island, Straight, Parallel, Peninsular). |
| 4 | **Wardrobes & Closets** | [wardrobes.html](wardrobes.html) | Walk-in closets, floor-to-ceiling sliding wardrobes, and openable wardrobes. |
| 5 | **Bespoke Beds** | [beds.html](beds.html) | Upholstered platform beds, hydraulic storage beds, and headboards. |
| 6 | **Living Rooms** | [living-rooms.html](living-rooms.html) | TV consoles, backlit fluted panels, acoustic louvers, and partition units. |
| 7 | **Bedrooms** | [bedrooms.html](bedrooms.html) | Master suite architecture, integrated dressing tables, and bedside storage. |
| 8 | **Doors & Windows** | [doors-windows.html](doors-windows.html) | Teak entrance doors, flush bedroom doors, UPVC sliding & aluminum casements. |
| 9 | **Office Furniture** | [office-furniture.html](office-furniture.html) | Ergonomic workstations, MD executive desks, and conference suites. |
| 10 | **Educational Casework** | [educational.html](educational.html) | Classroom benches, STEM laboratory counters, faculty cabins, and library stacks. |
| 11 | **Healthcare Casework** | [healthcare.html](healthcare.html) | Pharmacy medical storage, diagnostic labs, and clinic casework. |
| 12 | **Modular Furniture** | [modular-furniture.html](modular-furniture.html) | Custom entertainment consoles, shoe racks, and modular partitions. |
| 13 | **Home Decor** | [home-decor.html](home-decor.html) | Wall panelling, ambient lighting, and bespoke architectural accents. |
| 14 | **Our Work / Portfolio** | [our-work.html](our-work.html) | Curated portfolio of completed residential and commercial projects. |
| 15 | **Media Gallery** | [media.html](media.html) | 37 items: 4K YouTube walkthroughs, Instagram reels, factory machinery, and client stories. |
| 16 | **Editorial Blog** | [blog.html](blog.html) | Architectural insights, video guides, interior trends, and maintenance playbooks. |
| 17 | **Why Choose Us** | [why-us.html](why-us.html) | 10-Year warranty breakdown, German machinery comparison, and 45-day SLA. |
| 18 | **Contact & Experience Centre** | [contact.html](contact.html) | Showroom directions, interactive map, hotline, and appointment scheduler. |

---

## 🛠️ Tech Stack

- **Markup**: Semantic HTML5 with accessibility attributes (`role`, `aria-label`, `aria-expanded`).
- **Styling**: Vanilla CSS3 design system using CSS custom properties (`--color-terracotta`, `--stone-900`, `--font-serif`, etc.) for maximum performance and zero bloat.
- **Scripting**: Modern ES6+ JavaScript modules.
- **Bundler**: [Vite 6](https://vitejs.dev/) with multi-page HTML build configuration ([vite.config.js](vite.config.js)).
- **Deployment**: [Vercel](https://vercel.com/) with native configuration ([vercel.json](vercel.json)) or [Render](https://render.com/) ([render.yaml](render.yaml)).

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or later recommended)
- npm or yarn

### Installation & Run Locally

```bash
# 1. Clone the repository
git clone https://github.com/bijayalaxmilenka2002/vizous.git
cd vizous

# 2. Install dependencies
npm install

# 3. Start local development server
npm run dev
```

Visit `http://localhost:5173/` in your browser.

### Production Build

```bash
# Build the optimized production bundle
npm run build

# Preview the production build locally
npm run preview
```

All 18 pages compile cleanly into the `dist/` directory with hashed asset bundles.

---

## 🌐 Live Deployment Guide

This project is pre-configured for instant zero-configuration deployment:

### 1. Deploying to Vercel (Recommended)
1. Push your changes to GitHub:
   ```bash
   git add .
   git commit -m "feat: site update"
   git push origin main
   ```
2. Log in to [vercel.com](https://vercel.com) and click **"Add New Project"**.
3. Select your repository `bijayalaxmilenka2002/vizous`.
4. Vercel automatically detects the included [vercel.json](vercel.json):
   - **Framework Preset**: Vite
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
5. Click **Deploy**. Your site is instantly live with free global CDN and automatic SSL. Future pushes to `main` will automatically trigger fresh deployments.

### 2. Deploying to Netlify
1. Log in to [netlify.com](https://www.netlify.com) and click **"Add new site" > "Import an existing project"**.
2. Select `bijayalaxmilenka2002/vizous`.
3. Set **Build command** to `npm run build` and **Publish directory** to `dist`.
4. Click **Deploy Site**.

### 3. Deploying to Render
A pre-configured [render.yaml](render.yaml) is included for 1-click static site hosting on Render.

---

## 🍃 Attaching MongoDB Atlas

The application is architected from day one to connect with MongoDB Atlas:

### Document Schema Example (`vizous_leads`)
```json
{
  "_id": "67b09c53f8115e0a927a4e01",
  "name": "Siddharth Patnaik",
  "phone": "9040087614",
  "service": "3BHK Full Home Interior",
  "location": "Patia, Bhubaneswar",
  "notes": "Interested in L-shaped acrylic kitchen and master walk-in closet",
  "source": "Cost Estimator & Consultation Modal",
  "status": "new",
  "syncedToAtlas": false,
  "createdAt": "2026-10-23T18:00:00.000Z"
}
```

### Exporting Local Leads to MongoDB
In the browser developer console on the live site:
```javascript
// Downloads vizous_leads.json
window.exportLeadsAsJSON();
```

Import directly into your MongoDB Atlas cluster:
```bash
mongoimport --uri "mongodb+srv://<username>:<password>@cluster0.mongodb.net/vizous_db" \
  --collection leads \
  --file vizous_leads.json \
  --jsonArray
```

---

## 📍 Experience Centre & Contact

- **Experience Centre**: 1st Floor, Laxmi Sagar Square, Cuttack Road, Bhubaneswar, Odisha 751006
- **Manufacturing Plant**: Plot #12, Bhagabanpur Industrial Estate, Patrapada, Bhubaneswar, Odisha 751019
- **Direct Desk / WhatsApp**: [+91 90400 87614](https://api.whatsapp.com/send?phone=919040087614)
- **Email**: contact@vizousinterio.com
- **Instagram**: [@vizous_interio](https://www.instagram.com/vizous_interio/)
- **YouTube**: [@vizousinterio3422](https://www.youtube.com/@vizousinterio3422)
