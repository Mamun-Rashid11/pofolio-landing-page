# Pofolio — Project Reference Document

> **Live app:** https://trypofolio.com
> **Tagline:** The all-in-one business operating system built for freelancers.

---

## What Is Pofolio?

Pofolio is a full-featured freelancer business management application. It replaces the scattered combination of spreadsheets, invoicing tools, password managers, and portfolio websites that most freelancers cobble together. Everything a freelancer needs to run their business — from the first client inquiry to the final paid invoice — lives in one place.

It is a web app built with React, TypeScript, and Supabase. Data syncs to a cloud database when the user is logged in and falls back to local browser storage otherwise. Invoices are generated as downloadable PDFs. The public-facing portfolio, review form, and discovery form require no login to access.

---

## The Problem Pofolio Solves

Independent freelancers and small agencies typically manage their business across 6–10 separate tools:

- A spreadsheet for clients and projects
- A separate invoicing tool (or Word/PDF templates)
- A password manager for client website credentials
- A Google Form or Typeform for client intake
- A Notion doc for testimonials
- A separate portfolio website
- Email threads for project status

This fragmentation wastes time, causes mistakes (wrong invoice amounts, lost credentials, forgotten follow-ups), and looks unprofessional to clients. Pofolio consolidates all of this into a single dashboard with a premium, boutique aesthetic that matches the quality of work freelancers produce.

---

## Who Is This For? (Target Audience)

### Primary Audience
- **Freelance web designers and developers** — people who build websites for clients and need to invoice, track projects, store credentials, and showcase their work
- **Digital creative freelancers** — graphic designers, UI/UX designers, brand designers who work with multiple clients and need professional invoicing and portfolio tools
- **Small creative agencies (1–5 people)** — boutique studios that manage a roster of clients, recurring maintenance contracts, and need clean client-facing deliverables

### Secondary Audience
- **Freelance copywriters, marketers, and consultants** — anyone billing for services and managing client relationships
- **International freelancers** — those billing clients in different countries who need international invoice compliance (IBAN, Incoterms, Tax ID, Governing Law)

### User Profile
The typical Pofolio user is a solo freelancer or micro-agency owner who:
- Works with 5–50 active clients
- Sends 5–30 invoices per month
- Manages 3–20 websites for clients
- Has a portfolio they want to show prospective clients
- Values visual quality and professionalism in their tools
- Is not an accountant — they need invoicing to be simple and fast

---

## Core Feature Modules

### 1. Dashboard
The command center. Shows at a glance:
- **Total invoiced** (lifetime), **Total paid**, **Outstanding balance**, **Monthly retainer** income from maintenance plans
- Recent invoice list with status indicators (Sent / Paid / Overdue)
- Quick-action buttons: New Invoice, New Client, View Inquiries, View All
- One-click navigation to any overdue invoice directly from the dashboard

---

### 2. Client Management
A professional client directory.

- Add clients with full name, email, phone, and address
- **Link clients to Companies** — a client can belong to one or more company records
- Inline company creation — add a new company from within the client form without leaving the page
- Company badges displayed on each client card with logo thumbnails
- **Client Profile page** — deep-dive view per client showing:
  - Total invoiced, total paid, outstanding balance, monthly retainer
  - Full invoice history (click any to open)
  - Associated projects
  - Maintenance plans
  - Saved websites

---

### 3. Company Management
A standalone company entity separate from clients.

- Add companies with: name, industry, description, logo (file upload, max 512 KB), website, address
- 11 industry categories: Technology, E-Commerce, Legal, Healthcare, Finance, Education, Real Estate, Marketing, Design, Consulting, Other
- **Detail view modal** — click View on any company row to see all information in a structured card with dark header banner
- Companies link to multiple clients; clients can belong to multiple companies
- Company logos appear throughout the app: on client cards, in invoice recipient sections, and in the Portfolio page logo carousel

---

### 4. Invoice Generator
Professional PDF invoice creation with full international compliance support.

