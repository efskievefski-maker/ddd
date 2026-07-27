# IMPLEMENTATION KICKSTART — TerraScan Pro Landing Page

> **Scope:** Front-end only. Desktop-first. No backend, no form submissions, no real checkout.
> **Goal:** High-conversion single-product landing page for TerraScan Pro, a premium handheld soil monitoring scanner targeting independent agronomists.

---

## 1. Tech Stack

| Layer | Choice |
|-------|--------|
| Framework | Next.js 16 (App Router) |
| Styling | Tailwind CSS v4 (tokens in `globals.css`) |
| Components | shadcn/ui (Button, Card, Accordion) |
| Icons | Lucide React |
| State | Client-side only (Accordion + sticky header scroll behavior) |
| Backend | **None** — purely front end |

---

## 2. Design System

### Color Tokens
| Token | Value | Usage |
|-------|-------|-------|
| Background | `slate-50` (light gray/slate) | Page background |
| Primary / Authority | `emerald-900` (forest green) | Headers, CTA banner background, footer |
| Accent / Action | `amber-500` (vibrant amber) | All CTA buttons |
| Neutrals | white, slate grays | Cards, text, borders |

- **Total palette: 3–5 colors.** No purple, no gradients.
- Override text color whenever a background color is overridden (contrast safety).

### Typography
- Max 2 font families: one for headings, one for body.
- Body line-height `leading-relaxed`.
- Use `text-balance` / `text-pretty` on titles.

### Layout
- **Desktop-first** (per clarification #2 & #16 — default Tailwind breakpoints assumed).
- Flexbox primary; CSS Grid only for 2D grids (value grid, box-contents grid).
- Generous whitespace, high scannability.

---

## 3. Product Imagery

- Use **AgroCares Scanner F** images throughout (hero + "What's in the Box").
- Generate/realize these via the GenerateImage tool — no empty placeholders.
- Hero visual: AgroCares Scanner F device shot (static).

---

## 4. Page Sections (final, post-clarification)

> Removed per clarifications: **Social proof stripe** (#3), **Guarantee banner** (#12), **Footer email signup** (#9), **payment method badges** (#5), **SEO metadata** (#15).

| # | Section | Notes |
|---|---------|-------|
| 1 | **Sticky Header** | Logo + nav + amber CTA. **Hides on scroll-down, reappears on scroll-up** (#6). Client component. |
| 2 | **Hero** | Left: headline (10-min results vs. 3 weeks), subcopy, amber CTA → checkout. Right: AgroCares Scanner F image. Desktop split layout. |
| 3 | **Value Grid (3-col)** | Speed, Accuracy, Scalability — each with Lucide icon (Zap, Cpu, Cloud). |
| 4 | **What's in the Box** | Grid of AgroCares Scanner F component images + labels. |
| 5 | **Pricing (dual cards)** | Two cards **side-by-side** (#4), "Best Value" highlight on Pro Bundle. Both CTAs → checkout. |
| 6 | **FAQ** | shadcn Accordion, **all items closed initially** (#8), single-open behavior. Client component. |
| 7 | **Closing CTA Banner** | Deep `emerald-900` background, amber CTA → checkout. |
| 8 | **Footer** | Logo + links only. **No email signup, no payment icons.** |

---

## 5. CTA Behavior

- **All CTA buttons lead to checkout** (#7) — single shared destination (`/checkout` placeholder route or `#`).
- **Conversion tracking** (#14): each CTA click fires a tracking handler (e.g. `trackConversion(source)` logging `console.log("[v0] conversion:", source)` as a stub, ready to swap for real analytics).
- Identical amber styling + hover/active states across all CTAs.

---

## 6. Component Architecture

```
app/
  layout.tsx          # fonts, <html className="bg-background">
  page.tsx            # composes sections
components/
  site-header.tsx     # 'use client' — sticky + hide-on-scroll
  hero.tsx
  value-grid.tsx
  whats-in-the-box.tsx
  pricing.tsx
  faq.tsx             # 'use client' — Accordion
  closing-cta.tsx
  site-footer.tsx
  cta-button.tsx      # shared amber button + conversion tracking
lib/
  track.ts            # trackConversion() stub
```

- Split into multiple components — **no single large `page.tsx`**.

---

## 7. Client vs Server Components

| Component | Type | Reason |
|-----------|------|--------|
| `site-header` | Client | Scroll listener for hide-on-scroll |
| `faq` | Client | Accordion open/close state |
| `cta-button` | Client | onClick conversion tracking |
| All others | Server | Static content |

---

## 8. Build Order (Execution Roadmap)

1. Configure design tokens in `globals.css` + fonts in `layout.tsx` (set `bg-background` on `<html>`).
2. Add shadcn components (Button already present; add Accordion, Card).
3. Generate AgroCares Scanner F images.
4. Build shared `cta-button.tsx` + `track.ts`.
5. Build sections top-to-bottom: header → hero → value grid → box contents → pricing → FAQ → closing CTA → footer.
6. Compose in `page.tsx`.
7. Verify desktop layout in browser; check sticky-header scroll behavior, accordion, CTA tracking logs.

---

## 9. Out of Scope (explicitly excluded)

- Mobile-first optimization (desktop is the priority for now).
- Social proof / testimonials.
- Guarantee banner.
- Footer email capture.
- Payment method logos/badges.
- SEO metadata / Open Graph / schema.
- Any backend, API, or real checkout integration.
