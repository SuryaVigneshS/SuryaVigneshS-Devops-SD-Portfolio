# Surya Vignesh S — Portfolio

Built with **Next.js 14 (App Router)**, **Tailwind CSS**, and **Framer Motion**.

Theme: a real code-editor aesthetic — VS Code Dark+ inspired colors, a
line-number gutter running down the page, terminal-window chrome around
key sections, a typing-animation hero styled as a TypeScript object, and a
cursor-reactive spotlight + crosshair cursor that "pops" over anything
interactive.

## Run it locally

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

## Deploy

Push this folder to a GitHub repo and import it on [Vercel](https://vercel.com/new) —
zero config needed, it's a standard Next.js app.

## Contact form → filling in the real field IDs

The contact section on the site is a real, custom-built form — visitors
type their Name, Mobile Number, Email, and Message right on the page and
hit "Send Message." Nothing links out to Google, nothing redirects. Behind
the scenes it silently submits to your Google Form, so responses still land
in the same place they always have (the linked Google Sheet / your Google
notifications).

For that to actually work, Google Forms needs to know which typed value
maps to which question — it identifies each question by an ID like
`entry.1234567890`, not by the label text. **Right now `lib/data.ts` has
four placeholder IDs that need to be swapped for the real ones** — a
2-minute, one-time task:

1. Open your form in the Google Forms **editor** (not the public link —
   you need to be signed in as the owner): forms.google.com → your
   "Portfolio Contact Form"
2. Click the **⋮ (three-dot menu)** in the top right → **Get pre-filled link**
3. On the preview page, type a distinct placeholder into each field so
   you can recognize them later, e.g.:
   - Name → `TESTNAME`
   - Mobile Number → `TESTMOBILE`
   - Email → `test@testmail.com`
   - Message → `TESTMESSAGE`
4. Click **Get link** at the bottom, then **Copy link**
5. Paste that link somewhere you can read it (Notepad, a chat to yourself,
   etc.) — it'll look like:
   ```
   https://docs.google.com/forms/d/e/.../viewform?usp=pp_url&entry.111111111=TESTNAME&entry.222222222=TESTMOBILE&entry.333333333=test%40testmail.com&entry.444444444=TESTMESSAGE
   ```
6. Match each `entry.XXXXXXXXX=` number to the placeholder text right
   after it — that tells you which ID belongs to which field.
7. Open `lib/data.ts`, find `contact.googleForm.entryIds`, and replace the
   four placeholder values with the real ones you just found:
   ```ts
   entryIds: {
     name: "entry.111111111",
     mobile: "entry.222222222",
     email: "entry.333333333",
     message: "entry.444444444",
   },
   ```
8. Save, run `npm run dev`, and submit a real test message on
   `localhost:3000` — then check your Google Form's **Responses** tab to
   confirm it landed.

If you'd rather point this at a completely different form later, this same
process (steps 1–7) works for any Google Form.

## Content

All text, links, and data live in `lib/data.ts`. Edit that one file to
update anything on the site — no need to touch components for copy changes.

### Already filled in
- Profile photo → `public/profile/photo.jpg` ✅
- Instagram → `@ayrus_ihodoo` ✅
- YouTube → Surya's Lifepedia (linked via a search URL — see note below) ✅
- LinkedIn ✅
- GitHub ✅
- Resume PDF → `public/resume/Surya_Vignesh_S_Resume.pdf`, opens in a new tab from the "Review Resume" button (visitors can download it from their browser's built-in PDF viewer) ✅
- HealCurX AI project → live link to `https://healcurxai2026.vercel.app/` ✅
- No more Key Account Manager role — the site is now sourced entirely from internships + independent projects, per the updated resume ✅

### Still open (marked with `// TODO` in `lib/data.ts`)
- **YouTube exact channel URL** — currently linking to a YouTube search for
  "Surya's Lifepedia" since the exact `@handle` wasn't provided; swap in
  `lib/data.ts` → `profile.youtube` once you have it
- **Contact form** — already wired up to send real emails via Gmail SMTP,
  see the "Contact form → your Gmail inbox" section above if you haven't
  set that up yet

Everything else (About, Internships, Education, Skills, Certifications,
Projects, Activities) is pulled directly from the resume.
