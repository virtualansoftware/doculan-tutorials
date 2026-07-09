(function () {
  'use strict';

  function initMobileMenu() {
    var toggle = document.getElementById('menuToggle');
    var menu = document.getElementById('mobileMenu');

    if (!toggle || !menu || toggle.dataset.bound === 'true') return;
    toggle.dataset.bound = 'true';

    function closeMenu() {
      menu.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
    }

    toggle.addEventListener('click', function (e) {
      e.stopPropagation();
      var isOpen = menu.classList.toggle('open');
      toggle.setAttribute('aria-expanded', String(isOpen));
    });

    menu.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', closeMenu);
    });

    document.addEventListener('click', function (e) {
      if (!menu.contains(e.target) && !toggle.contains(e.target)) closeMenu();
    });

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') closeMenu();
    });
  }

  function loadHeader() {
    var mount = document.getElementById('site-header');
    if (!mount || mount.dataset.loaded === 'true') return;

    fetch('header.html')
      .then(function (res) {
        if (!res.ok) throw new Error('Failed to fetch header.html: ' + res.status);
        return res.text();
      })
      .then(function (html) {
        mount.innerHTML = html;
        mount.dataset.loaded = 'true';
        initMobileMenu();
      })
      .catch(function (err) {
        console.error('[header.js] Unable to load header:', err);
      });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', loadHeader);
  } else {
    loadHeader();
  }
})();
