import { defineConfig } from "tinacms";

export default defineConfig({
  branch: process.env.GITHUB_BRANCH || "rebuild/astro",
  clientId: process.env.TINA_CLIENT_ID || "",
  token: process.env.TINA_TOKEN || "",

  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },
  media: {
    tina: {
      mediaRoot: "",
      publicFolder: "public",
    },
  },

  schema: {
    collections: [
      // ── Site config ──────────────────────────────────────────────
      {
        name: "config",
        label: "Site Config",
        path: "content",
        match: { include: "config" },
        format: "json",
        ui: { allowedActions: { create: false, delete: false } },
        fields: [
          { type: "string", name: "siteTitle", label: "Site Title" },
          { type: "string", name: "siteDescription", label: "Description" },
          { type: "string", name: "canonicalUrl", label: "Canonical URL" },
          { type: "image", name: "ogImage", label: "OG Image" },
          { type: "string", name: "gtmId", label: "GTM ID" },
          { type: "string", name: "fbPixelId", label: "FB Pixel ID" },
          { type: "image", name: "heroLogoSrc", label: "Hero Logo" },
          { type: "image", name: "heroBgSrc", label: "Hero Background Image" },
          {
            type: "string",
            name: "heroVideoPlaylistUrl",
            label: "Hero Video Playlist URL",
          },
          {
            type: "object",
            name: "heroCtaButtons",
            label: "Hero CTA Buttons",
            list: true,
            fields: [
              { type: "string", name: "label", label: "Label" },
              { type: "string", name: "url", label: "URL" },
            ],
          },
          {
            type: "object",
            name: "heroShopLinks",
            label: "Hero Shop Links",
            list: true,
            fields: [
              { type: "string", name: "label", label: "Label" },
              { type: "string", name: "url", label: "URL" },
            ],
          },
          {
            type: "object",
            name: "social",
            label: "Social Links",
            fields: [
              { type: "string", name: "facebook", label: "Facebook" },
              { type: "string", name: "twitter", label: "Twitter / X" },
              { type: "string", name: "instagram", label: "Instagram" },
              { type: "string", name: "youtube", label: "YouTube" },
            ],
          },
          { type: "string", name: "contactEmail", label: "Contact Email" },
          { type: "string", name: "pressEmail", label: "Press Email" },
          {
            type: "string",
            name: "mailchimpFormUrl",
            label: "Mailchimp Form URL",
          },
          { type: "string", name: "footerCreditUrl", label: "Footer Credit URL" },
        ],
      },

      // ── Releases ─────────────────────────────────────────────────
      {
        name: "releases",
        label: "Releases",
        path: "content/releases",
        format: "md",
        defaultItem: () => ({ order: 99, formats: ["Digital"] }),
        fields: [
          { type: "string", name: "title", label: "Title", isTitle: true, required: true },
          { type: "number", name: "year", label: "Year" },
          { type: "string", name: "releaseDate", label: "Release Date (YYYY-MM-DD)" },
          { type: "string", name: "label", label: "Label" },
          {
            type: "string",
            name: "formats",
            label: "Formats",
            list: true,
          },
          { type: "image", name: "artwork", label: "Artwork" },
          { type: "string", name: "bandcampAlbumId", label: "Bandcamp Album ID" },
          { type: "string", name: "bandcampPackageId", label: "Bandcamp Package ID (optional)" },
          { type: "string", name: "backgroundColor", label: "Background Colour (hex)" },
          { type: "string", name: "accentColor", label: "Accent Colour (hex)" },
          { type: "number", name: "order", label: "Display Order (1 = top)" },
          {
            type: "rich-text",
            name: "body",
            label: "Description",
            isBody: true,
          },
        ],
      },

      // ── Bio ───────────────────────────────────────────────────────
      {
        name: "bio",
        label: "Bio",
        path: "content",
        match: { include: "bio" },
        format: "md",
        ui: { allowedActions: { create: false, delete: false } },
        fields: [
          { type: "image", name: "photo", label: "Band Photo" },
          { type: "string", name: "photoCredit", label: "Photo Credit" },
          { type: "string", name: "photoCreditUrl", label: "Photo Credit URL" },
          {
            type: "rich-text",
            name: "body",
            label: "Bio Text",
            isBody: true,
          },
        ],
      },
    ],
  },
});
