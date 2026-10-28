# ClassDesk — Violet UI Redesign Specification
> Visual system adaptation inspired by the modern SaaS reference ("Mutmiz"), tailored for coaching institute & tuition academy management.

---

## 1. Visual Language & Brand Direction

### 1.1 Aesthetic Overview
- **Vibe**: Ultra-clean, modern, welcoming, high-trust SaaS with playful yet professional soft-purple aesthetics.
- **Form Factor**: Generously rounded corners (pill buttons, 24–32px cards), layered glassmorphism, floating elevated UI cards, soft ambient purple/magenta glows.
- **Identity**: Retains "ClassDesk" branding, but shifts from traditional earthy coaching palette (forest green + terracotta) to an energetic, premium tech-forward palette (soft lavender + vibrant electric violet + magenta gradient accents).

---

## 2. Design Tokens & Color Palette

### 2.1 Light Mode (Default)
| Token Name | Value | Usage |
|---|---|---|
| `--bg-page` | `#F4F2FF` | Overall page canvas (soft lavender) |
| `--bg-page-subtle` | `#EBE7FF` | Alternate section background |
| `--surface-card` | `rgba(255, 255, 255, 0.85)` | Glassmorphic card surface |
| `--surface-card-solid`| `#FFFFFF` | Solid white cards |
| `--surface-glass-border`| `rgba(124, 108, 240, 0.16)` | Subtle violet glass border |
| `--primary-violet` | `#7C6CF0` | Main brand violet |
| `--primary-violet-hover` | `#6A5AE0` | Interactive active violet |
| `--gradient-violet` | `linear-gradient(135deg, #8E7CFF 0%, #6A5AE0 100%)` | Hero badges, slanted band, CTA banner |
| `--gradient-accent` | `linear-gradient(135deg, #F472D0 0%, #E25BD0 100%)` | Primary CTA buttons & highlight badges |
| `--gradient-accent-hover` | `linear-gradient(135deg, #FA83DA 0%, #CF45BD 100%)` | Primary CTA hover |
| `--text-heading` | `#1E1B4B` | Deep ink purple for H1, H2, H3 |
| `--text-body` | `#585474` | Neutral muted purple-grey for body copy |
| `--text-muted` | `#7F7B9E` | Secondary captions, timestamps |
| `--color-success` | `#10B981` | Present attendance, paid fees, confirmations |
| `--color-success-bg` | `#ECFDF5` | Success badge background |
| `--color-warning` | `#F59E0B` | Pending fee alert, attention badges |
| `--color-danger` | `#EF4444` | Absent state, urgent dues |
| `--shadow-soft` | `0 12px 32px -4px rgba(124, 108, 240, 0.12)` | Subtle floating elevation |
| `--shadow-float` | `0 20px 48px -8px rgba(106, 90, 224, 0.22)` | Prominent floating cards & phone frames |
| `--shadow-glow` | `0 0 60px rgba(124, 108, 240, 0.25)` | Ambient glowing background blobs |

### 2.2 Dark Mode (`data-theme="dark"`)
| Token Name | Value | Usage |
|---|---|---|
| `--bg-page` | `#0D0B1C` | Deep cosmic purple page background |
| `--bg-page-subtle` | `#15122C` | Secondary dark background |
| `--surface-card` | `rgba(28, 24, 56, 0.75)` | Dark glass card |
| `--surface-card-solid`| `#1D193B` | Solid dark card |
| `--surface-glass-border`| `rgba(142, 124, 255, 0.20)` | Neon violet edge glow |
| `--text-heading` | `#FAF8FF` | Bright crisp white-violet |
| `--text-body` | `#A6A0CC` | High-contrast readable purple-grey |
| `--text-muted` | `#756F9E` | Secondary captions |

---

## 3. Typography & Hierarchy

- **Primary Font**: `Plus Jakarta Sans`, sans-serif (Weights: 400, 500, 600, 700, 800)
- **Display Accent Font**: `Outfit` or `Plus Jakarta Sans` with heavy weights (700/800) and tight tracking (`-0.03em`) for high-impact hero titles.
- **Headings**:
  - `H1` (Hero): `clamp(2.5rem, 5.5vw, 4.25rem)`, Line height `1.12`, Letter spacing `-0.035em`. Key focus words highlighted in `--primary-violet` or gradient text.
  - `H2` (Section): `clamp(1.85rem, 3.8vw, 2.75rem)`, Line height `1.2`, Letter spacing `-0.025em`.
  - `H3` (Card/Feature): `1.25rem - 1.4rem`, Line height `1.3`, Weight `700`.
- **Body & Microcopy**:
  - Lead: `1.15rem - 1.25rem`, Line height `1.65`, Color: `--text-body`.
  - Base: `0.95rem - 1.05rem`, Line height `1.6`.
  - Captions/Pills: `0.78rem - 0.85rem`, Weight `600`, Uppercase or letter-spaced.

---

## 4. Shapes & Geometry
- **Cards**: `24px` to `32px` border radius (`--radius-card: 28px`), with `1px` subtle translucent border (`--surface-glass-border`).
- **Buttons**: Pill-shaped (`9999px` border radius), generous padding (`14px 28px` for hero CTA), subtle micro-shadow and scale-up on hover.
- **Slanted Section Divider**: A signature `transform: skewY(-2.5deg)` vibrant violet band directly underneath the hero, holding key proof icons.
- **Device Frames**: Realistic, clean CSS-built mobile phone frame with camera notch, rounded corners (`44px` radius), and simulated screen reflections.
- **Floating Overlays**: Positioned cards with soft CSS floating animations (`@keyframes floatSlow { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-8px); } }`).

