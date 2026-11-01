// L&J Haven Stays - Image Gallery Lightbox

document.addEventListener("DOMContentLoaded", function () {

    // Select all images inside both property galleries
    const galleryImages = document.querySelectorAll(".property-gallery img");

    // Create the lightbox container
    const lightbox = document.createElement("div");
    lightbox.classList.add("lj-lightbox");

    // Create the enlarged image
    const enlargedImage = document.createElement("img");
    enlargedImage.classList.add("lj-lightbox-image");

    // Create the close button
    const closeButton = document.createElement("button");
    closeButton.classList.add("lj-lightbox-close");
    closeButton.textContent = "\u00D7";
    closeButton.setAttribute("aria-label", "Close image");

    // Add elements to the lightbox
    lightbox.appendChild(closeButton);
    lightbox.appendChild(enlargedImage);
    document.body.appendChild(lightbox);

    // Open the lightbox when a gallery image is clicked
    galleryImages.forEach(function (image) {

        image.style.cursor = "pointer";

        image.addEventListener("click", function () {

            enlargedImage.src = image.src;
            enlargedImage.alt = image.alt;

            lightbox.classList.add("active");
            lightbox.setAttribute("aria-hidden", "false");

        });

    });

    // Close the lightbox
    function closeLightbox() {
        lightbox.classList.remove("active");
        lightbox.setAttribute("aria-hidden", "true");
        enlargedImage.src = "";
    }

    closeButton.addEventListener("click", closeLightbox);

    // Close when clicking outside the enlarged image
    lightbox.addEventListener("click", function (event) {
        if (event.target === lightbox) {
            closeLightbox();
        }
    });

    // Close when the Escape key is pressed
    document.addEventListener("keydown", function (event) {
        if (event.key === "Escape") {
            closeLightbox();
        }
    });

});