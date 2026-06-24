# Doc Queue

## Tailwind v4 font variable naming conflict

Avoid naming `@theme` font variables `--font-display` — it conflicts with the CSS `font-display` property (used in `@font-face`). Tailwind v4 generates a `font-display` utility class which can cause unexpected behaviour. Use a distinct name like `--font-heading` instead.
