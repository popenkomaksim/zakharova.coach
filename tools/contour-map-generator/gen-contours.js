// Generates a topographic contour map of a Donetsk-Ridge-like steppe from a
// synthetic elevation field, using marching squares so contour lines at
// different levels can never cross.

const SCALE = 5; // 5x the previous 320x200 canvas, same 16:10 ratio
const WIDTH_MULT = 1.15; // 15% wider than the 16:10 canvas, height unchanged
const W = Math.round(320 * SCALE * WIDTH_MULT), H = 200 * SCALE;
const BASE_W = 220, BASE_H = 160; // original design-space the peak layout below was authored in
const STEP = 0.5 * SCALE; // grid spacing -> resolution (scaled to match canvas)
const COLS = Math.round(W / STEP) + 1;
const ROWS = Math.round(H / STEP) + 1;

// ---- Elevation field: Donetsk Ridge steppe ----
// The canvas now stands for a much larger, much flatter area (~20km x 12.5km)
// than the Everest crop: gentle, broad rolling upland (the real Donetsk kryazh
// tops out around 300-350m over tens of km, not thousands of meters over a
// few km), a couple of shallow river-valley/balka troughs meandering across
// it, and a scatter of small, steep terrikony (coal-mine spoil-heap) cones —
// the one distinctly un-gentle feature of the region. No dominant summit, no
// saddles: just wide, slow elevation change, which is why it needs far fewer
// contour levels than the Everest field to look right.

function gauss(x, y, cx, cy, sx, sy, amp) {
  const dx = (x - cx) / sx;
  const dy = (y - cy) / sy;
  return amp * Math.exp(-(dx * dx + dy * dy));
}

// All control points (x, y), authored in BASE_W x BASE_H space, then scaled
// per-axis to fill the actual canvas below.
const basePeaks = [
  // --- broad, low rolling upland (each hill spans a large fraction of the canvas) ---
  { x: 40, y: 50, sx: 55, sy: 45, amp: 26 },
  { x: 130, y: 40, sx: 60, sy: 42, amp: 32 },
  { x: 190, y: 90, sx: 50, sy: 48, amp: 24 },
  { x: 70, y: 120, sx: 58, sy: 40, amp: 20 },
  { x: 150, y: 130, sx: 55, sy: 44, amp: 28 },
  { x: 10, y: 110, sx: 45, sy: 40, amp: 18 },
  { x: 220, y: 40, sx: 48, sy: 42, amp: 22 },

  // --- shallow river valley / balka, meandering across the whole width ---
  { x: 20, y: 90, sx: 20, sy: 14, amp: -14 },
  { x: 60, y: 100, sx: 22, sy: 15, amp: -16 },
  { x: 100, y: 106, sx: 24, sy: 16, amp: -15 },
  { x: 140, y: 96, sx: 22, sy: 15, amp: -14 },
  { x: 180, y: 80, sx: 20, sy: 14, amp: -12 },
  { x: 214, y: 70, sx: 18, sy: 13, amp: -10 },

  // --- terrikony: small, steep coal-spoil cones scattered across the steppe ---
  { x: 55, y: 35, sx: 4, sy: 4, amp: 14 },
  { x: 95, y: 70, sx: 3.5, sy: 3.5, amp: 12 },
  { x: 160, y: 55, sx: 4, sy: 4, amp: 15 },
  { x: 120, y: 120, sx: 3.5, sy: 3.5, amp: 11 },
  { x: 200, y: 130, sx: 4, sy: 4, amp: 13 },
  { x: 30, y: 145, sx: 3.5, sy: 3.5, amp: 10 },
];

const fx = W / BASE_W, fy = H / BASE_H;
const peaks = basePeaks.map((p) => ({
  x: p.x * fx,
  y: p.y * fy,
  sx: p.sx * fx,
  sy: p.sy * fy,
  amp: p.amp,
}));

function elevation(x, y) {
  let v = 0;
  for (const p of peaks) v += gauss(x, y, p.x, p.y, p.sx, p.sy, p.amp);
  // faint, broad-wavelength steppe undulation (subtler and slower than the mountain fields)
  v += 1.5 * Math.sin(x / (32 * SCALE) + 0.6) * Math.cos(y / (36 * SCALE) - 0.3);
  v += 1.0 * Math.sin(x / (22 * SCALE) - y / (28 * SCALE) + 1.1);
  return v;
}

// ---- Sample grid ----
const field = new Float64Array(COLS * ROWS);
let vmin = Infinity, vmax = -Infinity;
for (let j = 0; j < ROWS; j++) {
  for (let i = 0; i < COLS; i++) {
    const x = i * STEP, y = j * STEP;
    const v = elevation(x, y);
    field[j * COLS + i] = v;
    if (v < vmin) vmin = v;
    if (v > vmax) vmax = v;
  }
}
const at = (i, j) => field[j * COLS + i];

