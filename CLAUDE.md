@AGENTS.md

# AgentForge AI — Project Guide

Marketing website for **AgentForge AI**, a premium AI consulting and automation company brand. The owner is **not a coder and does not want to learn** — do everything for them, explain in plain English, and avoid asking for permissions unless genuinely necessary.

## Live deployment

- **Live site:** https://hqum-dev.github.io/AgentForge-AI/ (GitHub Pages, free tier)
- **Repository:** https://github.com/hqum-dev/AgentForge-AI (public — owner approved making it public on 2026-07-04; required for free Pages)
- **Branches:** `main` = source code, `gh-pages` = built static site
- Owner's GitHub account: `hqum-dev`, authenticated via `gh` CLI (token in keyring)

### How to redeploy after any change

There is **no CI** — the gh token lacks `workflow` scope, so GitHub Actions workflows can't be pushed. Deploys are manual:

```bash
GITHUB_PAGES=true npm run build          # builds static site into out/ with /AgentForge-AI base path
cd out && touch .nojekyll                # .nojekyll is required — _next/ starts with underscore
git init -b gh-pages -q && git add -A && git commit -q -m "Deploy"
git push --force https://github.com/hqum-dev/AgentForge-AI.git gh-pages:gh-pages
rm -rf .git                              # clean up the temp repo inside out/
```

Also commit + push source changes to `main`. Site goes live ~1 minute after the push.

## Stack

- **Next.js 16** (App Router, Turbopack) + **React 19** + **TypeScript**
- **Tailwind CSS 4** (theme tokens defined in `app/globals.css` via `@theme inline`, NOT a tailwind.config file)
- **lucide-react** for icons
- Fully static: `output: "export"` with `trailingSlash: true`. All 13 routes prerender; nothing needs a server.
- `basePath`/`assetPrefix` are `/AgentForge-AI` **only when** env var `GITHUB_PAGES=true` (see `next.config.ts`). Local dev (`npm run dev`) runs at plain `http://localhost:3000`.

## Folder structure

```
agentforge-ai/
├── CLAUDE.md / AGENTS.md     This guide + Next.js 16 breaking-changes warning
├── next.config.ts            Static export + GitHub Pages base path switch
├── lib/
│   └── data.ts               ★ ALL site content lives here (see below)
├── app/                      One folder per page (App Router)
│   ├── layout.tsx            Root layout: fonts, global SEO metadata, Header/Footer
│   ├── globals.css           Design tokens, animations, glassmorphism/grid/glow utilities
│   ├── page.tsx              Home page (12 sections)
│   ├── services/page.tsx     All 10 services, alternating detail layout, anchor ids
│   ├── industries/page.tsx   All 8 industries as detail cards, anchor ids
│   ├── solutions/page.tsx    4 outcome-focused solution packages
│   ├── case-studies/page.tsx 6 anonymized case studies with metrics
│   ├── about/page.tsx        Story, 6 values, differentiator band
│   ├── contact/page.tsx      3 contact paths + lead form
│   ├── book-audit/page.tsx   Audit explainer + booking form
│   ├── not-found.tsx         Custom 404 ("This page got automated away")
│   ├── sitemap.ts robots.ts  SEO (both need `dynamic = "force-static"` for export)
│   └── icon.svg              Favicon (gradient square + white spark)
└── components/
    ├── Header.tsx            Sticky glass header; light text at top (all pages open on
    │                         dark heroes), switches to white bg + dark text on scroll
    ├── Footer.tsx            CTA band + link columns (builds from lib/data.ts)
    ├── Logo.tsx              SVG wordmark, `dark` prop for dark backgrounds
    ├── PageHero.tsx          Dark hero banner for interior pages
    ├── SectionHeading.tsx    Eyebrow + title + description block
    ├── Reveal.tsx            Scroll-into-view fade-up wrapper (IntersectionObserver)
    ├── CtaSection.tsx        Full-width closing CTA used at the bottom of every page
    ├── LeadForm.tsx          Shared contact/audit form (mailto delivery — see below)
    ├── FaqAccordion.tsx      Expanding FAQ (client component)
    ├── StatCounter.tsx       Count-up number animation for the stats band
    ├── TrustedBy.tsx         Infinite marquee of client wordmarks
    ├── ProcessTimeline.tsx   Numbered 7-step vertical timeline
    └── *Card.tsx             ServiceCard, IndustryCard, CaseStudyCard, TestimonialCard
```

