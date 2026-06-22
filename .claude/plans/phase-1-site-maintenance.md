# Phase 1 — Site maintenance / Astro rebuild

**Status:** active
**Goal:** Ongoing content updates for Countless Skies releases + full Astro rebuild

## Tasks

- [x] Project init (.claude/, CLAUDE.md, docs/, .gitignore, pre-commit hook, git identity)
- [x] Full codebase audit
- [x] Phase 0 hotfix: New Dawn 10th anniversary rerelease announcement
  - [x] Hero announcement section
  - [x] New Dawn album section (bg #7F4E85)
  - [x] Fixed `her-Heading--noUnderline` CSS (was undefined)
  - [x] Added `alt` to band photo img
  - [x] Updated footer year 2024 → 2026
- [ ] Commit hotfix files (index.html, css/style.css, .gitignore, .claude/, CLAUDE.md, docs/, .claudeignore)
- [ ] Create branch `rebuild/astro`
- [ ] Scaffold Astro 5 + Tailwind v4 + Tina CMS (see detailed plan)
- [ ] Add New Dawn Bandcamp embed once ID available (goes live 24 Jun 2026)
- [ ] Set up Mailchimp account + wire into MailingList component

## Decisions

- Rebuild stack: Astro 5 + Tailwind v4 + Tina CMS + Vercel (approved)
- Tina CMS from day 1 (not deferred to phase 2)
- 3 release sections: Resonance (2023), Glow (2020), New Dawn (2016) — no EP section
- New Dawn bg: #7F4E85 (purple, $color-secondary)
- New Dawn Bandcamp ID: TBD — new page for 10th anniversary rerelease
- Mailchimp: placeholder component in build, wire up once account created
- Same repo, deploy to Vercel (replaces GitHub Pages)

## Notes

Detailed rebuild plan: ~/.claude-personal/plans/snoopy-doodling-swing.md

New Dawn 10th anniversary rerelease: 24 June 2026. Once Bandcamp ID available,
add embed to New Dawn section (replace plain link with iframe embed).
