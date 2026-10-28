# ClassDesk — Simple Coaching Management Platform

A high-conversion, modern SaaS landing page and interactive demo designed specifically for coaching institutes, tuition teachers, and private academies to replace messy paper registers with a single mobile-friendly dashboard.

![Theme](https://img.shields.io/badge/Theme-Electric%20Violet%20%2B%20Lavender-7C6CF0)
![Status](https://img.shields.io/badge/Deploy-Vercel%20Static-10B981)
![Responsive](https://img.shields.io/badge/Responsive-Mobile%20%7C%20Tablet%20%7C%20Desktop-blue)
![Zero Dependencies](https://img.shields.io/badge/Dependencies-Zero%20(Pure%20HTML%2FCSS%2FJS)-orange)

---

## 🌟 Highlights & Key Upgrades

- **Violet SaaS Visual Language**: Soft lavender canvas (`#F4F2FF`), electric violet gradients (`#7C6CF0` → `#6A5AE0`), magenta CTA highlights (`#E25BD0`), and glassmorphism cards with rounded contours (`24px–32px`).
- **CSS Phone Mockup & Satellite Cards**: Realistic smartphone frame showcasing live student batch rosters with floating satellite stats (Today's Attendance 93.3%, October Fees ₹1,42,500, Batch Top Score 79.4%).
- **Slanted Violet Feature Band**: Signature 3-column skewed section (`skewY(-2.5deg)`) delivering instant value proposition.
- **Interactive Live Playground**:
  - **Attendance Simulator**: One-tap toggle between Present / Absent with animated circular SVG progress ring and instant absentee toast alerts.
  - **Fee Collection Simulator**: Real-time progress bar for monthly collection targets and one-tap fee collection with auto-generated receipt numbering.
- **Dark & Light Mode**: Built-in toggle with persistent `localStorage` memory and system color-scheme detection.
- **Real Animated Number Counters**: Smooth count-up animations for key metrics on scroll.
- **Sticky Mobile Action Bar**: Fixed bottom bar on smartphones for quick Call, WhatsApp, and Demo access.
- **Zero Fake Social Proof**: Grounded in real, neutral coaching metrics and project data.

---

## 📁 Project Structure

```
├── index.html        # Semantic, accessible HTML5 structure
├── style.css         # Modern CSS with design tokens, dark mode & animations
├── script.js         # Vanilla JS: simulators, theme toggle, counters, modal
├── DESIGN_SPEC.md    # Comprehensive visual design system specification
├── README.md         # Documentation & setup guide
└── .gitignore        # Standard ignore rules
```

---

## ⚙️ Client Customization Guide

You can customize this entire website for any coaching academy client in **less than 1 minute** by editing the single `CONFIG` object at the top of `script.js`:

```javascript
const CONFIG = {
  // Brand & Product Details
  productName: "ClassDesk",
  tagline: "Simple Coaching Management for Teachers",
  coachingSampleName: "Apex Coaching Academy",
  
  // Client & Contact Information
  clientName: "Sir",
  phoneNumber: "+91 98765 43210",
  phoneRaw: "+919876543210",
  whatsappNumber: "919876543210", // Country code without +
  whatsappMessage: "Hello, I run a coaching institute and I would like to see a demo of ClassDesk.",
  supportEmail: "contact@classdesk.in",
  creatorName: "VK Design & Web Studio",

  // Pricing & Currency sample
  currencySymbol: "₹",
  monthlyFeeSample: 1500
};
```

All phone call links, WhatsApp buttons, prefilled messages, and brand names hydrate dynamically across the entire website from this single object.

---

## 🚀 Live Deployment on Vercel

This repository is built with standard static web technologies (HTML5, CSS3, Vanilla JS). It requires **zero build steps** or node package compilation:

1. Push this repository to GitHub.
2. In your [Vercel Dashboard](https://vercel.com/new), select **Import Git Repository** and pick `VK-Coaching-RECORDS`.
3. Keep default settings (`Other` framework, root `./`) and click **Deploy**.
4. Every future git push to the `main` branch will automatically deploy within ~10 seconds!
