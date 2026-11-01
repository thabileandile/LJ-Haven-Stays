// L&J Haven Stays - About Page FAQ Accordion

document.addEventListener("DOMContentLoaded", function () {

    const faqQuestions = document.querySelectorAll(".faq-question");

    faqQuestions.forEach(function (question) {

        question.addEventListener("click", function () {

            const answer = question.nextElementSibling;
            const isExpanded = question.getAttribute("aria-expanded") === "true";

            // Toggle the answer
            answer.hidden = isExpanded;

            // Update accessibility information
            question.setAttribute("aria-expanded", !isExpanded);

            // Change the plus sign to a minus sign
            const icon = question.querySelector(".faq-icon");

            icon.textContent = isExpanded ? "+" : "−";

        });

    });

});