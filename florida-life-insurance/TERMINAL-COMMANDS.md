# Terminal Commands — Phase 1

Run these in order. Replace `~/Downloads` with wherever the zip actually
lands on your machine.

## 1. Unzip and move into the project

```bash
cd ~/Downloads
unzip florida-life-insurance-phase-1.zip -d florida-life-insurance
cd florida-life-insurance
```

## 2. Install dependencies and run it locally

```bash
npm install
npm run dev
```

Open **http://localhost:4321** — you should see the placeholder homepage
(navy/coral/teal design system, header, footer, one card grid). Press
Ctrl+C to stop the dev server when you're done looking.

Optional — check the production build works too:

```bash
npm run build
npm run preview
```

## 3. Push Phase 1 to GitHub

Your repo (`https://github.com/meandgmedia/life`) is currently empty, so
this is a first push. Run from inside the `florida-life-insurance` folder:

```bash
git init
git add .
git commit -m "Phase 1: project foundation and design system"
git branch -M main
git remote add origin https://github.com/meandgmedia/life.git
git push -u origin main
```

If you're prompted for credentials and don't have a GitHub CLI/token set up,
either run `gh auth login` first (if you have the GitHub CLI installed), or
create a personal access token at
https://github.com/settings/tokens and use it as the password when prompted.

## 4. Later phases (once you approve Phase 1)

Each future phase will be delivered the same way — a new zip plus its own
command block. Since `origin` is already set after step 3, pushing a later
phase from a fresh unzip of that phase's folder will look like:

```bash
cd path/to/new-phase-folder
git init
git add .
git commit -m "Phase 2: homepage"
git branch -M main
git remote add origin https://github.com/meandgmedia/life.git
git push -u origin main --force
```

(The `--force` is only needed the first time you replace an already-pushed
`main` with a freshly re-initialized local repo. Once you're working out of
one ongoing local clone instead of re-unzipping each phase, you'll just use
plain `git add . && git commit -m "..." && git push` — happy to switch you
to that workflow starting next phase if you'd prefer it over zip files.)