// ---- Marching squares ----
function marchingSquares(level) {
  // returns array of segments [[x1,y1],[x2,y2]]
  const segs = [];
  const lerp = (p1, p2, v1, v2) => p1 + ((level - v1) / (v2 - v1)) * (p2 - p1);

  for (let j = 0; j < ROWS - 1; j++) {
    for (let i = 0; i < COLS - 1; i++) {
      const x0 = i * STEP, x1 = (i + 1) * STEP;
      const y0 = j * STEP, y1 = (j + 1) * STEP;
      const a = at(i, j);       // top-left
      const b = at(i + 1, j);   // top-right
      const c = at(i + 1, j + 1); // bottom-right
      const d = at(i, j + 1);   // bottom-left

      let state = 0;
      if (a > level) state |= 8;
      if (b > level) state |= 4;
      if (c > level) state |= 2;
      if (d > level) state |= 1;
      if (state === 0 || state === 15) continue;

      const T = () => [lerp(x0, x1, a, b), y0];
      const R = () => [x1, lerp(y0, y1, b, c)];
      const B = () => [lerp(x0, x1, d, c), y1];
      const L = () => [x0, lerp(y0, y1, a, d)];

      const center = (a + b + c + d) / 4;

      switch (state) {
        case 1: segs.push([L(), B()]); break;
        case 2: segs.push([B(), R()]); break;
        case 3: segs.push([L(), R()]); break;
        case 4: segs.push([T(), R()]); break;
        case 5:
          if (center > level) { segs.push([L(), T()]); segs.push([B(), R()]); }
          else { segs.push([L(), B()]); segs.push([T(), R()]); }
          break;
        case 6: segs.push([T(), B()]); break;
        case 7: segs.push([L(), T()]); break;
        case 8: segs.push([T(), L()]); break;
        case 9: segs.push([T(), B()]); break;
        case 10:
          if (center > level) { segs.push([T(), R()]); segs.push([L(), B()]); }
          else { segs.push([T(), L()]); segs.push([B(), R()]); }
          break;
        case 11: segs.push([T(), R()]); break;
        case 12: segs.push([R(), L()]); break;
        case 13: segs.push([R(), B()]); break;
        case 14: segs.push([B(), L()]); break;
        default: break;
      }
    }
  }
  return segs;
}

// ---- Stitch segments into polylines/loops ----
function keyOf(pt) {
  return Math.round(pt[0] * 200) + ',' + Math.round(pt[1] * 200);
}

function stitch(segs) {
  const map = new Map(); // key -> list of {seg, endIdx}
  segs.forEach((seg, idx) => {
    for (const endIdx of [0, 1]) {
      const k = keyOf(seg[endIdx]);
      if (!map.has(k)) map.set(k, []);
      map.get(k).push({ idx, endIdx });
    }
  });

  const used = new Array(segs.length).fill(false);
  const polylines = [];

  function popOther(k, excludeIdx) {
    const arr = map.get(k);
    if (!arr) return null;
    for (let n = 0; n < arr.length; n++) {
      if (arr[n].idx !== excludeIdx && !used[arr[n].idx]) return arr[n];
    }
    return null;
  }

  for (let i = 0; i < segs.length; i++) {
    if (used[i]) continue;
    used[i] = true;
    let chain = [segs[i][0], segs[i][1]];

    // extend forward from chain end
    let guard = 0;
    while (guard++ < 100000) {
      const tailKey = keyOf(chain[chain.length - 1]);
      const next = popOther(tailKey, -1);
      if (!next) break;
      const seg = segs[next.idx];
      if (used[next.idx]) break;
      used[next.idx] = true;
      const newPt = next.endIdx === 0 ? seg[1] : seg[0];
      chain.push(newPt);
    }
    // extend backward from chain start
    guard = 0;
    while (guard++ < 100000) {
      const headKey = keyOf(chain[0]);
      const next = popOther(headKey, -1);
      if (!next) break;
      const seg = segs[next.idx];
      if (used[next.idx]) break;
      used[next.idx] = true;
      const newPt = next.endIdx === 0 ? seg[1] : seg[0];
      chain.unshift(newPt);
    }
    polylines.push(chain);
  }
  return polylines;
}

