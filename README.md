# shanaam.github.io

Personal website for Shanaa Modchalingam. Consistently a WIP.

## Stack

- **Next.js 15** (App Router) with TypeScript and Tailwind CSS
- **MDX articles** via `next-mdx-remote` — content lives in `content/articles/` as `.mdx` files with YAML frontmatter
- **Static export** (`output: "export"`) deployed to GitHub Pages via GitHub Actions
- **Turbopack** for fast local development (`next dev --turbopack`)

## Testing & CI

Smoke tests are written with **Playwright** and run in CI before every deploy. Each test visits a page, asserts an HTTP 200, checks for expected content, and fails on any browser console errors.

```bash
npm run build   # build static output to out/
npm test        # run Playwright smoke tests against out/
```

The GitHub Actions workflow (`deploy.yml`) gates deployment on passing tests — if any page fails to render, the deploy is blocked.
