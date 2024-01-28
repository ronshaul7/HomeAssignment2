

document.addEventListener('DOMContentLoaded', function() {
    // Get the current page URL
    var currentUrl = window.location.href;
  
    // Get all the navigation links
    var navLinks = document.querySelectorAll("nav ul li a");
  
    // Loop through each link and compare its href attribute with the current URL
    navLinks.forEach(function(link) {
      if (link.href === currentUrl) {
        // Add a class to the link to highlight it as the current page
        link.classList.add("active");
      }
    });
  });
  

  function toggleNav() {
    var navList = document.querySelector('.navList');
    navList.classList.toggle('active');
}