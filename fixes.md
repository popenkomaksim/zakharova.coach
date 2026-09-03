# Mobile fixes tracker

Verified with a real headless Chrome (CDP, `mobile:false` + explicit `width/height` —
the `mobile:true` emulation flag turned out to give false readings, see note under
Bugs). Viewports checked: 320px and 375px width.

Legend: [ ] todo · [x] done · [~] investigated, no code change needed

## Bugs / things likely actively broken

- [x] **CTA button overflows viewport** — "Почни тренуватись ефективно" button in
      `HeroSection.js` was 383px wide (unwrapped), overflowing at both 320px (by 63px)
      and 375px (by ~8px, the common width). Fixed with a `≤575.98px` breakpoint:
      smaller font/padding, `max-width: 90vw`, `white-space: normal` fallback.
- [x] **Footer credit line overflows viewport** — "Made with ♥ in Kyiv, Ukraine ©
      2023 — 2026" in `ClosingSection.js` rendered as one unwrapped 368px-wide line,
      overflowing by 48px at 320px. Fixed by letting `.ant-divider-inner-text` wrap
      and center.
- [~] **FloatButton "overflow"** — initially looked like the floating Telegram/menu
      buttons overflowed at 320px. Re-tested with a correctly configured viewport
      (no `mobile:true`) and both sit fully inside 320px. The original reading was
      an artifact of Chrome's `mobile:true` CDP emulation computing a wrong
      fixed-position containing block (369px instead of 320px) — not a real bug on
      actual devices. No change made.
- [~] **PlanCard "Рекомендую" ribbon** — checked at 320px, sits fully inside the
      card (right edge at 306/320px). No clipping.
- [~] **NavModal last items below the fold on short viewports** — at 375×500 the
      list overflows the modal's own box, but `.ant-modal-wrap` has
      `overflow-y: auto` and does scroll to reach the last item. Not broken, just
      no visible affordance that there's more below — tracked as a UX item instead.

## Performance on mobile data/battery

- [x] **~33MB of unoptimized full-resolution photos on one page.** Every photo in
      `public/` used by the landing page was a straight-from-camera JPEG,
      1.5–3.3MB each, 1600-3300px on the long edge, never resized for the
      ~300-800px they're actually displayed at. Resized all 15 to a 1600px max
      edge and re-compressed to quality 75 with `sips` (no new deps). Total for
      these files: 32MB → 6.4MB (-80%). Spot-checked two at full size — no
      visible quality loss.
- [x] **No lazy-loading on any image.** antd's `<Image>` doesn't set
      `loading="lazy"` by default, so every image below the fold still started
      downloading immediately on page load instead of when scrolled into view.
      Added `loading="lazy"` to the below-the-fold images: `FormatCard.js`'s
      photos and all six `PartnersSection.js` logos. Left `HeroBanner`/
      `HeroSection`/the top `design_kazbek` image in `App.js` eager since they're
      above or right at the fold.
- [x] **Autoplaying background video with no lazy start.** `LoopVideo`
      (`Polina_Altra.mp4`, 336K) was `autoPlay` with no `preload` hint, so it
      started downloading/decoding immediately on page load even though it's the
      last section on the page. Switched to `preload="none"` + an
      `IntersectionObserver` that calls `.play()`/`.pause()` as it enters/leaves
      the viewport — video no longer loads at all until scrolled near, and stops
      decoding once scrolled past (battery win too). No poster image added (no
      `ffmpeg` available locally to extract a frame) — low priority since the
      video now doesn't fetch until it's about to be seen anyway.
- [x] **Duplicate Google tag loader.** `public/index.html` loaded
      `googletagmanager.com/gtag/js` twice (once for `AW-999571981`, once for
      `G-XC3C435S6F`). Merged into one script load + two `gtag('config', ...)`
      calls. Verified both configs still fire in the production build output.

## Mobile UI/UX review — findings & recommended fixes

