# Design QA

The redesign uses the Xara snapshot in commit `4661226` as its content source.

The event schedule, roles, and contact details reflect the supplied snapshot, including differences between the choir leadership page and the historical timeline.

## Einzelseiten statt Einseiter

- Jedes Thema hat eine eigene Datei (Liste im README). `index.html` enthält nur Startbereich und Singstunden; Chöre, Termine, Verein, Archiv und Impressum sind nicht mehr eingebettet.
- Die Hauptnavigation markiert die aktuelle Seite mit `aria-current`. Verein, Chöre und Archiv haben eine Unternavigation.
- Geprüft: Alle 18 Seiten zeigen genau eine `h1`; alle lokalen Links, Bilder, PDFs und Fragmente haben ein existierendes Ziel (Skript). Kein horizontaler Überlauf bei 320 und 1440 CSS-Pixeln.
- Die alten `.htm`-Adressen der Xara-Fassung sind entfernt und werden nicht weitergeleitet.

## Hell- und Dunkelmodus

- Die Seite folgt dem Farbschema des Systems. Der Umschalter in der Kopfzeile überschreibt es; die Wahl wird im `localStorage` gemerkt und gilt auf allen Seiten. Ohne JavaScript bleibt der Umschalter ausgeblendet, das Systemschema greift trotzdem.
- Alle Inhaltsseiten wurden in beiden Schemata bei 320, 390 und 1440 CSS-Pixeln ohne horizontalen Überlauf gerendert. Die Startseite wurde bei 375 und 1280 CSS-Pixeln in beiden Schemata angesehen.
- Geringster gemessener Kontrast für Text: 5,61:1 (gedämpfter Text auf der Flächenfarbe im Hellmodus).
