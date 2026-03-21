# Marketing Services Page Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a single-file production-quality marketing landing page for Ruslan Shogenov's product marketing consultancy — light, futuristic, Semrush-style aesthetic with smooth animations.

**Architecture:** One self-contained `marketing-services.html` file with all CSS in a `<style>` block and all JS in a `<script>` block at the end of `<body>`. No build step, no bundler, no frameworks. Fonts via Google Fonts CDN. All animations use CSS keyframes + IntersectionObserver via vanilla JS.

**Tech Stack:** HTML5, CSS3 (custom properties, grid, flexbox, keyframes), vanilla JS (IntersectionObserver, scroll listener), Google Fonts (Space Grotesk, Inter)

---

## File Structure

| File | Action | Responsibility |
|------|--------|---------------|
| `marketing-services.html` | Create | Entire page: structure, styles, scripts |

No additional files needed. All assets (icons) are inline SVG.

---

### Task 1: HTML Boilerplate + Design Tokens

**Files:**
- Create: `marketing-services.html`

- [ ] **Step 1: Create the HTML shell**

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Ruslan Shogenov — Product Marketing Consultant</title>
  <meta name="description" content="I help B2B SaaS companies launch products, find positioning, and build go-to-market strategies that actually convert.">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;600;700&family=Inter:wght@400;500&display=swap" rel="stylesheet">
  <style>
    /* DESIGN TOKENS */
    :root {
      --bg: #ffffff;
      --bg-alt: #f5f5f7;
      --text: #0e1018;
      --text-muted: #6b7280;
      --accent: #6366f1;
      --accent-dark: #4f46e5;
      --accent-light: #e0e7ff;
      --border: #e5e7eb;
      --green: #22c55e;
      --font-heading: 'Space Grotesk', sans-serif;
      --font-body: 'Inter', sans-serif;
      --radius: 12px;
      --radius-lg: 20px;
      --shadow: 0 4px 24px rgba(0,0,0,0.06);
      --shadow-hover: 0 8px 30px rgba(99,102,241,0.15);
      --max-width: 1200px;
      --section-pad: 96px 24px;
    }

    /* RESET */
    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
    html { scroll-behavior: smooth; }
    body { font-family: var(--font-body); color: var(--text); background: var(--bg); line-height: 1.6; -webkit-font-smoothing: antialiased; }
    img { max-width: 100%; display: block; }
    a { text-decoration: none; color: inherit; }
    ul { list-style: none; }

    /* TYPOGRAPHY SCALE */
    h1 { font-family: var(--font-heading); font-size: clamp(2.5rem, 5vw, 4rem); font-weight: 700; line-height: 1.1; letter-spacing: -0.02em; }
    h2 { font-family: var(--font-heading); font-size: clamp(1.75rem, 3vw, 2.5rem); font-weight: 700; line-height: 1.2; letter-spacing: -0.01em; }
    h3 { font-family: var(--font-heading); font-size: 1.25rem; font-weight: 600; }
    p { font-size: 1.0625rem; color: var(--text-muted); line-height: 1.7; }

    /* UTILITIES */
    .container { max-width: var(--max-width); margin: 0 auto; padding: 0 24px; }
    .section { padding: var(--section-pad); }
    .section--alt { background: var(--bg-alt); }
    .section-label { font-family: var(--font-heading); font-size: 0.8125rem; font-weight: 600; letter-spacing: 0.08em; text-transform: uppercase; color: var(--accent); margin-bottom: 12px; }
    .section-title { margin-bottom: 16px; }
    .section-subtitle { max-width: 540px; margin-bottom: 48px; }

    /* BUTTONS */
    .btn { display: inline-flex; align-items: center; gap: 8px; padding: 14px 28px; border-radius: 8px; font-family: var(--font-heading); font-size: 0.9375rem; font-weight: 600; cursor: pointer; border: none; transition: all 0.2s ease; text-decoration: none; }
    .btn:focus-visible { outline: 2px solid var(--accent); outline-offset: 2px; }
    .btn--primary { background: var(--accent); color: #fff; }
    .btn--primary:hover { background: var(--accent-dark); transform: translateY(-1px); box-shadow: var(--shadow-hover); }
    .btn--ghost { background: transparent; color: var(--text); border: 1.5px solid var(--border); }
    .btn--ghost:hover { border-color: var(--accent); color: var(--accent); }
    .btn--white { background: #fff; color: var(--accent); }
    .btn--white:hover { background: var(--accent-light); }
    .btn--sm { padding: 10px 20px; font-size: 0.875rem; }

    /* ACCESSIBILITY */
    *:focus-visible { outline: 2px solid var(--accent); outline-offset: 2px; }
    .sr-only { position: absolute; width: 1px; height: 1px; padding: 0; margin: -1px; overflow: hidden; clip: rect(0,0,0,0); white-space: nowrap; border: 0; }

    /* REDUCED MOTION */
    @media (prefers-reduced-motion: reduce) {
      *, *::before, *::after { animation-duration: 0.01ms !important; animation-iteration-count: 1 !important; transition-duration: 0.01ms !important; }
      html { scroll-behavior: auto; }
    }
  </style>
</head>
<body>
  <!-- sections go here -->
  <script>
    // JS goes here
  </script>
</body>
</html>
```

- [ ] **Step 2: Open in browser and verify**

Open `marketing-services.html` in a browser. Page should be blank white. No console errors.

- [ ] **Step 3: Commit**

```bash
git add marketing-services.html
git commit -m "feat: add HTML boilerplate and design tokens"
```

---

### Task 2: Navigation

**Files:**
- Modify: `marketing-services.html` (nav HTML into body, nav CSS into style, scroll JS into script)

- [ ] **Step 1: Add nav HTML** (inside `<body>`, before sections)

```html
<header class="nav" id="nav" role="banner">
  <div class="container nav__inner">
    <a href="#" class="nav__logo" aria-label="Ruslan Shogenov home">
      <span class="nav__logo-text">Ruslan Shogenov</span>
    </a>
    <nav class="nav__links" aria-label="Main navigation">
      <a href="#services">Services</a>
      <a href="#process">Process</a>
      <a href="#results">Results</a>
      <a href="#about">About</a>
      <a href="#contact">Contact</a>
    </nav>
    <a href="#book" class="btn btn--primary btn--sm">Book a Call</a>
    <button class="nav__hamburger" aria-label="Open menu" aria-expanded="false" aria-controls="nav-mobile">
      <span></span><span></span><span></span>
    </button>
  </div>
</header>

<!-- Mobile nav overlay -->
<div class="nav-mobile" id="nav-mobile" aria-hidden="true">
  <button class="nav-mobile__close" aria-label="Close menu">✕</button>
  <nav aria-label="Mobile navigation">
    <a href="#services">Services</a>
    <a href="#process">Process</a>
    <a href="#results">Results</a>
    <a href="#about">About</a>
    <a href="#contact">Contact</a>
    <a href="#book" class="btn btn--primary">Book a Call</a>
  </nav>
</div>
```

- [ ] **Step 2: Add nav CSS** (inside `<style>`)

```css
/* NAV */
.nav { position: fixed; top: 0; left: 0; right: 0; z-index: 100; background: rgba(255,255,255,0.9); backdrop-filter: blur(8px); -webkit-backdrop-filter: blur(8px); border-bottom: 1px solid var(--border); transition: box-shadow 0.3s ease; }
.nav.scrolled { box-shadow: 0 2px 20px rgba(0,0,0,0.08); background: #fff; }
.nav__inner { display: flex; align-items: center; justify-content: space-between; height: 68px; }
.nav__logo-text { font-family: var(--font-heading); font-size: 1.0625rem; font-weight: 700; color: var(--text); }
.nav__links { display: flex; gap: 32px; }
.nav__links a { font-size: 0.9375rem; font-weight: 500; color: var(--text-muted); transition: color 0.2s; }
.nav__links a:hover { color: var(--accent); }
.nav__hamburger { display: none; flex-direction: column; gap: 5px; background: none; border: none; cursor: pointer; padding: 4px; }
.nav__hamburger span { display: block; width: 22px; height: 2px; background: var(--text); border-radius: 2px; transition: all 0.2s; }

/* Mobile nav */
.nav-mobile { position: fixed; inset: 0; z-index: 200; background: #fff; display: flex; flex-direction: column; justify-content: center; align-items: center; gap: 32px; opacity: 0; pointer-events: none; transition: opacity 0.3s ease; }
.nav-mobile.open { opacity: 1; pointer-events: all; }
.nav-mobile nav { display: flex; flex-direction: column; align-items: center; gap: 24px; }
.nav-mobile nav a { font-family: var(--font-heading); font-size: 1.5rem; font-weight: 600; color: var(--text); }
.nav-mobile nav a:hover { color: var(--accent); }
.nav-mobile__close { position: absolute; top: 24px; right: 24px; background: none; border: none; font-size: 1.5rem; cursor: pointer; color: var(--text-muted); }

@media (max-width: 767px) {
  .nav__links { display: none; }
  .nav > .container > .btn { display: none; }
  .nav__hamburger { display: flex; }
}
```

- [ ] **Step 3: Add nav JS** (inside `<script>`)

```js
// Sticky nav shadow on scroll
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 60);
}, { passive: true });

// Mobile menu
const hamburger = document.querySelector('.nav__hamburger');
const mobileNav = document.getElementById('nav-mobile');
const mobileClose = document.querySelector('.nav-mobile__close');

function openMenu() {
  mobileNav.classList.add('open');
  mobileNav.setAttribute('aria-hidden', 'false');
  hamburger.setAttribute('aria-expanded', 'true');
  document.body.style.overflow = 'hidden';
}
function closeMenu() {
  mobileNav.classList.remove('open');
  mobileNav.setAttribute('aria-hidden', 'true');
  hamburger.setAttribute('aria-expanded', 'false');
  document.body.style.overflow = '';
}
hamburger.addEventListener('click', openMenu);
mobileClose.addEventListener('click', closeMenu);
mobileNav.querySelectorAll('a').forEach(a => a.addEventListener('click', closeMenu));
```

- [ ] **Step 4: Verify in browser**

Nav is fixed at top. Scroll down → shadow appears. On mobile (resize to < 768px) → hamburger appears, links hidden. Tap hamburger → overlay opens. Tap close or link → overlay closes.

- [ ] **Step 5: Commit**

```bash
git add marketing-services.html
git commit -m "feat: add sticky navigation with mobile overlay"
```

---

### Task 3: Hero Section

**Files:**
- Modify: `marketing-services.html`

- [ ] **Step 1: Add hero HTML** (inside `<body>`, after nav)

```html
<main>
<section class="hero" id="hero" aria-label="Hero">
  <div class="hero__bg" aria-hidden="true"></div>
  <div class="container hero__content">
    <div class="hero__badge">
      <span class="hero__badge-dot" aria-hidden="true"></span>
      <span>✦ Available for new projects</span>
    </div>
    <h1 class="hero__headline">Product Marketing<br>that moves the needle.</h1>
    <p class="hero__sub">I help B2B SaaS companies launch products, find positioning, and build go-to-market strategies that actually convert.</p>
    <div class="hero__ctas">
      <a href="#book" class="btn btn--primary">Book a Call</a>
      <a href="#results" class="btn btn--ghost">See My Work</a>
    </div>
  </div>
</section>
```

- [ ] **Step 2: Add hero CSS**

```css
/* HERO */
.hero { position: relative; min-height: 100vh; display: flex; align-items: center; padding-top: 68px; overflow: hidden; }
.hero__bg { position: absolute; inset: 0; background: radial-gradient(ellipse 80% 60% at 20% 40%, var(--accent-light) 0%, transparent 60%), radial-gradient(ellipse 60% 50% at 80% 60%, #f0f4ff 0%, transparent 55%), linear-gradient(135deg, #fff 0%, #f5f5f7 100%); background-size: 200% 200%; animation: meshFlow 8s ease-in-out infinite alternate; }
@keyframes meshFlow { 0% { background-position: 0% 50%; } 100% { background-position: 100% 50%; } }
@media (prefers-reduced-motion: reduce) { .hero__bg { animation: none; background: linear-gradient(135deg, #fff 0%, var(--accent-light) 50%, #f5f5f7 100%); } }

.hero__content { position: relative; z-index: 1; max-width: 760px; padding-top: 80px; padding-bottom: 80px; }
.hero__badge { display: inline-flex; align-items: center; gap: 8px; background: #fff; border: 1px solid var(--border); border-radius: 999px; padding: 6px 14px 6px 10px; font-size: 0.875rem; font-weight: 500; color: var(--text-muted); margin-bottom: 32px; box-shadow: var(--shadow); }
.hero__badge-dot { width: 8px; height: 8px; border-radius: 50%; background: var(--green); animation: dotPulse 2s ease-in-out infinite; flex-shrink: 0; }
@keyframes dotPulse { 0%, 100% { transform: scale(1); opacity: 1; } 50% { transform: scale(1.4); opacity: 0.7; } }
@media (prefers-reduced-motion: reduce) { .hero__badge-dot { animation: none; } }

.hero__headline { margin-bottom: 24px; color: var(--text); }
.hero__sub { font-size: 1.1875rem; max-width: 560px; margin-bottom: 40px; }
.hero__ctas { display: flex; gap: 16px; flex-wrap: wrap; }
```

- [ ] **Step 3: Verify in browser**

Hero fills viewport. Gradient mesh animates subtly. Badge visible with pulsing green dot. Headline, subheadline, and two CTA buttons render correctly. Responsive: text stacks on mobile.

- [ ] **Step 4: Commit**

```bash
git add marketing-services.html
git commit -m "feat: add animated hero section"
```

---

### Task 4: Social Proof Bar

**Files:**
- Modify: `marketing-services.html`

- [ ] **Step 1: Add HTML** (after `</section>` of hero)

```html
<section class="proof-bar" aria-label="Social proof">
  <div class="container proof-bar__inner">
    <div class="proof-bar__stats">
      <div class="proof-stat">
        <span class="proof-stat__number" data-target="50" data-suffix="+">50+</span>
        <span class="proof-stat__label">Product Launches</span>
      </div>
      <div class="proof-stat">
        <span class="proof-stat__number" data-target="2" data-prefix="$" data-suffix="M+">$2M+</span>
        <span class="proof-stat__label">Pipeline Generated</span>
      </div>
      <div class="proof-stat">
        <span class="proof-stat__number" data-target="30" data-suffix="+">30+</span>
        <span class="proof-stat__label">SaaS Clients Served</span>
      </div>
    </div>
    <div class="proof-bar__logos" aria-label="Trusted by teams at these companies">
      <span class="proof-bar__logos-label">Trusted by teams at</span>
      <div class="proof-bar__logo-row">
        <div class="logo-placeholder" aria-hidden="true"></div>
        <div class="logo-placeholder" aria-hidden="true"></div>
        <div class="logo-placeholder" aria-hidden="true"></div>
        <div class="logo-placeholder" aria-hidden="true"></div>
        <div class="logo-placeholder" aria-hidden="true"></div>
      </div>
    </div>
  </div>
</section>
```

- [ ] **Step 2: Add CSS**

```css
/* PROOF BAR */
.proof-bar { background: var(--bg-alt); border-top: 1px solid var(--border); border-bottom: 1px solid var(--border); padding: 48px 24px; }
.proof-bar__inner { display: flex; flex-direction: column; gap: 40px; align-items: center; }
.proof-bar__stats { display: flex; gap: 64px; justify-content: center; flex-wrap: wrap; }
.proof-stat { text-align: center; }
.proof-stat__number { display: block; font-family: var(--font-heading); font-size: 2.5rem; font-weight: 700; color: var(--accent); line-height: 1; margin-bottom: 6px; }
.proof-stat__label { font-size: 0.875rem; color: var(--text-muted); font-weight: 500; }
.proof-bar__logos { text-align: center; }
.proof-bar__logos-label { font-size: 0.8125rem; font-weight: 500; color: var(--text-muted); display: block; margin-bottom: 16px; text-transform: uppercase; letter-spacing: 0.06em; }
.proof-bar__logo-row { display: flex; gap: 40px; align-items: center; justify-content: center; flex-wrap: wrap; }
.logo-placeholder { width: 100px; height: 32px; border-radius: 4px; background: #d1d5db; }
```

- [ ] **Step 3: Add counter JS** (inside `<script>`)

```js
// Animated counters
function easeOutQuad(t) { return t * (2 - t); }

function animateCounter(el) {
  const target = parseFloat(el.dataset.target);
  const prefix = el.dataset.prefix || '';
  const suffix = el.dataset.suffix || '';
  const duration = 1500;
  const start = performance.now();

  function update(now) {
    const elapsed = now - start;
    const progress = Math.min(elapsed / duration, 1);
    const value = Math.round(easeOutQuad(progress) * target);
    el.textContent = prefix + value + suffix;
    if (progress < 1) requestAnimationFrame(update);
  }
  requestAnimationFrame(update);
}

// Only animate if reduced-motion not preferred
if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCounter(entry.target);
        counterObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  document.querySelectorAll('.proof-stat__number').forEach(el => counterObserver.observe(el));
}
```

- [ ] **Step 4: Verify in browser**

Proof bar renders below hero. Scroll to it — numbers count up from 0. Logo placeholders show as grey rectangles. No motion if `prefers-reduced-motion` set.

- [ ] **Step 5: Commit**

```bash
git add marketing-services.html
git commit -m "feat: add social proof bar with animated counters"
```

---

### Task 5: Services Section

**Files:**
- Modify: `marketing-services.html`

- [ ] **Step 1: Add HTML**

```html
<section class="section services" id="services" aria-labelledby="services-title">
  <div class="container">
    <p class="section-label">What I do</p>
    <h2 class="section-title" id="services-title">Services</h2>
    <p class="section-subtitle">From positioning to launch — end-to-end product marketing that drives real results.</p>
    <div class="services__grid">
      <article class="service-card reveal-up">
        <div class="service-card__icon" aria-hidden="true">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>
        </div>
        <h3 class="service-card__title">Positioning &amp; Messaging</h3>
        <p class="service-card__desc">Define what you stand for and why buyers should care. Build the narrative foundation your entire go-to-market depends on.</p>
      </article>
      <article class="service-card reveal-up" style="--delay: 100ms">
        <div class="service-card__icon" aria-hidden="true">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"/><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"/><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"/><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"/></svg>
        </div>
        <h3 class="service-card__title">Go-to-Market Strategy</h3>
        <p class="service-card__desc">Launch playbooks, ICP definition, and channel strategy that drives pipeline from day one.</p>
      </article>
      <article class="service-card reveal-up" style="--delay: 200ms">
        <div class="service-card__icon" aria-hidden="true">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 11l19-9-9 19-2-8-8-2z"/></svg>
        </div>
        <h3 class="service-card__title">Product Launch</h3>
        <p class="service-card__desc">End-to-end launch execution from narrative to activation. I make sure your product lands with the impact it deserves.</p>
      </article>
    </div>
  </div>
</section>
```

- [ ] **Step 2: Add CSS**

```css
/* SERVICES */
.services__grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; }
@media (max-width: 767px) { .services__grid { grid-template-columns: 1fr; } }
@media (min-width: 640px) and (max-width: 1023px) { .services__grid { grid-template-columns: repeat(2, 1fr); } }

.service-card { position: relative; background: #fff; border: 1px solid var(--border); border-radius: var(--radius-lg); padding: 32px; transition: transform 0.25s ease, box-shadow 0.25s ease; overflow: hidden; }
.service-card::before { content: ''; position: absolute; inset: -2px; border-radius: calc(var(--radius-lg) + 2px); background: conic-gradient(from 0deg, var(--accent), #a5b4fc, var(--accent)); opacity: 0; transition: opacity 0.3s ease; z-index: -1; animation: borderRotate 3s linear infinite paused; }
.service-card:hover { transform: translateY(-4px); box-shadow: var(--shadow-hover); }
.service-card:hover::before { opacity: 1; animation-play-state: running; }
@keyframes borderRotate { to { --angle: 360deg; } }
@media (prefers-reduced-motion: reduce) { .service-card::before { animation: none; } .service-card:hover { transform: none; } .service-card:hover::before { opacity: 1; background: var(--accent); } }
@media (hover: none) { .service-card::before { display: none; } }

.service-card__icon { width: 48px; height: 48px; border-radius: 12px; background: var(--accent-light); color: var(--accent); display: flex; align-items: center; justify-content: center; margin-bottom: 20px; }
.service-card__title { margin-bottom: 12px; font-size: 1.125rem; }
.service-card__desc { font-size: 0.9375rem; }

/* REVEAL ANIMATIONS */
.reveal-up { opacity: 0; transform: translateY(24px); filter: blur(4px); transition: opacity 0.5s ease var(--delay, 0ms), transform 0.5s ease var(--delay, 0ms), filter 0.5s ease var(--delay, 0ms); }
.reveal-up.revealed { opacity: 1; transform: translateY(0); filter: blur(0); }
@media (prefers-reduced-motion: reduce) { .reveal-up { opacity: 1; transform: none; filter: none; transition: none; } }
```

- [ ] **Step 3: Add reveal JS** (inside `<script>`)

```js
// Scroll reveal for .reveal-up elements
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('revealed');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });

document.querySelectorAll('.reveal-up').forEach(el => revealObserver.observe(el));
```

- [ ] **Step 4: Verify**

3 cards render in a row (desktop). Cards have light border. On hover: card lifts, indigo gradient border animates. On scroll: cards fade up with stagger.

- [ ] **Step 5: Commit**

```bash
git add marketing-services.html
git commit -m "feat: add services section with hover animations"
```

---

### Task 6: How I Work (Process) Section

**Files:**
- Modify: `marketing-services.html`

- [ ] **Step 1: Add HTML**

```html
<section class="section section--alt process" id="process" aria-labelledby="process-title">
  <div class="container">
    <p class="section-label">How I work</p>
    <h2 class="section-title" id="process-title">A process built for results</h2>
    <div class="process__steps" id="process-steps">
      <!-- SVG line (desktop only) -->
      <svg class="process__line" aria-hidden="true" viewBox="0 0 2 400" preserveAspectRatio="none">
        <line x1="1" y1="0" x2="1" y2="400" stroke="#6366f1" stroke-width="2" stroke-dasharray="400" stroke-dashoffset="400" id="process-svg-line"/>
      </svg>

      <div class="process-step reveal-up">
        <div class="process-step__text process-step__text--left">
          <span class="process-step__num" aria-hidden="true">01</span>
          <h3 class="process-step__title">Discover</h3>
          <p class="process-step__desc">Deep dive into your product, market, and competitive landscape to uncover what makes you different.</p>
        </div>
        <div class="process-step__spacer" aria-hidden="true"></div>
      </div>

      <div class="process-step reveal-up" style="--delay: 100ms">
        <div class="process-step__spacer" aria-hidden="true"></div>
        <div class="process-step__text process-step__text--right">
          <span class="process-step__num" aria-hidden="true">02</span>
          <h3 class="process-step__title">Position</h3>
          <p class="process-step__desc">Craft messaging that resonates with your ideal buyers and sets you apart from alternatives.</p>
        </div>
      </div>

      <div class="process-step reveal-up" style="--delay: 200ms">
        <div class="process-step__text process-step__text--left">
          <span class="process-step__num" aria-hidden="true">03</span>
          <h3 class="process-step__title">Launch</h3>
          <p class="process-step__desc">Execute go-to-market with precision and speed. From channel strategy to activation, nothing falls through the cracks.</p>
        </div>
        <div class="process-step__spacer" aria-hidden="true"></div>
      </div>

      <div class="process-step reveal-up" style="--delay: 300ms">
        <div class="process-step__spacer" aria-hidden="true"></div>
        <div class="process-step__text process-step__text--right">
          <span class="process-step__num" aria-hidden="true">04</span>
          <h3 class="process-step__title">Optimize</h3>
          <p class="process-step__desc">Measure, iterate, and scale what works. Continuous improvement until growth becomes predictable.</p>
        </div>
      </div>
    </div>
  </div>
</section>
```

- [ ] **Step 2: Add CSS**

```css
/* PROCESS */
.process__steps { position: relative; display: flex; flex-direction: column; gap: 0; margin-top: 48px; }
.process__line { position: absolute; left: 50%; top: 0; bottom: 0; width: 2px; height: 100%; transform: translateX(-50%); display: block; }
@media (max-width: 767px) { .process__line { display: none; } }

.process-step { display: grid; grid-template-columns: 1fr 1fr; gap: 48px; align-items: center; padding: 40px 0; }
@media (max-width: 767px) { .process-step { grid-template-columns: 1fr; padding: 24px 0; border-left: 2px dashed var(--accent-light); padding-left: 24px; margin-left: 12px; } .process-step__spacer { display: none; } }

.process-step__text { padding: 32px; background: #fff; border-radius: var(--radius-lg); box-shadow: var(--shadow); position: relative; }
.process-step__num { display: block; font-family: var(--font-heading); font-size: 3rem; font-weight: 700; color: var(--accent-light); line-height: 1; margin-bottom: 8px; }
.process-step__title { font-size: 1.25rem; margin-bottom: 8px; color: var(--text); }
.process-step__desc { font-size: 0.9375rem; }
```

- [ ] **Step 3: Add SVG line animation JS**

```js
// Process SVG line draw on scroll
const svgLine = document.getElementById('process-svg-line');
if (svgLine && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  const lineObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        svgLine.style.transition = 'stroke-dashoffset 1.5s ease';
        svgLine.style.strokeDashoffset = '0';
        lineObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });
  lineObserver.observe(document.getElementById('process-steps'));
}
```

- [ ] **Step 4: Verify**

Desktop: 4 steps in zigzag. SVG line draws on scroll. Mobile: vertical list with dashed left border.

- [ ] **Step 5: Commit**

```bash
git add marketing-services.html
git commit -m "feat: add process section with zigzag layout and SVG line animation"
```

---

### Task 7: Case Studies / Results Section

**Files:**
- Modify: `marketing-services.html`

- [ ] **Step 1: Add HTML**

```html
<section class="section results" id="results" aria-labelledby="results-title">
  <div class="container">
    <p class="section-label">Results</p>
    <h2 class="section-title" id="results-title">Work that drives outcomes</h2>
    <p class="section-subtitle">Real results for real SaaS teams. Numbers are directional — details available on request.</p>
    <div class="results__grid">
      <article class="result-card reveal-up">
        <div class="result-card__meta">B2B SaaS · Series A</div>
        <p class="result-card__challenge">Repositioned core product messaging after stalled growth.</p>
        <div class="result-card__outcome">
          <span class="result-card__stat">40%</span>
          <span class="result-card__stat-label">increase in trial-to-paid conversion</span>
        </div>
      </article>
      <article class="result-card reveal-up" style="--delay: 100ms">
        <div class="result-card__meta">B2B SaaS · Seed</div>
        <p class="result-card__challenge">Built GTM strategy from scratch for a first-time founder.</p>
        <div class="result-card__outcome">
          <span class="result-card__stat">100</span>
          <span class="result-card__stat-label">paying customers in 90 days</span>
        </div>
      </article>
      <article class="result-card reveal-up" style="--delay: 200ms">
        <div class="result-card__meta">Developer Tools · Series B</div>
        <p class="result-card__challenge">Relaunched product with a new category narrative.</p>
        <div class="result-card__outcome">
          <span class="result-card__stat">3×</span>
          <span class="result-card__stat-label">increase in inbound demo requests</span>
        </div>
      </article>
    </div>
    <div class="results__cta">
      <a href="#book" class="results__link">See all case studies <span aria-hidden="true">→</span></a>
    </div>
  </div>
</section>
```

- [ ] **Step 2: Add CSS**

```css
/* RESULTS */
.results__grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; margin-bottom: 32px; }
@media (max-width: 767px) { .results__grid { grid-template-columns: 1fr; } }
@media (min-width: 640px) and (max-width: 1023px) { .results__grid { grid-template-columns: repeat(2, 1fr); } }

.result-card { background: #fff; border: 1px solid var(--border); border-radius: var(--radius-lg); padding: 32px; position: relative; overflow: hidden; transition: transform 0.25s ease, box-shadow 0.25s ease; }
.result-card::before { content: ''; position: absolute; inset: -2px; border-radius: calc(var(--radius-lg) + 2px); background: conic-gradient(from 0deg, var(--accent), #a5b4fc, var(--accent)); opacity: 0; z-index: -1; animation: borderRotate 3s linear infinite paused; transition: opacity 0.3s; }
.result-card:hover { transform: translateY(-4px); box-shadow: var(--shadow-hover); }
.result-card:hover::before { opacity: 1; animation-play-state: running; }
@media (prefers-reduced-motion: reduce) { .result-card::before { animation: none; } .result-card:hover { transform: none; } }
@media (hover: none) { .result-card::before { display: none; } }

.result-card__meta { font-size: 0.8125rem; font-weight: 600; color: var(--accent); text-transform: uppercase; letter-spacing: 0.06em; margin-bottom: 12px; }
.result-card__challenge { font-size: 0.9375rem; color: var(--text-muted); margin-bottom: 24px; }
.result-card__outcome { border-top: 1px solid var(--border); padding-top: 20px; }
.result-card__stat { display: block; font-family: var(--font-heading); font-size: 2.25rem; font-weight: 700; color: var(--accent); line-height: 1; margin-bottom: 4px; }
.result-card__stat-label { font-size: 0.875rem; color: var(--text-muted); }

.results__cta { text-align: center; }
.results__link { font-family: var(--font-heading); font-weight: 600; color: var(--accent); font-size: 1rem; transition: gap 0.2s; display: inline-flex; align-items: center; gap: 6px; }
.results__link:hover { gap: 10px; }
.results__link:focus-visible { outline: 2px solid var(--accent); outline-offset: 2px; border-radius: 4px; }
```

- [ ] **Step 3: Verify**

3 result cards render. Gradient border animates on hover. Stats are prominent. Staggered scroll reveal works.

- [ ] **Step 4: Commit**

```bash
git add marketing-services.html
git commit -m "feat: add results/case studies section"
```

---

### Task 8: About Section

**Files:**
- Modify: `marketing-services.html`

- [ ] **Step 1: Add HTML**

```html
<section class="section section--alt about" id="about" aria-labelledby="about-title">
  <div class="container about__inner">
    <div class="about__text reveal-up">
      <p class="section-label">About me</p>
      <h2 id="about-title">Built on real product<br>marketing experience.</h2>
      <p class="about__bio">I'm Ruslan Shogenov, a freelance product marketing consultant helping B2B SaaS teams find their positioning, launch with confidence, and grow. I've worked with startups from Seed to Series B, building the kind of clarity that turns browsers into buyers.</p>
      <div class="about__creds">
        <div class="about__cred">
          <span class="about__cred-value">5+</span>
          <span class="about__cred-label">Years in product marketing</span>
        </div>
        <div class="about__cred">
          <span class="about__cred-value">30+</span>
          <span class="about__cred-label">SaaS products launched</span>
        </div>
        <div class="about__cred">
          <span class="about__cred-value">Seed → B</span>
          <span class="about__cred-label">Stage experience</span>
        </div>
      </div>
      <a href="#book" class="btn btn--primary">Work with me</a>
    </div>
    <div class="about__visual reveal-up" style="--delay: 150ms" aria-hidden="true">
      <div class="about__photo-placeholder"></div>
    </div>
  </div>
</section>
```

- [ ] **Step 2: Add CSS**

```css
/* ABOUT */
.about__inner { display: grid; grid-template-columns: 1fr 1fr; gap: 80px; align-items: center; }
@media (max-width: 767px) { .about__inner { grid-template-columns: 1fr; gap: 40px; } .about__visual { order: -1; } }

.about__bio { margin: 20px 0 32px; max-width: 480px; }
.about__creds { display: flex; gap: 32px; margin-bottom: 32px; flex-wrap: wrap; }
.about__cred { }
.about__cred-value { display: block; font-family: var(--font-heading); font-size: 1.5rem; font-weight: 700; color: var(--accent); }
.about__cred-label { font-size: 0.8125rem; color: var(--text-muted); }

.about__photo-placeholder { width: 100%; max-width: 400px; aspect-ratio: 4/5; border-radius: var(--radius-lg); background: linear-gradient(135deg, var(--accent-light) 0%, #c7d2fe 100%); margin: 0 auto; position: relative; overflow: hidden; }
.about__photo-placeholder::after { content: ''; position: absolute; inset: 0; background: radial-gradient(circle at 30% 30%, rgba(255,255,255,0.4), transparent 60%); }
```

- [ ] **Step 3: Verify**

Split layout on desktop (text left, visual right). Single column on mobile with visual on top. Bio, credentials, and CTA visible.

- [ ] **Step 4: Commit**

```bash
git add marketing-services.html
git commit -m "feat: add about section"
```

---

### Task 9: Testimonials Section

**Files:**
- Modify: `marketing-services.html`

- [ ] **Step 1: Add HTML**

```html
<section class="section testimonials" id="testimonials" aria-labelledby="testimonials-title">
  <div class="container">
    <p class="section-label">What clients say</p>
    <h2 class="section-title" id="testimonials-title">Trusted by SaaS teams</h2>
    <div class="testimonials__grid">
      <blockquote class="testimonial-card reveal-up">
        <span class="testimonial-card__quote" aria-hidden="true">"</span>
        <p class="testimonial-card__text">Ruslan helped us cut through the noise and find a message that actually resonated. Pipeline doubled in two quarters.</p>
        <footer class="testimonial-card__footer">
          <cite class="testimonial-card__name">Jane D.</cite>
          <span class="testimonial-card__role">Head of Marketing, SaaS Co.</span>
        </footer>
      </blockquote>
      <blockquote class="testimonial-card reveal-up" style="--delay: 100ms">
        <span class="testimonial-card__quote" aria-hidden="true">"</span>
        <p class="testimonial-card__text">One of the sharpest GTM thinkers I've worked with. He made our launch feel effortless.</p>
        <footer class="testimonial-card__footer">
          <cite class="testimonial-card__name">Alex M.</cite>
          <span class="testimonial-card__role">Founder, Dev Tools Startup</span>
        </footer>
      </blockquote>
      <blockquote class="testimonial-card reveal-up" style="--delay: 200ms">
        <span class="testimonial-card__quote" aria-hidden="true">"</span>
        <p class="testimonial-card__text">If you need someone who can translate your product into something buyers care about, Ruslan is your person.</p>
        <footer class="testimonial-card__footer">
          <cite class="testimonial-card__name">Sara K.</cite>
          <span class="testimonial-card__role">VP Product, B2B Platform</span>
        </footer>
      </blockquote>
    </div>
  </div>
</section>
```

- [ ] **Step 2: Add CSS**

```css
/* TESTIMONIALS */
.testimonials__grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; }
@media (max-width: 767px) { .testimonials__grid { grid-template-columns: 1fr; } }
@media (min-width: 640px) and (max-width: 1023px) { .testimonials__grid { grid-template-columns: repeat(2, 1fr); } }

.testimonial-card { background: #fff; border: 1px solid var(--border); border-radius: var(--radius-lg); padding: 32px; position: relative; transition: box-shadow 0.25s ease; }
.testimonial-card:hover { box-shadow: var(--shadow-hover); }
.testimonial-card__quote { font-family: Georgia, serif; font-size: 5rem; color: var(--accent-light); line-height: 0.8; display: block; margin-bottom: 16px; }
.testimonial-card__text { font-size: 1rem; color: var(--text); font-style: italic; margin-bottom: 24px; line-height: 1.6; }
.testimonial-card__footer { border-top: 1px solid var(--border); padding-top: 16px; }
.testimonial-card__name { font-family: var(--font-heading); font-weight: 600; font-size: 0.9375rem; color: var(--text); display: block; font-style: normal; }
.testimonial-card__role { font-size: 0.8125rem; color: var(--text-muted); }

/* Enhanced reveal with blur */
.reveal-up { opacity: 0; transform: translateY(24px); filter: blur(4px); transition: opacity 0.5s ease var(--delay, 0ms), transform 0.5s ease var(--delay, 0ms), filter 0.5s ease var(--delay, 0ms); }
.reveal-up.revealed { opacity: 1; transform: translateY(0); filter: blur(0); }
```

- [ ] **Step 3: Verify**

3 testimonial cards. Quote mark prominent in light indigo. Cards fade up with blur on scroll. Hover adds shadow (no gradient border — intentionally simpler).

- [ ] **Step 4: Commit**

```bash
git add marketing-services.html
git commit -m "feat: add testimonials section"
```

---

### Task 10: CTA / Book a Call Section + Footer

**Files:**
- Modify: `marketing-services.html`

- [ ] **Step 1: Add HTML** (after testimonials, before closing `</main>`)

```html
<section class="cta-section" id="book" aria-labelledby="cta-title">
  <div class="cta-section__orbs" aria-hidden="true">
    <div class="cta-orb cta-orb--1"></div>
    <div class="cta-orb cta-orb--2"></div>
    <div class="cta-orb cta-orb--3"></div>
  </div>
  <div class="container cta-section__content">
    <h2 id="cta-title" class="cta-section__title">Ready to launch smarter?</h2>
    <p class="cta-section__sub">Book a free 30-minute strategy call. No pitch, just value.</p>
    <a href="mailto:ruslan@rushogen.com" class="btn btn--white">Book a Call <span aria-hidden="true">→</span></a>
  </div>
</section>
</main>

<footer class="footer" id="contact" role="contentinfo">
  <div class="container footer__inner">
    <div class="footer__brand">
      <span class="footer__name">Ruslan Shogenov</span>
      <span class="footer__tagline">Product Marketing Consultant</span>
    </div>
    <nav class="footer__nav" aria-label="Footer navigation">
      <a href="#services">Services</a>
      <a href="#process">Process</a>
      <a href="#results">Results</a>
      <a href="#about">About</a>
      <a href="#contact">Contact</a>
    </nav>
    <div class="footer__social">
      <a href="https://linkedin.com/in/ruslanshogenov" target="_blank" rel="noopener" aria-label="LinkedIn profile">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
      </a>
      <a href="mailto:ruslan@rushogen.com" aria-label="Send email">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
      </a>
    </div>
  </div>
  <div class="footer__bottom">
    <div class="container">
      <p>© 2026 Ruslan Shogenov. All rights reserved.</p>
    </div>
  </div>
</footer>
```

- [ ] **Step 2: Add CSS**

```css
/* CTA SECTION */
.cta-section { position: relative; background: linear-gradient(135deg, #6366f1 0%, #4f46e5 100%); padding: 120px 24px; overflow: hidden; text-align: center; }
.cta-section__orbs { position: absolute; inset: 0; pointer-events: none; }
.cta-orb { position: absolute; border-radius: 50%; background: #fff; }
.cta-orb--1 { width: 400px; height: 400px; top: -100px; left: -100px; opacity: 0.08; animation: orbDrift1 12s ease-in-out infinite alternate; }
.cta-orb--2 { width: 300px; height: 300px; bottom: -80px; right: -60px; opacity: 0.06; animation: orbDrift2 15s ease-in-out infinite alternate; }
.cta-orb--3 { width: 200px; height: 200px; top: 50%; right: 20%; opacity: 0.05; animation: orbDrift3 10s ease-in-out infinite alternate; }
@keyframes orbDrift1 { from { transform: translate(0, 0); } to { transform: translate(30px, 20px); } }
@keyframes orbDrift2 { from { transform: translate(0, 0); } to { transform: translate(-20px, -30px); } }
@keyframes orbDrift3 { from { transform: translate(0, 0); } to { transform: translate(25px, -15px); } }
@media (prefers-reduced-motion: reduce) { .cta-orb { animation: none; opacity: 0.05; } }

.cta-section__content { position: relative; z-index: 1; }
.cta-section__title { color: #fff; font-size: clamp(2rem, 4vw, 3rem); margin-bottom: 16px; }
.cta-section__sub { color: rgba(255,255,255,0.85); font-size: 1.125rem; margin-bottom: 40px; }

/* FOOTER */
.footer { background: #fff; border-top: 1px solid var(--border); padding: 48px 24px 0; }
.footer__inner { display: flex; align-items: center; justify-content: space-between; gap: 32px; flex-wrap: wrap; padding-bottom: 32px; }
.footer__brand { display: flex; flex-direction: column; gap: 4px; }
.footer__name { font-family: var(--font-heading); font-weight: 700; font-size: 1rem; color: var(--text); }
.footer__tagline { font-size: 0.875rem; color: var(--text-muted); }
.footer__nav { display: flex; gap: 24px; flex-wrap: wrap; }
.footer__nav a { font-size: 0.9375rem; color: var(--text-muted); transition: color 0.2s; }
.footer__nav a:hover { color: var(--accent); }
.footer__social { display: flex; gap: 16px; }
.footer__social a { color: var(--text-muted); transition: color 0.2s; }
.footer__social a:hover { color: var(--accent); }
.footer__bottom { border-top: 1px solid var(--border); padding: 16px 0; }
.footer__bottom p { font-size: 0.8125rem; color: var(--text-muted); }

@media (max-width: 767px) {
  .footer__inner { flex-direction: column; align-items: flex-start; }
  .footer__nav { display: none; }
}
```

- [ ] **Step 3: Verify**

Indigo gradient CTA section. Orbs drift subtly. Button is white with indigo text. Footer has brand, nav, and social icons. Copyright line at bottom.

- [ ] **Step 4: Commit**

```bash
git add marketing-services.html
git commit -m "feat: add CTA section and footer"
```

---

### Task 11: Final QA Pass

**Files:**
- Modify: `marketing-services.html` (fixes only)

- [ ] **Step 1: Check all anchor links work**

Click every nav link and CTA button. All should smooth-scroll to correct sections. No 404s. `Book a Call` → `#book`. `See My Work` → `#results`.

- [ ] **Step 2: Test all animations**

Scroll through full page:
- Hero gradient mesh animates ✓
- Badge dot pulses ✓
- Counters count up on scroll into view ✓
- Service cards fade up staggered ✓
- Process line draws on scroll ✓
- Result cards fade up ✓
- Testimonial cards blur-fade up ✓
- CTA orbs drift ✓

- [ ] **Step 3: Test responsive layout**

Resize browser to 375px → all sections single column, no overflow. 768px → 2-col grids. 1280px → full desktop layout.

- [ ] **Step 4: Test mobile nav**

At <768px: hamburger visible, desktop nav hidden. Tap hamburger → full-screen overlay. Tap a link → scrolls and closes overlay.

- [ ] **Step 5: Test prefers-reduced-motion**

In browser DevTools → Rendering → Emulate CSS media feature: `prefers-reduced-motion: reduce`. All animations should be static. Counters should show final value immediately.

- [ ] **Step 6: Check focus states**

Tab through the page. Every link and button should show a clear indigo focus ring.

- [ ] **Step 7: Commit any fixes**

```bash
git add marketing-services.html
git commit -m "fix: QA pass — responsive, accessibility, animation checks"
```

---

## Open Items (Not Blocking)

- Replace `mailto:ruslan@rushogen.com` with Calendly embed URL when supplied
- Replace logo placeholders with real logos (confirm usage rights first)
- Replace placeholder testimonials with real quotes
- Replace About photo placeholder with real photo (`<img src="photo.jpg" alt="Ruslan Shogenov" width="400" height="500" style="object-fit:cover; border-radius: 20px;">`)
- Replace placeholder case study metrics with real data