- [x] **Body copy too large on mobile.** `HeroSection.js` intro paragraphs were
      `font-size: 1.8em` (~29px) with no mobile override. Extracted a
      `StyledParagraph` with a `≤575.98px` override down to `1.15em`. Same
      treatment for `ClosingSection.js`'s "Залишились питання?" text (1.75em →
      1.15em on mobile) and `PricingSection.js`'s title (3.6em → 1.8em on
      mobile). Verified visually at 375px — paragraphs now read as 2-3 short
      lines instead of a wall of oversized text.
- [x] **Too many competing CTAs.** Asked the user how far to go here (removing an
      entire CTA affects a live conversion path); decided to keep every existing
      CTA and just cut the visual noise. Removed the constant `pulseGlow`
      keyframe animation from `MobileCtaButton.js` (kept its static shadow) —
      the button no longer visually competes for attention on every screen while
      idle.
- [x] **Pricing cards have no visual hierarchy.** Added a "Рекомендую" ribbon +
      highlighted border to the EXPERIENCED plan (`PlanCard.js`/
      `PricingSection.js`) so mobile users get a decision shortcut instead of
      three undifferentiated stacked cards.
- [x] **Partner logos have small, tightly-packed tap targets.** Six 100px logo
      links in `PartnersSection.js` had 24px gutters and no padding inside the
      `<a>`. Wrapped each link in a `StyledPartnerLink` with `0.75em` padding so
      the tappable area is bigger than the visible logo artwork.
- [x] **NavModal gives no visible cue that the list scrolls.** Wrapped the list
      in a bounded `StyledScrollArea` (`max-height: 70vh; overflow-y: auto;`)
      with a sticky bottom fade so the list itself now signals there's more
      below, instead of relying on the invisible outer modal-wrap scroll.
      Verified the fade renders (sticky, correct gradient) via computed styles;
      it's subtle by design since it only occupies the padding gap between list
      items, not the text itself.
- [x] **Pricing section title had genuinely low contrast.** Screenshotted it
      before touching anything — the title really did blend into the busy
      sepia mountain-sketch background (`pencil_mountains_narrow.jpeg`) wherever
      a dark peak silhouette fell behind the semi-transparent gray text. (The
      body's `donetsk.svg` texture turned out to be a non-issue — it's fully
      covered by the section's own opaque background image and by each opaque
      white `PlanCard`.) Fixed by giving the title a semi-opaque white
      background chip (`rgba(255,255,255,0.82)`, padded, rounded) so it's
      legible regardless of what's behind it, and bumped the text to fully
      opaque. Verified with a before/after screenshot.
- [x] **Patriotic banner text has no separation from surrounding sections.** The
      line in `App.js` sat directly between `FormatsSection` and `PricingSection`
      with zero margin, reading like an ad interstitial. Added `margin: 2em 0`
      to match the vertical rhythm of the sections around it. Content/wording
      untouched — spacing only.

# Desktop fixes tracker

Verified with a real headless Chrome (CDP, explicit `width/height`, `mobile:false`).
Viewports checked: 1280 / 1440 / 1920 / 2560px width, plus visual screenshots of
every section at 1440px and 2560px.

Legend: [ ] todo · [x] done · [~] investigated, no code change needed

## Bugs / things likely actively broken

