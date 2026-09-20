# RishiAnand108.github.io
# Rishikesh — Portfolio

Personal portfolio of **Rishikesh**, Backend Engineer · AI/ML Builder.

A fast, static, content-driven site: the homepage introduces the person, the Projects page
showcases the work, and each project has a case study page for technical depth.

## Tech stack

| Area      | Choice                                                                       |
| --------- | ---------------------------------------------------------------------------- |
| Framework | [Astro](https://astro.build) (static output, zero JS framework)              |
| Language  | TypeScript (strict)                                                          |
| Styling   | Tailwind CSS v4 + a small token layer in `src/styles/global.css`             |
| Content   | Astro Content Collections (Markdown) for projects and experience             |
| Fonts     | Instrument Serif (display), Geist (body), Geist Mono — self-hosted, no CDN   |
| Icons     | Inline SVG (Lucide paths) via `src/components/ui/Icon.astro`                 |
| SEO       | Canonical URLs, Open Graph/Twitter tags, sitemap, `robots.txt`, social image |
| Tooling   | ESLint, Prettier, `astro check`, a post-build HTML audit                     |
| Client JS | Three tiny inline scripts: theme toggle, mobile menu, project filter         |

No analytics, no trackers, no backend.

## Local setup

Requires **Node.js 20.3+** (22 recommended).

```bash
npm install
npm run dev
```

The site runs at <http://localhost:4321>.

## Commands

| Command                | What it does                                                         |
| ---------------------- | -------------------------------------------------------------------- |
| `npm run dev`          | Start the dev server                                                 |
| `npm run build`        | Production build into `dist/`                                        |
| `npm run preview`      | Serve the production build locally                                   |
| `npm run check`        | Type-check `.astro` and `.ts` files                                  |
| `npm run lint`         | ESLint (including accessibility rules for Astro templates)           |
| `npm run format`       | Format everything with Prettier                                      |
| `npm run format:check` | Check formatting without writing                                     |
| `npm run audit`        | Audit `dist/` — headings, landmarks, alt text, meta tags, links      |
| `npm run verify`       | format check → lint → type check → build → audit (run before deploy) |
| `npm run og`           | Regenerate `public/og.png` and the PNG favicons                      |

## Project structure

```text
├── .github/workflows/deploy-github-pages.yml   GitHub Pages deployment
├── astro.config.mjs                            site URL, base path, integrations
├── netlify.toml                                Netlify build settings
├── public/                                     favicon, social image (add resume.pdf here)
├── scripts/
│   ├── generate-og.mjs                         builds og.png + PNG favicons
│   └── audit-dist.mjs                          post-build HTML audit
└── src/
    ├── config/
    │   ├── site.ts                             ★ name, links, hero copy, homepage sections
    │   ├── about.ts                            ★ About page copy
    │   └── categories.ts                       project categories
    ├── content/
    │   ├── projects/                           ★ one Markdown file per project
    │   └── experience/                         ★ one Markdown file per timeline entry
    ├── content.config.ts                       content schemas (typed frontmatter)
    ├── components/
    │   ├── layout/                             Navbar, Footer, Seo
    │   ├── ui/                                 Button, Tag, Icon, ThemeToggle, SocialLinks, …
    │   ├── projects/                           ProjectList (filter), ProjectRow, ProjectPager
    │   └── sections/                           Hero, CurrentFocus, Timeline, ContactCta, …
    ├── layouts/                                BaseLayout, ProjectLayout (case study template)
    ├── pages/                                  /, /projects, /projects/[slug], /about,
    │                                           /experience, /contact, 404, robots.txt
    ├── styles/global.css                       design tokens, type scale, prose styles
    └── utils/                                  URL helpers (base-path aware), content queries
```

Files marked ★ are the ones you edit to change content. Presentation lives elsewhere.

## Updating personal details

Everything personal is in **`src/config/site.ts`**:

- `links.email` — **currently a placeholder (`hello@example.com`). Replace it.**
- `links.github` — set from the local git user name; change if needed.
- `links.linkedin` — empty. Add your profile URL.
- `links.resume` — empty. Put `resume.pdf` in `public/` and set this to `/resume.pdf`.
- `site.availability` — the status line in the hero (`show: false` hides it).
- `hero`, `profile`, `currentFocus`, `aboutPreview` — homepage copy.

**Any link left as an empty string is hidden everywhere** (navbar, hero, footer, contact page),
so the site never renders a broken link.

About page copy is in `src/config/about.ts`.

After changing your name or role, run `npm run og` to regenerate the social preview image.

## Adding a project

1. Copy `src/content/projects/_template.md` to `src/content/projects/my-project.md`.
   The file name becomes the URL: `/projects/my-project/`.
2. Fill in the frontmatter:

   ```yaml
   title: My Project
   category: backend # backend | ai-ml | research | tools
   summary: One sentence shown on the Projects page and in search results.
   tech: [Python, FastAPI, PostgreSQL]
   order: 5 # lower numbers are listed first
   draft: false # true shows a "work in progress" note on the case study
   github: https://github.com/you/my-project # optional
   demo: https://my-project.example.com # optional
   cover: ./images/my-project.png # optional, optimised automatically
   coverAlt: Describe the image
   ```

3. Write the case study in Markdown below the frontmatter. Every `##` heading automatically
   appears in the "On this page" sidebar. The template lists the recommended sections for
   backend and AI/ML projects.

The project then appears on `/projects`, in the right category filter, and in the
previous/next navigation — no UI changes needed. To add a new category, edit
`src/config/categories.ts`.

### Draft content

The four initial case studies and the experience entries are marked `draft: true` because
their details have not been verified. Drafts are shown with a visible "Draft" label rather than
being presented as finished fact. Each file contains a `TODO` comment listing what to fill in.

- Set `draft: false` in a file once its content is complete and accurate.
- Or set `showDraftContent: false` in `src/config/site.ts` to hide draft experience entries
  from the built site entirely.

## Adding an experience entry

Copy `src/content/experience/_template.md`, rename it without the underscore, and fill in
`role`, `organization`, `date`, `responsibilities`, `technologies` and `links`.
Use `order` to control position (lowest first).

## Environment variables

| Variable    | Required           | Purpose                                                                                                                       |
| ----------- | ------------------ | ----------------------------------------------------------------------------------------------------------------------------- |
| `SITE_URL`  | Yes, for deploys   | Public origin, e.g. `https://rishikesh.dev`. Used for canonical URLs, sitemap and OG tags. Defaults to `https://example.com`. |
| `BASE_PATH` | Only for sub-paths | e.g. `/portfolio` for a GitHub Pages project site. Defaults to `/`.                                                           |

There are no secrets. See `.env.example`.

> On Windows Git Bash, a value such as `/portfolio` is rewritten into a Windows path.
> Set `BASE_PATH` from PowerShell, or prefix the command with `MSYS_NO_PATHCONV=1`.

## Deployment

The build output is plain static files in `dist/`.

### Vercel

1. Import the repository — Vercel detects Astro automatically
   (build command `npm run build`, output `dist`).
2. Add the environment variable `SITE_URL` with your production URL.

### Netlify

1. Import the repository. `netlify.toml` already sets the build command and publish directory.
2. Add `SITE_URL` under _Site configuration → Environment variables_.

### GitHub Pages

1. Push to GitHub, then open _Settings → Pages_ and set **Source** to **GitHub Actions**.
2. The included workflow (`.github/workflows/deploy-github-pages.yml`) builds and deploys on
   every push to `main`. It sets `SITE_URL` and `BASE_PATH` from the repository name.
3. If the repository is named `<username>.github.io`, or you use a custom domain, remove the
   `BASE_PATH` line from the workflow and set `SITE_URL` to the real origin.

All internal links go through `href()` in `src/utils/url.ts`, so the site works from a sub-path.

## Contact form

V1 deliberately uses email and profile links rather than a form, so nothing can silently fail.
To add a form later, use a hosted provider (Formspree, Netlify Forms, Web3Forms): post to the
provider's endpoint, keep any keys out of the repository, add a honeypot field, and only show a
success message after the provider confirms delivery.

## Accessibility and performance notes

- Semantic landmarks, one `<h1>` per page, skip link, visible focus states
- Colour contrast of all text/background token pairs is at least 5.1:1 (WCAG AA)
- Mobile menu is a disclosure with `aria-expanded`, closes on `Escape` and returns focus
- Project filters use `aria-pressed` and announce results through a live region;
  without JavaScript, all projects are simply listed
- `prefers-reduced-motion` disables all animation
- Theme follows the system preference until the visitor chooses one (stored in `localStorage`)
- Fonts are self-hosted; pages ship no framework JavaScript
