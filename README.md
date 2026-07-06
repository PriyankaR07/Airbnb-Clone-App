# Airbnb Clone — Listing Page

React + Vite + Tailwind CSS implementation of the take-home assignment: a listing page,
a full-screen photo tour, and a keyboard-navigable lightbox.

## Run locally

```bash
npm install
npm run dev
```

Then open the printed localhost URL. For production build: `npm run build && npm run preview`.

## Deploy to Vercel

```bash
npm install -g vercel
vercel
```

Or connect the repo/folder in the Vercel dashboard — it auto-detects Vite.

## Project structure

```
src/
  data/listing.js       - all listing content (title, amenities, photos, reviews)
  hooks/useFocusTrap.js  - shared focus-trap + keyboard nav for both overlays
  components/
    SiteHeader.jsx        - top nav bar (logo, search pill, host link, menu)
    SiteFooter.jsx        - footer (link columns, language/currency, social)
    ListingTitleBar.jsx   - listing title, share, save
    PhotoGrid.jsx         - hero image grid + "Show all photos"
    ListingDetails.jsx    - stats, host, description, amenities, reviews
    BookingCard.jsx       - sticky price/reserve card
    PhotoTour.jsx         - full-screen photo grid overlay
    Lightbox.jsx          - single-photo viewer with prev/next + keyboard nav
  App.jsx                 - wires state for which overlay is open
```

## IMPORTANT — before you submit, do this pixel-matching pass

This was built without direct visual access to the live reference
(`https://airbnb-clone-umber-two.vercel.app`), using Airbnb's known design system
and the content visible in the assignment's screenshots. `SiteHeader.jsx` and
`SiteFooter.jsx` in particular are built from Airbnb's real, general site chrome
since no screenshot of the reference's actual header/footer was available —
compare these two against the reference most carefully, since they're the least
likely to already match exactly. To make this a true pixel-perfect match, open
the reference and this clone side by side and:

1. **Swap in real photos.** `src/data/listing.js` currently uses picsum.photos
   placeholders. Save the actual images from the reference site (right-click → Save
   Image, or grab them from the Network tab) into `public/images/` and update the
   `src`/`thumb` paths.
2. **Diff exact colors/spacing.** Use DevTools on the reference to check computed
   `font-size`, `padding`, `margin`, `border-radius`, and colors against
   `tailwind.config.js` and the component classes here, and adjust any that don't match.
3. **Check font.** If the reference loads Airbnb's actual "Circular" webfont via
   a CDN, note the exact `font-family` stack in the Network/Elements tab and update
   `tailwind.config.js` → `theme.fontFamily.sans`.
4. **Compare animation timing.** Hover/scroll transition durations here are set to
   150–300ms as a reasonable default — nudge `duration-*` classes and the
   `tailwind.config.js` keyframes to match what you observe on the reference.
5. **Re-check keyboard flow.** Tab through the whole listing page, then open the
   photo tour and lightbox with keyboard only, confirming focus is trapped inside
   the overlay and returns to the trigger button on close (already implemented in
   `useFocusTrap.js` — just verify it matches the reference's exact behavior).

## Accessibility features implemented

- Full keyboard navigation: Tab/Shift+Tab cycles within open overlays only (focus trap)
- `Escape` closes any open overlay
- `←`/`→` navigates the lightbox
- Focus returns to the triggering button when an overlay closes
- `role="dialog"` + `aria-modal="true"` + `aria-label` on both overlays
- Visible focus rings (`:focus-visible`) throughout
- `prefers-reduced-motion` respected — animations collapse to near-instant
- `aria-label` on all icon-only buttons (share, save, close, prev/next)
