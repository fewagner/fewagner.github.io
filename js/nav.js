// Navigation shared by all pages: the mobile menu and the Projects dropdown.

function toggleNav() {
  var open = document.getElementById('nav-links').classList.toggle('open');
  document.querySelector('.nav-toggle').setAttribute('aria-expanded', String(open));
}

(function () {
  var item = document.querySelector('.has-dropdown');
  if (!item) {
    return;
  }
  var toggle = item.querySelector('.dropdown-toggle');

  function setOpen(open) {
    item.classList.toggle('open', open);
    toggle.setAttribute('aria-expanded', String(open));
  }

  toggle.addEventListener('click', function () {
    setOpen(!item.classList.contains('open'));
  });

  // Close when clicking elsewhere, tabbing out of the menu, or pressing Escape.
  document.addEventListener('click', function (e) {
    if (!item.contains(e.target)) {
      setOpen(false);
    }
  });
  item.addEventListener('focusout', function (e) {
    if (e.relatedTarget && !item.contains(e.relatedTarget)) {
      setOpen(false);
    }
  });
  item.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
      setOpen(false);
      toggle.focus();
    }
  });
})();
