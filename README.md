# SIMO | Digital Craftsman

Bilingual, responsive portfolio built with Next.js App Router, TypeScript, React 19, localized content and SEO. It includes the complete homepage, project index and case studies, contact form, privacy page, sitemap and responsive desktop/mobile navigation.

## Run locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000` (redirects to `/bg`). Production checks: `npm run lint`, `npm run check-types`, `npm run build`, then `npm start`.

## Contact form delivery

Copy `.env.example` to `.env.local` and set `RESEND_API_KEY`, `CONTACT_FROM_EMAIL`, and `CONTACT_TO_EMAIL`. The sender must use a domain verified in Resend. The form deliberately returns an unavailable-service error until all three values are configured, so enquiries are never silently discarded.

The confirmed production origin is `https://tasimtasimov.com`. Keep `NEXT_PUBLIC_SITE_URL` set to that HTTPS origin without a trailing slash so canonical URLs remain stable in every deployment environment.

## Structure and editing

- `src/app/[locale]`: locale layouts/pages and metadata
- `src/components`: layout, section, and UI components
- `src/i18n/dictionaries`: interface, section, a11y, and SEO copy
- `src/content`: reusable records and central site configuration
- `src/styles/tokens.css`: visual design tokens

To add a translation, add the Bulgarian key first; TypeScript then requires the same English key. To add a service or project, create a stable, language-independent record in its content file with both localized values. Contact and production URL changes belong in `src/content/site.ts` (`NEXT_PUBLIC_SITE_URL` may provide the URL). SEO copy belongs in each dictionary’s `metadata` object.

For a new locale, extend `locales`, add a dictionary/loader, provide localized content values, metadata alternates, sitemap entries, and language switcher support.

## Launch checklist

- Set the four values from `.env.example` in the hosting environment.
- Verify the sending domain in Resend and submit one real BG and EN enquiry.
- Confirm that the custom domain resolves over HTTPS, then inspect `/robots.txt` and `/sitemap.xml`.
- Run `npm run lint && npm run check-types && npm run build` before deployment.
