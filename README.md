# Mini Expense Tracker

A small Next.js expense tracker for a college DevOps practicum.

## Run locally

```bash
npm install
npm run dev
```

The app supports adding an expense, deleting an expense, and showing the total. Expenses are kept in browser memory and are intentionally not persisted.

## Checks

```bash
npm run lint
npm test
npm run audit
npm run build
```

The GitHub Actions workflow runs these checks on every push and pull request. A push to `main` deploys only after all checks pass.

## Vercel deployment

Create a Vercel project linked to this repository, then add these GitHub repository secrets:

- `VERCEL_TOKEN`
- `VERCEL_ORG_ID`
- `VERCEL_PROJECT_ID`

The deployment job in `.github/workflows/ci.yml` uses those secrets to deploy successful pushes to `main`.