// ---- Simplify (Douglas-Peucker light) ----
function dist2(p, a, b) {
  const [x, y] = p, [x1, y1] = a, [x2, y2] = b;
  const dx = x2 - x1, dy = y2 - y1;
  const len2 = dx * dx + dy * dy;
  if (len2 === 0) return (x - x1) ** 2 + (y - y1) ** 2;
  let t = ((x - x1) * dx + (y - y1) * dy) / len2;
  t = Math.max(0, Math.min(1, t));
  const px = x1 + t * dx, py = y1 + t * dy;
  return (x - px) ** 2 + (y - py) ** 2;
}
function simplify(points, eps) {
  if (points.length < 3) return points;
  let maxD = 0, idx = 0;
  for (let i = 1; i < points.length - 1; i++) {
    const d = dist2(points[i], points[0], points[points.length - 1]);
    if (d > maxD) { maxD = d; idx = i; }
  }
  if (Math.sqrt(maxD) > eps) {
    const left = simplify(points.slice(0, idx + 1), eps);
    const right = simplify(points.slice(idx), eps);
    return left.slice(0, -1).concat(right);
  }
  return [points[0], points[points.length - 1]];
}

// ---- Catmull-Rom to cubic bezier path ----
function toPath(points, closed) {
  if (points.length < 2) return null;
  const pts = points.slice();
  if (closed) {
    // drop duplicate closing point if present (stitch loops close on themselves)
    const f = pts[0], l = pts[pts.length - 1];
    if (Math.hypot(f[0] - l[0], f[1] - l[1]) < 0.05) pts.pop();
  }
  if (pts.length < 3) {
    if (pts.length === 2) return `M${pts[0][0].toFixed(2)},${pts[0][1].toFixed(2)} L${pts[1][0].toFixed(2)},${pts[1][1].toFixed(2)}`;
    return null;
  }
  const n = pts.length;
  const get = (i) => {
    if (closed) return pts[(i + n) % n];
    return pts[Math.max(0, Math.min(n - 1, i))];
  };
  let d = `M${pts[0][0].toFixed(2)},${pts[0][1].toFixed(2)} `;
  const segCount = closed ? n : n - 1;
  for (let i = 0; i < segCount; i++) {
    const p0 = get(i - 1), p1 = get(i), p2 = get(i + 1), p3 = get(i + 2);
    const c1x = p1[0] + (p2[0] - p0[0]) / 6;
    const c1y = p1[1] + (p2[1] - p0[1]) / 6;
    const c2x = p2[0] - (p3[0] - p1[0]) / 6;
    const c2y = p2[1] - (p3[1] - p1[1]) / 6;
    d += `C${c1x.toFixed(2)},${c1y.toFixed(2)} ${c2x.toFixed(2)},${c2y.toFixed(2)} ${p2[0].toFixed(2)},${p2[1].toFixed(2)} `;
  }
  if (closed) d += 'Z';
  return d.trim();
}

// ---- Build levels ----
const LEVELS = 60;
const levels = [];
for (let i = 1; i < LEVELS; i++) {
  levels.push(vmin + (vmax - vmin) * (i / LEVELS));
}

const LINE_COLOR_A = '#8B5A2B';
const LINE_COLOR_B = '#9E7B56';

const pathsOut = [];
let totalPts = 0;

levels.forEach((level, li) => {
  const segs = marchingSquares(level);
  if (!segs.length) return;
  const polylines = stitch(segs);
  // every line rendered the same light, thin way -- no bold index contours
  const rawStrokeWidth = (0.5 + 0.3 * Math.random()) * SCALE;
  const strokeWidth = Math.min(rawStrokeWidth / 3, 3);
  const color = li % 2 === 0 ? LINE_COLOR_A : LINE_COLOR_B;
  const opacity = 0.2 + 0.08 * Math.random();

  polylines.forEach((chain) => {
    if (chain.length < 3) return;
    const first = chain[0], last = chain[chain.length - 1];
    const closed = Math.hypot(first[0] - last[0], first[1] - last[1]) < 0.05 && chain.length > 4;
    const simplified = simplify(chain, 0.18 * SCALE);
    if (simplified.length < 3) return;
    // drop tiny noise loops
    if (closed) {
      let minx = Infinity, maxx = -Infinity, miny = Infinity, maxy = -Infinity;
      simplified.forEach(([x, y]) => { minx = Math.min(minx, x); maxx = Math.max(maxx, x); miny = Math.min(miny, y); maxy = Math.max(maxy, y); });
      if ((maxx - minx) < 2.4 * SCALE && (maxy - miny) < 2.4 * SCALE) return;
    }
    const d = toPath(simplified, closed);
    if (!d) return;
    totalPts += simplified.length;
    pathsOut.push({ d, closed, strokeWidth, color, opacity });
  });
});

// ---- Emit SVG ----
let svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}">\n`;
svg += `  <g fill="none" stroke-linecap="round" stroke-linejoin="round">\n`;
pathsOut.forEach((p) => {
  svg += `    <path d="${p.d}" stroke="${p.color}" stroke-width="${p.strokeWidth.toFixed(2)}" opacity="${p.opacity.toFixed(2)}" />\n`;
});
svg += `  </g>\n</svg>\n`;

console.error(`levels=${levels.length} paths=${pathsOut.length} totalPts=${totalPts} bytes=${svg.length}`);
process.stdout.write(svg);
