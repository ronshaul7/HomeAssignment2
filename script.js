document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.nav-link');
  
    navLinks.forEach(function(navLink) {
      if (navLink.href === window.location.href) {
        navLink.parentElement.classList.add('current');
      }
    });
  });

  // Get the current page URL
var currentUrl = window.location.href;

// Get all the navigation links
var navLinks = document.querySelectorAll(".navList a");

// Loop through each link and compare its href attribute with the current URL
navLinks.forEach(function(link) {
  if (link.href === currentUrl) {
    // Add a class to the link to highlight it as the current page
    link.classList.add("active");
  }
});
