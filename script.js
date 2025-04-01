 // Select all header menu links
  const menuLinks = document.querySelectorAll('.header_menu a');
  
  // Add a click event listener to each link
  menuLinks.forEach(link => {
    link.addEventListener('click', function(event) {
      event.preventDefault(); // Prevent default anchor behavior
      
      // Hide all content sections
      document.querySelectorAll('.content-section').forEach(section => {
        section.style.display = 'none';
      });
      
      // Get the target section's id from the data attribute
      const targetId = this.getAttribute('data-target');
      const targetSection = document.getElementById(targetId);
      
      // Show the targeted section if it exists
      if (targetSection) {
        targetSection.style.display = 'block';
      }
    });
  });

