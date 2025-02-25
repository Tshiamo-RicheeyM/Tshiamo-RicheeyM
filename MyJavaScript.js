// script.js

document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.getElementById("menu-toggle");
    const navLinks = document.querySelector("nav ul");

    menuToggle.addEventListener("click", function () {
        navLinks.classList.toggle("active");
    });

    // Smooth scrolling for nav links
    document.querySelectorAll("nav ul li a").forEach(link => {
        link.addEventListener("click", function (e) {
            e.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop - 60,
                    behavior: "smooth"
                });
            }
            navLinks.classList.remove("active"); // Close menu on click (mobile)
        });
    });

    // Scroll animations
    const sections = document.querySelectorAll("section");
    const options = { threshold: 0.2 };
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("fade-in");
            }
        });
    }, options);

    sections.forEach(section => {
        observer.observe(section);
    });

    // Contact form validation
    const contactForm = document.querySelector("#contact-form");
    if (contactForm) {
        contactForm.addEventListener("submit", function (e) {
            e.preventDefault();
            const emailField = document.querySelector("#email");
            const messageField = document.querySelector("#message");
            if (emailField.value === "" || messageField.value === "") {
                alert("Please fill in all fields before submitting.");
                return;
            }
            alert("Message sent successfully!");
            contactForm.reset();
        });
    }
});
