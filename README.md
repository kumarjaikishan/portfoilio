# Jai Kishan – Portfolio (React + Vite + Tailwind CSS)

Your portfolio rebuilt with React + Vite, styled entirely with **Tailwind
CSS utility classes** (no Bootstrap, no legacy template CSS, no icon-font
files) — same dark theme, gold (#ffbd39) / teal accent colors, layout, and
scroll animations as the original.

## Run it

```bash
npm install
npm run dev
```

Then open the local URL Vite prints (usually http://localhost:5173).

## Build for production

```bash
npm run build
npm run preview   # preview the production build locally
```

Deploy the `dist/` folder anywhere (Netlify, Vercel, GitHub Pages, your own
Nginx/AWS EC2 box, etc.).

## Project structure

```
tailwind.config.js    brand colors (gold, teal, ink) + custom animations
postcss.config.js     tailwind/autoprefixer wiring
public/assets/         favicon only (all other assets are Tailwind classes now)
src/
  components/          one component per section — all styled with Tailwind
    Navbar.jsx
    Hero.jsx
    DotsCanvas.jsx     interactive dots background (canvas, unchanged logic)
    About.jsx
    Projects.jsx
    Resume.jsx
    Contact.jsx
    Footer.jsx
    QuestionModal.jsx  "Have a Question?" popup form
    Toast.jsx          "Copied" / success notifications
    Loader.jsx         fullscreen loading spinner
  hooks/
    useScrollAnimate.js   IntersectionObserver-based scroll-reveal —
                          replaces jQuery waypoints.js. Elements with class
                          "reveal" fade/slide up once they enter the
                          viewport (class "in-view" triggers the animation
                          defined in src/styles/index.css)
  styles/index.css     @tailwind directives + the couple of custom
                        utilities Tailwind alone can't express (scroll
                        reveal, skill-bar transition)
  App.jsx              wires all sections together, owns modal/toast state
  main.jsx             React entry point
```

## What changed vs. the previous version

- All layout/spacing/colors are now Tailwind utility classes instead of
  the original template's `style.css`/Bootstrap — no more 14,000-line CSS
  file to fight with, everything is tweakable straight in the JSX.
- Icons moved to Font Awesome (already loaded via CDN in `index.html`)
  instead of the old icomoon/flaticon/ionicons icon-font files, so those
  font files were removed from `public/assets`.
- Brand colors (`gold` #ffbd39, `teal`, `ink` for the near-black
  background/cards) are defined once in `tailwind.config.js` — change them
  there and the whole site updates.
- The scroll-reveal animation now uses a `reveal` / `in-view` class pair
  driven by Tailwind's `animate-fade-in-up` utility instead of the old
  `ftco-animate` classes tied to animate.css.

## Editing content

- **Hero name / tagline / links / photo** → `src/components/Hero.jsx`
- **Skills / about info / profile photo** → `src/components/About.jsx`
- **Projects** → `src/components/Projects.jsx` (the `projects` array)
- **Education / resume blurb / CV link** → `src/components/Resume.jsx`
- **Contact details / socials** → `src/components/Contact.jsx`
- **Colors / fonts / animation timing** → `tailwind.config.js`
