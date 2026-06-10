# HypnoseWebsite — Technical Admin Documentation

German-language coaching business website built with Next.js 16, React 19, and Tailwind CSS v4. Deployed on Vercel with automatic deploys on every push to `main`.

**Live site:** configured in Vercel dashboard
**Repository:** https://github.com/Kroppinator/hyp-one
**Content editing guide (non-technical):** [CONTENT_GUIDE.md](CONTENT_GUIDE.md)

---

## Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 16 (App Router) |
| UI | React 19, TypeScript |
| Styling | Tailwind CSS v4 (`@tailwindcss/postcss`) |
| Email | Nodemailer (contact form API route) |
| Hosting | Vercel (auto-deploy from GitHub) |

---

## Project Structure

```
app/
  layout.tsx              # Root layout — Navbar, Footer, CookieBanner
  page.tsx                # Homepage
  globals.css             # Tailwind v4 import + @theme custom colors
  about/page.tsx
  services/page.tsx
  contact/page.tsx
  datenschutz/page.tsx
  impressum/page.tsx
  api/contact/route.ts    # Nodemailer email handler
components/
  Navbar.tsx
  Footer.tsx
  CookieBanner.tsx        # localStorage-based cookie consent
tailwind.config.js        # Content path config (v4 still reads this)
postcss.config.js         # Uses @tailwindcss/postcss (v4)
next.config.js            # Minimal — no static export, no image config needed
.env.example              # Template for required environment variables
```

---

## Local Development

**Prerequisites:** Node.js 18+

```bash
# Install dependencies
npm install

# Copy env template and fill in your email credentials
cp .env.example .env.local

# Start dev server at http://localhost:3000
npm run dev

# Type-check
npx tsc --noEmit

# Production build (to verify before pushing)
npm run build
```

---

## Deployment — Vercel

The site auto-deploys when you push to `main`. No manual deploy step needed.

To trigger a redeploy manually: push any commit, or use the Vercel dashboard.

### Environment Variables

The contact form requires these variables set in **Vercel → Project → Settings → Environment Variables**:

| Variable | Example | Description |
|---|---|---|
| `EMAIL_HOST` | `smtp.gmx.de` | SMTP server hostname |
| `EMAIL_PORT` | `587` | SMTP port (587 for TLS, 465 for SSL) |
| `EMAIL_SECURE` | `false` | `true` only for port 465 |
| `EMAIL_USER` | `you@gmx.com` | SMTP login username |
| `EMAIL_PASSWORD` | `your-app-password` | SMTP login password |
| `EMAIL_FROM` | `noreply@yourdomain.com` | Sender address |
| `EMAIL_TO` | `contact@yourdomain.com` | Where form submissions are delivered |

After adding or changing env vars, trigger a redeploy from the Vercel dashboard.

---

## Styling — Tailwind CSS v4

This project uses **Tailwind CSS v4**, which differs from v3 in two important ways:

**1. CSS import syntax** (`app/globals.css`):
```css
/* v4 — correct */
@import "tailwindcss";

/* v3 — do NOT use these */
@tailwind base;
@tailwind components;
@tailwind utilities;
```

**2. Custom colors are defined in CSS, not JS** (`app/globals.css`):
```css
@theme {
  --color-primary: #6366f1;    /* indigo — main brand color */
  --color-secondary: #ec4899;  /* pink — accent */
  --color-dark: #1f2937;       /* charcoal — text */
  --color-light: #f9fafb;      /* off-white — backgrounds */
}
```

These become available as utility classes: `bg-primary`, `text-secondary`, `bg-dark`, etc.

To change brand colors, update the hex values in `@theme` and push. Vercel will rebuild automatically.

---

## Adding a New Page

1. Create `app/<page-name>/page.tsx`
2. Export a default React component
3. Add a link in `components/Navbar.tsx` if it should appear in the nav

Example minimal page:
```tsx
export default function MyPage() {
  return (
    <>
      <section className="bg-gradient-to-r from-primary to-secondary text-white py-8 md:py-12">
        <div className="max-w-6xl mx-auto px-5 text-center">
          <h1 className="text-3xl md:text-4xl font-bold">Page Title</h1>
        </div>
      </section>
      <section className="py-12 px-5">
        <div className="max-w-3xl mx-auto">
          {/* content */}
        </div>
      </section>
    </>
  );
}
```

---

## Contact Form — How It Works

`app/api/contact/route.ts` is a Next.js API route that:
1. Receives a POST request from the contact form with `{ name, email, phone, subject, message }`
2. Sends a notification email to `EMAIL_TO`
3. Sends a confirmation email to the user

The form only works when the email env vars are set. Without them, submissions will return a 500 error.

---

## Cookie Consent

`components/CookieBanner.tsx` uses `localStorage` to track consent. No analytics or tracking cookies are currently set — the banner is purely for GDPR transparency around the session/functional behaviour of the site. If you add analytics tools in the future, you must load them conditionally based on the stored consent value.

---

## Git Workflow

```bash
# Make changes locally, then:
git add <files>
git commit -m "description of change"
git push
# Vercel picks up the push and deploys automatically
```

There is only one branch (`main`). For larger changes, create a feature branch and open a PR on GitHub — Vercel will create a preview deployment for it automatically.

---

## SEO

- Page metadata is set in `app/layout.tsx` (`metadata` and `viewport` exports)
- Each page currently inherits the root metadata — add per-page `export const metadata` in individual `page.tsx` files for page-specific titles/descriptions
- No sitemap is currently configured — consider adding `app/sitemap.ts` for better search engine indexing

---

## Dependency Updates

```bash
# Check for vulnerabilities
npm audit

# Update dependencies
npm update

# After updating, always run a build locally to verify nothing broke
npm run build
```
