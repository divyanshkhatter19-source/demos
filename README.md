# Hearth & Crumb Bakery 🥖

An artisanal, modern, high-fidelity Next.js web application for **Hearth & Crumb Micro-Bakehouse**, built directly from Google Stitch project ID `1546686374743703020` ("Artisanal Hearth" design system).

---

## 🌾 Design System & Aesthetics
- **Theme**: Warm-editorial, tactile, and grounded culinary craftsmanship.
- **Palette**: Sun-baked terracotta (`#b45309`), roasted chestnut (`#934b19`), crust amber (`#854600`), and warm unbleached parchment surfaces (`#fff8f5`, `#f4ece8`).
- **Typography**: Editorial serif **Newsreader** paired with soft, rounded geometric **Plus Jakarta Sans**.
- **Icons**: Google Material Symbols Outlined.

---

## 🍞 Application Architecture & Routes

| Route | View | Description |
| :--- | :--- | :--- |
| **`/`** | **Storefront & Daily Bake Schedule** | Micro-batch countdown alert, hero with 82% allocation bar, weekly hearth cadence, featured bakes, grain transparency (starter *Barnaby*), porch cubby guide, and 7-minute crust revival. |
| **`/menu`** | **Menu & Pre-order Drops** | 48-Hour deliberate cycle fermentation track, bake date selector, category tabs, flour profile filters (Vegan, Whole Grain, Ancient Grains, Nut-Free), sorting, live stock meters, and quantity counters. |
| **`/product/[id]`** | **Item Detail & Customization** | Multi-perspective artisan gallery (Blistered Ear, Airy Crumb, Bran Texture, Lame Score), head baker's sensory notes, slicing preferences, grain composition bar, artisanal add-ons, pickup slots, deep bake bento metrics, and sticky bottom pre-order bar. |
| **`/checkout`** | **Cart & Pickup Checkout** | Reserved batch review, order notes for the morning baker, zero-waste linen wrap deposit selection, curbside porch cubby window selector, apprentice guild tip calculator, tax & total ledger, and reservation confirmation with SMS PIN protocol. |

---

## 🚀 Getting Started

### 1. Install Node.js (if not already installed)
```bash
brew install node
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Run the Development Server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

---

## 🛠️ Tech Stack
- **Framework**: [Next.js 14/15](https://nextjs.org/) (App Router, React 18/19, TypeScript)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) with custom design tokens from Stitch
- **State Management**: React Context (`CartContext`) powering persistent cart updates, quantity counters, dynamic pricing, and pickup windows
- **Fonts**: `next/font/google` with Google Newsreader & Plus Jakarta Sans

