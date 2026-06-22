# cs-microsite

## About
account: personal

Microsite for Countless Skies (countlessskies.com). Static HTML/CSS/JS site with SCSS, hosted on GitHub Pages.

## Plans
Plans live in `.claude/plans/`. Check `.claude/plans/index.md` for the active plan and only load that file into context — don't load all plan files.

## Documentation
If anything during the session seems worth documenting, note it mentally and surface it at /end-session. Don't write to the doc queue mid-session or flag it in responses.

## Project-specific rules
- SCSS source lives in `sass/` — compile with `npm run dev` (node-sass watch)
- Compiled CSS goes to `css/style.css` — never edit this directly
- Single-page site: all content is in `index.html`

## Key files
- `index.html` — entire site
- `sass/main.scss` — SCSS entry point
- `js/` — JavaScript
- `img/` — Images
