# Release Creation Workflow

This document outlines the process for creating a new release branch, a pull request (PR), and monitoring its deployment.

## 1. Determine Release Branch Name

First, check for existing release branches for the current date. The format should be `release/YYYY/MM/DD` or `release/YYYY/MM/DD-vX` for subsequent releases on the same day.

**Action:**

- Get current date (YYYY/MM/DD).
- List remote branches: `git branch -r | grep 'release/YYYY/MM/DD'`
- If branches exist, increment the version (e.g., `release/2025/10/18-v2`). Otherwise, use `release/YYYY/MM/DD`.

## 2. Create Release Branch

The release branch must be created from `develop`.

**Action:**

- Ensure you are on the `develop` branch: `git checkout develop`
- Pull latest changes: `git pull origin develop`
- Create new release branch: `git checkout -b <release-branch-name>`

## 3. Create Pull Request (PR) to Master

Create a pull request from the newly created release branch to `master`.

**Action:**

- Push the release branch to remote: `git push -u origin <release-branch-name>`
- Open a PR on GitHub from `<release-branch-name>` to `master`.
- The PR description should include:
  - A short release summary.
  - A list of the main changes included.
  - A summarized list of instructions/steps to test the functionalities and/or fixes to be deployed.

## 4. Monitor CI/CD Pipeline

After creating the PR, the agent will monitor the pipeline until completion. This process should NOT be sent to the background, and should remain interactive.

**Action:**

- Use this repository path: `cd /Users/imadev/Dev/repos/a-moi/lianelartiles`.
- Watch the latest workflow run for the release PR with GitHub CLI.
- Continuously monitor until all required checks pass.

Expected workflow behavior in this repository:

- `CI` validates build and typecheck.
- `Preview` runs for pull requests.
- `Deploy` only runs after merge/push to `master`.
- `Staging` only runs after push to `develop`.

## 5. Handle Errors (Fix Branches and Recursive Monitoring)

In case of any pipeline errors in the release PR, a fix branch and PR must be created.

**Action:**

- If the release pipeline fails, create a fix branch from the _current release branch_ (e.g., `fix/issue-description` from `release/YYYY/MM/DD`).
- Create a new PR from the fix branch _targeting the release branch_ (e.g., `fix/issue-description` to `release/YYYY/MM/DD`).
- The agent will recursively monitor the CI/CD pipeline for both the fix PR and the main release PR until all pass successfully.
- Once the fix PR is merged into the release branch, the release PR's pipeline should be re-run and monitored.

**Example Flow on Error:**

1. `release/2025/10/18` -> `master` PR is created.
2. Pipeline fails on `release/2025/10/18` PR.
3. Create `fix/database-connection` branch from `release/2025/10/18`.
4. Create PR from `fix/database-connection` to `release/2025/10/18`.
5. Monitor `fix/database-connection` PR pipeline. If it fails, repeat steps 3-5 for new nested fix.
6. Once `fix/database-connection` PR passes and merges, re-run `release/2025/10/18` PR pipeline and monitor recursively until success.

## Branch Policy For This Repository

- `master` is production.
- `develop` is staging.
- `feature/*` and `fix/*` branches should normally target `develop`.
- `release/*` and `hotfix/*` branches should target `master`.
- Agents should not push directly to `master`.
- Agents should not push directly to `develop` unless the user explicitly requests it.

## Notes About Missing Workflow Files

- `pushup.md` was not found in this repository during review.
- If a push workflow exists outside the repo or is added later, it should follow the same branch policy described above.
