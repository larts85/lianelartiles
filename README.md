# Lianel Artiles Portfolio

Portfolio and blog platform built with React 19, React Router v7, Vite, and Cloudflare Workers.

The project is no longer a Create React App SPA for GitHub Pages. It now runs as a server-rendered React Router application on Cloudflare, with room for blog content, loaders/actions, and future server-side features.

## Stack

- React 19
- React Router v7 in framework mode
- Vite 7
- Cloudflare Workers via Wrangler
- MUI 7
- TypeScript tooling for the app shell and Cloudflare runtime
- Existing portfolio UI/components preserved from the previous React codebase

## Current Navigation

- `/`
- `/resume`
- `/education`
- `/skills`
- `/projects`
- `/about`
- `/contact`
- `/blog`
- `/blog/:slug`

## Repository Structure

### App Shell

- [app/root.tsx](/Users/imadev/Dev/repos/a-moi/lianelartiles/app/root.tsx)
  Main document shell, route outlet, shared layout state, theme setup, and top-level metadata.
- [app/routes.ts](/Users/imadev/Dev/repos/a-moi/lianelartiles/app/routes.ts)
  React Router route manifest for the application.
- [app/entry.server.tsx](/Users/imadev/Dev/repos/a-moi/lianelartiles/app/entry.server.tsx)
  SSR entrypoint used by React Router framework mode.
- [app/app.css](/Users/imadev/Dev/repos/a-moi/lianelartiles/app/app.css)
  App-level stylesheet bridge that imports the legacy CSS.
- [app/portfolio-context.ts](/Users/imadev/Dev/repos/a-moi/lianelartiles/app/portfolio-context.ts)
  Shared outlet context hook for layout state such as language, dark mode, and mobile detection.

### Route Modules

- [app/routes/home.tsx](/Users/imadev/Dev/repos/a-moi/lianelartiles/app/routes/home.tsx)
- [app/routes/about.tsx](/Users/imadev/Dev/repos/a-moi/lianelartiles/app/routes/about.tsx)
- [app/routes/contact.tsx](/Users/imadev/Dev/repos/a-moi/lianelartiles/app/routes/contact.tsx)
- [app/routes/education.tsx](/Users/imadev/Dev/repos/a-moi/lianelartiles/app/routes/education.tsx)
- [app/routes/projects.tsx](/Users/imadev/Dev/repos/a-moi/lianelartiles/app/routes/projects.tsx)
- [app/routes/resume.tsx](/Users/imadev/Dev/repos/a-moi/lianelartiles/app/routes/resume.tsx)
- [app/routes/skills.tsx](/Users/imadev/Dev/repos/a-moi/lianelartiles/app/routes/skills.tsx)
- [app/routes/blog.tsx](/Users/imadev/Dev/repos/a-moi/lianelartiles/app/routes/blog.tsx)
- [app/routes/blog-post.tsx](/Users/imadev/Dev/repos/a-moi/lianelartiles/app/routes/blog-post.tsx)

These route files are the new application entry layer. Most of them wrap the legacy portfolio components from `src/`.

### Blog Content

- [app/data/blog-posts.js](/Users/imadev/Dev/repos/a-moi/lianelartiles/app/data/blog-posts.js)
  Initial in-repo blog source used by the `/blog` routes.

This is currently static in-repo data. It can later move to MDX, D1, R2, or another CMS without changing the app shell.

### Cloudflare Runtime

- [workers/app.ts](/Users/imadev/Dev/repos/a-moi/lianelartiles/workers/app.ts)
  Cloudflare Worker request handler using React Router server build.
- [wrangler.jsonc](/Users/imadev/Dev/repos/a-moi/lianelartiles/wrangler.jsonc)
  Cloudflare runtime configuration.
- [worker-configuration.d.ts](/Users/imadev/Dev/repos/a-moi/lianelartiles/worker-configuration.d.ts)
  Generated Worker environment types.

### Tooling

- [vite.config.ts](/Users/imadev/Dev/repos/a-moi/lianelartiles/vite.config.ts)
  Vite config with Cloudflare and React Router plugins.
- [react-router.config.ts](/Users/imadev/Dev/repos/a-moi/lianelartiles/react-router.config.ts)
  React Router framework config.
- [tsconfig.json](/Users/imadev/Dev/repos/a-moi/lianelartiles/tsconfig.json)
- [tsconfig.node.json](/Users/imadev/Dev/repos/a-moi/lianelartiles/tsconfig.node.json)
- [tsconfig.cloudflare.json](/Users/imadev/Dev/repos/a-moi/lianelartiles/tsconfig.cloudflare.json)

### Legacy UI Layer

- [src/Components](/Users/imadev/Dev/repos/a-moi/lianelartiles/src/Components)
  Existing portfolio views and reusable UI.
- [src/Styles](/Users/imadev/Dev/repos/a-moi/lianelartiles/src/Styles)
  Existing CSS files used by the preserved UI.
- [src/constants](/Users/imadev/Dev/repos/a-moi/lianelartiles/src/constants)
  Static links, logos, and technology metadata.
- [src/data](/Users/imadev/Dev/repos/a-moi/lianelartiles/src/data)
  Portfolio data, CV files, schools, and other static content.
- [src/images](/Users/imadev/Dev/repos/a-moi/lianelartiles/src/images)
  Icons, logos, SVGs, and graphics used across the site.

The `src/` tree is still the visual/content layer of the portfolio. The `app/` tree is now the routing and server-aware application layer.

### Public Assets

- [public](/Users/imadev/Dev/repos/a-moi/lianelartiles/public)
  Static public files such as `favicon.ico`, `manifest.json`, `robots.txt`, and the Chrome DevTools well-known file.

