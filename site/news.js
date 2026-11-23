/*
 * News für die Startseite (neueste 5, als Kurzliste) und die Unterseite
 * news.html (alle, als ausgeschriebene Beiträge).
 *
 * Neue Meldung: einfach einen Eintrag in NEWS ergänzen. Die Reihenfolge im
 * Array ist egal, die Seiten sortieren nach Datum (neueste zuerst).
 * Meldungen ohne Datum stehen am Ende.
 * Wie viele Meldungen eine Liste zeigt, steht im Attribut data-limit der
 * Liste (<ul id="news-list" data-limit="5">). Ohne data-limit werden alle
 * Meldungen gezeigt. data-view="full" zeigt die Beiträge ausgeschrieben.
 *
 *   id    – kurzer Name ohne Leerzeichen, wird als Anker (news.html#id) genutzt
 *   date  – Datum im Format JJJJ-MM-TT (optional, aber nötig für die Sortierung)
 *   title – Überschrift (Pflicht)
 *   text  – Absätze als Liste von Texten (Pflicht)
 */
(function () {
  "use strict";

  var NEWS = [
    {
      id: "neue-webpraesenz",
      date: "2026-11-23",
      title: "Übergangsweise neue Web-Präsenz",
      text: [
        "Nach den vielen Veränderungen freuen wir uns, übergangsweise eine neue Webpräsenz präsentieren zu können. Momentan sind wir noch in einer Findungsphase, wie wir uns als Chor und in unserer Präsentation im Internet aufstellen wollen. Solange gilt diese Website als Übergang."
      ]
    },
    {
      id: "neue-chorleitung",
      date: "2026-11-17",
      title: "Neue Chorleitung",
      text: [
        // TODO: dd.mm.yyyy durch das Datum der Entscheidung ersetzen.
        "Mit der Entscheidung vom dd.mm.yyyy durch die Friends of Music begleitet ab dem 17.11.2026 die neue Chorleiterin Anke Janetzka.",
        "Als ausgebildete Mezzosopranistin und erfahrene Stimmbildnerin wird sie uns zukünftig mit ihrer Erfahrung und ihrer Passion zur Musik begleiten.",
        "Wir bedanken uns weiterhin herzlich bei Rudolf Brenner, der uns nach dem Abschied von unserer vorherigen Chorleiterin Alexandra Deibel in dieser Zeit begleitet hat."
      ]
    },
    {
      id: "neues-vorstandsleitungsteam",
      // TODO: Datum ergänzen (date: "JJJJ-MM-TT"), dann erscheint es oben in der Liste.
      title: "Neues Vorstandsleitungsteam",
      text: [
        // TODO: xx.yy.zzzz durch das Datum der Jahreshauptversammlung ersetzen.
        "Nach Verabschiedung unserer geliebten Chorleiterin Alexandra Deibel hat auch ihr Ehemann Oliver Deibel sein Amt als 1. Vorstand niedergelegt. Hierüber wurde bereits im März aktiv gesprochen und als Resultat in der Jahreshauptversammlung vom xx.yy.zzzz ein neuer Vorstand gebildet. Neben einer Aktualisierung der Satzung wurde auch eine neue Verteilung von Rollen und Aufgaben übernommen. Wir danken Oliver Deibel für sein Engagement in den vielen Jahren sehr und freuen uns, ihn weiterhin als aktiven Sänger begrüßen zu dürfen."
      ]
    }
  ];

  var list = document.getElementById("news-list");
  if (!list) return;

  var limit = parseInt(list.getAttribute("data-limit"), 10);
  var full = list.getAttribute("data-view") === "full";

  var listDate = new Intl.DateTimeFormat("de-DE", {
    weekday: "short", day: "2-digit", month: "2-digit", year: "numeric", timeZone: "UTC"
  });
  var articleDate = new Intl.DateTimeFormat("de-DE", {
    day: "2-digit", month: "2-digit", year: "numeric", timeZone: "UTC"
  });

  function el(tag, text) {
    var node = document.createElement(tag);
    if (text) node.textContent = text;
    return node;
  }

  function time(n, format) {
    if (isNaN(Date.parse(n.date))) return null;
    var t = el("time", format.format(new Date(n.date)));
    t.setAttribute("datetime", n.date);
    return t;
  }

  function stamp(n) {
    var ms = Date.parse(n.date);
    return isNaN(ms) ? -Infinity : ms;
  }

  var items = NEWS
    .filter(function (n) { return n && n.id && n.title && n.text && n.text.length; })
    .sort(function (a, b) { return stamp(b) - stamp(a); });
  if (limit > 0) items = items.slice(0, limit);

  if (!items.length) {
    var empty = el("p", "Derzeit gibt es keine Meldungen.");
    empty.className = "muted";
    list.replaceWith(empty);
    return;
  }

  items.forEach(function (n) {
    if (full) {
      var article = el("article");
      article.className = "news-article";
      article.id = n.id;
      var head = el("header");
      head.appendChild(el("h2", n.title));
      var d = time(n, articleDate);
      if (d) head.appendChild(d);
      article.appendChild(head);
      n.text.forEach(function (p) { article.appendChild(el("p", p)); });
      list.appendChild(article);
      return;
    }

    var li = el("li");
    var t = time(n, listDate);
    li.appendChild(t || el("span"));

    var body = el("div");
    var title = el("strong");
    var a = el("a", n.title);
    a.href = "news.html#" + encodeURIComponent(n.id);
    title.appendChild(a);
    body.appendChild(title);
    body.appendChild(el("small", n.text[0]));

    li.appendChild(body);
    list.appendChild(li);
  });
})();
