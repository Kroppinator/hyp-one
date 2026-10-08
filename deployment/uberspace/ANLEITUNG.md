# Umzug nach Uberspace

Diese Anleitung richtet den Server einmalig ein. Danach genügt ein Push auf
`Uberspace_uat`, und die Änderung geht von selbst live — so wie bisher bei Vercel.

**Dauer der Ersteinrichtung:** etwa eine Stunde, davon die Hälfte Wartezeit.

---

## Was wir aufbauen

```
Push auf GitHub
      │
      ▼
GitHub Action  ──  baut die Seite, lädt sie per SSH hoch,
                   startet den Dienst neu, prüft ob er antwortet
      │
      ▼
Uberspace  ──  node server.js  (Port 3000, nur lokal erreichbar)
      │
      ▼
Webserver von Uberspace  ──  HTTPS, Domain, Zertifikat
```

Auf Vercel übernimmt all das eine einzige Einstellung. Hier sind es drei Teile,
die zusammenpassen müssen. Deshalb diese Anleitung.

---

## 1. Uberspace-Konto anlegen

Auf [uberspace.de](https://uberspace.de) registrieren. Der Preis ist in einem
Rahmen frei wählbar; für diese Seite genügt der Mindestbetrag.

Notiere dir:

- **Benutzername** (z. B. `isabelle`)
- **Serveradresse** (z. B. `andromeda.uberspace.de`)

---

## 2. Node-Version festlegen

Per SSH anmelden und die Version wählen, mit der auch gebaut wird:

```bash
uberspace tools version use node 22
node --version        # muss v22.x zeigen
```

> **Wichtig:** Diese Version muss zur `node-version` in
> `.github/workflows/uberspace.yml` passen. Weichen sie ab, startet der Dienst
> unter Umständen nicht.

---

## 3. Zielordner anlegen

```bash
mkdir -p ~/app
```

Mehr nicht — den Inhalt liefert die GitHub Action.

---

## 4. Dienst einrichten

Die Vorlage aus `deployment/uberspace/transformation.ini` auf den Server
übertragen nach `~/etc/services.d/transformation.ini` und darin anpassen:

- `BENUTZER` durch den eigenen Benutzernamen ersetzen
- `EMAIL_PASSWORD` eintragen

Dann absichern und starten:

```bash
chmod 600 ~/etc/services.d/transformation.ini
supervisorctl reread
supervisorctl update
supervisorctl status transformation
```

Beim ersten Mal wird der Start noch scheitern, weil `~/app` leer ist. Das ist
in Ordnung — nach der ersten Auslieferung läuft er.

---

## 5. Webserver auf den Dienst zeigen lassen

```bash
uberspace web backend set / --http --port 3000
uberspace web backend list
```

Damit nimmt Uberspace Anfragen entgegen, kümmert sich um HTTPS und reicht sie
intern an Port 3000 weiter.

---

## 6. Zugang für GitHub einrichten

Ein Schlüsselpaar **nur für die Auslieferung** erzeugen — nicht den eigenen
privaten Schlüssel verwenden:

```bash
ssh-keygen -t ed25519 -f ~/.ssh/github-deploy -C "github-actions" -N ""
cat ~/.ssh/github-deploy.pub >> ~/.ssh/authorized_keys
cat ~/.ssh/github-deploy          # dieser Text kommt gleich nach GitHub
```

In GitHub unter **Settings → Secrets and variables → Actions** drei Einträge
anlegen:

| Name | Wert |
| --- | --- |
| `UBERSPACE_HOST` | die Serveradresse, z. B. `andromeda.uberspace.de` |
| `UBERSPACE_USER` | der Benutzername, z. B. `isabelle` |
| `UBERSPACE_SSH_KEY` | der **private** Schlüssel von oben, vollständig mit `-----BEGIN` und `-----END` |

---

## 7. Erste Auslieferung

Ein Push auf diesen Branch startet die Auslieferung. Der Durchlauf baut, lädt
hoch, startet neu und prüft am Ende, ob die Startseite antwortet.

> **Warum nicht über den Knopf „Run workflow"?** Den zeigt GitHub nur für
> Abläufe, die auch auf dem Standard-Branch liegen. Diese Datei gibt es nur
> auf `Uberspace_uat`, deshalb taucht sie in der Actions-Übersicht erst auf,
> nachdem sie einmal gelaufen ist. Ein Push genügt.

Schlägt er fehl, steht der Grund im Protokoll. Die häufigsten Ursachen stehen
unten.

---

## 7a. Hinweis zur Automatik

Der Auslöser steht bereits auf Push — jede Änderung auf diesem Branch geht
von selbst live. **Das ist der Punkt, an dem Isabelles Textpflege wieder
funktioniert:** Sie bearbeitet die Dateien in `inhalte/` über GitHub, und
ohne diese Automatik bliebe die Änderung liegen.

Abschalten lässt sie sich, indem man in
`.github/workflows/uberspace.yml` die beiden Zeilen unter `push`
auskommentiert.

---

## 8. Domain verbinden

```bash
uberspace web domain add transformationbeiisa.de
uberspace web domain add www.transformationbeiisa.de
```

Uberspace nennt daraufhin die DNS-Einträge. Diese bei IONOS eintragen. Das
Zertifikat kommt automatisch, sobald die Einträge greifen — das dauert
erfahrungsgemäß einige Minuten bis wenige Stunden.

---

## Wenn etwas klemmt

| Beobachtung | Ursache |
| --- | --- |
| `supervisorctl status` zeigt `FATAL` | Protokoll ansehen: `supervisorctl tail -100 transformation stderr` |
| Dienst startet, Seite bleibt leer | `~/app/server.js` fehlt — die Auslieferung lief nicht durch |
| Port bereits belegt | Alter Prozess hängt: `supervisorctl stop transformation`, dann `pkill -f "node server.js"` |
| Formular meldet Fehler | `EMAIL_PASSWORD` fehlt in der `.ini`, oder POP3/IMAP ist im GMX-Konto nicht freigeschaltet |
| Action bricht beim Hochladen ab | Schlüssel oder Serveradresse im Secret falsch |
| Seite zeigt alten Stand | Browser-Cache; sonst prüfen, ob die Action wirklich gelaufen ist |

**Dienst von Hand neu starten:**

```bash
supervisorctl restart transformation
```

**Nachsehen, was er sagt:**

```bash
supervisorctl tail -f transformation stdout
```

---

## Was anders ist als bei Vercel

- **Keine Vorschau-Adressen pro Branch.** Es gibt einen Server; was ausgeliefert
  wird, ist live. Testen also vorher lokal mit `npm run dev`.
- **Keine Bildoptimierung zur Laufzeit.** Deshalb steht in `next.config.js` auf
  diesem Branch `images.unoptimized`. Die Bilder sind bereits als WebP mit
  höchstens 1200 Pixeln abgelegt; der Unterschied ist gering.
- **Kein automatisches Zurückrollen.** Geht etwas schief, hilft ein Push des
  vorherigen Stands — die Action liefert ihn dann wieder aus.
- **Der Server läuft dauerhaft.** Das ist ein Vorteil: keine Kaltstarts beim
  ersten Aufruf nach längerer Ruhe.
