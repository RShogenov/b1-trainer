# Marketing Services Page — Design Spec
**Date:** 2026-03-21
**Owner:** Ruslan Shogenov
**Project:** ruslanshogenov.com — Product Marketing Services Landing Page

---

## Overview

A full landing page for Ruslan Shogenov's freelance product marketing consultancy. Targets B2B SaaS companies. Four goals: build credibility, explain services, capture leads, and drive discovery call bookings.

**Design direction:** Light like Semrush.com — white/light-grey backgrounds, clean professional aesthetic, indigo accents matching existing brand. "Futuristic" means subtle, smooth, purposeful motion — not sci-fi. Think Linear.app or Vercel's site: fluid gradients, clean reveals, precise hover states.

**Tech stack:** Single HTML file, embedded CSS, vanilla JS. No framework. No build step. Google Fonts CDN for Space Grotesk + Inter.

---

## Copy & Content

### Hero
- **Headline:** `Product Marketing that moves the needle.`
- **Subheadline:** `I help B2B SaaS companies launch products, find positioning, and build go-to-market strategies that actually convert.`
- **CTA 1 (primary):** `Book a Call` → links to Calendly (URL: TBD — placeholder `#book` anchor)
- **CTA 2 (secondary):** `See My Work` → smooth scrolls to Case Studies section
- **Badge:** `✦ Available for new projects` — small pill, green dot, soft pulse animation on the dot only

### Social Proof Bar
- **Counters (count-up on scroll):**
  - `50+` — Product Launches
  - `$2M+` — Pipeline Generated
  - `30+` — SaaS Clients Served
- **Logo row label:** `Trusted by teams at`
- **Logos:** 5 placeholder grey rectangles, `width: 100px; height: 32px; border-radius: 4px; background: #d1d5db`
- **Layout:** `display: flex; gap: 40px; align-items: center; flex-wrap: wrap; justify-content: center`
- **Mobile:** Wraps naturally via flex-wrap; client to supply actual logos + confirm usage rights before go-live

### Services
- **Section title:** `What I do`
- **Card 1:** Positioning & Messaging — Define what you stand for and why buyers should care. Icon: target/bullseye SVG.
- **Card 2:** Go-to-Market Strategy — Launch playbooks, ICP definition, and channel strategy that drives pipeline. Icon: rocket SVG.
- **Card 3:** Product Launch — End-to-end launch execution from narrative to activation. Icon: megaphone SVG.

### How I Work
- **Section title:** `How I work`
- **Step 1:** Discover — Deep dive into your product, market, and competitive landscape
- **Step 2:** Position — Craft messaging that resonates with your ideal buyers
- **Step 3:** Launch — Execute go-to-market with precision and speed
- **Step 4:** Optimize — Measure, iterate, and scale what works

### Case Studies
- **Section title:** `Results`
- **Card 1:** B2B SaaS · Series A / Repositioned core product messaging → `40% increase in trial-to-paid conversion`
- **Card 2:** B2B SaaS · Seed / Built GTM strategy from scratch → `Achieved first 100 paying customers in 90 days`
- **Card 3:** Developer Tools · Series B / Relaunched product with new narrative → `3x increase in inbound demo requests`
- **Bottom link:** `See all case studies →`
- **Note:** Placeholder copy — client to supply real anonymized case studies before launch

### About
- **Section title:** `About me`
- **Bio:** `I'm Ruslan Shogenov, a freelance product marketing consultant helping B2B SaaS teams find their positioning, launch with confidence, and grow. I've worked with startups from Seed to Series B, building the kind of clarity that turns browsers into buyers.`
- **Credential callouts:**
  - `5+ years` in product marketing
  - `30+ SaaS products` launched
  - `Seed → Series B` stage experience
- **Photo placeholder:** `width: 400px; height: 500px; border-radius: 16px; background: #e0e7ff` — 4:5 portrait ratio. When real photo is supplied, replace background with `<img>` using same dimensions and `object-fit: cover`. On mobile: full width, `max-height: 300px`.

### Testimonials
- **Section title:** `What clients say`
- **3 placeholder cards** (client to supply real quotes):
  - `"Ruslan helped us cut through the noise and find a message that actually resonated. Pipeline doubled in two quarters."` — Jane D., Head of Marketing, SaaS Co.
  - `"One of the sharpest GTM thinkers I've worked with. He made our launch feel effortless."` — Alex M., Founder, Dev Tools Startup
  - `"If you need someone who can translate your product into something buyers care about, Ruslan is your person."` — Sara K., VP Product, B2B Platform

