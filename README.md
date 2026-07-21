<<<<<<< HEAD
# Surya Vignesh S — Portfolio

Built with **Next.js 14 (App Router)**, **Tailwind CSS**, and **Framer Motion**.

Theme: "Deployment Blueprint" — a dark, infrastructure-blueprint aesthetic
(grid backgrounds, dashed schematic cards, a five-stage CI/CD pipeline motif
used across the hero, journey timeline, and skills sections) as a distinct
counterpart to the reference site's look.

## Run it locally

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

## Deploy

Push this folder to a GitHub repo and import it on [Vercel](https://vercel.com/new) —
zero config needed, it's a standard Next.js app.

## Contact form → your Gmail inbox

The contact form posts to `app/api/contact/route.ts`, a serverless function
on your own site that sends the message through Gmail's SMTP server using
[Nodemailer](https://nodemailer.com). No third-party form service, no
submission caps — it's your Gmail account doing the sending.

### 1. Create a Gmail App Password

Gmail won't accept your normal password from an app like this — you need a
16-character **App Password** instead.

1. Go to **[myaccount.google.com/security](https://myaccount.google.com/security)**
2. Under "How you sign in to Google," turn on **2-Step Verification** if it isn't already on (App Passwords require it)
3. Go to **[myaccount.google.com/apppasswords](https://myaccount.google.com/apppasswords)**
4. Under "App name," type something like `Portfolio Contact Form` → **Create**
5. Google shows you a 16-character password (e.g. `abcd efgh ijkl mnop`) — copy it, spaces don't matter

### 2. Run it locally

1. In the project root, copy the example env file:
   ```bash
   cp .env.local.example .env.local
   ```
2. Open `.env.local` in VS Code and fill in:
   ```
   GMAIL_USER=youraddress@gmail.com
   GMAIL_APP_PASSWORD=abcdefghijklmnop
   CONTACT_TO_EMAIL=suryavigneshpro@gmail.com
   ```
   (`.env.local` is already git-ignored — it will never get pushed to GitHub.)
3. Restart the dev server (`Ctrl+C`, then `npm run dev` again) so it picks up the new env vars.
4. Fill out the contact form on the site — the email should land in your inbox within a few seconds.

### 3. Add the same variables on Vercel (for the live site)

Env vars in `.env.local` only work locally — Vercel needs its own copy:

1. Open your project on [vercel.com](https://vercel.com)
2. Go to **Settings → Environment Variables**
3. Add three variables, same names and values as your `.env.local`:
   - `GMAIL_USER`
   - `GMAIL_APP_PASSWORD`
   - `CONTACT_TO_EMAIL`
4. Go to **Deployments**, click the **⋯** menu on the latest deployment → **Redeploy** (env var changes need a redeploy to take effect)

Once redeployed, the live contact form will email you the same way the local one does.

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
- Project thumbnails — themed icon cards instead of screenshots (real screenshots of your project UIs can replace these any time — see `components/Projects.tsx`) ✅

### Still open (marked with `// TODO` in `lib/data.ts`)
- **YouTube exact channel URL** — currently linking to a YouTube search for
  "Surya's Lifepedia" since the exact `@handle` wasn't provided; swap in
  `lib/data.ts` → `profile.youtube` once you have it
- **Project links** — each project in `lib/data.ts` has empty
  `sourceUrl` and `liveUrl` fields; the UI already shows "add
  source link" / "add live demo" badges until you fill these in
- **Contact form** — already wired up to send real emails via Gmail SMTP,
  see the "Contact form → your Gmail inbox" section above if you haven't
  set that up yet

Everything else (About, Experience, Internships, Education, Skills,
Certifications, Projects, Activities) is pulled directly from the resume.
=======
# SuryaVigneshS-Devops-SD-Portfolio
Computer Science Engineering graduate passionate about Cloud Computing, DevOps, AI, and Software Development. Skilled in AWS, Azure, Docker, Kubernetes, Terraform, Linux, Git, Python, and Java. Dedicated to building scalable solutions, automating workflows, and continuously learning modern technologies.
>>>>>>> e376d48e01f62d7722383fbc2f8876c5cb87e1a6
