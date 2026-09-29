# BLACKBOX // Cybersecurity Operating System

> Premium portfolio of **Yadunanda Kumar Murari** — Cybersecurity Student · CTF Player · Aspiring SOC Analyst

A production-ready, static-export Next.js portfolio designed to feel like a classified cyber laboratory rather than a generic student site.

![Theme](https://img.shields.io/badge/theme-cyberpunk%20HUD-00f0ff?style=flat-square)
![Stack](https://img.shields.io/badge/stack-Next.js%2014%20%7C%20TypeScript%20%7C%20Tailwind%20%7C%20Framer%20Motion-00ff9d?style=flat-square)
![Deploy](https://img.shields.io/badge/deploy-GitHub%20Pages-181717?style=flat-square)

---

## Features

- **Boot sequence** with terminal logs and Access Granted animation
- **OS-style module navigation** (Identity, Arsenal, Mission Logs, Certs, Timeline, Threat Intel, Contact Terminal)
- **Expandable mission dossiers** for projects
- **Interactive contact terminal** (`help`, `whoami`, `github`, `sudo`, …)
- **Easter eggs**: Konami code → Matrix mode + secret flag; `sudo()` in console
- **Cursor spotlight**, grid background, scanlines, glass panels
- **Fully static** — compatible with GitHub Pages
- **Mobile-first** responsive layout
- **SEO** metadata + accessible focus styles

---

## Tech Stack

| Layer        | Choice                          |
|-------------|----------------------------------|
| Framework   | Next.js 14 (App Router) + TypeScript |
| Styling     | Tailwind CSS                     |
| Animation   | Framer Motion                    |
| Icons       | Lucide React                     |
| Export      | `output: 'export'` (static)      |

---

## Quick Start

```bash
# Clone
git clone https://github.com/yadunandakumar/blackbox-portfolio.git
cd blackbox-portfolio

# Install
npm install

# Develop
npm run dev
# → http://localhost:3000

# Production build (static)
npm run build
# Output: /out
```

---

## GitHub Pages Deployment

### 1. Repository setup

1. Create a repo named `blackbox-portfolio` (or update `basePath` in `next.config.js` to match your repo name).
2. Push this project to the `main` branch.

### 2. Automatic deployment (recommended)

A GitHub Actions workflow is included at `.github/workflows/deploy.yml`.

1. Go to **Settings → Pages**.
2. Under **Build and deployment**, set Source to **GitHub Actions**.
3. Push to `main` — the workflow builds and deploys the `/out` folder.

### 3. Manual deploy

```bash
npm run build
# Upload contents of /out to the gh-pages branch or Pages source
```

### Base path

If your site lives at `https://yadunandakumar.github.io/blackbox-portfolio/`, the current `next.config.js` already sets:

```js
basePath: '/blackbox-portfolio',
assetPrefix: '/blackbox-portfolio/',
```

For a custom domain or user/org site root, set both to `''`.

---

## Project Structure

```
blackbox-portfolio/
├── src/
│   ├── app/
│   │   ├── layout.tsx
│   │   └── page.tsx              # Main OS shell
│   ├── components/
│   │   ├── hero/                 # BootSequence, Hero
│   │   ├── identity/
│   │   ├── arsenal/
│   │   ├── missions/
│   │   ├── certs/
│   │   ├── timeline/
│   │   ├── threat/
│   │   ├── contact/
│   │   ├── layout/               # Navigation
│   │   └── effects/              # CursorSpotlight, MatrixRain
│   ├── lib/utils.ts              # Profile data, skills, projects
│   └── styles/globals.css
├── public/
│   └── assets/                   # Resume PDF, images
├── .github/workflows/deploy.yml
├── next.config.js
├── tailwind.config.ts
└── package.json
```

---

## Customization

All content lives in `src/lib/utils.ts`:

- `PROFILE` — name, links, summary, education
- `SKILLS` — arsenal categories
- `PROJECTS` — mission dossiers
- `CERTS` — certification cards
- `TIMELINE` — journey events

Update links, add missions, or extend the terminal commands in `ContactTerminal.tsx`.

---

## Easter Eggs

| Trigger | Effect |
|---------|--------|
| Konami code (↑↑↓↓←→←→BA) | Matrix rain + secret flag toast |
| Browser console `sudo()` | Elevated message + flag |
| View page source | Hidden HTML comment with CTF flag |

Flag: `BLACKBOX{y0u_f0und_th3_s3cr3t_fl4g_0f_th3_0s}`

---

## License

Personal portfolio — code may be used as reference with attribution.

---

**BLACKBOX** — Stay curious. Stay sharp.
