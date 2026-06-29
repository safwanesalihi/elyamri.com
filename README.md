# Mohamed El Yamri — Portfolio

Vite + React + TypeScript single-page portfolio. Running at http://localhost:3000 (or the auto-assigned port).

## Quick start

```bash
npm install
npm run dev
```

## Swapping in real assets

### Portrait photo
Replace `/public/portrait.jpg` (4:5 ratio recommended, min 800×1000px).
Then update `About.tsx` — replace the placeholder `<div>` inside `.portraitInner` with:
```tsx
<img src="/portrait.jpg" alt="Mohamed El Yamri" className={styles.portraitImg} />
```

### Project images / videos
Drop files into `/public/work/` named after each project id:
- `jabala.jpg` — JABALA BATTLES
- `political-time.jpg` — Political Time Podcast
- `kashf.jpg` — Settling the Account Show
- `ostol.jpg` — Ostol Prod
- `khabiry.jpg` — khabiry
- `okad.jpg` — Okad Media

Then in `Work.tsx`, set `image: '/work/jabala.jpg'` (etc.) on each project in `content/index.ts` and render the image with a lazy-loaded `<img>` in the `imageWrap` div.

### Voice-over audio samples
Drop `.mp3` files into `/public/audio/` (e.g. `ostol-sample.mp3`, `khabiry-sample.mp3`).
In `AudioPlayer.tsx`, add a real `<audio>` element and wire `play()`/`pause()` to the toggle button. The waveform animation is already wired to the `playing` state.

### Social links
In `src/content/index.ts`, replace the `#` placeholders:
```ts
social: {
  instagram: 'https://instagram.com/YOUR_HANDLE',
  linkedin: 'https://linkedin.com/in/YOUR_HANDLE',
  behance: 'https://behance.net/YOUR_HANDLE',
}
```

### Open Graph image
Drop `og-image.jpg` (1200×630px) into `/public/` and add to `index.html`:
```html
<meta property="og:image" content="/og-image.jpg" />
```

## Content edits
All text lives in `src/content/index.ts` — edit there and the whole site updates.

## Build for production
```bash
npm run build
```
Output goes to `/dist`. Deploy to Vercel, Netlify, or any static host.
