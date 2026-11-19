# Homepage-GV-Bubenheim

`site/` contains the static public Xara export of [GV Bubenheim](https://www.gv-bubenheim.de/), captured on 2026-11-19. The original paths, file contents, and navigation are preserved.

The snapshot includes 17 HTML pages, 102 images, 4 PDFs, and the accompanying styles, scripts, fonts, and Xara file list. It covers the main navigation, the choir submenu, and the older pages listed in the Xara file list. Four legacy EOT fonts listed in that file return HTTP 404 at the source. The available WOFF fonts are included.

## Local preview

Run from the repository root with Python 3:

```sh
python -m http.server 8765 --bind 127.0.0.1 --directory site
```

Open [the local homepage](http://127.0.0.1:8765/).

## Hosting

Use `site/` as the document root and configure `index.htm` as the default document for `/`. The site uses plain HTML, CSS, and JavaScript and requires no build step.