## Pages & sections

- **Home** (`/`): hero → trusted-by marquee → services (6 of 10) → industries (all 8, dark) → 7-step process timeline → benefits (6) → case studies (3 of 6) → animated stats/ROI band → testimonials (4) → FAQ (8 questions) → final CTA → footer
- **Services**: quick-jump chip nav, then all 10 services in alternating left/right detail blocks, each with a "What you get" outcomes panel. Services: AI Agents, Workflow Automation, Business Process Optimization, CRM Automation, Executive AI Assistants, Document Automation, Knowledge Management Systems, AI Chatbots, Custom AI Solutions, AI Strategy Consulting
- **Industries**: 8 detail cards — Small Businesses, Nonprofits, Educational Institutions, Healthcare, Manufacturing, Professional Services, Government, Financial Services
- **Solutions**: 4 outcome packages (Front Office, Back Office, Documents & Knowledge, Leadership Insight), each with problem/after/includes
- **Case Studies**: 6 anonymized engagements with metric panels
- **About**: origin story, 6 working principles, stats band
- **Contact**: three contact paths + consultation form
- **Book Audit** (`/book-audit`): how the audit works (3 steps), what's included, booking form. This is the primary CTA target site-wide.

## ★ The content rule

**Every word on the site lives in `lib/data.ts`** — services, industries, solutions, case studies, testimonials, FAQs, stats, process steps, trusted-by names, nav links, and the site name/description/email/URL. To change site text, edit `data.ts`, never the page files. Pages, nav, and footer all render from it.

## Design system

Aesthetic brief from the owner: clean, minimal, enterprise/Fortune-500 — modeled on IBM, Accenture, OpenAI, Palantir, Deloitte Digital, Anthropic. Plenty of white space, subtle gradients, glassmorphism, premium iconography — explicitly NOT a startup-template look.

- **Colors** (tokens in `globals.css`): deep navy `navy-950 #060d1b` / `navy-900 #0a1628` for dark sections; accent blue `accent-500 #2563eb` (primary CTA color) and cyan `accent-400 #38bdf8`; light sections use white and `slate-50`
- **Typography:** Geist Sans (via `next/font`), tight tracking on headings, bold weights
- **Layout rhythm:** pages alternate dark navy and light sections; `max-w-7xl` containers; generous `py-24`/`py-32` section padding; `rounded-2xl`/`rounded-3xl` cards; pill-shaped buttons
- **Signature utilities** (defined in `globals.css`): `.hero-glow` (radial blue glow), `.grid-texture` (faint grid on dark), `.glass-card` (glassmorphism), `.animate-marquee`, `.reveal` (scroll fade-up, respects `prefers-reduced-motion`)
- **Every page ends with `<CtaSection>`** pushing the three CTAs: Free AI Workflow Audit (primary), Discovery Call, Consultation

## Forms (no backend)

`LeadForm.tsx` builds a `mailto:` link to `site.email` in `lib/data.ts` (currently `amaanah1@gmail.com`) — the visitor's own email app opens pre-filled. Works on static hosting with zero setup. To upgrade to silent submissions, swap `handleSubmit` for a `fetch` to a Formspree-style endpoint (README documents this).

## Owner preferences & honesty notes

- Do the work for them; don't hand back terminal instructions as "next steps"
- Case studies, testimonials, stats, and trusted-by names are **illustrative/anonymized placeholders in style** — realistic but not real clients. The owner should replace them with real ones before serious marketing; remind them if they invest in ads/SEO
- Repo name has a hyphen (`AgentForge-AI`) because GitHub forbids spaces; the brand everywhere on-site is "AgentForge AI"
- Owner may later buy a custom domain — when that happens update `site.url` in `lib/data.ts`, reconfigure Pages (or move to Vercel), and rebuild

## Machine gotchas

- `~/.npm` is **owned by root** → `npm install`/`npx` fail. Workaround: `export npm_config_cache=<any writable dir>` first. Plain `npm run dev/build` is fine.
- `sitemap.ts` and `robots.ts` must keep `export const dynamic = "force-static"` or the export build fails.
- Lint before pushing: `npm run lint` (ESLint 9 + eslint-config-next; it enforces escaped apostrophes in JSX and no setState-in-effect).