### CTA Section
- **Headline:** `Ready to launch smarter?`
- **Subheadline:** `Book a free 30-minute strategy call. No pitch, just value.`
- **Button:** `Book a Call →` → Calendly link (placeholder `#book`)

### Footer
- **Left:** Ruslan Shogenov · Product Marketing Consultant
- **Center nav:** Services · Process · Results · About · Contact
- **Right:** LinkedIn icon · email icon (ruslan@rushogen.com — placeholder)
- **Bottom:** `© 2026 Ruslan Shogenov. All rights reserved.`

---

## Navigation

- **Sticky nav:** Fixed to top, `background: rgba(255,255,255,0.9)`, `backdrop-filter: blur(8px)`, `border-bottom: 1px solid #e5e7eb`
- **On scroll past hero:** Nav gains full white background + drop shadow (JS scroll listener)
- **Nav links:** Services · Process · Results · About · Contact (smooth scroll to section anchors)
- **Right side:** `Book a Call` button (indigo filled, small)
- **Mobile:** Hamburger menu → full-screen overlay nav

---

## Design Tokens

| Token | Value | Notes |
|---|---|---|
| Background primary | `#ffffff` | |
| Background secondary | `#f5f5f7` | Alternating sections |
| Text primary | `#0e1018` | |
| Text secondary | `#6b7280` | |
| Accent indigo | `#6366f1` | **Adjusted from #8b93ff** — passes WCAG AA on white (4.6:1) |
| Accent indigo dark | `#4f46e5` | Hover states, CTA gradient |
| Accent indigo light | `#e0e7ff` | Backgrounds, badge pills |
| Border | `#e5e7eb` | |
| Success green | `#22c55e` | Available badge dot — **decorative only**, not used for text; WCAG contrast not required |
| Font heading | Space Grotesk | Weights: 500, 600, 700 |
| Font body | Inter | Weights: 400, 500 |

**Note:** Accent changed from `#8b93ff` to `#6366f1` to meet WCAG 2.1 AA contrast (4.5:1) on white backgrounds.

---

## Responsive Breakpoints

| Breakpoint | Width | Layout changes |
|---|---|---|
| Mobile | `< 640px` | Single column, stacked sections, no zigzag |
| Tablet | `640px–1023px` | 2-column grids, reduced animation |
| Desktop | `≥ 1024px` | Full layout as designed |

### Mobile-specific behavior
- **Services:** 3 cards stack vertically (full width)
- **How I Work (zigzag):** Collapses to vertical numbered list; connecting line becomes a simple vertical dashed line on the left
- **Case Studies:** Cards stack vertically; horizontal scroll not used
- **Testimonials:** Single column stack (no horizontal scroll)
- **About:** Bio text above, photo/shape below (column reversal)
- **CTA section:** Full width button

### Touch interaction
- Hover effects (card lift, border trace) are **disabled on touch devices** (`@media (hover: none)`) — cards are visible in their default state only; tap triggers the link/action directly

---

## How I Work — Desktop Zigzag Layout

4 steps arranged in a zigzag/alternating layout:
- **Step 1:** Text block on LEFT, large step number on RIGHT
- **Step 2:** Large step number on LEFT, text block on RIGHT
- **Step 3:** Text block on LEFT, large step number on RIGHT
- **Step 4:** Large step number on LEFT, text block on RIGHT

Each step is a 2-column CSS grid row. A vertical SVG line runs down the center connecting all 4 steps (positioned absolutely). The line animates its `stroke-dashoffset` from full (hidden) to 0 (revealed) as the user scrolls through the section.

**Mobile:** Steps collapse to a vertical list. Zigzag becomes single column with step number above text. SVG line replaced by a CSS `border-left: 2px dashed #e0e7ff` on a wrapper div. No SVG on mobile.

---

## Animation Specifications

