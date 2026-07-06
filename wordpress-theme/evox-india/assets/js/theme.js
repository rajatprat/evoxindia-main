(function () {
  const header = document.querySelector('.evox-header');
  const toggle = document.querySelector('.evox-menu-toggle');
  const menu = document.querySelector('.evox-mobile-menu');

  const updateHeader = () => header?.classList.toggle('is-scrolled', window.scrollY > 24);
  updateHeader();
  window.addEventListener('scroll', updateHeader, { passive: true });

  toggle?.addEventListener('click', () => {
    const open = toggle.getAttribute('aria-expanded') === 'true';
    toggle.setAttribute('aria-expanded', String(!open));
    menu?.classList.toggle('is-open', !open);
    document.body.classList.toggle('evox-menu-open', !open);
  });
})();

