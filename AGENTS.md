# Repository Guidelines

## Project context

Read the existing package manifest, repository documentation, and touched files before making changes. Keep application-specific conventions local to this repository.

## Development and validation

Use the package manager and scripts declared by `package.json`. Run the narrowest relevant checks, then the repository's full lint, typecheck, test, and build commands when practical. Report missing scripts instead of inventing them.

## GitHub delivery

Work from a feature or fix branch created from the repository's integration branch. Keep commits focused, preserve unrelated changes, and open a PR against the appropriate integration branch using the repository template. Do not merge, deploy, or publish without explicit authorization.

## AI assistant configuration

`.ai-assistant/` is the repository's tool-neutral source for reusable commands, rules, and skills. Keep instructions generic and scoped to this repository; do not add references to unused IDEs, providers, design systems, MCP servers, credentials, logs, or chat exports.