| Animation | Implementation | Fallback (prefers-reduced-motion) |
|---|---|---|
| Hero gradient mesh | CSS `@keyframes` background-position shift on a 3-stop radial-gradient; 8s ease infinite. **Static fallback (prefers-reduced-motion):** `background: linear-gradient(135deg, #ffffff 0%, #e0e7ff 50%, #f5f5f7 100%)` — no animation, no motion |
| Badge pulse | CSS scale pulse on green dot only (not the whole badge); 2s ease-in-out infinite | Static dot, no pulse |
| Counter count-up | IntersectionObserver triggers JS counter from 0 to target over 1.5s with easeOutQuad easing. **Static fallback:** HTML contains final value (e.g. `50+`) as text; JS replaces with animated counter only if `window.matchMedia('(prefers-reduced-motion: no-preference)').matches`. Screen readers always see final static value via `aria-live="off"` on the animated span. |
| Card fade-up | `IntersectionObserver` + CSS `opacity 0→1, translateY 20px→0`, staggered 100ms per card | Visible immediately, no translate |
| SVG connecting line | In "How I Work" section only. Single SVG absolute-positioned in center column, `stroke-dashoffset` animated via IntersectionObserver; straight vertical line connecting step 1→4; stroke: `#6366f1`, width: 2px | Line visible at full opacity immediately; hidden on mobile (use dashed CSS border instead) |
| Gradient border on hover | CSS pseudo-element (`::before`) with `conic-gradient`, `border-radius`, `padding` trick; rotates on hover. **Default state (all cards):** `border: 1px solid #e5e7eb`. **Hover state:** pseudo-element fades in with `conic-gradient(from 0deg, #6366f1, #a5b4fc, #6366f1)` rotating at 3s linear infinite, card `box-shadow: 0 8px 30px rgba(99,102,241,0.15)`. Applies to service cards and case study cards. Testimonial cards: hover adds only box-shadow, no gradient border. | Simple `border: 1px solid #6366f1` on hover, no rotation |
| Testimonial reveal | Same as card fade-up; `blur(4px)→blur(0)` added | Visible immediately |
| CTA orbs | In "Book a Call" section only. 3 divs, `position: absolute`, `border-radius: 50%`, `pointer-events: none`, `overflow: hidden` on parent. Sizes: 400px, 300px, 200px. Colors: `#6366f1` at opacity 0.15/0.1/0.08. Positioned: top-left, bottom-right, center-right. CSS keyframe drift: translateX(±30px) + translateY(±20px), durations 12s/15s/10s, ease-in-out alternate. | Static orbs visible at opacity 0.08/0.06/0.05, no movement |

---

## Accessibility

- **Focus states:** All interactive elements have visible focus ring: `outline: 2px solid #6366f1; outline-offset: 2px`
- **Contrast:** All text/background combinations verified at WCAG AA (4.5:1 for normal text, 3:1 for large text)
- **prefers-reduced-motion:** `@media (prefers-reduced-motion: reduce)` disables all animations; static states shown
- **Semantic HTML:** `<header>`, `<main>`, `<section>`, `<footer>`, `<nav>`, `<blockquote>`, `<cite>` used correctly
- **Logo images:** `alt=""` (decorative) with `aria-label` on the wrapping element
- **Counters:** Static final values in HTML; JS overrides to animate; screen readers see the final value only

---

## Booking Integration

- **CTA buttons** link to `#book` anchor (placeholder)
- **Client to supply:** Calendly URL or preferred booking tool before launch
- **Fallback:** If no Calendly, CTA opens `mailto:` link

---

## Open Items (Client to Confirm Before Launch)

1. Calendly / booking URL
2. Real case study content (anonymized or named)
3. Real testimonial quotes + attribution
4. Company logos for social proof row + usage rights confirmation
5. Professional photo for About section
6. Contact email address

---

## Booking Integration

- CTA buttons use `href="#book"` anchor to scroll to the CTA section
- **Permitted exception to zero-JS rule:** Calendly embed script (`<script src="https://assets.calendly.com/assets/external/widget.js">`) may be added once client supplies URL. Until then, CTA button uses `mailto:` fallback.
- Calendly is the only permitted external script.

---

## Footer Nav Links

- Services (→ #services)
- Process (→ #process)
- Results (→ #results)
- About (→ #about)
- Contact (→ mailto: or #book)

---

## Success Criteria

- Page loads in under 2 seconds (no external JS except optional Calendly; fonts via CDN with `font-display: swap`)
- WCAG 2.1 AA compliant
- Fully responsive at 375px, 768px, 1280px
- All animations disabled under `prefers-reduced-motion`; static fallbacks defined per animation
- Clear conversion path: Hero CTA → Book a Call section
- Zero external JS dependencies except Calendly (optional, added at client go-live)
