// Hell/Dunkel: folgt dem System, bis jemand umschaltet. Die Wahl wird lokal gemerkt.
(function () {
  var root = document.documentElement;
  var key = "gv-theme";
  var system = window.matchMedia("(prefers-color-scheme: dark)");

  root.classList.add("js");
  try {
    var saved = localStorage.getItem(key);
    if (saved === "light" || saved === "dark") root.dataset.theme = saved;
  } catch (e) {}

  function current() {
    return root.dataset.theme || (system.matches ? "dark" : "light");
  }

  document.addEventListener("DOMContentLoaded", function () {
    var button = document.querySelector(".theme-toggle");
    if (!button) return;

    function sync() { button.setAttribute("aria-pressed", String(current() === "dark")); }

    button.addEventListener("click", function () {
      var next = current() === "dark" ? "light" : "dark";
      root.dataset.theme = next;
      try { localStorage.setItem(key, next); } catch (e) {}
      sync();
    });
    if (system.addEventListener) system.addEventListener("change", sync);
    sync();
  });
})();
