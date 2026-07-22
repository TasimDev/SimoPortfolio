# SIMO Portfolio — project rules

## Product and brand
- Brand: **SIMO | Digital Craftsman**; “Digital Craftsman” is never translated.
- Purpose: a bilingual portfolio that presents services and work, builds trust, and converts Bulgarian and international prospects into enquiries.
- Audience: startups, SMEs, online shops, specialists/personal brands, and companies needing a new website, redesign, or support.
- Core services: business websites, e-commerce, landing pages, custom/WordPress/Shopify/CloudCart development, UI/UX, SEO, maintenance, and digital marketing.
- Never invent contacts, addresses, prices, testimonials, results, experience, or client claims. Keep missing data as TODOs in config/content and hide it in UI.

## Visual system
- Light, minimal, technical, confident, and human; large type, strong contrast, generous space, fine borders, soft shadows, restrained grid details.
- Tokens live in `src/styles/tokens.css`: white background, warm gray surface, near-black foreground, muted gray, lime `#bfff63`, green `#22c55e`.
- Heading font: Roboto Condensed via `next/font`; body/UI: Manrope via `next/font`, both with Cyrillic support.
- Use green only for CTAs, status, active/focus and small details. No generic SaaS gradients, heavy glow, emoji icons, stock people, or arbitrary colors/radii.

## Architecture and content
- Next.js App Router, TypeScript strict, Tailwind CSS, ESLint, `src/`, alias `@/*`; Server Components by default.
- Locale routes are `/bg` and `/en`; Bulgarian is default and `/` redirects to `/bg`. Route names stay identical across locales.
- UI/section/SEO/a11y strings live in typed dictionaries under `src/i18n/dictionaries`; Bulgarian defines `Dictionary`, English must `satisfies Dictionary`.
- Reusable records live in `src/content`; technical settings and confirmed contact data live in `site.ts`. IDs/slugs are stable English keys.
- Never hardcode user-visible copy in JSX and never put JSX/components in content files.
- Pages compose sections; layout, section, UI, SEO, i18n, content, and library concerns stay separate.

## UX, responsive, accessibility, motion
- Mobile-first; verify 320, 375, 768, 1024, 1440, and 1920 px. No horizontal overflow, clipped text, overlap, or undersized controls.
- Semantic landmarks/headings, one H1, skip link, keyboard navigation, visible focus, localized aria labels, and at least 44×44 px critical controls.
- Mobile navigation traps/restores focus, closes on Escape, exposes `aria-expanded`/`aria-controls`, and locks body scroll.
- Header behavior is permanent: touch/tablet uses a fixed Instagram-style bottom dock with icon-only primary navigation, a solid white background, thin gray border, and a compact utility popover for phone and BG/EN; there is no mobile top header or drawer. Desktop (`min-width: 1024px`, hover + fine pointer) starts as a centered horizontal pill, switches with 100px/50px hysteresis to one left-centered logo, and reveals a vertical icon capsule on hover, focus, or click. The closed compact logo has no surrounding background, border, padding, or shadow. Click pins it; Escape, outside click, selection, or a 220ms region leave closes it. Hidden links are conditionally unmounted/inert, tooltips appear on hover/focus, and navigation records come only from `src/content/navigation.ts`.
- The confirmed phone action is centralized as `phoneDisplay`/`phoneHref` in `siteConfig` and appears as a phone icon in desktop navigation and as an accessible action in the mobile drawer.
- The primary Header shows only the confirmed circular logo mark (no adjacent “SIMO” wordmark). BG/EN are independent circular controls. Only the current page/section receives a black pill with white text; Contact is never permanently highlighted.
- Motion uses centralized duration/easing tokens (`--duration-fast/base/slow`, `--ease-out`) and favors opacity/transform. Header capsule and mobile utility content remain mounted but `inert` during exit transitions so closing is smooth without exposing hidden focus targets. Avoid continuous pulse, conflicting inline transitions, and duplicated state styles; all motion is reduced under `prefers-reduced-motion`.

## SEO and performance
- Each locale has localized metadata, canonical, `bg-BG`/`en`/`x-default` alternates, Open Graph locale and localized structured data containing confirmed facts only.
- Maintain `robots.ts` and `sitemap.ts`; use optimized `next/image`, correct sizes, fixed dimensions, and priority only above the fold.
- Minimize client JavaScript; no avoidable dependencies, console errors, hydration mismatch, or layout shift.

## Required checks and current stage
- After changes run `npm run lint`, `npm run check-types`, and `npm run build`; manually smoke-test both locale routes, language switching, navigation, keyboard/focus, responsive overflow, metadata, and reduced motion.
- Current stage: **Stage 1 — architecture, i18n, content models, tokens, Header, language/mobile navigation, Hero, and baseline SEO.** Do not implement later homepage sections before Header/Hero approval.
- A localized `NavigationDemo` section is intentionally mounted after Hero as a scroll-testing surface for the compact Header; it is demonstrative content, not an approved Stage 2 section.
- Permanent decisions: custom CSS architecture backed by tokens; Lucide is the sole navigation icon library; confirmed light/dark-surface SIMO marks live under `public/images/brand/` and crossfade automatically based on the surface beneath the compact desktop logo. The closed compact state has no outer white capsule, and the brand mark does not navigate to Home; it only expands compact navigation. The original local abstract portrait placeholder remains until a real portrait is supplied.

<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know
This version has breaking changes. Read relevant guidance in `node_modules/next/dist/docs/` before using unfamiliar Next.js APIs.
<!-- END:nextjs-agent-rules -->
