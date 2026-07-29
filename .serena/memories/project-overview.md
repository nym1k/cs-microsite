# cs-microsite

## Identity
- Account: personal
- Git email: sleeping.stars@gmail.com
- Remote: git@github.com:nym1k/cs-microsite.git
- Hosted: GitHub Pages → migrating to Vercel

## Project
Microsite for Countless Skies (www.countlessskies.com). Static single-page site. Full Astro rebuild in progress on branch `rebuild/astro`.

## Current stack (legacy, being replaced)
- HTML — single page (index.html)
- SCSS → CSS via node-sass (broken — node-sass deprecated)
- Vanilla JS + jQuery 3.3.1 (dead Flickity carousel)
- GitHub Pages with custom domain (CNAME)

## Rebuild stack (approved, in progress)
- Astro 7 (static output)
- Tailwind v4 (via @tailwindcss/vite)
- Tina CMS (from day 1, free tier, git-based)
- Vercel (replaces GitHub Pages, needed for Tina auth)

## Rebuild plan
Detailed plan at: ~/.claude-personal/plans/snoopy-doodling-swing.md

Phases:
- Phase 0 ✅ New Dawn hotfix on current site (DONE — committed and pushed to master)
- Phase 1 ✅ Scaffold Astro 7 + Tailwind v4 + Tina CMS on branch `rebuild/astro`
- Phase 2 ✅ Content files (config.json, bio.md, releases/*.md)
- Phase 3 🔄 Components (in progress — all built, but text rendering issue outstanding)
- Phase 4: Styling in Tailwind v4
- Phase 5 ✅ Tina CMS config scaffolded (tina/config.ts with 3 collections)
- Phase 6: Migration & DNS cutover
- Phase 7: New features (mailing list placeholder, SEO)

## Content structure
3 release sections (newest first):
1. New Dawn (2016, rereleased 24 Jun 2026) — bg #7F4E85, accent #c3afef, bandcamp albumId 3827723963, order 1
2. Glow (2020) — bg #AF553B, accent #ffffcc, bandcamp albumId 4153837190, order 2
3. Resonance (2023) — bg #264949, accent #c3afef, bandcamp albumId 4255075137, pkgId 295622290, order 3

## Key decisions
- Tina CMS from day 1 (not phase 2)
- Same repo, Vercel deployment
- New Dawn Bandcamp embed now live (albumId 3827723963)
- Mailchimp: no account yet — placeholder only
- Favicon: TBD
- New Dawn section colour: #7F4E85 (purple)
- Social bar: Twitter/X removed

## Phase 0 hotfix applied and committed (24 Jun 2026)
- New Dawn cover art (img/newdawn-cover.jpg) and hero bg (img/newdawn-hero.jpg)
- New Dawn album section with Bandcamp embed
- Section reorder: New Dawn → Glow → Resonance → Bio
- Bandcamp URL updated to specific album page
- Resonance/Glow links removed from hero
- Committed and pushed to master

## Rebuild branch state (rebuild/astro)
### Scaffold
- Astro 7 installed (NOT v5 as originally planned — v7 was latest)
- `tina/config.ts` — 3 collections: config, releases, bio
- `content/config.json`, `content/bio.md`, `content/releases/{new-dawn,glow,resonance}.md`
- TinaCMS datalayer port changed to 9001 (port 9000 conflicts with PHP-FPM)
- `npm run dev` = `tinacms dev --datalayer-port 9001 -c "astro dev"`
- `npm run build` needs TINA_CLIENT_ID + TINA_TOKEN env vars (Vercel setup pending)

### Components built
- `src/layouts/Base.astro` — GTM, FB Pixel, fonts, OG, canonical
- `src/components/LoadingScreen.astro`
- `src/components/Hero.astro` — logo, YouTube embed, CTA buttons, shop links
- `src/components/SocialBar.astro` — fixed bottom-right desktop, inline mobile; FB/Instagram/YouTube only
- `src/components/ReleaseSection.astro` — Bandcamp embed + body text via Content component
- `src/components/BioSection.astro` — photo + body text via Content component
- `src/components/TourSection.astro` — Songkick widget
- `src/components/MailingList.astro` — placeholder (no Mailchimp URL yet)
- `src/components/Footer.astro` — contact, press, credit

### Known issue — OUTSTANDING
**Markdown body text has encoding issues** — curly quotes (', ", ") rendering as â€™, â€œ, â€ etc.
- Tried: switching from `compiledContent()` to `Content` component (default export from glob)
- Tried: replacing curly quotes with ASCII equivalents in markdown files via Python script
- Still broken as of end of session
- Root cause not yet confirmed — may be a Tailwind v4 / Astro 7 rendering pipeline issue, or charset header issue, or something with how `import.meta.glob` handles markdown in Astro 7
- Next step: inspect the actual compiled HTML in `dist/` to see what Astro is outputting vs what the browser receives

### Styling decisions
- Content max-width: Hero 1200px, sections 1050px
- YouTube embed: full-width within container, max 80% on xl screens, padding-top 30px + 56.25% ratio
- Button style: exact match to original (white bg, #333 border/text, yellow hover #fcd240, asymmetric padding 5px 8px 8px 13px, Marcellus SC)
- Theme: `--font-heading` (Marcellus SC), `--font-body` (Marcellus) — NOTE: avoid `--font-display` as it conflicts with CSS font-display property in Tailwind v4
- Body: 16px / 1.6 line-height
- Album sections: py-20, items-center on flex row

## Structure
- `index.html` — legacy site (master branch)
- `src/` — Astro components (rebuild/astro branch)
- `content/` — CMS content files
- `tina/` — TinaCMS config
- `sass/` — old SCSS (being replaced)
- `img/` — images (will move to public/img/ in Phase 6)
