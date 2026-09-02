# jackiefasty.github.io

Personal portfolio of **Borja Javierre** — Senior Video Systems & Real-Time
Communications Engineer.

Live at **https://jackiefasty.github.io/**

## Stack

- [Next.js 16](https://nextjs.org) (App Router) with a fully static export
- TypeScript
- [Tailwind CSS v4](https://tailwindcss.com)
- Deployed to GitHub Pages by GitHub Actions

There is no animation library and no client-side data fetching. Entrance
animations are CSS-only (scroll-driven where supported), so content renders
without JavaScript and degrades cleanly under `prefers-reduced-motion`.

## Local development

```bash
npm install
npm run dev          # http://localhost:3000
```

Other scripts:

```bash
npm run build        # static export into out/
npm run typecheck    # tsc --noEmit
npm run lint         # eslint
npm run serve:out    # preview the built export
```

## Editing content

All copy lives in `src/content/`, separate from the components that render it.
Editing the site normally means editing one of these files and nothing else:

| File | Contents |
| --- | --- |
| `profile.ts` | Name, role, tagline, contact details, hero stats, nav items |
| `skills.ts` | Skill categories and their technologies |
| `experience.ts` | Roles, dates, achievement bullets, tech tags |
| `projects.ts` | Projects, including which are featured and which are archived |
| `education.ts` | Degrees and spoken languages |

The shapes of these objects are defined in `src/lib/types.ts`, so a mistake
shows up as a type error rather than a broken page.

The résumé PDF served at `/Borja_Javierre_CV.pdf` lives in `public/`.

## Structure

```
src/
  app/            layout, page, globals.css, icon, opengraph-image, sitemap, robots
  content/        all site copy (see above)
  lib/            types, theme, small hooks and helpers
  components/
    layout/       Header, MobileNav, Footer, ThemeToggle
    sections/     Hero, Stats, About, Skills, Experience, Projects, Contact
    experience/   TimelineItem
    projects/     ProjectCard, ProjectThumbnail, ProjectFilter, ProjectDialog
    skills/       SkillCategory
    ui/           SectionHeading, Reveal, Button, Badge, TechTag, StatCounter, Icon
```

## Deployment

Every push to `main` triggers `.github/workflows/deploy.yml`, which type
checks, lints, builds the static export and publishes `out/` to GitHub Pages.

The repository's **Settings → Pages → Source** must be set to
**GitHub Actions** (not "Deploy from a branch") for these deployments to go
live.
