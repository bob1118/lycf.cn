# AGENTS.md

Static, bilingual (English / Chinese) single-page B2B marketing site for lycf.cn (Jinhua Luoyi Textile Co., Ltd.). Astro 5 + Tailwind 3. No backend, no database, no tests.

## Commands

- Install: `npm ci` (CI uses Node 22; `package-lock.json` is authoritative, so avoid `npm install`).
- Dev server: `npm run dev` (`npm start` is an alias).
- Build: `npm run build` → `dist/`. This is the only verification step available.
- Preview built output: `npm run preview` (run `npm run build` first).
- There is no test, lint, formatter, or typecheck script. `tsconfig.json` extends `astro/tsconfigs/strict`, but `astro check` is not installed. Don't invent these commands; a successful build is the check.

## Architecture

- One page: `src/pages/index.astro` composes section components from `src/components/`. Layout shell is `src/layouts/Layout.astro`.
- Content lives in `src/data/siteContent.ts`: company info, nav, products (`productsData`), category tabs, factory stats, workshop gallery, OEM steps, certifications, FAQ. Change copy and product data there, not in components.
- User-facing text is `BilingualText` (`{ en, zh }`). Components render both with `<span class="lang-en">` and `<span class="lang-zh">`. CSS in `src/styles/global.css` shows one based on `html[data-lang]`. Any new visible text needs both languages.
- Language resolution: `?lang=zh|en` URL param, then `localStorage` key `lycf_lang`, then English. The inline script in `Layout.astro` `<head>` sets `data-lang` before paint. Keep it inline and in `<head>` to avoid flicker.
- `window.setSiteLanguage` (also in `Layout.astro`) updates `data-placeholder-en/zh` placeholders, `data-lang-btn` toggle styles, and `document.title`. Use these data attributes for language-dependent placeholders or other attributes.
- Product images are in `public/images/` with Chinese filenames and spaces. Paths are referenced from `siteContent.ts`; keep them in sync when renaming files.
- Contact form (`ContactRfq.astro`) has no server. Submit builds a `mailto:service@lycf.cn` link. Don't add a backend without asking.
- Tailwind: custom `brand` and `gold` palettes, `font-display`, and `shadow-soft`/`shadow-card` are in `tailwind.config.mjs`. `@tailwind` directives and the base layer live in `src/styles/global.css`, because the integration is configured with `applyBaseStyles: false`.
- Output is static (`output: 'static'`) with no `base` path. The site serves from the custom domain in `public/CNAME` (`lycf.cn`). Canonical, OG, and JSON-LD URLs hardcode `https://lycf.cn` in `Layout.astro`, and `site` is set in `astro.config.mjs`. Update all of them together if the domain changes.

## Deploy

- `.github/workflows/deploy.yml` builds on every push to `main` (and manual dispatch) and deploys to GitHub Pages. Pushing to `main` is a production deploy; run `npm run build` locally first.
- `public/readme.md` is an early Chinese brief for the site, not a source of truth. Trust `siteContent.ts` and the components.