- [~] **No horizontal overflow at any desktop width.** Full-page sweep (every
      element's bounding box vs viewport) at 1280/1440/1920/2560px: 0 offenders.
      Zero console errors on load at any width either.
- [x] **Pricing cards render at wildly different heights.** In `#prices`, the
      three `PlanCard`s shared the same `top` (6292px) but ended at very
      different `bottom`s — BASIC was 332px tall, EXPERIENCED/PRO 444/442px.
      Root cause wasn't the `Row` (antd's `.ant-row` is `display:flex` with no
      explicit `align-items`, so it already defaults to `stretch` — the `Col`s
      were already equal height); the `Card` itself just sized to its own
      content instead of filling its stretched `Col`. Fixed in `PlanCard.js` by
      wrapping the `Card` in a `StyledCardWrapper` (`height:100%; padding:2em;
      box-sizing:border-box`) and giving the `Card` itself `height:"100%"`,
      moving the old `margin:2em` on the `Card` into that wrapper's padding
      (percentage-height + margin don't mix well). Re-measured: all three cards
      are now exactly 444px, bottom edges perfectly aligned. Confirmed with a
      before/after screenshot.
- [x] **Same uneven-height pattern in `ExtraServicesSection`.** Same fix as
      `PlanCard`: wrapped `Card` in a `StyledCardWrapper` (`height:100%;
      padding:2em`) and gave the `Card` `height:"100%"` in `ExtraServiceCard.js`.
      Re-measured: all four cards now exactly 186px tall, verified with a
      screenshot.

## Mobile UI/UX review — findings & recommended fixes (desktop-specific)

- [x] **`FormatsSection` wastes huge amounts of vertical space on desktop.**
      Checked actual photo dimensions: two of the five (`hug.jpeg` 1068×1600,
      `Polina_OCC.jpeg` 1339×1600) are portrait, rendering at ~650-820px tall at
      a desktop column's ~546px width — next to 1-2 sentences of vertically
      centered text, that's a huge empty gap. Fixed in `FormatCard.js` by giving
      the photo a `max-height: 26em` + `object-fit: cover` on `≥768px` (the
      landscape photos were already under that cap and are unaffected; the
      portrait ones are cut roughly in half, ~650-820px → ~364px). Left
      `align="middle"` alone — some breathing room around short copy next to a
      photo is a reasonable editorial choice; the fix targets the actual
      outlier heights, not vertical centering itself.
- [x] **"Твоя пригода" partner logo looks broken next to the other five.**
      Checked before assuming it was a bug: `sips -g hasAlpha` shows
      `tvoya_prygoda.png` genuinely has an alpha channel (same as the other
      five), and viewing the raw file shows it's really just that partner's
      actual logo — a square teal icon-style brand mark, not a missing-
      transparency export. Editing a partner's logo artwork isn't the right
      fix. Instead, rebuilt `PartnersSection.js` so every logo sits in a
      uniform white rounded tile (`StyledLogoTile`, 7em square, `object-fit:
      contain`) — now a differently-styled logo reads as one tile in a
      consistent grid instead of a visual outlier. Verified with a screenshot.
      (Also de-duplicated the six near-identical link blocks into a `partners`
      array + `.map()`, since the tile wrapper would've meant repeating the
      same JSX six times.)
- [x] **Paragraph line length is unconstrained on wide/ultrawide monitors.**
      `HeroSection`'s `StyledTextCard` had no `max-width` independent of its
      column share, so at 2560px the intro paragraphs ran to noticeably long
      single lines. Added `max-width: 42em; margin: 0 auto;` — re-screenshotted
      at 2560px, lines are now a comfortable ~50-60 characters and the card sits
      centered in its column instead of stretching edge to edge.
- [x] **No persistent desktop navigation.** Asked the user how far to go
      (building a nav bar is a bigger scope change than the rest of this list);
      they asked for the full horizontal nav bar option. Rebuilt `Header.js`:
      logo left, a `StyledNav` on the right with 6 links (Про мене, Формати
      співпраці, Види планів, Додаткові послуги, Календар подій, Контакти —
      dropped "Головна" since the logo covers that, and left the two most
      niche pages, the ski-tour checklist and privacy policy, reachable only via
      the existing hamburger to keep the bar from getting crowded), shown at
      `≥992px` and hidden below that so mobile/tablet behavior is unchanged
      (still just the logo + floating hamburger). Header is shared across every
      page (`App`, `About`, `Calendar`, `Contact`, `Privacy`, `SkiTourList`), so
      this is now consistent site-wide. Verified: nav appears at 1000px+,
      disappears at 991px and below, mobile header at 375px is pixel-identical
      to before. Full overflow + console-error sweep at 320/375/1280/1440/
      1920/2560px after this change: 0 offenders, 0 errors everywhere.
