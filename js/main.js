

// L&J Haven Stays - Main JavaScript File

document.addEventListener("DOMContentLoaded", function () {

    console.log("L&J Haven Stays website loaded successfully!");

    // Identify the current page
    const currentPage = window.location.pathname.split("/").pop();

    // Highlight the active navigation link
    const navigationLinks = document.querySelectorAll("nav a");

    navigationLinks.forEach(function (link) {

        const linkPage = link.getAttribute("href");

        if (linkPage === currentPage) {
            link.setAttribute("aria-current", "page");
        }

    });

    // SCROLL REVEAL ANIMATIONS

    function initializeRevealAnimations() {

        const revealElements = document.querySelectorAll(
            "main section, .property-card"
        );

        // Respect reduced-motion accessibility preferences
        if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
            revealElements.forEach(function (element) {
                element.classList.add("reveal", "active");
            });
            return;
        }

        // Check browser support
        if (!("IntersectionObserver" in window)) {
            revealElements.forEach(function (element) {
                element.classList.add("reveal", "active");
            });
            return;
        }

        const revealObserver = new IntersectionObserver(function (entries) {

            entries.forEach(function (entry) {

                if (entry.isIntersecting) {
                    entry.target.classList.add("active");
                    revealObserver.unobserve(entry.target);
                }

            });

        }, {
            threshold: 0.15
        });

        revealElements.forEach(function (element) {
            element.classList.add("reveal");
            revealObserver.observe(element);
        });

    }

    // Initialize scroll reveal animations
    initializeRevealAnimations();

});
