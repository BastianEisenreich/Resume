document.addEventListener('DOMContentLoaded', function() {
  const navLinks = document.querySelectorAll('.header_menu a');

  function hideAllSections() {
    const sections = document.querySelectorAll('.content-section');
    sections.forEach(section => {
      section.style.display = 'none';
    });
  }

  navLinks.forEach(link => {
    link.addEventListener('click', function(event) {
      event.preventDefault();
      const targetSection = this.getAttribute('data-section');

      // Optionally, update active class for styling
      navLinks.forEach(link => link.classList.remove('active'));
      this.classList.add('active');

      hideAllSections();
      const section = document.getElementById(targetSection);
      if (section) {
        section.style.display = 'block';
      } else {
        console.warn(`No section found with id "${targetSection}"`);
      }
    });
  });
});
