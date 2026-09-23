# Inhalte pflegen – Transformation bei Isa

Diese Anleitung richtet sich an alle, die Texte ändern wollen, ohne Programmierkenntnisse
zu haben. Jede Datei ist reiner Text – öffnen, Wörter zwischen den Anführungszeichen
austauschen, speichern.

---

## Wo steht was?

| Was du ändern willst | Datei |
| --- | --- |
| Alle Texte der Startseite | `app/page.tsx` |
| Navigation oben, Schaltfläche „Kennenlernen" | `components/Navbar.tsx` |
| Fußzeile mit Adresse und Kontaktdaten | `components/Footer.tsx` |
| Felder und Texte des Kontaktformulars | `components/ContactForm.tsx` |
| Impressum | `app/impressum/page.tsx` |
| Datenschutzerklärung | `app/datenschutz/page.tsx` |
| Farben und Schriften | `app/globals.css` |

---

## Noch offene Platzhalter

Alles in **eckigen Klammern** muss vor dem Livegang ersetzt werden:

- `[Straße und Hausnummer]` – im Footer, auf der Startseite (Abschnitt Kontakt), im
  Impressum und in der Datenschutzerklärung
- `[E-Mail-Adresse]` und `[Telefonnummer]` – an denselben Stellen
- `[Umsatzsteuer-Identifikationsnummer …]` – nur im Impressum
- `[Hosting-Anbieter …]` und `[E-Mail-Anbieter]` – nur in der Datenschutzerklärung

Tipp: In VS Code mit `Strg + Umschalt + F` nach `[` suchen – dann siehst du alle
Fundstellen auf einen Blick.

---

## Bilder einfügen

Aktuell stehen an drei Stellen farbige Platzhalterflächen:

1. Startseite oben rechts – Aquarell vom Lebensbaum
2. Abschnitt „Wie ich arbeite" – Aquarell von der Weggabelung
3. Abschnitt „Über mich" – Porträtfoto

So tauschst du eine Fläche gegen ein echtes Bild:

1. Lege einen Ordner `public/bilder/` an und speichere die Bilddateien dort
   (z. B. `lebensbaum.jpg`).
2. Öffne `app/page.tsx` und ersetze den jeweiligen Block

   ```jsx
   <ImageSlot caption="Hier steht Isas Aquarell vom Lebensbaum" className="…" />
   ```

   durch

   ```jsx
   <Image
     src="/bilder/lebensbaum.jpg"
     alt="Aquarell eines Lebensbaums"
     width={800}
     height={800}
     className="rounded-[2.5rem]"
   />
   ```

3. Ganz oben in der Datei einmalig ergänzen: `import Image from 'next/image';`

Der `alt`-Text beschreibt das Bild für blinde Besucherinnen und Besucher sowie für
Google – bitte nicht weglassen.

---

## Texte auf der Startseite

Die Startseite ist in Abschnitte gegliedert, die im Code durch Kommentarzeilen wie
`{/* ---- Hero ---- */}` getrennt sind:

| Abschnitt im Code | Was auf der Seite steht |
| --- | --- |
| `Hero` | „Damit das Leben wieder Farbe bekommt…", Begrüßung, die beiden Schaltflächen |
| `Dein emotionales Coaching` | Die vier nummerierten Karten (Liste `nutzen` ganz oben in der Datei) |
| `Kennst du das?` | Die sechs Situationen (Liste `situationen`) |
| `Was dich erwartet` | Die drei dunklen Spalten (Liste `erwartet`) |
| `Wie ich arbeite` | Fließtext, die Methoden-Schlagworte (Liste `methoden`) und die drei Kacheln (Liste `eckdaten`) |
| `Über mich` | Die Kurzbiografie |
| `Hinweis` | Der Pflichthinweis „ersetzt keine Therapie" |
| `Kontakt` | Einladungstext, Adresse und Formular |

Die Listen stehen gesammelt **ganz oben** in `app/page.tsx`. Einen Punkt ändern heißt
dort: Text zwischen den einfachen Anführungszeichen austauschen. Einen Punkt ergänzen
heißt: eine Zeile nach demselben Muster hinzufügen, inklusive Komma am Ende.

---

## Farben ändern

In `app/globals.css` stehen ganz oben die Farbwerte:

```css
--color-cream:   #fdfbf7;   /* Seitenhintergrund */
--color-sand:    #f6efe4;   /* Trennflächen */
--color-shell:   #fbf4ec;   /* helle Abschnitte */
--color-ink:     #3a3733;   /* Text, dunkler Abschnitt */
--color-sage:    #8ba888;   /* Salbeigrün */
--color-apricot: #e8a87c;   /* Apricot-Akzent */
--color-rose:    #d9a7b0;   /* Rosé-Akzent */
```

Änderst du hier einen Wert, ändert er sich auf der ganzen Seite mit.

---

## Kontaktformular

Das Formular schickt zwei E-Mails: eine an Isabelle und eine Eingangsbestätigung an die
anfragende Person. Damit das funktioniert, müssen in Vercel die Zugangsdaten des
Postfachs hinterlegt sein – siehe `.env.example` und `README.md`.

Die Auswahlmöglichkeiten unter „Worum geht es?" stehen in `components/ContactForm.tsx`
in der Liste `SUBJECTS`.

---

## Rechtliches

Impressum und Datenschutzerklärung sind sorgfältig vorbereitete **Entwürfe**, aber keine
Rechtsberatung. Bitte vor dem Livegang von einer Anwältin oder einem Anwalt prüfen
lassen – besonders wegen der Abgrenzung von Coaching zu Heilbehandlung.
