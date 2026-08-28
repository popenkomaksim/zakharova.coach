# CLAUDE.md

Guidance for Claude Code when working in this directory.

## What this is

A standalone, dependency-free Node script (`gen-contours.js`) that generates topographic-style
contour-line SVGs, used as decorative background textures elsewhere on the site (e.g.
`src/components/donetsk.svg`, referenced from `src/App.css`'s `body` background). It is **not**
part of the CRA build — nothing in `src/` imports or runs this script; it's a one-off generator
you run manually and copy the output from.

## How it works

1. **Elevation field** — a synthetic scalar height function built from a sum of signed 2D
   Gaussians (`basePeaks`): positive `amp` = a hill/peak, negative `amp` = a valley/trough. The
   field is sampled on a grid (`STEP` spacing).
2. **Marching squares** — contour segments are extracted at `LEVELS` evenly-spaced elevation
   thresholds. Because contours are level sets of one continuous scalar field, lines at different
   levels are mathematically guaranteed to never cross — this is the whole reason the script
   exists instead of hand-drawing paths.
3. **Stitching** — raw per-cell segments are joined into polylines/closed loops by matching shared
   endpoints.
4. **Simplify + smooth** — polylines are simplified (Douglas-Peucker) then converted to smooth
   Catmull-Rom→cubic-Bezier SVG `<path>` data, so output uses curves, not jagged polylines.
5. **Emit** — each path gets a stroke color/width/opacity and is written out as one flat SVG.

Run it with plain Node, no install needed:

```sh
node gen-contours.js > output.svg
```

Stats (`levels=… paths=… totalPts=… bytes=…`) print to stderr; the SVG itself goes to stdout.

## Key tunables (top of file)

- `SCALE` — overall coordinate/stroke-width multiplier.
- `WIDTH_MULT` — extra horizontal stretch applied only to canvas width (currently `1.15`, i.e.
  15% wider than a plain 16:10 canvas), independent of `SCALE`.
- `BASE_W` / `BASE_H` — the authoring space (220×160) that `basePeaks` coordinates are written in;
  they get scaled per-axis (`fx`, `fy`) to fill the real `W`×`H` canvas. **Always add new
  peaks/valleys in this base space**, not final pixel space.
- `STEP` — grid resolution for marching squares.
- `LEVELS` — number of contour thresholds. This is the main "how many isohypses" knob; it directly
  controls line density/clutter.
- `basePeaks` — the terrain itself (see below).
- Near the bottom of the level loop: stroke color alternates between two light tan tones, and
  `strokeWidth` is `(0.5–0.8 × SCALE) / 3`, capped at `3`. There is currently **no bold "index
  contour"** treatment — every line renders the same light weight, deliberately, since this output
  is used as a full-page tiled background where bold lines would look too busy repeated.

## Terrain design history

This script has been repointed at three different terrains over its life; only the current
`basePeaks` array matters for output, but the shape of each is worth knowing if asked to build a
new one or revert:

1. **Carpathian ridge arc** — a sweeping chain of ~14 similarly-sized peaks along a gentle arc
   across the canvas, mimicking the High/Low Tatras and Transylvanian Alps.
2. **Everest massif** — one dominant summit (amp 150) joined by saddle/col Gaussians to Lhotse,
   Nuptse, and Changtse, plus satellite peaks (Ama Dablam, Pumori, Cho Oyu, Makalu) and glacier
   valleys (Khumbu, Rongbuk, Gokyo) carved as negative-amplitude troughs. Used `LEVELS = 60` so the
   huge elevation range packed dozens of rings onto the summit while foothills stayed sparse.
3. **Donetsk Ridge steppe (current)** — no dominant peak at all: 7 broad, low, large-sigma hills
   (amp 18–32) spanning large fractions of the canvas, a shallow river-valley/balka trough
   meandering across the width (negative amp, chained Gaussians), and 6 small, steep "terrikony"
   cones (coal-mine spoil heaps — a real regional landmark) as the one sharp feature amid otherwise
   gentle terrain. The canvas here is meant to represent a much larger, much flatter real-world
   area (~20km × 12.5km) than the Everest crop, which is why it needs far fewer isohypses to read
   correctly at the same `LEVELS` scale as the mountain fields.

To build a new terrain, replace `basePeaks` (and the comment above it) and re-run — everything
downstream (marching squares, stitching, smoothing, output) is terrain-agnostic.

## Deploying output into the site

The script has no automatic wiring into the app. After changing it:

```sh
node gen-contours.js > ../../src/components/donetsk.svg
```

then check it in the browser (`npm start`) — the file is used as a `background-repeat: repeat`
tile in `src/App.css`, so check for visible seams/tiling artifacts, not just the pattern in
isolation.

## Gotchas

- Negative `amp` carves a valley (a Gaussian **dip**), not merely "a shorter hill" — that's how
  river valleys and glacier troughs are built.
- `LEVELS` interacts with the *global* elevation range: one very tall peak absorbs most of the
  contour budget automatically (equal-interval contouring), making everything else sparse without
  any per-feature tuning. This is by design, not a bug to fix.
- Small closed loops below a size threshold are dropped as noise (the bbox check before pushing
  into `pathsOut`, currently `2.4 * SCALE` units). If small intentional features (like terrikony)
  start vanishing, that threshold is the first place to check.
- `W` is `Math.round(...)`ed deliberately — floating-point `WIDTH_MULT` multiplication produces
  ugly values like `1839.9999999999998` in the SVG `viewBox` otherwise.
