# Agentfolio — Premium Developer Portfolio

A premium, visually distinctive personal developer portfolio for Andri A.W (Domoiki). Built with Next.js App Router, TypeScript, Tailwind CSS, and a three-theme design system.

## Technology Stack

- Next.js 15 (App Router)
- React 19 + TypeScript
- Tailwind CSS v4
- Framer Motion (animations)
- Lucide React (icons)

## Requirements

- Node.js 18+ (tested on v24.21.0)
- npm 9+

## Installation

```bash
npm install
```

## Development

```bash
npm run dev
```

Open http://localhost:3000

## Build

```bash
npm run build
```

## Lint

```bash
npm run lint
```

## Type Check

```bash
npm run type-check
```

## Project Structure

```
app/                - Next.js App Router pages and layout
components/layout/  - Navigation, footer
components/sections/ - Hero, Bento, About, Skills, Projects, Focus, Contact
components/projects/ - Project cards, explorer, filters
components/ui/      - Theme provider, command palette, buttons
public/             - Static assets, robots.txt, sitemap.xml, favicon
data/               - Typed content files (profile, projects, skills)
```

## Editing Content

Edit the TypeScript data files in `data/` to update profile info, projects, skills, and focus updates. No database or CMS is required.

## Themes

The site supports Dark, Light, and System themes. Preferences are saved to `localStorage` and restored on refresh. The theme switcher is in the navigation bar.

## Command Palette

Press `Ctrl+K` (Windows/Linux) or `Cmd+K` (macOS) to open the command palette. Use arrow keys and Enter to navigate and execute actions.

## Deployment Notes

This project is configured for future Vercel deployment (`output: 'standalone'`) but remains local-only. No public deployment was performed.

## Troubleshooting

- If the server does not start, check that port 3000 is not already in use.
- Ensure `node_modules` is installed with `npm install`.
- Theme persistence requires JavaScript; the site works without it.
