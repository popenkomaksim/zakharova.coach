# Migrating from react-scripts (CRA) to Vite

Estimate: small, ~half a day to a day. No ejected CRA config, no `process.env.REACT_APP_*` usage,
no SVG-as-component imports — the usual CRA→Vite pain points are absent here.

## Changes needed

1. **`public/index.html` → root `index.html`**
   - Move the file to the project root.
   - Strip `%PUBLIC_URL%` (Vite serves `public/` at `/` automatically).
   - Add `<script type="module" src="/src/index.js"></script>` before `</body>`.

2. **Dependencies**
   - Remove `react-scripts`.
   - Add `vite` + `@vitejs/plugin-react`.
   - Add a `vite.config.js` (base `/`, matching the current root-domain deploy).

3. **`package.json` scripts**
   - `start` → `vite`
   - `build` → `vite build` (keep the existing post-build `cp`/`mkdir` steps for GitHub Pages
     SPA routing — they just operate on the output dir, rename `build/` references to `dist/`
     if the Vite output dir isn't remapped to `build`).
   - `eject` can be dropped.

4. **Media imports** (`.mp4`/`.mov`/`.gif` as modules) — Vite handles these natively as asset
   imports, no config changes needed.

5. **Testing (the real work)**
   - `react-scripts test` (Jest) doesn't come along for free.
   - Option A: keep Jest standalone — needs its own Babel/transform setup since CRA's
     `babel-jest` preset goes away.
   - Option B (recommended): migrate to **Vitest** — pairs cleanly with Vite.
     - Port `jest.transformIgnorePatterns` / `moduleNameMapper` from `package.json` to Vitest
       config equivalents.
     - `setupTests.js`'s `matchMedia` shim carries over unchanged.
     - Touches all 6 existing test files' setup/imports:
       `src/convert.test.js`, `src/App.test.js`, `src/components/FormatCard.test.js`,
       `src/components/Header.test.js`, `src/hooks/useContactRedirects.test.js`,
       `src/hooks/useExchangeRate.test.js`.

6. **ESLint** (low urgency, can defer)
   - `eslintConfig` in `package.json` currently extends CRA's `react-app` / `react-app/jest`;
     without `react-scripts` these presets disappear from live linting during `npm start`.
   - `.eslintrc` already has a standalone airbnb + prettier config — confirm that's the one
     actually in effect, or drop the CRA-specific `eslintConfig` block from `package.json`.

## Risk

Testing migration (#5) is the slowest/riskiest part. Everything else is mechanical.
No blockers identified (no ejected webpack config, no CRA-only APIs in use).
