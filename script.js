document.addEventListener('DOMContentLoaded', function() {
  // Select all menu links within the header menu
  const navLinks = document.querySelectorAll('.header_menu a');

  // Function to hide all content sections
  function hideAllSections() {
    const sections = document.querySelectorAll('.content-section');
    sections.forEach(section => {
      section.style.display = 'none';
    });
  }

  // Attach click event to each navigation link
  navLinks.forEach(link => {
    link.addEventListener('click', function(event) {
      event.preventDefault(); // Prevent the default link behavior

      // Get the target section from the data-section attribute
      const targetSection = this.getAttribute('data-section');
      
      // Hide all sections and then display the chosen one
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
