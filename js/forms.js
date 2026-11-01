

// L&J Haven Stays - Contact and Enquiry Form Validation

document.addEventListener("DOMContentLoaded", function () {

    const recipient = "thabileandile89@gmail.com";

    // South African date format and calendar picker
const checkinPicker = flatpickr("#checkin", {
    dateFormat: "d/m/Y",
    minDate: "today",
    disableMobile: true
});

const checkoutPicker = flatpickr("#checkout", {
    dateFormat: "d/m/Y",
    minDate: "today",
    disableMobile: true
});

// Check-out must be after check-in
checkinPicker.config.onChange.push(function (selectedDates) {
    if (selectedDates.length > 0) {
        checkoutPicker.set("minDate", new Date(
            selectedDates[0].getFullYear(),
            selectedDates[0].getMonth(),
            selectedDates[0].getDate() + 1
        ));
    }
});

    // Reusable function for sending form data using AJAX
    async function submitForm(form, errorElement, formData, successMessage) {

        try {
            const response = await fetch(
                "https://formsubmit.co/ajax/" + recipient,
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        "Accept": "application/json"
                    },
                    body: JSON.stringify(formData)
                }
            );

            const result = await response.json();

            if (response.ok && String(result.success) === "true") {
                alert(successMessage);
                form.reset();

                if (form.id === "enquiryForm") {
                    window.location.href = "thankyou.html";
                }

            } else {
                errorElement.textContent =
                    result.message || "Your message could not be sent. Please try again.";
            }

        } catch (error) {
            console.error("Form submission error:", error);

            errorElement.textContent =
                "Unable to send your message. Please check your internet connection and try again.";
        }
    }

    // CONTACT FORM
    const contactForm = document.getElementById("contactForm");

    if (contactForm) {

        const errorMessage = document.getElementById("contactError");

        contactForm.addEventListener("submit", function (event) {
            event.preventDefault();
            errorMessage.textContent = "";

            const name = document.getElementById("contactName").value.trim();
            const email = document.getElementById("contactEmail").value.trim();
            const phone = document.getElementById("contactPhone").value.trim();
            const subject = document.getElementById("contactSubject").value;
            const message = document.getElementById("contactMessage").value.trim();

            if (!name || !email || !phone || !subject || !message) {
                errorMessage.textContent = "Please complete all required fields.";
                return;
            }

            if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
                errorMessage.textContent = "Please enter a valid email address.";
                return;
            }

            if (!/^[0-9+\s()-]{7,20}$/.test(phone)) {
                errorMessage.textContent = "Please enter a valid phone number.";
                return;
            }

            if (message.length < 10) {
                errorMessage.textContent = "Your message must contain at least 10 characters.";
                return;
            }

            const formData = {
                name: name,
                email: email,
                phone: phone,
                subject: "L&J Haven Stays - " + subject,
                message: message,
                _replyto: email,
                _subject: "New Contact Form Message - L&J Haven Stays"
            };

            submitForm(
                contactForm,
                errorMessage,
                formData,
                "Thank you! Your message has been submitted successfully."
            );
        });
    }

    // ACCOMMODATION ENQUIRY FORM
    const enquiryForm = document.getElementById("enquiryForm");

    if (enquiryForm) {

        const errorMessage = document.getElementById("enquiryError");

        enquiryForm.addEventListener("submit", function (event) {
            event.preventDefault();
            errorMessage.textContent = "";

            const name = document.getElementById("name").value.trim();
            const email = document.getElementById("email").value.trim();
            const phone = document.getElementById("phone").value.trim();
            const property = document.getElementById("property").value;
            const guests = Number(document.getElementById("guests").value);
            const checkin = document.getElementById("checkin").value;
            const checkout = document.getElementById("checkout").value;
            const message = document.getElementById("message").value.trim();

            if (!name || !email || !phone || !property ||
                !guests || !checkin || !checkout || !message) {
                errorMessage.textContent = "Please complete all required fields.";
                return;
            }

            if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
                errorMessage.textContent = "Please enter a valid email address.";
                return;
            }

            if (!/^[0-9+\s()-]{7,20}$/.test(phone)) {
                errorMessage.textContent = "Please enter a valid phone number.";
                return;
            }

            if (guests < 1 || !Number.isInteger(guests)) {
                errorMessage.textContent = "Please enter a valid number of guests.";
                return;
            }

           function parseSouthAfricanDate(dateString) {
    const parts = dateString.split("/");

    if (parts.length !== 3) {
        return null;
    }

    const day = Number(parts[0]);
    const month = Number(parts[1]);
    const year = Number(parts[2]);

    const date = new Date(year, month - 1, day);

    if (
        date.getFullYear() !== year ||
        date.getMonth() !== month - 1 ||
        date.getDate() !== day
    ) {
        return null;
    }

    return date;
}

const checkinDate = parseSouthAfricanDate(checkin);
const checkoutDate = parseSouthAfricanDate(checkout);

if (!checkinDate || !checkoutDate) {
    errorMessage.textContent =
        "Please enter valid dates in DD/MM/YYYY format.";
    return;
}

const today = new Date();
today.setHours(0, 0, 0, 0);

if (checkinDate < today) {
    errorMessage.textContent =
        "Your check-in date cannot be in the past.";
    return;
}

if (checkoutDate <= checkinDate) {
    errorMessage.textContent =
        "Your check-out date must be after your check-in date.";
    return;
}

            if (message.length < 10) {
                errorMessage.textContent =
                    "Please provide at least 10 characters of additional information.";
                return;
            }

            const formData = {
                name: name,
                email: email,
                phone: phone,
                property: property,
                guests: guests,
                checkin: checkin,
                checkout: checkout,
                message: message,
                _replyto: email,
                _subject: "New Accommodation Enquiry - L&J Haven Stays"
            };

            submitForm(
                enquiryForm,
                errorMessage,
                formData,
                "Thank you! Your accommodation enquiry has been submitted successfully."
            );
        });
    }

});
