# Transformation bei Isa

Website für Isabelle Kroppenstedt – Coaching und Beratung mit Auflösender Hypnose©,
Buchholz in der Nordheide.

Aktueller Stand: **Landing Page** (One-Pager). Die ausführliche Website mit eigenen
Unterseiten (Hypnose-FAQ, Ablauf, Preise) folgt als zweiter Schritt.

---

## Stack

| | |
| --- | --- |
| Framework | Next.js 16 (App Router, Turbopack) |
| UI | React 19, TypeScript |
| Styling | Tailwind CSS v4 – Theme in `app/globals.css` via `@theme`, **keine** `tailwind.config.js` |
| Schriften | `next/font/google` (Cormorant Garamond, Karla) – werden beim Build heruntergeladen und selbst ausgeliefert, kein Request an Google zur Laufzeit |
| Mailversand | Nodemailer über eine Route Handler (`app/api/contact/route.ts`) |
| Hosting | Vercel |

---

## Entwicklung

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # Produktionsbuild
npm start        # Produktionsbuild lokal starten
```

---

## Projektstruktur

```
app/
  layout.tsx            Schriften, Metadaten, Navbar + Footer
  page.tsx              Die Landing Page (alle Abschnitte, alle Texte)
  globals.css           Farb- und Schrift-Tokens, Reveal-Animation
  impressum/page.tsx    Impressum (Entwurf)
  datenschutz/page.tsx  Datenschutzerklärung (Entwurf)
  api/contact/route.ts  Formularversand

components/
  Navbar.tsx            Fixierte Navigation, Anker-Links, Mobilmenü
  Footer.tsx            Adresse, Rechtslinks, Pflichthinweis
  ContactForm.tsx       Kontaktformular inkl. Einwilligung und Honeypot
  ImageSlot.tsx         Platzhalterfläche für Isas Aquarelle
  Reveal.tsx            Sanftes Einblenden beim Scrollen
  Spiral.tsx            Spiral-Ornament („Reise nach Innen")
  LegalPage.tsx         Gemeinsamer Rahmen für Impressum/Datenschutz
```

Inhalte pflegen: siehe [CONTENT_GUIDE.md](CONTENT_GUIDE.md).

---

## Umgebungsvariablen

Für das Kontaktformular. Lokal in `.env.local`, in Produktion unter
*Vercel → Project → Settings → Environment Variables*. Vorlage: `.env.example`.

| Variable | Bedeutung |
| --- | --- |
| `EMAIL_HOST` | SMTP-Server des Postfachs |
| `EMAIL_PORT` | Port, meist `587` |
| `EMAIL_SECURE` | `true` bei Port 465, sonst `false` |
| `EMAIL_USER` / `EMAIL_PASSWORD` | Zugangsdaten des Postfachs |
| `EMAIL_FROM` | Absenderadresse |
| `EMAIL_TO` | Postfach, das die Anfragen empfängt |

Ohne gesetzte Variablen antwortet `/api/contact` mit Status 500 und das Formular zeigt
eine Fehlermeldung – die Seite selbst funktioniert weiterhin.

---

## Design-Tokens

Definiert in `app/globals.css` unter `@theme`:

```
cream #fdfbf7 · sand #f6efe4 · shell #fbf4ec
ink #3a3733 · ink-soft #6f6860 · ink-faint #a09689
sage #8ba888 / sage-deep #64856a
apricot #e8a87c / apricot-deep #c9784a
rose #d9a7b0 / rose-deep #b87686
```

Schriftklassen: `font-display` (Cormorant Garamond, Überschriften) und `font-body`
(Karla, Fließtext, Standard für `<body>`).

---

## Datenschutz-relevante Entscheidungen

- **Keine Cookies.** Die Seite setzt weder Analyse- noch Marketing-Cookies. Deshalb gibt
  es bewusst **kein Cookie-Banner** – ein Banner ohne Cookies wäre irreführend.
  Sobald Tracking (z. B. Analytics) hinzukommt, muss ein echter Consent-Dialog
  nachgerüstet werden.
- **Schriften lokal.** `next/font` lädt die Fonts beim Build und liefert sie vom eigenen
  Server aus – keine Verbindung zu Google Fonts beim Seitenaufruf.
- **Formular.** Einwilligungs-Checkbox ist Pflicht; ein verstecktes Honeypot-Feld hält
  einfache Bots ab; Eingaben werden serverseitig geprüft und beim HTML-Mailversand
  escaped.

---

## Offene Punkte

- [ ] Kontaktdaten und Anschrift ergänzen (alle `[…]`-Platzhalter)
- [ ] Aquarelle und Porträtfoto einbinden (siehe CONTENT_GUIDE)
- [ ] Domain `transformationbeiisa.de` verbinden
- [ ] Impressum und Datenschutz rechtlich prüfen lassen
- [ ] Zweiter Schritt: Unterseiten mit dem ausführlichen Hypnose-FAQ
