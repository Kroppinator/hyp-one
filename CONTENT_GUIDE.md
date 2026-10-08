# Texte pflegen – Transformation bei Isa

Alle Texte der Website stehen in einem einzigen Ordner: **`inhalte/`**. Dort ändert man
Wörter, ohne eine Zeile Programmcode anzufassen. Layout, Farben und Bilder bleiben davon
unberührt.

Nach dem Speichern und Hochladen baut Vercel die Seite automatisch neu – das dauert etwa
eine Minute.

---

## Die Dateien auf einen Blick

| Datei | Was drin steht |
| --- | --- |
| `stammdaten.json` | Name, E-Mail, Telefon, Ort – **die wichtigste Datei** |
| `startseite.json` | Alles auf der Startseite |
| `hypnose.json` | Die Seite „Auflösende Hypnose" samt Preisen |
| `ueber-mich.json` | Isabelles Werdegang |
| `kontakt.json` | Kontaktseite |
| `rahmen.json` | Navigation oben, Fußzeile unten |
| `formular.json` | Beschriftungen des Kontaktformulars |
| `rechtlich.impressum.json` | ⚠️ Impressum |
| `rechtlich.datenschutz.json` | ⚠️ Datenschutzerklärung |
| `rechtlich.hinweise.json` | ⚠️ Pflichthinweise und DSGVO-Einwilligung |

### ⚠️ Die Regel für Dateien mit `rechtlich.`

Alles, was mit **`rechtlich.`** beginnt, ist ein Pflichttext. Diese Texte schützen
Isabelle rechtlich. Sie dürfen nicht aus stilistischen Gründen gekürzt, umformuliert oder
entfernt werden – nur nach Rücksprache mit einer Anwältin oder einem Anwalt.

Zur Erinnerung steht in jeder dieser Dateien ganz oben ein Feld `_ACHTUNG` mit demselben
Hinweis.

---

## So sieht eine Änderung aus

Nur der Text zwischen den **Anführungszeichen** wird geändert. Alles davor – der Feldname
und der Doppelpunkt – bleibt stehen:

```json
"begruessung": "Willkommen zu deiner Reise nach Innen.",
```

wird zu

```json
"begruessung": "Schön, dass du da bist.",
```

Drei Dinge, die schiefgehen können:

- **Anführungszeichen vergessen.** Jeder Text braucht am Anfang und am Ende eines.
- **Komma vergessen.** Am Ende jeder Zeile steht ein Komma – außer bei der letzten Zeile
  vor einer schließenden Klammer.
- **Ein gerades `"` mitten im Text.** Für Anführungszeichen im Text bitte die deutschen
  verwenden: `„so"`. Die geraden beenden den Text sonst vorzeitig.

Wenn etwas davon passiert, schlägt der Build fehl und die bisherige Fassung bleibt online.
Es geht also nichts kaputt – die Änderung erscheint nur nicht.

---

## Angaben, die sich wiederholen

In `stammdaten.json` stehen die Daten, die an mehreren Stellen gleichzeitig auftauchen. In
den anderen Dateien werden sie über **geschweifte Klammern** eingesetzt:

```json
"seitenbeschreibung": "Termin vereinbaren bei {inhaberin} in {ort}."
```

Verfügbar sind die Feldnamen aus `stammdaten.json`, unter anderem `{inhaberin}`,
`{email}`, `{telefonAnzeige}`, `{ort}`, `{markenname}` und `{claim}`.

**Die Telefonnummer ändert sich?** Nur in `stammdaten.json` anpassen. Fußzeile,
Kontaktseite, Impressum und Datenschutzerklärung ziehen automatisch nach.

---

## Ein Wort hervorheben

Text zwischen **Sternchen** wird farbig hervorgehoben:

```json
"schlusssatz": "Denn sich selbst kennenlernen bedeutet auch, *sich lieben lernen*."
```

Welche Farbe daraus wird, bestimmt die jeweilige Stelle im Design – auf der Startseite
etwa das Rosé, in der Hauptüberschrift das Apricot.

---

## Felder, die mit `_` beginnen

Alles, was mit einem Unterstrich anfängt – `_zweck`, `_ACHTUNG`, `_hinweisZumSternchen` –
erscheint **nicht** auf der Website. Das sind Notizen. Sie erklären, wofür die Datei da ist
und worauf zu achten ist. Du kannst sie ergänzen, solange der Name mit `_` beginnt.

---

## Die Hypnose-Seite: Bausteine

`hypnose.json` hat etwas mehr Struktur, weil dort verschiedene Textsorten vorkommen. Jeder
Abschnitt besteht aus Bausteinen mit einem `typ`:

| `typ` | Darstellung |
| --- | --- |
| `absatz` | normaler Fließtext |
| `kursiv` | hervorgehobener Satz in der Schreibschrift |
| `aussage` | großer grüner Merksatz |
| `zwischenueberschrift` | kleine Überschrift innerhalb eines Abschnitts |
| `kasten` | eingerahmter Hinweis mit Titel |
| `warnliste` | die Gegenanzeigen, rot umrandet |
| `preise` | die Preistabelle |

**Eine neue Frage anlegen:** einen Abschnitt nach demselben Muster ergänzen. Die
Inhaltsübersicht oben auf der Seite entsteht automatisch – dort muss nichts nachgetragen
werden. Die `id` darf nur Kleinbuchstaben und Bindestriche enthalten.

---

## Preise ändern

In `hypnose.json`, im Abschnitt mit der `id` `preise`:

```json
"posten": [
  { "leistung": "Termin, 60 Minuten", "betrag": "150 €" },
  { "leistung": "Termin, 90 Minuten", "betrag": "180 €" }
]
```

---

## Bilder

Die Bilddateien liegen in `public/bilder/`. In den Inhaltsdateien steht nur ihr Pfad:

```json
"bild": "/bilder/weggabelung.webp",
"bildBeschreibung": "Aquarell: ein Mensch steht vor einer Weggabelung"
```

**Ein Bild austauschen:** neue Datei unter demselben Namen in `public/bilder/` legen.
Sinnvolle Größe: längste Kante etwa 1000 Pixel.

Die `bildBeschreibung` lesen blinde Besucher vor und Google wertet sie aus – bitte nicht
leer lassen.

**Achtung bei neuen Bildern:** Die Originale aus dem Bildgenerator tragen oben rechts ein
kleines „Made with AI"-Zeichen. Beim Verkleinern wurden deshalb an allen vier Seiten
48 Pixel weggeschnitten. Bei einem neuen Bild bitte prüfen, ob dort noch so ein Zeichen
steht.

---

## Was *nicht* in den Inhaltsdateien steht

Farben und Schriften stehen in `app/globals.css`, Layout und Abstände in den Dateien unter
`app/` und `components/`. Siehe [README.md](README.md).

---

## Rechtliches

Impressum und Datenschutzerklärung sind sorgfältig vorbereitete **Entwürfe**, aber keine
Rechtsberatung. Bitte vor dem Livegang von einer Anwältin oder einem Anwalt prüfen lassen –
besonders wegen der Abgrenzung von Coaching zu Heilbehandlung.
