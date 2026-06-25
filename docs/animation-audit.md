# Animation Audit — danielsun.space

Reference site is built with **Framer** (`<meta name="generator" content="Framer ...">`), so its
animation logic ships inside a minified runtime bundle rather than inspectable CSS/JS. The
behaviors below are reconstructed from observing the rendered page and from Framer's well-documented
default scroll/hover primitives, since the obfuscated JS itself can't be diffed line-by-line.

## Observed / inferred patterns

1. **Sticky header** — header is pinned (`position: fixed`) the whole time, with link color
   transitioning to the accent blue on hover. No scroll-driven shrink/blur.
2. **Scroll-triggered entrance ("fade up")** — each major section (hero copy, section headings,
   work cards, story content, CTA) fades in (`opacity 0 → 1`) while translating up a short distance
   (`translateY(16–24px) → 0`) the first time it scrolls into the viewport. This is Framer's default
   `whileInView` transition: ease-out, ~500–600ms, triggered once.
3. **Staggered children** — groups of repeating items (role tags, work cards, story logos) animate in
   with a small per-item delay (~60–100ms) rather than all at once.
4. **Hover micro-interactions**:
   - Buttons/pills (`Start project`, CTA in Collab section): slight scale-up + opacity/brightness
     change on hover.
   - Work project images: subtle scale-up (`scale(1.03–1.05)`) inside an `overflow-hidden` frame on
     hover, with a smooth transform transition.
   - Nav/footer links: color transition to accent on hover.
5. **No parallax, no cursor-follow, no marquee** were detected in the markup/structure — the site's
   motion is restrained to reveal-on-scroll + hover feedback, which matches Framer's default
   "Appear" effect used broadly across the page.

## Implementation plan for this project

Since the project doesn't use Framer and has no animation library installed, replicate the same
*feel* with a small dependency-free primitive instead of pulling in a heavy library for a handful of
effects:

- Add a `Reveal` client component (`IntersectionObserver` + CSS transition) that fades + translates
  children up once when they enter the viewport, with an optional `delay` prop for staggering.
- Wrap section headings, work cards, story content, and the collab CTA in `Reveal`.
- Add `prefers-reduced-motion` handling — skip the transform/opacity animation entirely for users who
  request it.
- Strengthen existing hover states (work card image scale, CTA button scale) which are already
  present in Tailwind classes but can be made slightly more pronounced to match the reference feel.

## Verification

- `npm run build` to confirm no type/runtime errors.
- `npm run dev` and manually scroll the page checking each section reveals once, hover states behave,
  and reduced-motion users (`prefers-reduced-motion: reduce` in devtools) see no animation.
