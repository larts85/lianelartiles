# Repository Guidelines

## Project Structure & Module Organization
This repository is a React Router 7 portfolio site deployed to Cloudflare Workers. 
- Application setup and routing live in `app/`.
- UI components, shared styles, and legacy logic live in `src/`.
- Cloudflare worker entry point is in `workers/`.
- Static files live in `public/`.

## Build, Test, and Development Commands
- `npm install`: install dependencies.
- `npm run dev`: run the local development server (React Router).
- `npm test`: launch the test runner.
- `npm run build`: create the production bundle.
- `npm run deploy`: build and deploy to Cloudflare using Wrangler.

## Coding Style & Naming Conventions
Follow React 19 standards and React Router 7 conventions. 
- Use functional components.
- Prefer TypeScript for new files in `app/`.
- Maintain legacy `.js` and `.jsx` compatibility in `src/`.
- Indentation: 2 spaces.

## Testing Guidelines
Testing is set up with Jest and React Testing Library. 
Run `npm test` before opening a PR.

## Commit & Pull Request Guidelines
Keep commits focused and descriptive. Follow [type]/[descriptive-name] for branches.
Pull requests should include a brief summary and link any relevant issues.

## Deployment & Configuration Notes
The app uses Cloudflare Workers as its host. Configuration is handled in `wrangler.jsonc` and `react-router.config.ts`.

