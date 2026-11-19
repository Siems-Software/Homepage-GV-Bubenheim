# Homepage-GV-Bubenheim

`site/` contains the responsive static website for Gesangverein Liederkranz 1859 Bubenheim. It uses the content from the November 2026 snapshot, including the choir and project archive. The original 102 images and four PDFs are kept in `site/index_htm_files/`.

Edit content in the relevant HTML file and shared styles in `site/site.css`. The historic `.htm` paths are still available. `index.htm` forwards to `index.html`.

## Local preview

Run from the repository root with Python 3:

```sh
python -m http.server 8765 --bind 127.0.0.1 --directory site
```

Open [the local homepage](http://127.0.0.1:8765/).

## Hosting

Serve `site/` as the document root with `index.html` as the default document. The site uses plain HTML and CSS with relative links. It requires no build step, JavaScript, or custom routing rules.
