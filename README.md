# Kathleen Kaye Rostata — Executive Assistant Portfolio

A single-page portfolio site built with React + Vite. It showcases fictional
case studies (inbox zero, calendar management, travel planning, file
organization, project/task management, customer support, and SOP creation)
demonstrating executive-assistant skills, plus an about
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

## Notes

- Opening the site with a `#case-study` hash always starts at the top
  (`main.jsx` clears the hash on load); clicking an overview tile or nav link
  in the page still opens and scrolls to the matching case study.

## Editing the content

Almost all of the site's text and data lives in one file:

**`src/content.js`**

- `profile` — name, title, hero positioning statement, avatar crop position
- `about` — bio paragraphs
- `contact` — email and LinkedIn
- `tools` — "Tools I've practiced" and "Currently learning" lists
- `caseStudies` — each project's title, tagline, problem/action/result/tools
- `*DemoData` objects — the data behind each case study's layout (inbox
  labels and emails, calendar profile/changes/timeline, travel comparisons and
  itinerary, file dashboard and index, task and project trackers, support
  tracker and templates, SOP steps). Each case study has its own layout in
  `src/components/caseStudies/`.

Edit this file and the site updates — no need to touch component code.

## Adding real images

Two places use a graceful placeholder-until-you-add-a-file pattern:

- **Profile photo** — drop a photo at `public/profile.jpg`. Until it exists,
  a "KR" initials circle is shown instead. Adjust how the photo is cropped
  with `profile.avatarPosition` in `src/content.js`.
- **Case study screenshots** — drop images in `public/screenshots/`. Extra
  images use a numeric suffix (`inbox.png`, `inbox2.png`, …) and are shown as
  a swipeable slideshow, stopping at the first missing number (max 10). Until
  a file exists, a dashed placeholder showing the expected name is displayed.
  Current sets: `inbox` (2), `calendar` (5: before, during x3, after),
  `drive` (5) and `files` (3) for File Organization, `tasks` (1) and
  `projects` (2) for the trackers, `support` (4), `sop` (6).

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
      shared.jsx           # Block, Stats, Chips, Stepper building blocks
public/
  profile.jpg              # your photo (add this)
  screenshots/<id>.png     # case-study screenshots (add these)
```
