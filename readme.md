# Alfan Alaniq Technical Services — Website

Next.js (App Router) + TypeScript + Tailwind CSS site for Alfan Alaniq Technical
Services, an HVAC / MEP / fit-out contractor based in Dubai, UAE.

## Stack
- Next.js 15 (App Router)
- React 18 + TypeScript
- Tailwind CSS
- framer-motion (scroll reveals, the animated duct-seam divider)
- lucide-react (icons)
- next-seo (structured data) + Next.js Metadata API (per-page SEO)
- react-hook-form + zod (+@hookform/resolvers) for the contact form
- clsx + tailwind-merge (the `cn()` class helper)

## Getting started
```bash
npm install
npm run dev
```

## Replacing placeholder images
`public/images/**` contains generated placeholder JPEGs so the project runs
out of the box. Swap them for real photography at the same paths:
- `images/about/about-installation.jpeg`
- `images/projects/project-5.jpeg`
- `images/services/{amc,ducting,hvac-installation,maintenance,mep,repair}.jpeg`

## Editing content
All copy lives in `src/data/*.ts` (company info, services, projects, clients,
nav links, "why choose us"). Update those files rather than the components.
