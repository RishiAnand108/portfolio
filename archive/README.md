# Archive

Files that are no longer rendered by the site, kept for reference. Nothing in
this folder is imported by the build, type-checked, linted or formatted.
Delete it whenever you are sure you no longer need it.

- `content/projects/` — the former per-project Markdown files. Projects are now
  homepage cards driven by `src/config/projects.ts`; there are no case-study pages.
- `content/experience/` — the former experience Markdown. Now `src/config/experience.ts`.
- `config/about.ts` — copy for the former About section, folded into the hero bullets.
- `components/sections/AboutSection.astro` — the former About section.
- `components/sections/GithubSection.astro` — the former GitHub activity card. GitHub is
  now linked from the hero socials, the Contact list and the project cards.
- `components/layout/Navbar.astro` — the former top pill navigation. The desktop side
  index (`src/components/layout/SideIndex.astro`) is now the only navigation.
