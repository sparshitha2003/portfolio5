var typed = new Typed('.text', {
    strings: ['web development enthusiast', 'A student at Mangalore Institute of technology','Python aficionado'],
    typeSpeed: 50,
    loop:true
  });
  document.addEventListener("DOMContentLoaded", function() {
    const toggleButton = document.getElementById("toggleButton");
    const navbar = document.querySelector(".navbar");

    toggleButton.addEventListener("click", function() {
        navbar.classList.toggle("show-navbar"); // Toggle the 'show-navbar' class
    });
});
  