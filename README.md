# Vizous Interio — Luxury Bespoke Interiors & Modular Furniture

[![Vite](https://img.shields.io/badge/Vite-6.0-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)
[![JavaScript](https://img.shields.io/badge/ES6-Modules-F7DF1E?logo=javascript&logoColor=black)](https://developer.mozilla.org/)
[![CSS3](https://img.shields.io/badge/CSS3-Design_System-1572B6?logo=css3&logoColor=white)](https://developer.mozilla.org/)
[![Database](https://img.shields.io/badge/Storage-MongoDB_Atlas_Ready-47A248?logo=mongodb&logoColor=white)](https://www.mongodb.com/atlas)

> **Official website repository for Vizous Interio** — Flagship Experience Centre at Laxmisagar Square, Cuttack Road, Bhubaneswar, and a 15,000+ sq.ft precision manufacturing plant at Bhagabanpur Industrial Estate, Patrapada.

---

## 🏛️ Project Overview

Vizous Interio is an architectural interior design and bespoke modular furniture brand based in Odisha, India. This repository delivers an end-to-end, high-performance web experience engineered for high conversion, brand storytelling, transparent pricing, and instant lead capture.

### Key Highlights
- **10-Year Written Warranty**: Authentic termite-free, borer-proof IS:710 BWP Marine Plywood backed by German Hettich & Häfele hardware.
- **45-Day Guaranteed Handover**: Penalty-backed delivery commitment from 3D design approval to installation.
- **Factory-Direct Pricing**: Eliminates 20–30% middleman markups by fabricating in-house on German Homag CNC machinery.

---

## ✨ Features & Architecture

### 1. Interactive Interior Cost Estimator
A real-time 3-step calculation engine built directly into the homepage:
- **Configuration Cards**: Select from 1BHK, 2BHK, 3BHK, 4BHK / Villa, Kitchen Only, and Commercial spaces.
- **Finish Tiers**: Choose between *Essential Craft*, *Premium Signature*, and *Luxury Elite*.
- **Instant Obsidian Estimate Display**: Displays transparent price estimates (e.g., `₹ 3.20 Lakhs – ₹ 4.80 Lakhs`) with zero encoding corruption.
- **Action Triggers**: Lock in a free 3D design session, save estimate locally, or send formatted quote directly to WhatsApp.

### 2. Vizous Assistant (Design Consultation Widget)
Floating architectural assistant launcher and conversational widget:
- **Active Presence**: Minimal luxury launcher with live green activity indicator and "Vizous Assistant" branding.
- **Architectural Knowledge Engine**: Answers questions regarding modular kitchen layouts, sliding wardrobes, TV units, 10-year warranty, pricing, and factory location.
- **Automatic Lead Capture**: Detects 10-digit Indian phone numbers (e.g. `9040087614`), automatically logs the lead to storage, triggers a notification toast, and offers one-tap WhatsApp / direct call actions.
- **Conversation Reset**: Dedicated header reset button (`↺`) to clear history and reload fresh suggestions.

### 3. MongoDB Atlas-Ready Persistence (`storage.js`)
All visitor activity is structured as BSON/JSON documents using standard 24-character hexadecimal MongoDB `ObjectId`s:
- **Collections**:
  - `vizous_leads`: Form submissions, consultation bookings, and chat phone captures.
  - `vizous_estimates`: Saved cost calculations with space type, finish tier, and estimated range.
  - `vizous_chat_history`: Conversation streams with sender, text, suggested pills, and actions.
  - `vizous_pincode_checks`: Pincode serviceability logs.
- **Export Utility**: `window.exportLeadsAsJSON()` outputs import-ready JSON files for `mongoimport`.

### 4. 10 Dedicated Pages
1. [index.html](index.html) — Flagship homepage with uncropped hero split, cost estimator, process steps, and brand highlights.
2. [about.html](about.html) — Brand story, milestone stat counters (15+ yrs, 3,000+ homes, 15k+ sq.ft, 10-Yr warranty), and leadership philosophy.
3. [modular-kitchen.html](modular-kitchen.html) — 6 layouts (L-Shape, U-Shape, Island, Straight, Parallel, Peninsular).
4. [wardrobes.html](wardrobes.html) — Walk-in closets, floor-to-ceiling sliding wardrobes, and classic openable wardrobes.
5. [beds.html](beds.html) — Upholstered platform beds, hydraulic storage beds, and headboards.
6. [office-furniture.html](office-furniture.html) — Ergonomic workstations, executive desks, and commercial solutions.
7. [modular-furniture.html](modular-furniture.html) — Living room entertainment TV units, fluted louvers, and shoe cabinets.
8. [home-decor.html](home-decor.html) — Wall paneling, charcoal louvers, and bespoke accents.
9. [our-work.html](our-work.html) — Curated residential & commercial project portfolio.
10. [contact.html](contact.html) — Showroom directions, factory contact, and appointment booking form.

---

## 🛠️ Tech Stack

- **Markup**: Semantic HTML5 with accessibility attributes (`role`, `aria-label`, `aria-expanded`).
- **Styling**: Vanilla CSS3 design system using CSS custom properties (`--color-terracotta`, `--stone-900`, `--font-serif`, etc.) for maximum speed and zero dependencies.
- **Scripting**: Modern ES6+ JavaScript modules.
- **Tooling**: [Vite 6](https://vitejs.dev/) for sub-second Hot Module Replacement (HMR) and optimized tree-shaken production bundles.

---

## 🚀 Getting Started

### Prerequisites
- Node.js (version 18 or later recommended)
- npm or yarn

### Installation & Run Locally

```bash
# 1. Clone the repository
git clone https://github.com/<your-username>/vizous.git
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
  "createdAt": "2026-10-16T04:45:00.000Z"
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

### Setting up Live Backend Sync (When Ready)
1. Set up a lightweight Express / Next.js / Cloudflare Worker endpoint at `/api/leads`.
2. Connect `mongoose` or official `mongodb` client with your Atlas connection string:
   ```env
   MONGODB_URI=mongodb+srv://<username>:<password>@cluster0.mongodb.net/vizous_db?retryWrites=true&w=majority
   ```
3. Update `VizousDB.saveLead()` in `storage.js` to dispatch a background `fetch('/api/leads', { method: 'POST', body: JSON.stringify(leadDoc) })`.

---

## 📍 Experience Centre & Contact

- **Experience Centre**: 1st Floor, Laxmi Sagar Square, Cuttack Road, Bhubaneswar, Odisha 751006
- **Manufacturing Plant**: Plot #12, Bhagabanpur Industrial Estate, Patrapada, Bhubaneswar, Odisha 751019
- **Direct Desk / WhatsApp**: [+91 90400 87614](https://api.whatsapp.com/send?phone=919040087614)
- **Email**: contact@vizousinterio.com
