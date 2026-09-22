# Kathleen Kaye Rostata — Executive Assistant Portfolio

A single-page portfolio site built with React + Vite. It showcases fictional
case studies (inbox management, calendar management, travel coordination,
file organization, task management, customer support, SOP documentation, and
workflow automation) demonstrating executive-assistant skills, plus an about
section, a tools list, and contact info.

## Getting started

```bash
npm install
npm run dev
```

Then open the URL Vite prints (usually `http://localhost:5173`).

Other scripts:

```bash
npm run build     # production build, output in dist/
npm run preview   # preview the production build locally
npm run lint      # run ESLint
```

## Editing the content

Almost all of the site's text and data lives in one file:

**`src/content.js`**

- `profile` — name, title, hero positioning statement, avatar crop position
- `about` — bio paragraphs
- `contact` — email and LinkedIn
- `tools` — "Tools I've practiced" and "Currently learning" lists
- `caseStudies` — each project's title, tagline, problem/action/result/tools
- `*DemoData` objects — the data behind each case study's visual (inbox
  labels, calendar schedule, flight comparison table, file tree, task
  dashboard, support tracker, SOP steps, automation flow)

Edit this file and the site updates — no need to touch component code.

## Adding real images

Two places use a graceful placeholder-until-you-add-a-file pattern:

- **Profile photo** — drop a photo at `public/profile.jpg`. Until it exists,
  a "KR" initials circle is shown instead. Adjust how the photo is cropped
  with `profile.avatarPosition` in `src/content.js`.
- **Case study screenshots** — drop an image at
  `public/screenshots/<case-study-id>.png` (e.g. `inbox.png`, `calendar.png`
  — see the `id` of each entry in `caseStudies`). Until it exists, a dashed
  placeholder box is shown in that case study.

## Project structure

```
src/
  content.js              # all editable copy and data
  App.jsx                 # page composition
  App.css / index.css     # styling
  components/
    Nav.jsx, Hero.jsx, About.jsx, Tools.jsx, Contact.jsx, Footer.jsx
    WorkOverview.jsx       # case-study quick-jump grid
    CaseStudy.jsx          # collapsible case-study shell
    ProfilePhoto.jsx       # avatar with placeholder fallback
    ScreenshotSlot.jsx     # screenshot with placeholder fallback
    caseStudies/           # one visual "demo" component per case study
public/
  profile.jpg              # your photo (add this)
  screenshots/<id>.png     # case-study screenshots (add these)
```
