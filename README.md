# Homepage-GV-Bubenheim

Interim-Website des Gesangvereins Liederkranz 1859 Bubenheim.

Der Verein befindet sich nach mehreren Veränderungen noch in einer Findungsphase, wie er sich als Chor und im Internet aufstellen will. Bis das geklärt ist, dient diese Seite als Übergangslösung. Sie ist bewusst schlicht gehalten, damit sie ohne großen Aufwand gepflegt und später ersetzt werden kann.

`site/` enthält die responsive, statische Website. Inhaltlich beruht sie auf dem Stand der bisherigen Vereinsseite vom November 2026, einschließlich Chor- und Projektarchiv. Die ursprünglichen Bilder und PDF-Dateien liegen weiterhin in `site/index_htm_files/`.

Jedes Thema hat eine eigene Seite. `index.html` enthält nur die Startseite mit den fünf neuesten Meldungen und den Singstunden.

| Bereich | Seiten |
| --- | --- |
| Start | `index.html` |
| News | `news.html` |
| Chöre | `choere.html`, `kleine-strolche.html`, `phonations.html`, `friends-of-music.html` |
| Termine | `termine.html` |
| Verein | `verein.html` (Präambel), `vorstand.html`, `chorleitung.html`, `historie.html`, `satzung.html` |
| Archiv | `archiv.html`, `maennerchor.html`, `gemischter-chor.html`, `projektchor-2019.html`, `musical-projekt-2018.html`, `tabaluga.html` |
| Impressum | `impressum.html` |

## Inhalte pflegen

- **Texte:** Den Inhalt in der jeweiligen HTML-Datei bearbeiten, gemeinsame Gestaltung in `site/site.css`.
- **Navigation:** Kopfzeile, Fußzeile und Unternavigation stehen in jeder Datei einzeln. Bei einer neuen Seite müssen sie überall ergänzt werden.
- **News:** Neue Meldungen kommen als Eintrag in das Array `NEWS` in `site/news.js`. Die Seiten sortieren nach Datum, die neueste Meldung steht oben. Die Startseite zeigt die letzten fünf, `news.html` alle. Das Format der Einträge ist am Anfang von `news.js` beschrieben.
- **Alte Adressen:** Die früheren `.htm`-Dateinamen der Xara-Fassung gibt es nicht mehr und sie werden nicht weitergeleitet.

## Lokale Vorschau

Im Hauptverzeichnis des Repositorys mit Python 3 ausführen:

```sh
python -m http.server 8765 --bind 127.0.0.1 --directory site
```

Anschließend die [lokale Startseite](http://127.0.0.1:8765/) öffnen.

## Veröffentlichung

Die Seite wird über GitHub Pages ausgeliefert. Der Workflow `.github/workflows/static.yml` veröffentlicht bei jedem Push auf `main` ausschließlich den Ordner `site/`.

Bei einem anderen Hosting genügt es, `site/` als Dokumentenstamm einzurichten, mit `index.html` als Standarddokument. Die Seite besteht aus reinem HTML und CSS mit relativen Links und braucht weder einen Build-Schritt noch besondere Weiterleitungsregeln. Das Skript `news.js` lädt die Meldungen auf Start- und News-Seite. Ohne JavaScript verweisen die Seiten stattdessen auf `news.html` bzw. die Termine.
