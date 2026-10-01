const navLinks = document.querySelector('.nav-links');
const menuToggle = document.querySelector('.menu-toggle');
menuToggle?.addEventListener('click', () => navLinks.classList.toggle('open'));

document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => navLinks.classList.remove('open'));
});

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('visible');
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

const sections = [...document.querySelectorAll('main section')];
const links = [...document.querySelectorAll('.nav-links a')];
const sectionObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    links.forEach(a => a.classList.toggle('active', a.getAttribute('href') === '#' + entry.target.id));
  });
}, { threshold: 0.55 });
sections.forEach(section => sectionObserver.observe(section));

const dot = document.querySelector('.cursor-dot');
const ring = document.querySelector('.cursor-ring');
window.addEventListener('mousemove', e => {
  dot.style.left = e.clientX + 'px';
  dot.style.top = e.clientY + 'px';
  ring.animate({ left: e.clientX + 'px', top: e.clientY + 'px' }, { duration: 160, fill: 'forwards' });
});
document.querySelectorAll('a,button,.project-card,.skill-group b').forEach(el => {
  el.addEventListener('mouseenter', () => ring.classList.add('hover'));
  el.addEventListener('mouseleave', () => ring.classList.remove('hover'));
});
