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

## 4. Pushing Phase 2 (and later phases)

Since `origin` is already set from Phase 1, do this from inside your existing
local `florida-life-insurance` clone — don't re-unzip into a new folder.
Unzip this Phase 2 download, then copy its `src/`, `public/`, and
`package-lock.json` over the same paths in your existing clone (overwrite
when prompted), then:

```bash
git add .
git commit -m "Phase 2: homepage"
git push
```

If you'd rather just unzip Phase 2 fresh and re-push the whole folder as a
new local repo instead of copying files into your existing clone:

```bash
cd ~/Downloads
unzip florida-life-insurance-phase-2.zip -d florida-life-insurance-phase-2
cd florida-life-insurance-phase-2
npm install
git init
git add .
git commit -m "Phase 2: homepage"
git branch -M main
git remote add origin https://github.com/meandgmedia/life.git
git push -u origin main --force
```

