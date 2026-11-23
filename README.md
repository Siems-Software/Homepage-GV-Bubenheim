# Homepage-GV-Bubenheim

`site/` contains the responsive static website for Gesangverein Liederkranz 1859 Bubenheim. It uses the content from the November 2026 snapshot, including the choir and project archive. The original 102 images and four PDFs are kept in `site/index_htm_files/`.

Every topic has its own page; `index.html` only holds the landing page and the rehearsal times.

| Area | Pages |
| --- | --- |
| Start | `index.html` |
| Chöre | `choere.html`, `kleine-strolche.html`, `phonations.html`, `friends-of-music.html` |
| Termine | `termine.html` |
| Verein | `verein.html` (Präambel), `vorstand.html`, `chorleitung.html`, `historie.html`, `satzung.html`, `beitraege.html` |
| Archiv | `archiv.html`, `maennerchor.html`, `gemischter-chor.html`, `projektchor-2019.html`, `musical-projekt-2018.html`, `tabaluga.html` |
| Impressum | `impressum.html` |

Edit content in the relevant HTML file and shared styles in `site/site.css`. Header, footer and sub-navigation are repeated in each file, so change them everywhere when you add a page. The old Xara `.htm` file names no longer exist.

## Local preview

Run from the repository root with Python 3:

```sh
python -m http.server 8765 --bind 127.0.0.1 --directory site
```

Open [the local homepage](http://127.0.0.1:8765/).

## Hosting

Serve `site/` as the document root with `index.html` as the default document. The site uses plain HTML and CSS with relative links. It requires no build step or custom routing rules. `theme.js` only adds the light/dark switch; the site works without it.
