# Sameer Malik — Developer Portfolio

A personal portfolio site for Sameer Malik (Cloud & AI Applications Engineer),
built with Next.js and Tailwind CSS. It showcases featured projects, work and
education history, a curated list of GitHub repositories, and contact details,
with light/dark theme support.

## Tech stack

- **[Next.js](https://nextjs.org/)** (Pages Router) — React framework
- **[React](https://react.dev/)** 18
- **[Tailwind CSS](https://tailwindcss.com/)** 3 — styling
- **[next-themes](https://github.com/pacocoursey/next-themes)** — light/dark mode
- **[react-rough-notation](https://github.com/JeromeFitz/react-rough-notation)** — hero text annotations

## Getting started

Requires Node.js 18.18+ (Next.js 15).

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Scripts

| Command         | Description                        |
| --------------- | ---------------------------------- |
| `npm run dev`   | Start the dev server               |
| `npm run build` | Create a production build          |
| `npm run start` | Serve the production build locally |

## Configuration

All personal content lives in a single file: **`constants/data.js`**. Edit it to
change the name, designation, contact info, projects, experience, social links,
and the repositories shown in the "Latest Code" section.

The "Latest Code" list is a **static array** (`userData.repos`) rather than a live
GitHub API call — this keeps the site free of any runtime dependency that could
rate-limit or fail at request time. Update that array by hand to control which
repositories appear.

The contact section uses a plain `mailto:` link (no backend or form handler).

## Project structure

```
components/    UI components (Hero, Navbar, Footer, Projects, Experience, etc.)
constants/     data.js — all site content
pages/         Next.js routes (index, about, projects, experience, contact)
public/        Images and static assets
styles/        Global CSS and fonts
```

## Deployment

The site is a standard Next.js app and deploys to
[Vercel](https://vercel.com/) with zero configuration:

1. Push the repository to GitHub.
2. Import the project in Vercel (or run `vercel` from the CLI).
3. Vercel auto-detects Next.js, runs `next build`, and deploys.

No environment variables are required.

## Credits

Originally based on a developer-portfolio template by Manu Arora, customized for
Sameer Malik.
