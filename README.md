# Transformation bei Isa

Website für Isabelle Kroppenstedt – Coaching und Beratung mit Auflösender Hypnose©,
Buchholz in der Nordheide.

Aktueller Stand: Startseite plus die Unterseiten **Auflösende Hypnose©**, **Über mich**
und **Kontakt**, dazu Impressum und Datenschutz.

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
  page.tsx              Startseite
  hypnose/page.tsx      Das vollständige Hypnose-FAQ inkl. Honorar
  ueber-mich/page.tsx   Isabelles Werdegang
  kontakt/page.tsx      Formular, Kontaktdaten, Anfahrt
  globals.css           Farb- und Schrift-Tokens, Reveal-Animation
  impressum/page.tsx    Impressum (Entwurf)
  datenschutz/page.tsx  Datenschutzerklärung (Entwurf)
  api/contact/route.ts  Formularversand

components/
  Navbar.tsx            Fixierte Navigation mit Prisma-Logo, Mobilmenü
  Footer.tsx            Adresse, Seitenlinks, Rechtslinks, Pflichthinweis
  ContactForm.tsx       Kontaktformular inkl. Einwilligung und Honeypot
  Aquarell.tsx          next/image-Rahmen für Isas Bilder (Multiply-Blend)
  Reveal.tsx            Sanftes Einblenden beim Scrollen
  Spiral.tsx            Spiral-Ornament („Reise nach Innen")
  LegalPage.tsx         Gemeinsamer Rahmen für Impressum/Datenschutz

public/bilder/          Isas Aquarelle und das freigestellte Porträt
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
cream #fbfaf6 · shell #eaf3e7 · sand #d8e8d3
ink #2c3830 · ink-soft #55665b · ink-faint #78897c
sage #7fb18b / sage-deep #3d7a52      ← Leitfarbe
apricot #eb9b62 / apricot-deep #bf6527
rose #dd93a2 / rose-deep #b0556c
```

Grün ist die Leitfarbe; die warmen Töne stammen aus dem Prisma-Logo. Die weichen
Farbflecken im Hintergrund erzeugt die Klasse `.watercolor`.

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

## Bilder

Die Originale liegen außerhalb des Repos in
`OneDrive/Neue Homepage 2026/Bilder für Homepage`. Für das Web wurden sie auf maximal
1200 px verkleinert und als WebP nach `public/bilder/` geschrieben. Das Porträt wurde mit
`rembg` freigestellt und behält seinen transparenten Hintergrund.

---

## Offene Punkte

- [ ] **Straße und Hausnummer** in Impressum und Datenschutz ergänzen – § 5 DDG
      verlangt dort eine ladungsfähige Anschrift. Auf den übrigen Seiten steht
      bewusst nur „Buchholz in der Nordheide".
- [ ] Domain `transformationbeiisa.de` verbinden
- [ ] `EMAIL_*`-Variablen in Vercel setzen, sonst schlägt das Formular fehl
- [ ] Impressum und Datenschutz rechtlich prüfen lassen
- [ ] Entscheiden, ob und wie die Google-Rezensionen eingebunden werden
