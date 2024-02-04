
document.addEventListener('DOMContentLoaded', function () {
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('section');

  function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  }

  navLinks.forEach((link, index) => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      scrollToSection(sections[index].id);
    });
  });
});

  window.addEventListener('scroll', function () {
    var header = document.querySelector('header');
    var scrollPosition = window.scrollY;
    var colors = ['#555', '#ff6347', '#7b68ee', '#32cd32', '#ff4500', '#4169e1'];
    var colorIndex = Math.floor(scrollPosition / (document.body.scrollHeight / colors.length));
    header.style.backgroundColor = colors[colorIndex];
  });

