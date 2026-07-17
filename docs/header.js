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

  // Close delay covers the moment the cursor crosses the visual gap between
  // the trigger and the mega-menu panel, where neither element is hovered.
  var MEGA_CLOSE_DELAY = 200;

  function initMegaMenus() {
    var dropdowns = document.querySelectorAll('.mega-dropdown');

    dropdowns.forEach(function (dropdown) {
      if (dropdown.dataset.megaBound === 'true') return;
      dropdown.dataset.megaBound = 'true';

      var closeTimer = null;

      function openMenu() {
        if (closeTimer !== null) {
          clearTimeout(closeTimer);
          closeTimer = null;
        }
        dropdown.classList.add('mega-open');
      }

      function scheduleClose() {
        if (closeTimer !== null) clearTimeout(closeTimer);
        closeTimer = setTimeout(function () {
          dropdown.classList.remove('mega-open');
          closeTimer = null;
        }, MEGA_CLOSE_DELAY);
      }

      // mouseenter/mouseleave don't bubble and are computed from the DOM
      // ancestry of the hovered element, so both the trigger <a> and the
      // .mega-menu panel (its sibling inside .mega-dropdown) keep this
      // listener's target "entered" while hovering either — only the empty
      // gap between them counts as a leave, which scheduleClose absorbs.
      dropdown.addEventListener('mouseenter', openMenu);
      dropdown.addEventListener('mouseleave', scheduleClose);
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
        initMegaMenus();
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