---

## 5. Section Mapping: Reference → ClassDesk

| Reference Section | ClassDesk Implementation | Data & Copy Preserved |
|---|---|---|
| **Sticky Glass Navbar** | Glassmorphic floating nav with brand logo, central links (`#problem`, `#features`, `#interactive-demo`, `#how-it-works`, `#comparison`, `#faq`), Dark Mode toggle, contact pill, and gradient "Request a Demo" button. | Uses `CONFIG.productName`, `CONFIG.phoneNumber`, mobile drawer `#mobileDrawer`, `#mobileMenuToggle`. |
| **Hero Section** | Bold headline ("Your entire coaching institute on one screen..."), pill badge ("Built for coaching institutes..."), centered CSS phone mockup showing live batch attendance with floating satellite cards (Attendance 93.3%, Pending Fees ₹1,42,500, Batch Top Score 79.4%), and student avatar stack. | Keeps exact headline meaning, trust pills ("Works on any phone", "No computer knowledge", "Ready in 15 mins"), and `#demo-modal` triggers. |
| **Slanted Violet Band** | Skewed violet band directly under hero with 3 key value icons: (1) 10-Second Attendance, (2) 1-Tap Fee Dues & Receipts, (3) Automated WhatsApp Reports. | Built directly from core ClassDesk product pillars. |
| **Real Stats Row** | High-impact 3-metric row with animated number counters on scroll: `10s` attendance time, `100%` paperless registers, `15m` onboarding setup. | Completely grounded in real product capability (no fake metrics). |
| **The Problem (`#problem`)** | Glassmorphic comparison card contrasting messy hand-written registers with digital clarity, preserving all ledger pain points. | 100% of existing copy and ledger items preserved. |
| **Feature Grid (`#features`)** | Asymmetric SaaS layout: Left icon-bubble feature list; Right floating glass cards with feature mockups. | Preserves all 6 feature cards and detailed descriptions. |
| **Interactive Demo (`#interactive-demo`)** | Upgraded tablet/phone frame with smooth tab switching between Attendance Simulator and Fee Simulator. Adds animated circular progress ring for attendance % and real-time fee progress bar. | Uses `DEMO_STUDENTS`, keeps all IDs (`interactiveAttendanceList`, `liveAttendancePercent`, `liveFeeCollected`, etc.). |
| **How It Works (`#how-it-works`)** | 3 modern rounded gradient step cards (1. Add batches, 2. Mark attendance, 3. Collect fees & notify parents). | Preserves all 3 existing steps. |
| **Before vs After (`#comparison`)** | Clean 2-column comparative table in frosted glass style (Red tint for Paper Register vs Violet tint for ClassDesk). | Preserves all 6 comparison rows. |
| **Roadmap (`#roadmap`)** | 3-card milestone roadmap with status badges ("Live", "Coming Soon", "Planned"). | Preserves all roadmap milestones and dates. |
| **Mid-Page Violet CTA Banner** | Curved violet container (`32px` radius) with tilted phone mockup poking out, WhatsApp button, and demo call-to-action. | Links directly to `data-config-whatsapp` and `#demo-modal`. |
| **FAQ (`#faq`)** | Smooth accordion cards with accessible keyboard controls (`aria-expanded`, `aria-controls`). | Preserves all 6 coaching FAQs. |
| **Contact / Demo Form (`#contact`)** | Split card: Left has contact info (call, WhatsApp, email); Right has clean input card with inline validation. | Preserves `#landingDemoForm`, all input IDs, and `#formSuccessState`. |
| **Footer** | Clean SaaS footer with logo, navigation links, quick contacts, and automatic dynamic year (`#currentYear`). | Preserves all dynamic tokens. |
| **Demo Modal Dialog** | Accessible, backdrop-blurred dialog with smooth scale-in transition and instant close button. | Preserves `#demoModalBackdrop`, `#modalDemoForm`, all input fields. |

---

## 6. Interactive Upgrades Beyond Reference

1. **Dark Mode Toggle**: Persistent theme switcher in the header (Light / Dark) storing preference in `localStorage` and matching system preference by default.
2. **Smooth Number Counter Animation**: When stats scroll into view, numbers smoothly count up (e.g., `0` to `10`, `0%` to `93.3%`).
3. **Interactive Demo Enhancements**:
   - Circular SVG stroke-dasharray animation for Today's Attendance percentage.
   - Dynamic progress bar for Monthly Fee Target vs Collected.
   - Smooth badge pulse on status changes.
4. **Sticky Mobile Action Bar**: Fixed bottom bar for small screens with instant "Call", "WhatsApp", and "Demo" pills for maximum conversion.
5. **Floating Parallax & Tilt Effects**: Subtle, performant CSS transforms on hover and scroll (respects `prefers-reduced-motion`).

---

## 7. Accessibility & Performance Guardrails

- **Contrast Ratios**: Minimum 4.5:1 for body copy against light lavender (`#585474` on `#F4F2FF` = 5.2:1) and dark cosmic background (`#A6A0CC` on `#0D0B1C` = 7.1:1).
- **Focus Indicators**: Visible 3px violet outline (`#7C6CF0`) on all interactive buttons, links, and form inputs.
- **DOM ID Verification**: 100% of JavaScript selector hooks preserved without breakage.
- **Zero Heavy Dependencies**: Pure CSS, vanilla JS, inline SVG, Google Fonts (`display=swap`). Zero npm build steps required.
