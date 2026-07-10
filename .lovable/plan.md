# NES Automation — Premium Website Plan

Rebuild the current single-page dashboard into a full multi-page luxury business site for NES Automation.

## Brand system

- Upload the provided logo via `lovable-assets` → `src/assets/nes-logo.png.asset.json`; use across navbar, footer, favicon meta.
- Palette: deep obsidian black `#0A0A0A`, graphite `#141414`, glass white overlays, and NES signature **crimson red** `#B01C1C` / glow `#E23B3B` (pulled from the logo) as the single accent. Replace current amber `--lume` token.
- Typography: Outfit (display), Plus Jakarta Sans (headings/UI), Inter (body). Loaded via `<link>` in `__root.tsx` head.
- Global tokens in `src/styles.css`: gradients (`--gradient-crimson`, `--gradient-obsidian`), glass surfaces, elegant shadows, glow ring.

## Routes (TanStack file-based)

```
src/routes/
  __root.tsx         → Navbar + floating actions + Footer shell, HeadContent, global SEO defaults
  index.tsx          → Home
  about.tsx          → About
  services.tsx       → Services
  projects.tsx       → Projects (with filter state via search params)
  brands.tsx         → Brands
  faq.tsx            → FAQ
  contact.tsx        → Contact
```

Each leaf route defines its own `head()` (title, description, og:title, og:description, canonical, og:url). Root only holds sitewide defaults.

## Shared components (`src/components/`)

- `layout/Navbar.tsx` — transparent → blurred on scroll, sticky, animated underline, mobile drawer, "Get Free Consultation" CTA.
- `layout/Footer.tsx` — luxury dark footer with logo, links, services, newsletter, socials, legal.
- `layout/FloatingActions.tsx` — WhatsApp, Call, Live Chat, Scroll-to-top (fixed, staggered).
- `sections/Hero.tsx` — cinematic hero with animated gradient orbs, floating device chips, headline, dual CTA, stats row (animated counters).
- `sections/WhyChooseUs.tsx` — 6 feature cards with hover glow.
- `sections/BrandsMarquee.tsx` — infinite CSS marquee of brand wordmarks.
- `sections/Testimonials.tsx` — glassmorphism carousel with 5-star ratings.
- `sections/FAQAccordion.tsx` — shadcn Accordion styled premium.
- `ui/AnimatedCounter.tsx`, `ui/GlowButton.tsx`, `ui/GlassCard.tsx`, `ui/SectionHeading.tsx`, `ui/Reveal.tsx` (framer-motion fade/slide/blur on scroll).

## Page compositions

- **Home**: Hero → Services preview grid (6 tiles) → Why Choose NES → Featured Projects (3) → Brands marquee → Testimonials → CTA band → FAQ preview.
- **About**: Story, mission/vision/values trio, timeline (vertical), founder message with portrait, awards & certifications logo grid.
- **Services**: 20 services grouped (Automation, Security, AV & Networking, Verticals) as animated cards with icon, description, benefit bullets, "Enquire" CTA.
- **Projects**: Filter chips (All/Homes/Villas/Apartments/Hotels/Commercial/Office), masonry-style luxury grid, click opens dialog with gallery + services used.
- **Brands**: Full grid + marquee.
- **FAQ**: Full accordion, grouped categories.
- **Contact**: Split layout — form (Name, Phone, Email, City, Service select, Message) with react-hook-form + zod + toast; right side info card (address, phone, email, hours), embedded Google Map iframe.

## Animations

Install `framer-motion`. Reveal wrapper for fade-up / scale / blur. Marquee via Tailwind keyframes. Counters via `useInView` + `motion.value`. Button hover uses gradient sheen. Respect `prefers-reduced-motion`.

## Images

Generate 6–8 luxury dark interior/tech images via imagegen (hero background, project thumbnails, founder portrait placeholder). Store under `src/assets/`.

## SEO

Per-route `head()` with unique title/description/og tags. Root JSON-LD Organization schema (name: NES Automation, tagline, logo URL). Semantic HTML, alt text, lazy `loading="lazy"` on images, `public/robots.txt` allowing all, `public/sitemap.xml` with relative-path base placeholder.

## Technical notes

- Keep stack: TanStack Start + Tailwind v4 + shadcn. No React Router install (already TanStack). No Swiper — use CSS marquee + framer for carousel to keep bundle lean.
- Add packages: `framer-motion`, `react-hook-form`, `zod`, `@hookform/resolvers`, `react-icons`.
- Contact form is client-only (toast on submit) unless the user later wants email delivery via Lovable Cloud.
- WhatsApp/Call use placeholder `tel:` / `wa.me/` links the user can swap.

## Out of scope (ask later)

- Real backend for form submissions / newsletter (would need Lovable Cloud).
- Real project photography (using generated placeholders).
- Actual brand logo files (rendered as styled wordmarks to avoid trademark asset hosting).
