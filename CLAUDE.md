# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

A single marketing/landing site (Ukrainian language) for a trail-running/ski-mountaineering coach, built with Create React App. There is no backend — pricing, event data, and content come from static JS/JSON or a public Google Sheet.

## Commands

- `npm start` — run dev server (CRA, localhost:3000)
- `npm run build` — production build to `build/`, then copies `build/index.html` to `build/404.html` (needed for client-side routing on GitHub Pages)
- `npm test` — CRA/Jest test runner in watch mode; pass a file/name pattern as an extra arg to scope it (e.g. `npm test -- App.test`), or `CI=true npm test` for a single non-watch run
- `npm run deploy` — publishes `build/` to GitHub Pages via `gh-pages` (runs `predeploy`/`build` first)
- Linting (config in `.eslintrc`, extends `airbnb` + `prettier`) runs via CRA's internal `eslint-webpack-plugin` during `npm start` / `npm run build` — there's no root babel config, so a bare `npx eslint src` fails on every file with a JSX parsing error; don't use it standalone

## Architecture

- **Routing**: `src/index.js` sets up a `react-router-dom` `createBrowserRouter` with four independent top-level pages — `/` (`App.js`), `/project10` (`Project10.js`), `/skitour-chechlist` (`SkiTourList.js`), `/calendar` (`Calendar.js`). Each page is a self-contained component, not composed from shared layout beyond `components/Header.js`.
- **`App.js`** is the main landing page and is intentionally large/monolithic (one file with all sections: hero, bio, training principles, achievements, pricing plans, extra services, contact CTAs). New sections are typically added inline here rather than split into files, following the existing pattern — but reuse the small components under `src/components/` (`PlanCard`, `ExtraServiceCard`, `TransparentBoxText`, `TransparentBoxText`-style hero blocks) instead of duplicating markup.
- **Upcoming events**: `App.js` fetches a published Google Sheet as TSV (`fetchCSVData`), parses it with a hand-rolled `parseTSV`, and filters out past events with `filterOldEvents`. There is no backend API — updating "Майбутні події" means editing the linked Google Sheet, not the code.
- **Pricing**: EUR prices are hardcoded per plan/service in `App.js` and converted to UAH via `src/convert.js`, which applies a hardcoded `rateEURtoUAH` constant. Update that constant when the exchange rate changes (see recent commit history for the pattern).
- **Contact/conversion actions**: `redirectToTelegram` / `redirectToWhatsup` handlers fire Google Ads conversion events via the global `gtag` (loaded outside the bundle, hence the `eslint-disable` on those calls) before redirecting to `t.me` / `wa.me` links. Reuse these handlers rather than adding new ad-hoc redirect logic.
- **Styling**: mix of `styled-components` (for one-off styled icons/wrappers) and inline `style={}` props on Ant Design (`antd`) components — there is no CSS module/Tailwind system. `App.css` / `index.css` hold minimal global styles. `@fontsource/montserrat` is imported directly in components that need the font loaded.
- **Media assets**: large `.mp4`/`.mov`/`.gif` files live directly under `src/` and are imported like modules (e.g. `import PolinaRun from "./polina_run.mp4"`) so CRA/webpack fingerprints them; static images referenced by plain string path (e.g. `./polina.jpg`) instead live in `public/`.
- **`texts.json`**: an existing but currently unused i18n-style string table (`src/texts.json`). Text in `App.js` is inlined directly, not sourced from this file — be aware of the mismatch if asked to internationalize.
- **Deployment**: static GitHub Pages site behind a custom domain (`CNAME` = `zakharova.coach`), with `.nojekyll` to prevent Jekyll processing. `homepage` in `package.json` and the router `basename: "/"` assume the site is served from the domain root.
