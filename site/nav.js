// Mobile Navigation: blendet die Hauptnavigation auf schmalen Bildschirmen hinter einer Menü-Schaltfläche ein.
// Ohne JavaScript bleibt die Navigation als umbrechende Linkliste sichtbar.
(function () {
  var row = document.querySelector('.header-row');
  var end = row && row.querySelector('.header-end');
  if (!row || !end) return;

  var root = document.documentElement;
  var narrow = window.matchMedia('(max-width: 43rem)');

  var button = document.createElement('button');
  button.type = 'button';
  button.className = 'nav-toggle';
  button.setAttribute('aria-expanded', 'false');
  button.setAttribute('aria-controls', 'hauptnavigation');
  button.setAttribute('aria-label', 'Menü öffnen');
  button.innerHTML =
    '<span class="nav-toggle-bars" aria-hidden="true"><span></span><span></span><span></span></span>' +
    '<span class="nav-toggle-text">Menü</span>';

  end.id = 'hauptnavigation';
  row.insertBefore(button, end);
  root.classList.add('js-nav');

  function setOpen(open, restoreFocus) {
    root.classList.toggle('nav-open', open);
    button.setAttribute('aria-expanded', String(open));
    button.setAttribute('aria-label', open ? 'Menü schließen' : 'Menü öffnen');
    if (!open && restoreFocus) button.focus();
  }

  button.addEventListener('click', function () {
    setOpen(!root.classList.contains('nav-open'));
  });

  document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape' && root.classList.contains('nav-open')) setOpen(false, true);
  });

  function onChange() { if (!narrow.matches) setOpen(false); }
  if (narrow.addEventListener) narrow.addEventListener('change', onChange);
  else narrow.addListener(onChange);
})();
