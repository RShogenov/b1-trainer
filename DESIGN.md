# Design System — Ruslan Shogenov / rushogen.com

## Product Context
- **What this is:** Personal marketing services landing page for Ruslan Shogenov, freelance product marketing consultant
- **Who it's for:** SaaS founders, B2B product teams, and startup operators seeking senior product marketing help
- **Space/industry:** B2B SaaS / product marketing consulting; competes with agencies and fractional PMM platforms
- **Project type:** Marketing site (single-page landing + legal docs)

## Aesthetic Direction
- **Direction:** Light, clinical luxury — the visual language of enterprise SaaS (Semrush ONE reference)
- **Decoration level:** Intentional — hero gradient, glassmorphism on preview card, aurora blobs in CTA
- **Mood:** Trustworthy yet premium. The page should feel like working with someone who has tasted both a startup garage and a Series C office. Light and airy, not cold.
- **Reference site:** https://www.semrush.com/lp/semrush-one-free-trial/en/ (visual direction; CSS tokens extracted from live page)

## Typography
- **Display/Hero:** `Bricolage Grotesque` (800 weight) — substitutes Semrush's proprietary Lazzer; same geometric grotesque DNA, extreme weight, tight tracking. Conveys authority without stiffness.
- **Body:** `DM Sans` (400/500) — humanist grotesque, warm and readable at small sizes
- **UI/Labels:** `DM Sans` (same as body)
- **Data/Tables:** `DM Sans` with `font-variant-numeric: tabular-nums`
- **Code:** N/A
- **Loading:** Google Fonts CDN — `?family=Bricolage+Grotesque:wght@400;500;600;700;800&family=DM+Sans:wght@400;500;600`
- **Scale:**
  - H1 hero: `clamp(2.75rem, 6.5vw, 5.25rem)`, weight 800, `letter-spacing: -0.04em`
  - H2 section: `clamp(2rem, 4vw, 3rem)`, weight 700, `letter-spacing: -0.035em`
  - H3 card: `1.125rem`, weight 700
  - Body: `0.9375rem` (15px), line-height 1.7
  - Label/caption: `0.8125rem` (13px), weight 600, `letter-spacing: 0.06em`, uppercase
  - Stat numbers: `clamp(2rem, 5vw, 3.5rem)`, weight 800

## Color
- **Approach:** Balanced — primary surface is white/mint, color appears as purposeful accent
- **Source:** CSS custom properties extracted directly from Semrush ONE live page (March 2026)

| Token | Hex | Usage |
|-------|-----|-------|
| `--black` | `#171a22` | Text, dark buttons, footer background |
| `--white` | `#FFFFFF` | Base background, card surfaces |
| `--mint` | `#DCEEEB` | Section background alternating, subtle surfaces |
| `--lavender` | `#E8E1FF` | Section backgrounds, CTA gradient start |
| `--purple` | `#C190FF` | Primary accent, hero gradient start, gradient numbers |
| `--purple-mid` | `#9b6ddf` | Gradient mid-point |
| `--purple-dark` | `#7443C9` | Gradient end, CTA blobs |
| `--aqua` | `#18F0BF` | Secondary accent, gradient numbers end |
| `--grey` | `#747873` | Body text, muted labels |
| `--light-grey` | `#F3F6F6` | Subtle background, input fields |

- **Hero gradient:** `linear-gradient(160deg, #C190FF 0%, #DCEEEB 45%, #EDEFFF 75%, #FFFFFF 100%)`
- **Dark mode:** Not implemented (product decision — match Semrush ONE which is light-only)

## Spacing
- **Base unit:** 8px
- **Density:** Comfortable (generous, not spacious — communicates premium)
- **Section padding:** `96px 24px` desktop, `64px 24px` mobile
- **Component gap scale:** 8 / 16 / 24 / 32 / 48 / 64 / 96px

## Layout
- **Approach:** Grid-disciplined with one creative break (hero visual offset)
- **Grid:** Hero: `1fr 460px`; Services: 3-column mosaic; Cases: 2-column alternating; Testimonials: 3-column
- **Max content width:** `1200px`
- **Border radius scale:**
  - Buttons/pills: `9999px`
  - Cards: `20px`
  - Badges/chips: `999px`
  - Inner elements: `8px–12px`
- **Responsive breakpoints:**
  - `>1099px`: Hero two-column with visual
  - `767px–1099px`: Hero single-column, visual hidden
  - `<767px`: Single column, mobile nav

## Motion
- **Approach:** Intentional — animations serve comprehension and reinforce quality
- **Patterns in use:**
  - `cardFloat`: hero preview card 5s ease-in-out infinite `translateY` ±8px
  - `revealUp`: IntersectionObserver triggers `opacity 0→1` + `translateY 32px→0` (0.6s ease-out)
  - Counter animation: `requestAnimationFrame` eased count-up for stat numbers
  - Progress bars: `width 0 → var(--w)` on intersection (1.3s cubic-bezier(0.4,0,0.2,1))
  - Hover lifts: `transform: translateY(-3px)` + `box-shadow` increase on service cards
- **Easing:** `cubic-bezier(0.4, 0, 0.2, 1)` (Material ease)
- **Duration:** micro 150ms (hovers), short 350ms (reveals), medium 600ms (counters), long 1.3s (bars)
- **Reduced motion:** `@media (prefers-reduced-motion: reduce)` disables all keyframes and transitions

## Accessibility
- WCAG 2.1 AA target
- Mobile nav: `inert` attribute + `aria-expanded` + focus management
- `prefers-reduced-motion` fallbacks on all animations
- Focus-visible rings: `2px solid var(--purple)` offset `3px`
- Color contrast: all text/background pairs pass AA (verified against `#747873` on white = 4.64:1)
- `aria-label` on icon-only buttons, `aria-hidden` on decorative elements

## Decisions Log
| Date | Decision | Rationale |
|------|----------|-----------|
| 2026-03-21 | Font: Bricolage Grotesque instead of Inter/Space Grotesk | Avoids AI-slop overused fonts; closest open-source match to Semrush's proprietary Lazzer |
| 2026-03-21 | Color palette extracted from live Semrush ONE page | User explicitly requested Semrush ONE aesthetic; CSS inspection via gstack browse confirmed real tokens |
| 2026-03-21 | Light theme (not dark) | Actual Semrush ONE page is light; previous dark iterations were wrong direction, corrected after browser inspection |
| 2026-03-21 | Pill buttons (`border-radius: 9999px`) | Extracted directly from Semrush ONE button styles |
| 2026-03-21 | Glassmorphic preview card in hero | Matches Semrush ONE's UI screenshot pattern; adds visual depth without heavy decoration |
| 2026-03-21 | Section alternation: white → mint → lavender | Breaks monotony without introducing new colors; all within extracted palette |
| 2026-03-21 | Dark footer (`#171a22`) | Matches Semrush ONE's dark footer; provides clear page termination signal |