## Local Development

Install dependencies:

```bash
npm install
```

Start the local development server:

```bash
npm run dev
```

Default local URL:

```text
http://localhost:5173/
```

Useful routes to verify locally:

```text
/
/projects
/resume
/blog
```

## Commands

- `npm run dev`
  Starts the React Router framework dev server on top of Vite and the Cloudflare runtime.
- `npm run build`
  Builds both the client bundle and the server bundle for Cloudflare.
- `npm run preview`
  Builds and previews the production output locally.
- `npm run cf-typegen`
  Regenerates Worker environment types from `wrangler.jsonc`.
- `npm run typecheck`
  Runs Cloudflare type generation, React Router type generation, and TypeScript project checks.
- `npm run deploy`
  Builds the project and deploys it with Wrangler.

## CI Process

GitHub Actions workflows are now committed in:

- [.github/workflows/ci.yml](/Users/imadev/Dev/repos/a-moi/lianelartiles/.github/workflows/ci.yml)
- [.github/workflows/deploy.yml](/Users/imadev/Dev/repos/a-moi/lianelartiles/.github/workflows/deploy.yml)
- [.github/workflows/preview.yml](/Users/imadev/Dev/repos/a-moi/lianelartiles/.github/workflows/preview.yml)
- [.github/workflows/staging.yml](/Users/imadev/Dev/repos/a-moi/lianelartiles/.github/workflows/staging.yml)

The CI pipeline for this codebase is:

```bash
npm ci
npm run typecheck
npm run build
```

Recommended CI responsibilities:

1. Install dependencies with `npm ci`.
2. Generate Cloudflare and router types.
3. Run `npm run typecheck`.
4. Run `npm run build`.
5. Fail the pipeline on any typecheck or build regression.

## Deployment Process

This project now deploys to Cloudflare Workers instead of GitHub Pages.

Current deployment flow:

1. Configure Cloudflare authentication locally or in CI for Wrangler.
2. Ensure `wrangler.jsonc` has the correct Worker name and runtime config.
3. Run:

```bash
npm run deploy
```

What that does:

1. Runs `npm run build`
2. Produces the client/server output in `build/`
3. Publishes the Worker using `wrangler deploy`

GitHub Actions deploy behavior:

1. `CI` runs on pushes to `master` and `develop`, and on pull requests
2. `Preview` runs on pull requests that target `develop` or `master`, and uploads a preview Worker version with a stable alias based on the source branch name
3. `Staging` runs on pushes to `develop` and updates a fixed `staging` preview alias
4. `Deploy` runs on pushes to `master` and on manual dispatch
5. `Deploy` re-runs install, typecheck, and build before publishing

Important deployment notes:

- Routing now uses real paths like `/projects` and `/blog`, not `#/projects`.
- This app should be deployed behind the Worker runtime, not as a static GitHub Pages site.
- Cloudflare compatibility is controlled from [wrangler.jsonc](/Users/imadev/Dev/repos/a-moi/lianelartiles/wrangler.jsonc).
- Any future environment variables for the Worker should be modeled through Wrangler bindings and then regenerated via `npm run cf-typegen`.
- GitHub Actions deployment requires these repository secrets:

```text
CLOUDFLARE_API_TOKEN
CLOUDFLARE_ACCOUNT_ID
```

### Production and Preview URLs

The Worker name is now configured as `lianel`, so the default production URL pattern is:

```text
lianel.artiles.workers.dev
```

Preview URLs are separated from production:

- production: deploys from `master`
- staging: deploys from `develop`
- preview: created from pull requests into `develop` or `master` using `wrangler versions upload --preview-alias`

Preview URL pattern:

```text
<branch-alias>-lianel.artiles.workers.dev
```

Examples:

```text
staging-lianel.artiles.workers.dev
feature-blog-lianel.artiles.workers.dev
fix-contact-lianel.artiles.workers.dev
```

This gives you a Vercel-like split between stable production, a fixed staging environment, and per-branch preview environments, while staying fully on Workers.

### Branching Model

The workflows are aligned to this branching strategy:

- `master`
  production branch
- `develop`
  staging branch
- `feature/*` and `fix/*`
  open pull requests into `develop`
- `release/*` and `hotfix/*`
  open pull requests into `master`

Operational effect:

- pushing to `develop` updates `staging-lianel.artiles.workers.dev`
- pushing to `master` updates `lianel.artiles.workers.dev`
- PRs into `develop` or `master` get their own preview URL

### Agent Safety Rule

Agents and automation should follow the same branch policy:

- do not push directly to `master`
- do not push directly to `develop` unless explicitly requested
- use `feature/*` or `fix/*` for work intended for `develop`
- use `release/*` or `hotfix/*` for work intended for `master`

## Environment and Runtime Notes

- `VITE_FACEBOOK_API_ID` is read from [src/keys.js](/Users/imadev/Dev/repos/a-moi/lianelartiles/src/keys.js) for the share integrations.
- After changing Worker bindings or vars, rerun:

```bash
npm run cf-typegen
```

## Migration Summary

The application was migrated from:

- Create React App
- `react-router-dom` with `HashRouter`
- GitHub Pages deployment

To:

- React Router v7 framework mode
- React 19
- Cloudflare Workers
- SSR-capable architecture
- Route modules in `app/`
- deploy flow through Wrangler

## Next Recommended Steps

1. Add a real CI workflow under `.github/workflows/`.
2. Move blog content from in-repo JS objects to MDX or a data layer such as D1/R2.
3. Decide whether contact form sending should stay client-side or move to a server action.
4. Normalize legacy `.js` files containing JSX over time to reduce Vite compatibility shims.