#### Core Fields
- Client selection (dropdown from client directory)
- Company selection (auto-populated from client's linked companies, or manual)
- **Bill To toggle** — choose whether the invoice is addressed to the client personally or the company (swaps primary/secondary recipient on the PDF)
- Invoice number (auto-generated with custom prefix, e.g. INV-001)
- Issue date and due date
- Currency (12 options: BDT, USD, EUR, GBP, CAD, AUD, SGD, INR, AED, SAR, JPY, MYR)
- Bank account selection (shows payment details on the PDF)

#### Line Items
- Unlimited line items with description, quantity, and unit price
- **Unit of Measure column** (optional toggle) — add hrs, pcs, kg, etc.
- **HS Code field** (optional toggle) — for goods-based international invoices

#### Pricing Summary
- Subtotal calculation
- Discount — percentage (%) or flat amount (fixed)
- Tax rate (%) — configurable default in Settings
- **Freight / Shipping** (optional toggle) — separate cost line added to total
- Grand total — calculated live as you type

#### Quick-Fill
- **Fill from Project** — select any saved project and line items are automatically populated from the project's service list
- **Fill from Maintenance Plan** — select a maintenance plan and the monthly fee is pre-filled as a line item

#### International / Legal Fields (Toggle System)
Each field can be turned on or off globally in Settings, and overridden per invoice. The 12 optional fields:

| Field | Description |
|---|---|
| Seller Tax ID / VAT | Your Tax ID shown in the invoice header |
| Buyer Tax ID / VAT | Client's Tax ID shown in recipient section |
| HS Codes | Harmonised System codes on each line item |
| Unit of Measure | Unit column (hrs, kg, pcs, etc.) |
| Country of Origin | Country where services/goods originate |
| Incoterms® 2020 | Trade term + named place (e.g. FOB Port of Dhaka) |
| Freight / Shipping | Separate shipping cost in totals |
| Payment Terms | Text field (Net 30, 50% upfront, etc.) |
| IBAN | Shown in bank details block on PDF |
| Retention of Title | Legal clause: goods remain seller's property until full payment |
| Governing Law | Legal jurisdiction (e.g. Laws of Bangladesh) |
| ISO Currency Code | Explicit currency code (USD, EUR) next to total |

#### PDF Templates
5 professionally designed invoice templates:
- **Classic** — accent top bar, logo left, invoice number right, elegant serif typography
- **Modern** — dark left sidebar with company/totals, white right panel for line items
- **Minimal** — pure white, thin lines, maximum whitespace
- **Bold** — high-contrast, large typography, strong brand color usage
- **Elegant** — refined luxury aesthetic with decorative elements

Classic template is free. All 5 templates unlock with Pro mode.

#### Invoice Sharing
Every invoice has a **public shareable link** — a URL that anyone (client, accountant) can open without logging in. The invoice data is encoded directly in the URL parameter (no server needed).

---

### 5. Invoice Archive
Full invoice history with management tools.

- Sortable, searchable list of all invoices
- **Status management** — mark invoices as Sent, Paid, or Overdue
- Status badge color coding: Sent (blue), Paid (green), Overdue (red)
- Open any invoice from the Dashboard (`?open=<id>` URL parameter)
- Delete invoices with confirmation
- Full invoice detail view with PDF download button
- Share button to generate the public shareable link

---

### 6. Project Management
Track all client projects from start to finish.

- Project name, client, company, status
- **4 statuses:** Planning, In Progress, Completed, On Hold
- Service list — itemised services each with individual pricing (becomes the basis for invoice quick-fill)
- Total project value (auto-summed from services)
- Currency selection
- Start date and end date
- Projects feed directly into the Invoice Generator and Portfolio work showcase

---

### 7. Maintenance Plans
Manage recurring website maintenance contracts.

- Plan name, client, website URL, price, currency, billing status
- **3 statuses:** Active, Paused, Cancelled
- Custom task checklist per plan (e.g. "Monthly backups", "Plugin updates", "Uptime monitoring")
- **Bill Now** — one click creates an invoice from a maintenance plan and sends you to the archive
- Start date tracking
- Total monthly retainer visible on the Dashboard

---

### 8. Inquiries
Manage inbound leads from the public Discovery Form.

- Inbox view of all submitted inquiries
- Full detail for each: client info, project type, budget range, goals, content readiness, timeline concerns, payment milestones, maintenance checklist
- **3 statuses:** New, Reviewed, Converted
- Delete inquiries
- Inquiry count shown on Dashboard quick-actions

---

### 9. Discovery Form (Public)
A public-facing intake form at `/discovery` — no login required.

- Designed for sharing with potential clients before the first call
- Collects: name, email, project name, project type, location, selected features, budget range, business goals, content readiness, branding preferences, timeline, maintenance requirements
- Real-time price estimate shown as the form is filled
- Submissions appear immediately in the Inquiries inbox

---

### 10. Price Estimator
An internal project pricing calculator.

- **Step 1 — Project Type:** Choose from categories (e.g. Business Website, E-Commerce Store, Web Application, Landing Page, Portfolio Site)
- **Step 2 — Requirements:** Toggle individual features on/off (basic and advanced categories, e.g. Blog, Contact Form, Payment Gateway, Custom CMS, Multi-language, SEO Package)
- **Step 3 — Location:** Select target market/client location — multipliers adjust for purchasing power (e.g. USA, UK, EU, South Asia, Middle East)
- **Live total** — updates as you configure, shown in the local currency
- Use it to price new projects or validate quotes before sending

---

### 11. Website Vault
Secure credential storage for all client websites.

- Store: website label, URL, admin/dashboard URL, login email, username, password, hosting provider, notes
- **Password masking** — passwords shown as dots; click eye icon to reveal per-entry
- **Client Name combobox** — search and select from existing clients, or type a new name freely
- **Copy individual fields** — click any credential chip to copy that single value
- **Copy All button** — one click copies all credentials (URL, admin URL, email, username, password, hosting) as formatted plain text — paste into any tool instantly
- Search/filter by name, URL, client name, email, or hosting provider

---

### 12. Testimonials
Collect and manage client reviews.

- View all submitted reviews with star ratings, client name, project name, and review text
- **Generate review request link** — enter a client name and project name, get a unique shareable URL that pre-fills the review form for that client
- Delete reviews
- Reviews feed into the Portfolio page testimonials section

---

### 13. Review Form (Public)
A public review submission page at `/review` — no login required.

- Pre-filled with client name and project name from the URL parameters
- Star rating selector (1–5)
- Open-text review field
- Submitted reviews appear immediately in the Testimonials inbox

---

### 14. Portfolio (Public)
A full public-facing portfolio website at `/portfolio` — no login required. Built from the data in the app.

**Sections:**
- **Hero** — name, headline, animated particle field background, CTA buttons (View Work, Get in Touch), social links (LinkedIn, GitHub, Twitter, Instagram, Behance, Dribbble)
- **Stats counter** — Completed Projects, Happy Clients, Years of Experience, Client Reviews
- **Client Logo Carousel** — horizontal marquee of company logos (from companies that have a logo uploaded)
- **About / Bio** — profile photo, bio text, location, contact info, industry tags
- **Services** — list of offered services with descriptions
- **Process** — step-by-step "how I work" section
- **Work Showcase** — completed projects grid with client name, service list, project value
- **Testimonials** — scrolling review cards from the Testimonials module
- **FAQ** — accordion-style frequently asked questions
- **Inquiry Section** — embedded Discovery Form directly on the portfolio page
- **Contact Footer** — dark footer with contact links and social icons

All content (bio, services, process, FAQs, social links, profile photo, years of experience, starting price) is managed from the **Profile** settings page inside the app.

---

### 15. Settings
Global workspace configuration.

- **Identity Profile** — full legal name, contact email, phone
- **Business Entity** — company trade name, logo, business address, Tax ID / VAT number
- **Invoice Defaults** — brand color, invoice prefix, default tax rate, currency, country of origin, governing law
- **Invoice Template** — select from 5 PDF templates
- **Invoice Fields** — 12 toggles to set global defaults for which optional fields appear on all new invoices
- **Payment Accounts** — add multiple bank accounts, each with: label, bank name, account name, account number, IBAN, SWIFT/routing, branch, email (for Wise/PayPal). Selected per-invoice

---

### 16. Profile
Portfolio-specific settings.

- Headline, bio, years of experience, starting price, availability status
- Profile photo upload
- Services list (name + description per service)
- Industry tags
- Social links: LinkedIn, GitHub, Twitter, Instagram, Behance, Dribbble, personal website
- FAQ list (question + answer pairs)

---

## Authentication

- Email/password login via Supabase Auth
- Email confirmation with redirect to the app dashboard
- Session persists across browser sessions
- Protected routes — all dashboard pages require login
- Public routes — `/portfolio`, `/discovery`, `/review`, `/invoice/shared` work without any login

---

## Data Architecture

- **Primary storage**: Supabase PostgreSQL (cloud)
- **Offline fallback**: Browser localStorage — the app works even without an internet connection
- **Sync strategy**: On login, cloud data is fetched and merged with local data. Saves write to both simultaneously
- **PDF generation**: Client-side only using `@react-pdf/renderer` — no server involvement, no data sent externally
- **Invoice sharing**: Invoice data is base64-encoded into the URL — no server or database required for sharing

**Supabase tables**: `clients`, `companies`, `invoices`, `projects`, `maintenance_plans`, `inquiries`, `reviews`, `websites`

**Row Level Security**: All tables have RLS enabled. Each user can only read and write their own data (`auth.uid()::text = user_id`).

---

## Tech Stack

| Layer | Technology |
|---|---|
| Frontend framework | React 19 + Vite |
| Language | TypeScript (strict mode) |
| Styling | Tailwind CSS v4 |
| Animation | Motion (Framer Motion) |
| Backend / Auth | Supabase (PostgreSQL + Auth) |
| PDF generation | @react-pdf/renderer |
| Routing | React Router v6 |
| Error tracking | Sentry |
| Deployment | Vercel |
| Domain | trypofolio.com |

---

## Key Differentiators

**vs. FreshBooks / QuickBooks / Wave**
- Purpose-built for freelancers, not accountants
- Includes portfolio and client intake — not just accounting
- Lightweight, fast, no subscription fees
- No overwhelming features — focused on what freelancers actually use

**vs. Bonsai / HoneyBook**
- More control over invoice design (5 templates, full customization)
- International invoice compliance out of the box
- Website credential vault built in
- Public portfolio page built from the same data
- Open aesthetic — clinical boutique design vs. generic SaaS

**vs. Notion / Airtable (DIY setups)**
- No setup required — works immediately
- PDFs generated automatically
- Client-facing public pages (portfolio, review form, discovery form, invoice sharing)
- Mobile-friendly by design

---

## Unique Features Worth Highlighting

1. **International invoice compliance** — IBAN, Incoterms, HS codes, Tax ID, Governing Law, Retention of Title, Country of Origin — all toggleable per invoice
2. **Bill to Company toggle** — single click to address the invoice to the company or the individual
3. **Quick-fill from project** — open the invoice form, select a project, all line items are pre-populated
4. **Website Vault with Copy All** — all credentials for a site copied to clipboard in one click
5. **Shareable invoice URL** — send clients a link to view their invoice online without needing any account
6. **Built-in portfolio** — the work you track in the app automatically powers your public portfolio
7. **Discovery form + Price estimator** — leads can self-qualify and see estimates before booking a call
8. **Testimonial request links** — send a client a unique link, they fill in the review, it appears in your portfolio immediately

---

## User Journey (End-to-End Flow)

```
Potential client discovers portfolio at trypofolio.com/portfolio
    → Fills out Discovery Form (/discovery)
        → Freelancer sees Inquiry in dashboard
            → Converts to Client record
                → Creates Project linked to client
                    → Delivers work
                        → Generates Invoice from Project (one click)
                            → Client receives shareable invoice link
                                → Paid → marked Paid in Archive
                                    → Client submits review via Review Link
                                        → Review appears on Portfolio
```

---

## Positioning Statement

**Pofolio is for the freelancer who takes their business seriously.**

It is not a dumbed-down tool, but it is also not bloated accounting software. It is designed for the professional who sends polished invoices, maintains a curated client roster, keeps credentials organized, and presents their work through a portfolio they are proud of — all without switching between a dozen apps.

---

## Potential Landing Page Angles

1. **"One dashboard. Every client. Every invoice. Every credential."** — the all-in-one angle
2. **"Stop invoicing like it's 2015."** — modern invoice design vs. Word templates
3. **"Built for web freelancers, by a web freelancer."** — specificity and credibility
4. **"Your portfolio, your invoices, your clients. One place."** — consolidation
5. **"From first inquiry to paid invoice — without leaving the tab."** — workflow efficiency
6. **"International invoices that actually comply."** — niche: freelancers billing global clients

---

## Landing Page — Tech Stack

The landing page is a **separate project** from the main React app. It is built with **Astro** and deployed to Vercel, pointing at the same domain (`trypofolio.com` or a subdomain like `www.trypofolio.com`).

### Why Astro

| Reason | Detail |
|---|---|
| **Zero JS by default** | Astro ships pure HTML + CSS unless you opt in. The landing page loads instantly — critical for first impressions and SEO. |
| **Perfect for content-heavy pages** | Landing pages are mostly static sections (hero, features, pricing, FAQ). Astro is built for exactly this — no React overhead where it isn't needed. |
| **Islands architecture** | Interactive pieces (waitlist form, FAQ accordion, animated counters) load as isolated React or vanilla JS islands. Everything else stays static. |
| **Built-in performance** | Automatic image optimization, CSS bundling, and HTML minification out of the box. Core Web Vitals green by default. |
| **React integration** | Use `@astrojs/react` for islands that need React (e.g. the Framer Motion animated sections, the waitlist form connected to Supabase). |
| **Tailwind v4 support** | Full Tailwind CSS v4 support via `@astrojs/tailwind` — same design tokens as the main app for visual consistency. |
| **Vercel deployment** | First-class Vercel adapter (`@astrojs/vercel`) — same deploy pipeline as the main app. |

### Landing Page Tech Stack

| Layer | Technology |
|---|---|
| Framework | Astro 5 |
| Language | TypeScript (strict) |
| Styling | Tailwind CSS v4 |
| Interactive islands | React 19 (via `@astrojs/react`) |
| Animation | Framer Motion (React islands only) |
| 3D / Hero visual | Three.js (React island in hero section) |
| Backend / Waitlist | Supabase (same project as main app) |
| Deployment | Vercel (`@astrojs/vercel` adapter) |
| Domain | trypofolio.com |

### Project Structure

```
landing/                        ← separate repo or monorepo subfolder
├── src/
│   ├── pages/
│   │   └── index.astro         ← main landing page
│   ├── components/
│   │   ├── sections/           ← Hero.astro, Features.astro, Pricing.astro, FAQ.astro, Footer.astro
│   │   └── islands/            ← WaitlistForm.tsx, AnimatedCounter.tsx, HeroParticles.tsx (React)
│   ├── layouts/
│   │   └── LandingLayout.astro
│   └── styles/
│       └── global.css
├── astro.config.mjs
├── tailwind.config.ts
└── package.json
```

### How It Connects to the Main App

- **Waitlist form** → writes to a `waitlist` table in the same Supabase project (email, timestamp, referral source)
- **CTA buttons** → link directly to `https://trypofolio.com/login` (the React app)
- **Design tokens** → same color palette and typography as the main app — users feel continuity when they sign up
- **No shared code** — the landing page is intentionally standalone; no imports from the main app repo

### Astro-Specific Skill Notes

The skills listed in the "Landing Page — Skills Required" section below still apply, with these Astro-specific notes:

- `@vercel-react-best-practices` — applies to React islands only (not the static Astro pages)
- `@react-best-practices` — applies inside `.tsx` island components only
- `@motion-framer` — only used inside React islands (Astro `.astro` files don't support Framer Motion directly)
- `@threejs-*` skills — hero particle field lives in a React island (`HeroParticles.tsx`)
- `@vercel-composition-patterns` — use the Astro Vercel adapter, not Next.js-specific patterns

---

## Landing Page — Skills Required

This section maps every skill from `CLAUDE.md` to the landing page build. Use it as the execution checklist when development starts. Skills are listed in the order they should be activated.

---

### Phase 0 — Plan Before Coding

| Skill | Why |
|---|---|
| `@concise-planning` | Before writing a single line, plan the section structure, design tokens, component breakdown, and animation strategy. Get approval, then build. |

---

### Phase 1 — Design System & Foundations

| Skill | Why |
|---|---|
| `@ui-ux-pro-max` | Start here. Generate the full design system: color palette, typography scale, spacing units, button states, card styles, section rhythm. The landing page must feel premium — this skill enforces that from the ground up. |
| `@tailwind-patterns` | Implement every design token as clean Tailwind v4 utility classes. No inline styles. No arbitrary values unless absolutely necessary. |
| `@web-design-guidelines` | Validate layout, typography, and spacing against Vercel's web design standards — a solid production benchmark for visual consistency. Review output before applying. |
| `@typescript-pro` | Set up strict TypeScript from day one. No implicit any. Type all section props, CMS data shapes, and form payloads before building components. |

---

### Phase 2 — Sections & Component Architecture

| Skill | Why |
|---|---|
| `@frontend-design` | Build every section component — Hero, Problem, Feature Showcase, Social Proof, Pricing, FAQ, CTA, Footer. Enforces the "clinical boutique" aesthetic throughout. |
| `@react-best-practices` | Prevent unnecessary re-renders in scroll-heavy pages. Memoize section components, lazy-load below-the-fold sections, use `React.memo` on static content blocks. |
| `@react-patterns` | Structure the page with clean component composition: layout wrappers, section primitives, shared UI atoms (Badge, Pill, FeatureCard, PricingTier). |

**Sections to build:**

| Section | Description |
|---|---|
| Hero | Headline, sub-headline, CTA button pair (Start Free / See How It Works), app screenshot or 3D visual |
| Problem | "Freelancers use 6–10 tools" — visual fragmentation diagram |
| Feature Showcase | 4–6 animated feature blocks, one per module (Invoicing, Vault, Portfolio, etc.) |
| Social Proof | Testimonial cards, client logos, stats counter |
| Pricing | Free tier vs Pro — clear feature comparison |
| FAQ | Accordion-style, answers top freelancer objections |
| Waitlist / CTA | Email capture form with value hook |
| Footer | Links, social icons, legal |

---

### Phase 3 — Animation & Visual Polish

| Skill | When to Use |
|---|---|
| `@motion-framer` | **Use on every section.** Hero entrance sequence (staggered headline + CTA reveal), scroll-triggered section fade-ins with `whileInView`, staggered feature card reveals (`staggerChildren`), FAQ accordion open/close (`AnimatePresence` + height auto), CTA button hover lift (`whileHover`), pricing card tap feedback (`whileTap`). |
| `@threejs-fundamentals` | **Hero only.** Set up the WebGLRenderer, camera, and scene if going with a WebGL particle field or floating 3D mockup in the hero background. Start here before any other Three.js skill. |
| `@threejs-geometry` | Build the particle field using `THREE.Points` + `BufferGeometry`. Floating ambient particle cloud behind the hero headline. |
| `@threejs-animation` | Animate the particle drift with `Clock`-based procedural motion. Slow, ambient float — no distraction from the headline. |
| `@threejs-shaders` | Optional premium tier: custom GLSL `ShaderMaterial` for particle color gradients, depth fade, or distortion effects that CSS cannot achieve. |
| `@threejs-postprocessing` | Optional: add `UnrealBloom` glow pass on the particle field for a high-end luminous effect. Use sparingly. |
| `@threejs-materials` | Style any 3D mesh (e.g., floating app mockup, logo mark) with correct material type and transparency settings. |

> **Rule:** Use Three.js only in the hero. Every other section uses `@motion-framer`. Don't add GPU rendering where CSS spring animations are sufficient.

---

### Phase 4 — Forms & Conversion

| Skill | Why |
|---|---|
| `@form-cro` | Apply to the waitlist / email capture form and any contact form. High-converting layout, clear microcopy, accessible labels, inline validation, no drop-off. This is the primary revenue touchpoint on the landing page. |
| `@frontend-security-coder` | Sanitize all form inputs before submission. Prevent XSS in any user-supplied field. |
| `@secure-code-guardian` | OWASP Top 10 audit on form submission flow. Check for injection, CSRF exposure, and insecure data handling. |
| `@supabase` | Store waitlist signups in a Supabase `waitlist` table (email, timestamp, source). Add RLS so only the owner can read entries. Use the same Supabase project as the main app. |

---

### Phase 5 — Performance & Vercel Optimization

| Skill | Why |
|---|---|
| `@vercel-react-best-practices` | Optimize for Vercel's runtime: lazy-load below-the-fold sections, optimize all images with `next/image` or Vite image plugins, minimize JS bundle size. Core Web Vitals (LCP, CLS, FID) must be green. |
| `@vercel-composition-patterns` | If any section uses dynamic data (testimonials from Supabase, live stats), use ISR for near-real-time data without client fetches. |
| `@vercel-react-view-transitions` | Smooth transition when CTA navigates the user to the app signup page. Pair with `@motion-framer` for gesture-driven feel. |

---

### Phase 6 — Testing & Quality Gate

| Skill | Why |
|---|---|
| `@lint-and-validate` | Run before every commit. Zero lint errors, consistent formatting, no dead imports. |
| `@test-master` | Test form submission logic, email validation, waitlist deduplication, and any pricing calculation logic. |
| `@playwright-expert` | E2E test the full conversion funnel: Hero CTA → Pricing section → Email capture → Success state. Visual regression on hero and pricing sections. |

---

### Phase 7 — Deployment & Monitoring

| Skill | Why |
|---|---|
| `@deploy-to-vercel` | Deploy to Vercel, wire up environment variables (Supabase keys), configure the production domain (`trypofolio.com` or a dedicated landing subdomain). |
| `@devops-engineer` | Set up GitHub Actions CI: lint → type-check → build → deploy on merge to `main`. Block merges if build fails. |
| `@monitoring-expert` | Wire Sentry to the landing page. Track form submission errors, JS exceptions, and Core Web Vitals in production. Set up an alert if the waitlist form errors spike. |

---

### Quick-Reference: Skill × Section Matrix

| Section | Primary Skills | Secondary Skills |
|---|---|---|
| Hero | `@ui-ux-pro-max`, `@motion-framer` | `@threejs-fundamentals`, `@threejs-geometry`, `@threejs-animation` |
| Problem | `@frontend-design`, `@motion-framer` | `@tailwind-patterns` |
| Feature Showcase | `@frontend-design`, `@motion-framer` | `@react-best-practices` |
| Social Proof | `@frontend-design`, `@motion-framer` | `@react-patterns` |
| Pricing | `@frontend-design`, `@motion-framer` | `@typescript-pro` |
| FAQ | `@frontend-design`, `@motion-framer` | — |
| Waitlist Form | `@form-cro`, `@frontend-security-coder` | `@supabase`, `@secure-code-guardian` |
| Footer | `@frontend-design`, `@tailwind-patterns` | — |
| Full page | `@vercel-react-best-practices`, `@lint-and-validate` | `@playwright-expert` |
| Ship | `@deploy-to-vercel`, `@monitoring-expert` | `@devops-engineer` |

---

---

## Skills — Installation Reference

All skills used in this project are installed via `npx skills add`. This section lists every skill, its source GitHub repo, and the exact install command.

### Already Installed

| Skill | Repo | GitHub |
|---|---|---|
| `@supabase` | `supabase/agent-skills` | https://github.com/supabase/agent-skills |
| `@supabase-postgres-best-practices` | `supabase/agent-skills` | https://github.com/supabase/agent-skills |

---

### Vercel Skills — `vercel-labs/agent-skills`

GitHub: https://github.com/vercel-labs/agent-skills

```bash
npx skills add vercel-labs/agent-skills@deploy-to-vercel
npx skills add vercel-labs/agent-skills@vercel-cli-with-tokens
npx skills add vercel-labs/agent-skills@vercel-composition-patterns
npx skills add vercel-labs/agent-skills@vercel-react-best-practices
npx skills add vercel-labs/agent-skills@vercel-react-native-skills
npx skills add vercel-labs/agent-skills@vercel-react-view-transitions
npx skills add vercel-labs/agent-skills@web-design-guidelines
```

---

### Code Quality, Security & Testing — `jeffallan/claude-skills`

GitHub: https://github.com/jeffallan/claude-skills

```bash
npx skills add jeffallan/claude-skills@typescript-pro
npx skills add jeffallan/claude-skills@secure-code-guardian
npx skills add jeffallan/claude-skills@test-master
npx skills add jeffallan/claude-skills@playwright-expert
npx skills add jeffallan/claude-skills@devops-engineer
```

---

### Frontend Patterns & Utilities — `sickn33/antigravity-awesome-skills`

GitHub: https://github.com/sickn33/antigravity-awesome-skills

```bash
npx skills add sickn33/antigravity-awesome-skills@tailwind-patterns
npx skills add sickn33/antigravity-awesome-skills@react-patterns
npx skills add sickn33/antigravity-awesome-skills@lint-and-validate
npx skills add sickn33/antigravity-awesome-skills@concise-planning
npx skills add sickn33/antigravity-awesome-skills@frontend-security-coder
```

---

### Three.js / 3D & Visual Effects — `cloudai-x/threejs-skills`

GitHub: https://github.com/cloudai-x/threejs-skills

```bash
npx skills add cloudai-x/threejs-skills@threejs-fundamentals
npx skills add cloudai-x/threejs-skills@threejs-animation
npx skills add cloudai-x/threejs-skills@threejs-geometry
npx skills add cloudai-x/threejs-skills@threejs-shaders
npx skills add cloudai-x/threejs-skills@threejs-materials
npx skills add cloudai-x/threejs-skills@threejs-lighting
npx skills add cloudai-x/threejs-skills@threejs-textures
npx skills add cloudai-x/threejs-skills@threejs-interaction
npx skills add cloudai-x/threejs-skills@threejs-loaders
npx skills add cloudai-x/threejs-skills@threejs-postprocessing
```

---

### Individual Skills — Single Repos

| Skill | Install Command | GitHub |
|---|---|---|
| `@ui-ux-pro-max` | `npx skills add nextlevelbuilder/ui-ux-pro-max-skill@ui-ux-pro-max` | https://github.com/nextlevelbuilder/ui-ux-pro-max-skill |
| `@frontend-design` | `npx skills add anthropics/skills@frontend-design` | https://github.com/anthropics/skills |
| `@form-cro` | `npx skills add coreyhaines31/marketingskills@form-cro` | https://github.com/coreyhaines31/marketingskills |
| `@systematic-debugging` | `npx skills add obra/superpowers@systematic-debugging` | https://github.com/obra/superpowers |
| `@motion-framer` | `npx skills add freshtechbro/claudedesignskills@motion-framer` | https://github.com/freshtechbro/claudedesignskills |
| `@react-patterns` | `npx skills add giuseppe-trisciuoglio/developer-kit@react-patterns` | https://github.com/giuseppe-trisciuoglio/developer-kit |
| `@react-best-practices` | `npx skills add 0xbigboss/claude-code@react-best-practices` | https://github.com/0xbigboss/claude-code |

---

### Skills Registry

Browse all available skills at **https://skills.sh**

To search for a skill by keyword: `npx skills find <query>`

---

*Last updated: May 2026*
*App: https://trypofolio.com*
*Repository: https://github.com/Mamun-Rashid11/client-hub*
