document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.nav-menu__link').forEach(link => {
    link.addEventListener('click', () => {
      document.querySelectorAll('.nav-menu__link').forEach(l => l.classList.remove('is-active'));
      link.classList.add('is-active');
    });
  });
});
