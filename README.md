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

## Adding an Article

1. Create `content/articles/your-slug.mdx` with frontmatter:

   ```yaml
   ---
   title: Your Title
   date: "YYYY-MM-DD"
   description: One-line summary.
   tags: [Tag1, Tag2]
   links:
     - label: GitHub
       href: https://github.com/...
   ---
   ```

2. Add a corresponding smoke test entry in `tests/smoke.spec.ts`.
3. The article is automatically listed on the home page and `/work`.

## Setup (new machine)

**Prerequisites:** Node.js v20+ and npm. Install via [nvm](https://github.com/nvm-sh/nvm) (Mac/Linux) or [nvm-windows](https://github.com/coreybutler/nvm-windows) (Windows) — this matches the v20 used in CI.

```bash
# 1. Clone
git clone git@github.com:shanaam/shanaam.github.io.git
cd shanaam.github.io

# 2. Install dependencies + Playwright browser (postinstall runs automatically)
npm install

# 3. Start dev server
npm run dev
```

**GitHub SSH key** — required for pushing. Each machine needs its own key added to GitHub:

```bash
ssh-keygen -t ed25519 -C "your@email.com"   # generates ~/.ssh/id_ed25519
cat ~/.ssh/id_ed25519.pub                    # copy this
```

Then add it at **github.com → Settings → SSH and GPG keys → New SSH key**.

## Local Development

```bash
npm run dev     # starts at localhost:3000
npm run lint    # ESLint — also runs during build, catch this before pushing
npm run build   # full static build to out/
npm test        # smoke tests (requires a completed build first)
```

## Windows / Mac Compatibility

The repo is set up to work identically on both:

| Concern | Solution |
| --- | --- |
| Environment variables in npm scripts | `cross-env` — syntax works on both shells |
| Line endings | `.gitattributes` enforces LF everywhere; no CRLF will sneak into commits |
| Playwright browsers | `postinstall` script installs Chromium automatically on `npm install` |
| Native modules (`sharp`) | npm downloads the correct platform binary automatically |

**Note:** CI runs on Ubuntu, which has a case-sensitive filesystem. File references in MDX (images, etc.) must exactly match the filename on disk — `image.PNG` and `image.png` are different files on Linux even if both work locally.
