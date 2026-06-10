# Content Guide — How to Edit Your Website

This guide explains how to update text, prices, and contact details on your website.
No coding knowledge is required. All edits are made directly on GitHub.

---

## How to Edit a File on GitHub

1. Go to [github.com/Kroppinator/hyp-one](https://github.com/Kroppinator/hyp-one)
2. Click the file you want to edit (see sections below for which file to open)
3. Click the **pencil icon** (Edit this file) in the top right
4. Make your changes
5. Scroll down and click **"Commit changes"** → **"Commit changes"** again

Your website will automatically update within 1–2 minutes.

---

## Placeholder Text Still To Be Filled In

These placeholders exist in the code and need your real information:

| Location | Placeholder | File |
|---|---|---|
| Contact page | `contact@example.com` | `app/contact/page.tsx` |
| Contact page | `+49 (0) 123 456 789` | `app/contact/page.tsx` |
| About page | All `[Hier kommt...]` blocks | `app/about/page.tsx` |
| Impressum | `[Dein Name]`, `[Deine Adresse]` etc. | `app/impressum/page.tsx` |
| Datenschutz | `[Deine E-Mail]` | `app/datenschutz/page.tsx` |
| Footer | `© 2026 Coaching` | `components/Footer.tsx` |
| Navbar | `Coaching` (brand name) | `components/Navbar.tsx` |

---

## Page by Page Guide

### Homepage — `app/page.tsx`

**Hero section** (the big banner at the top):
- Line 8: Main headline — `Deine persönliche Transformation`
- Line 10: Subtitle — `Begleitung für Dein bestes Leben...`
- Line 13: Button label — `Jetzt Kontakt aufnehmen`

**Services preview** (the three cards in the middle):
- Lines 28–30: Card 1 title and description — `Persönliches Coaching`
- Lines 33–35: Card 2 title and description — `Berufliche Entwicklung`
- Lines 38–40: Card 3 title and description — `Work-Life-Balance`

**Bottom banner (CTA)**:
- Line 45: Heading — `Bereit für Veränderung?`
- Line 46–48: Subtext
- Line 52: Button label — `Kostenloses Vorgespräch`

---

### About Page — `app/about/page.tsx`

Fill in the four placeholder blocks:

- **Wer bin ich?** (lines 16–18): Your personal introduction and background
- **Mein Ansatz** (lines 23–25): Your coaching philosophy and values
- **Qualifikationen** (lines 30–42): Replace `[Qualifikation 1]` etc. with your real qualifications
- **Meine Leidenschaft** (lines 52–54): What drives you in your work

---

### Services / Packages — `app/services/page.tsx`

There are three pricing cards. For each card, edit:
- The package name (e.g. `Starter Paket`)
- The price (e.g. `€ 149`)
- The bullet point features (lines starting with `✓`)

**Card 1 — Starter Paket**: lines 16–26
**Card 2 — Coaching Paket** (highlighted as popular): lines 29–46
**Card 3 — Intensive Begleitung**: lines 49–61

To change a price, find the line with `€` and update the number. Example:
```
<p className="text-primary font-bold text-xl mb-4">€ 149</p>
```
Change `149` to your desired price.

---

### Contact Page — `app/contact/page.tsx`

**Contact info panel** (right side, lines 139–162):
- Email address: line 143 — change `contact@example.com` to your email
- Phone number: line 150 — change `+49 (0) 123 456 789` to your number
- Opening hours: lines 157–161

---

### Impressum — `app/impressum/page.tsx`

Replace the following placeholders (lines 14–29):
- `[Dein Name]` → Your full legal name
- `[Deine Adresse]` → Your street address
- `[PLZ Stadt]` → Your postcode and city
- `[Deine Telefonnummer]` → Your phone number
- `[Deine E-Mail]` → Your email address

> **Important:** The Impressum is a legal requirement in Germany. Have a lawyer review it to ensure it meets all requirements for your specific business situation.

---

### Datenschutz — `app/datenschutz/page.tsx`

- Line 50: Replace `[Deine E-Mail]` with your contact email address.

> **Important:** This is a template privacy policy. Have a lawyer review it for your specific situation, especially if you use analytics tools or third-party services in the future.

---

### Brand Name — `components/Navbar.tsx` and `components/Footer.tsx`

**Navbar** (`components/Navbar.tsx`, line 15):
```
<div className="text-2xl font-bold text-primary">Coaching</div>
```
Replace `Coaching` with your business name.

**Footer** (`components/Footer.tsx`, line 7):
```
<p className="mb-4">&copy; 2026 Coaching. Alle Rechte vorbehalten.</p>
```
Replace `Coaching` with your business name.

---

## What Requires Developer Help

The following changes are more technical and should be handled by a developer:

- Changing the color scheme (brand colors)
- Adding or removing navigation menu items
- Adding a new page
- Integrating a booking system (e.g. Calendly)
- Adding images or a gallery
- Setting up analytics (e.g. Google Analytics)
- Connecting the contact form to your email inbox (requires environment variable setup on Vercel)
