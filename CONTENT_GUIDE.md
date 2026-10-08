# Inhalte pflegen – Transformation bei Isa

Diese Anleitung richtet sich an alle, die Texte ändern wollen, ohne Programmierkenntnisse
zu haben. Jede Datei ist reiner Text – öffnen, Wörter zwischen den Anführungszeichen
austauschen, speichern.

---

## Wo steht was?

| Was du ändern willst | Datei |
| --- | --- |
| Startseite (alle Texte) | `app/page.tsx` |
| Seite „Auflösende Hypnose" inkl. Honorar | `app/hypnose/page.tsx` |
| Seite „Über mich" | `app/ueber-mich/page.tsx` |
| Seite „Kontakt" inkl. Anfahrt | `app/kontakt/page.tsx` |
| Navigation oben | `components/Navbar.tsx` |
| Fußzeile mit Adresse und Kontaktdaten | `components/Footer.tsx` |
| Felder des Kontaktformulars | `components/ContactForm.tsx` |
| Impressum | `app/impressum/page.tsx` |
| Datenschutzerklärung | `app/datenschutz/page.tsx` |
| Farben und Schriften | `app/globals.css` |

---

## Noch offene Platzhalter

Alles in **eckigen Klammern** muss vor dem Livegang ersetzt werden:

- `[Straße und Hausnummer]` – nur noch in Impressum und Datenschutzerklärung.
  Auf allen sichtbaren Seiten steht bewusst nur „Buchholz in der Nordheide" mit dem
  Hinweis, dass die genaue Adresse bei der Terminabsprache folgt. Im Impressum ist
  die vollständige Anschrift dagegen gesetzlich vorgeschrieben.

Kontaktdaten, Preise und Anbieterangaben sind eingetragen.

Tipp: In VS Code mit `Strg + Umschalt + F` nach `[` suchen – dann siehst du alle
Fundstellen auf einen Blick.

---

## Bilder

Alle Bilder liegen in `public/bilder/` und sind bereits fürs Web verkleinert
(aus ~15 MB Originalen wurden ~1 MB).

| Datei | Wo sie erscheint |
| --- | --- |
| `prisma-logo.webp` | Logo oben links in der Navigation |
| `lebensbaum.webp` | Startseite, großes Bild im Kopfbereich |
| `weggabelung.webp` | „Kennst du das?" – welcher Weg der richtige ist |
| `kopf-gedanken.webp` | „Kennst du das?" – viel um die Ohren |
| `paar.webp` | „Kennst du das?" – Schwierigkeiten in Beziehungen |
| `spirituelles-wachstum.webp` | „Kennst du das?" – spirituell wachsen |
| `spirale.webp` | Startseite, Abschnitt „Wie ich arbeite" |
| `prisma.webp` | Hypnose-Seite, Kopfbereich |
| `isabelle.webp` | Porträt, freigestellt (transparenter Hintergrund) |

**Ein Bild austauschen:** neue Datei unter demselben Namen in `public/bilder/` legen.
Sonst muss nichts geändert werden. Sinnvolle Größe: längste Kante etwa 1000 Pixel.

**Warum sehen die Aquarelle nicht wie Kästen aus?** Sie sind auf weißem Grund gemalt. Die
Klasse `aquarell` in `app/globals.css` lässt dieses Weiß mit dem Seitenhintergrund
verschmelzen. Deshalb gehören diese Bilder nur auf helle Flächen – im dunklen Abschnitt
„Was dich erwartet" würden sie schwarz wirken. Das freigestellte Porträt braucht diesen
Trick nicht und bekommt deshalb `blend={false}`.

---

## Texte auf der Startseite

Die Listen ganz **oben** in `app/page.tsx` steuern die wiederkehrenden Elemente:

| Liste | Was sie erzeugt |
| --- | --- |
| `nutzen` | Die vier nummerierten Karten |
| `situationen` | Die sechs Karten unter „Kennst du das?" – vier davon mit Bild |
| `erwartet` | Die drei Spalten im dunklen Abschnitt |
| `methoden` | Die Schlagworte unter „Wie ich arbeite" |
| `eckdaten` | Die drei Kacheln mit Dauer und Kennenlernen |

Einen Punkt ändern: Text zwischen den einfachen Anführungszeichen austauschen.
Einen Punkt ergänzen: eine Zeile nach demselben Muster hinzufügen, Komma am Ende
nicht vergessen.

**Einem Punkt ein Bild geben:** in der Liste `situationen` bei dem Eintrag `img` und `alt`
ergänzen, zum Beispiel:

```jsx
{
  text: 'Dein Text …',
  img: '/bilder/meinbild.webp',
  alt: 'Kurze Beschreibung für blinde Besucher und für Google',
},
```

Ohne `img` zeigt die Karte stattdessen die Spirale – so wie bei den beiden Punkten, für
die es kein eigenes Bild gibt.

---

## Farben ändern

In `app/globals.css` stehen ganz oben die Farbwerte:

```css
--color-cream:     #fbfaf6;   /* Seitenhintergrund */
--color-shell:     #eaf3e7;   /* hell begrünte Abschnitte */
--color-sand:      #d8e8d3;   /* Trennflächen, Rahmen */
--color-ink:       #2c3830;   /* Text und dunkler Abschnitt */
--color-sage:      #7fb18b;   /* Grün, Leitfarbe */
--color-sage-deep: #3d7a52;   /* Grün für Schaltflächen */
--color-apricot:   #eb9b62;   /* warmer Akzent */
--color-rose:      #dd93a2;   /* zarter Akzent */
```

Änderst du hier einen Wert, ändert er sich auf der ganzen Seite mit. Kräftiger wird es,
indem du die Farben satter wählst – und über `opacity` bei `.watercolor` (weiter unten in
derselben Datei) lassen sich die weichen Farbflecken im Hintergrund stärker oder
zurückhaltender einstellen.

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
