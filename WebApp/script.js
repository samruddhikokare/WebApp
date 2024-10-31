// Mobile menu toggle example
document.addEventListener("DOMContentLoaded", () => {
    const navLinks = document.querySelector(".nav-links");
    const menuToggle = document.querySelector(".menu-toggle");

    menuToggle.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });
});
