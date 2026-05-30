# Branch Structure

## main branch — site-critical files only

These files are required to build and run the site. Only these belong on `main`.

### Root config
| File | Purpose |
|------|---------|
| `astro.config.mjs` | Astro framework configuration |
| `package.json` | Project dependencies and scripts |
| `package-lock.json` | Locked dependency versions |
| `tsconfig.json` | TypeScript compiler options |
| `.gitignore` | Git ignore rules |

### src/
| Path | Purpose |
|------|---------|
| `src/pages/index.astro` | Main landing page entry point |
| `src/components/Header.tsx` | Site header / navigation |
| `src/components/Hero.tsx` | Hero section |
| `src/components/ServicesSection.tsx` | Services section |
| `src/components/ProblemSolution.tsx` | Problem / solution section |
| `src/components/ProcessSteps.tsx` | Process steps section |
| `src/components/StatsTestimonials.tsx` | Stats and testimonials section |
| `src/components/CTASection.tsx` | Call-to-action section |
| `src/components/FAQSection.tsx` | FAQ section |
| `src/styles/global.css` | Global styles |
| `src/lib/motion.ts` | Animation utility library |

---

## dev branch — working files (stay off main)

These files are planning documents, tool configs, and design references. They live on `dev` and are **not** merged into `main`.

| File / Folder | Purpose |
|---------------|---------|
| `animation.md` | Animation design notes and specs |
| `content.md` | Copywriting and content drafts |
| `PROJECT.md` | Project overview and planning |
| `skills-lock.json` | Agent skills configuration |
| `.agents/` | Agent tool configs |
| `.claude/` | Claude Code settings and memory |
| `.antigravitycli/` | Antigravity CLI config |

---

## Merge rule

When merging `dev` → `main`, only bring across files listed in the **main branch** table above. All other files remain on `dev` only.
