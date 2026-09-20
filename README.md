# Rishikesh — Portfolio

Personal portfolio of **Rishikesh Prasad**, Backend Engineer · AI/ML Developer.

A fast, static, content-driven site. Everything lives on a single page with seven anchored
sections — Home, About, Experience, Projects, Skills, Achievements, Contact — and each project
keeps a separate case study page for technical depth.

The old section URLs (`/about`, `/experience`, `/projects`, `/contact`) redirect to their
anchors, so existing links keep working.

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
├── .github/workflows/deploy.yml                GitHub Pages deployment
├── astro.config.mjs                            site URL, redirects, integrations
├── netlify.toml                                Netlify build settings
├── public/                                     favicon, social image, CNAME, .nojekyll
│                                               (add resume.pdf here)
├── scripts/
│   ├── generate-og.mjs                         builds og.png + PNG favicons
│   └── audit-dist.mjs                          post-build HTML audit
└── src/
    ├── config/
    │   ├── site.ts                             ★ name, links, nav anchors, hero copy
    │   ├── about.ts                            ★ About section copy
    │   ├── skills.ts                           ★ skill groups
    │   ├── achievements.ts                     ★ achievements and community work
    │   └── categories.ts                       project categories
    ├── content/
    │   ├── projects/                           ★ one Markdown file per project
    │   └── experience/                         ★ one Markdown file per timeline entry
    ├── content.config.ts                       content schemas (typed frontmatter)
    ├── components/
    │   ├── layout/                             Navbar, Footer, Seo
    │   ├── ui/                                 Button, Tag, Icon, ThemeToggle, SocialLinks, …
    │   ├── projects/                           ProjectCard, ProjectPager
    │   └── sections/                           Section (shared shell), Hero, AboutSection,
    │                                           ExperienceSection, ProjectsSection,
    │                                           SkillsSection, AchievementsSection,
    │                                           ContactSection, Timeline, ProfileCard
    ├── layouts/                                BaseLayout, ProjectLayout (case study template)
    ├── pages/                                  / (the whole site), /projects/[slug],
    │                                           404, robots.txt
    ├── styles/global.css                       design tokens, type scale, prose styles
    └── utils/                                  URL helpers (base-path aware), content queries
```

Files marked ★ are the ones you edit to change content. Presentation lives elsewhere.

## Updating personal details

Everything personal is in **`src/config/site.ts`**:

- `links.email` — your contact address.
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

The project then appears in the Projects section under its category heading, and in the
previous/next navigation on case studies — no UI changes needed. To add a new category, edit
`src/config/categories.ts`.

Three optional frontmatter fields drive the extra detail on each card: `problem`, `features`
(a list) and `contribution`. Leave one out and that block is simply not rendered.

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

## Site URL and base path

Both are set directly in `astro.config.mjs`:

```js
site: 'https://rishixcodes.me',
base: '/',
```

They are **not** read from environment variables. Injecting a `BASE_PATH` from CI was what
previously produced `/portfolio/_astro/…` asset URLs and 404s on the custom domain — change
them here instead. There are no secrets and no required environment variables.

All internal links go through `href()` in `src/utils/url.ts`, so changing `base` is enough to
move the site to a sub-path.

## Deployment

The build output is plain static files in `dist/`.

### GitHub Pages (current setup)

1. _Settings → Pages_ → **Source: GitHub Actions**.
2. `.github/workflows/deploy.yml` builds and deploys on every push to `main`. It is the only
   deployment workflow — a second, competing one was removed because two workflows publishing
   to Pages on the same push race each other.
3. `public/CNAME` (`rishixcodes.me`) and `public/.nojekyll` are copied into `dist/` by the
   build, so the artifact carries its own domain and keeps Jekyll from stripping `_astro/`.
   Keep them in `public/` — at the repository root they never reach the deployed output.

### Vercel

Import the repository — Vercel detects Astro automatically (build `npm run build`, output
`dist`). Update `site` in `astro.config.mjs` if the origin changes.

### Netlify

Import the repository. `netlify.toml` already sets the build command and publish directory.

## Contact form

V1 deliberately uses email and profile links rather than a form, so nothing can silently fail.
To add a form later, use a hosted provider (Formspree, Netlify Forms, Web3Forms): post to the
provider's endpoint, keep any keys out of the repository, add a honeypot field, and only show a
success message after the provider confirms delivery.

## Accessibility and performance notes

- Semantic landmarks, one `<h1>` per page, skip link, visible focus states
- Colour contrast of all text/background token pairs is at least 5.1:1 (WCAG AA)
- Mobile menu is a disclosure with `aria-expanded`, closes on `Escape` and returns focus
- The nav scroll-spy sets `aria-current="location"` on the section in view; without
  JavaScript every anchor link still works and nothing is hidden
- `prefers-reduced-motion` disables all animation
- Theme follows the system preference until the visitor chooses one (stored in `localStorage`)
- Fonts are self-hosted; pages ship no framework JavaScript
