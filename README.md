# AgentForge AI — Company Website

Premium, enterprise-grade marketing website for **AgentForge AI**, an AI consulting and automation firm serving businesses, nonprofits, educational institutions, healthcare organizations, professional service firms, and government agencies.

Built with **Next.js 16**, **React 19**, **Tailwind CSS 4**, and **TypeScript**.

## Pages

| Page | Path |
| --- | --- |
| Home | `/` |
| Services (10 services) | `/services` |
| Industries (8 sectors) | `/industries` |
| Solutions | `/solutions` |
| Case Studies | `/case-studies` |
| About Us | `/about` |
| Contact | `/contact` |
| Book a Free AI Workflow Audit | `/book-audit` |

## Running the site locally

```bash
npm install
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000).

To create a production build:

```bash
npm run build
npm start
```

## Editing content (no coding required)

Almost every word on the site — services, industries, case studies, testimonials, FAQs, statistics, the process steps, and the contact email — lives in one file:

```
lib/data.ts
```

Open it in any text editor, change the text between the quotation marks, save, and the whole site updates. The navigation and footer build themselves from the same file.

## Contact forms

The forms on **Contact** and **Book a Free AI Workflow Audit** open the visitor's email app with their answers pre-filled, addressed to the email in `lib/data.ts` (`site.email`). This works with zero setup.

For silent in-browser submissions (no email app popup), sign up for a free form service such as [Formspree](https://formspree.io) and swap the `handleSubmit` function in `components/LeadForm.tsx` for a `fetch` call to your form endpoint.

## Deploying (making the site public)

The easiest path is [Vercel](https://vercel.com) (free tier is fine):

1. Push this repository to GitHub (already done if you're reading this there).
2. Sign in to Vercel with your GitHub account.
3. Click **Add New → Project**, pick this repository, and click **Deploy**.

Vercel will give you a live URL and redeploy automatically whenever the repo changes. When you attach a custom domain, update `site.url` in `lib/data.ts` so SEO tags and the sitemap point to the real address.

## Project structure

```
app/            Pages (one folder per page) + SEO (sitemap, robots, icon)
components/     Reusable building blocks (header, footer, cards, forms…)
lib/data.ts     ALL site content — edit this to change the words
```
