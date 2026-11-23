// Zeigt "2026" bzw. ab 2027 "2026 - <aktuelles Jahr>" im Copyright-Hinweis.
(function () {
  var start = 2026;
  var year = new Date().getFullYear();
  var text = year > start ? start + ' - ' + year : String(start);
  var nodes = document.querySelectorAll('[data-copyright-years]');
  for (var i = 0; i < nodes.length; i++) nodes[i].textContent = text;
})();
