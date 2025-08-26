# Developers Guide

This repository contains a React + TypeScript library focused on Firebase Authentication, exposing contexts, hooks, and utilities.

## Prerequisites
- Node.js 20
- Yarn 1.x

## Setup
- Install dependencies: `yarn`
- Build: `yarn build` (outputs to `lib/`)
- Test: `yarn test`

## Scripts
- `yarn build`: Compile TypeScript to `lib/`
- `yarn test`: Run Jest (jsdom + ts-jest)

## Project Structure
- `src/`
  - `context/`: `UserContext` and `LoadingContext` providers
  - `hooks/`: `useAuth`, `useUser`, `useLoading`
  - `services/firebase/`: Firebase initialization, providers, error handling
  - `utils/domain/`: runtime env vars and global typings

## Local Testing in a Consumer App
Use a local file dependency from the consumer project:

```sh
yarn add file:'../path/to/@matech/fe-react-lib'
```

Avoid TS path-mapping in consumers; it breaks local testing via file dependencies.

### GitHub Packages .npmrc (local testing)
Add a minimal `.npmrc` in the consumer project root to read this package from GitHub Packages:

```ini
@matech-studios:registry=https://npm.pkg.github.com
//npm.pkg.github.com/:_authToken=${GITHUB_PACKAGES_TOKEN}
```

- Use a GitHub Personal Access Token (classic) with `read:packages` scope as `GITHUB_PACKAGES_TOKEN`.
- You can set the token in your shell env or your CI secret store.

## Environment Configuration
Consumers must define `window.__RUNTIME_CONFIG__` before app mount with these keys:
- `FIREBASE_API_KEY`, `FIREBASE_AUTH_DOMAIN`, `FIREBASE_PROJECT_ID`, `FIREBASE_STORAGE_BUCKET`, `FIREBASE_MESSAGING_SENDER_ID`, `FIREBASE_APP_ID`, `FIREBASE_MEASUREMENT_ID`.

## CI / CD and Publishing
- CI (`continuous-integration.yml`) runs tests and coverage on PRs.
- CD (`continuous-deployment.yml`) bumps version based on branch prefix and publishes to npm.
  - Branch naming:
    - `feature/*` → minor version bump
    - `bugfix/*` or `hotfix/*` → patch version bump
  - Secrets required in the repository:
    - `VERSION_DEPLOY_TOKEN`: used for pushing version bumps back to `main`.
    - `NPM_TOKEN`: npm token with publish rights (for public packages).

## Releasing Locally (optional)
- Ensure `publishConfig.access` is `public` and registry is `https://registry.npmjs.org/`.
- `npm publish --access public` (requires being logged in with an account that has publish rights).

## Notes / TODO
- A test references `process.env` in `envVars.test.ts`; the library currently sources from `window.__RUNTIME_CONFIG__`. This will be addressed separately.
- Jest config references `svg-name-mapper.js` which is not present; consider adding or removing the mapping.
