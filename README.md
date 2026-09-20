# Rishikesh — Portfolio

Personal portfolio of **Rishikesh Prasad**, Backend Engineer | AI/ML Builder.
Live at <https://rishixcodes.me>.

A fast, static, single-page site. Everything lives on the home page in one narrow centred
column: Hero, Experience, Projects, Skills & Technologies, Highlights and Contact. The only
navigation is the desktop side index; on mobile the column fills the screen and sections are
reached by scrolling. Projects are simple cards — there are no case-study pages.

Old URLs (`/about`, `/experience`, `/projects`, `/projects/<slug>`, `/skills`, `/achievements`,
`/contact`) redirect to the home page or the matching section, so existing links keep working.

## Tech stack

| Area      | Choice                                                                       |
| --------- | ---------------------------------------------------------------------------- |
| Framework | [Astro](https://astro.build) (static output, no JS framework)                |
| Language  | TypeScript (strict)                                                          |
| Styling   | Tailwind CSS v4 + a small token layer in `src/styles/global.css`             |
| Content   | Plain typed data files in `src/config/`                                      |
| Fonts     | Geist and Geist Mono — self-hosted, no CDN                                   |
| Icons     | Inline SVG (Lucide paths) via `src/components/ui/Icon.astro`                 |
| SEO       | Canonical URLs, Open Graph/Twitter tags, sitemap, `robots.txt`, social image |
| Tooling   | ESLint, Prettier, `astro check`, a post-build HTML audit                     |
| Client JS | Three small scripts: theme toggle, side-index scroll-spy, banner clock       |

No analytics, no trackers, no backend.

## Local setup

Requires **Node.js 20.3+** (22 recommended).

```bash
npm install
npm run dev
```

The site runs at <http://localhost:4321>.

## Commands

| Command                | What it does                                                          |
| ---------------------- | --------------------------------------------------------------------- |
| `npm run dev`          | Start the dev server                                                  |
| `npm run build`        | Production build into `dist/`                                         |
| `npm run preview`      | Serve the production build locally                                    |
| `npm run check`        | Type-check `.astro` and `.ts` files                                   |
| `npm run lint`         | ESLint (including accessibility rules for Astro templates)            |
| `npm run format`       | Format everything with Prettier                                       |
| `npm run format:check` | Check formatting without writing                                      |
| `npm run audit`        | Audit `dist/` — headings, landmarks, alt text, meta tags, links       |
| `npm run verify`       | format check → lint → type check → build → audit (run before deploy)  |
| `npm run og`           | Regenerate `public/og.png` and the PNG favicons                       |
| `npm run banner -- X`  | Turn image `X` into the two hero-banner WebP files in `public/images` |

## Project structure

```text
├── .github/workflows/deploy.yml     GitHub Pages deployment
├── astro.config.mjs                 site URL, redirects, integrations
├── archive/                         retired content and components, not built (safe to delete)
├── public/                          favicon, social image, CNAME, .nojekyll
│   └── images/hero-banner*.webp     the hero banner (add avatar.png and resume.pdf here too)
├── scripts/
│   ├── generate-og.mjs              builds og.png + PNG favicons
│   ├── prepare-banner.mjs           converts any image into the hero banner WebP files
│   └── audit-dist.mjs               post-build HTML audit
└── src/
    ├── config/                      ★ everything you edit
    │   ├── site.ts                  name, role, links, side index, hero copy
    │   ├── experience.ts            experience entries
    │   ├── projects.ts              project cards
    │   ├── skills.ts                skill groups
    │   ├── achievements.ts          highlights
    │   └── categories.ts            project categories
    ├── components/
    │   ├── layout/                  SideIndex (desktop index + scroll-spy), Footer, Seo
    │   ├── ui/                      Button, Tag, TagList, Icon, ThemeToggle, SectionHeading
    │   ├── projects/ProjectCard     one project card
    │   └── sections/                Section (shared shell), Hero, HeroBanner (banner + live
    │                                clock), Experience, Projects, Skills, Highlights, Contact
    ├── layouts/BaseLayout.astro     page shell: fonts, theme script, column edge lines
    ├── pages/                       index (the whole site), 404, robots.txt
    ├── styles/global.css            design tokens, dotted rules, column width
    └── utils/                       URL helpers (base-path aware), TODO-link helpers
```

## Updating content

Everything personal is in **`src/config/`**. Presentation lives in components; you should not
need to touch them.

### Links and the `TODO` placeholder

Any link field accepts three kinds of value:

| Value       | Rendered as                                        |
| ----------- | -------------------------------------------------- |
| a URL       | a normal link                                      |
| `'TODO'`    | a visible, disabled, non-clickable placeholder     |
| `''`/absent | nothing (the button or row is not rendered at all) |

So to add a link later, replace the word `TODO` with the URL. Nothing else changes.

### Personal details — `src/config/site.ts`

- `links.email`, `links.github` — set.
- `links.linkedin` — `TODO`. Add your profile URL.
- `links.resume` — `TODO`. Put `resume.pdf` in `public/` and set this to `'/resume.pdf'`.
- `site.avatar` — empty. Put a photo in `public/` and set this to `'/avatar.png'`.
- `site.banner` — the cinematic banner above the profile row. To change the image, run
  `npm run banner -- path/to/image.png`; it writes the two WebP files the config points at.
  Update `alt` to describe the new picture. Set `src` to `''` for a plain dot-grid strip.
- `site.clock` — the live clock in the banner corner (`timeZone` is any IANA id such as
  `'Asia/Kolkata'`, `label` is what visitors see; `show: false` hides it).
- `site.availability` — the status line in the hero (`show: false` hides it).
- `hero.tagline`, `hero.bullets` — home page copy. Background, current work and interests
  live here; there is no separate About section.
- `sideIndex` — the desktop index. `section` must match a section id.

### Projects — `src/config/projects.ts`

One object per card:

```ts
{
  id: 'my-project',
  title: 'My Project',
  description: 'One or two lines. That is the whole description — there are no project pages.',
  category: 'backend',            // backend | ai-ml | research | tools (see categories.ts)
  tech: ['Python', 'FastAPI'],
  status: 'live',                 // optional: live | building | planned
  github: 'https://github.com/you/my-project',   // or 'TODO', or omit
  demo: 'TODO',                   // or a URL, or omit if there will never be a live demo
}
```

Cards appear in array order. Each file has `TODO (Rishikesh)` comments next to the values
that still need confirming.

### Experience — `src/config/experience.ts`

One object per role, rendered as an expandable card (the first starts open): `organization`,
`role`, `start`, `end` (a date or `'Present'`), `location`, optional `description`,
`responsibilities`, `tech`, optional `metrics` (only verifiable numbers), optional `logo`
(a path inside `public/`; initials are shown without one) and optional `link`. Dates and
location are shown as `TODO` until you fill them in.

### Highlights — `src/config/achievements.ts`

`badge` (short label), `title`, `detail`, optional `period` and `link`.

### Skills — `src/config/skills.ts`

Groups of plain strings. No ratings, no percentages.

### GitHub

There is no GitHub section. The profile is linked from the hero socials, the Contact list,
the "All repositories" button on the Projects heading and each project card.

After changing your name or role, run `npm run og` to regenerate the social preview image.

## Site URL and base path

Both are set directly in `astro.config.mjs`:

```js
site: 'https://rishixcodes.me',
base: '/',
```

They are **not** read from environment variables. Injecting a `BASE_PATH` from CI was what
previously produced `/portfolio/_astro/…` asset URLs and CSS 404s on the custom domain — change
them here instead. All internal links go through `href()` in `src/utils/url.ts`, so changing
`base` is enough to move the site to a sub-path.

## Deployment

The build output is plain static files in `dist/`.

### GitHub Pages (current setup)

1. _Settings → Pages_ → **Source: GitHub Actions**.
2. `.github/workflows/deploy.yml` builds and deploys on every push to `main` (Node 22, `npm ci`,
   `npm run build`, `upload-pages-artifact`, `deploy-pages`). It is the only deployment
   workflow.
3. `public/CNAME` (`rishixcodes.me`) and `public/.nojekyll` are copied into `dist/` by the
   build, so the artifact carries its own domain and keeps Jekyll from stripping `_astro/`.
   Keep them in `public/`.

Before pushing, run `npm run verify`.

### Netlify / Vercel

Both detect Astro automatically (build `npm run build`, output `dist`). `netlify.toml` is
already present.

## Accessibility and performance notes

- Semantic landmarks, one `<h1>` per page, skip link, visible focus states
- Placeholder links are `aria-disabled` spans, never anchors, so nothing dead is clickable
- The side-index scroll-spy sets `aria-current="location"` on the section in view; without
  JavaScript every anchor link still works
- `prefers-reduced-motion` disables all animation
- Theme follows the system preference until the visitor chooses one (stored in `localStorage`)
- Fonts are self-hosted; pages ship no framework JavaScript
