# L&J Haven Stays

## Student Information

**Student Name:** Thabile Jafta  
**Student Number:** [ST10529016]  
**Module:** WEDE5020  
**Project:** Website Project – Parts 1, 2, & 3
**Organisation:** L&J Haven Stays  

---

## Project Overview

L&J Haven Stays is a hypothetical accommodation business offering comfortable and peaceful places to stay in Salt Rock, KwaZulu-Natal. The website was developed as a small accommodation website to provide visitors with information about the available properties and an easy way to make enquiries.

The website provides information about L&J Haven Stays, its accommodation options, property features, and contact details. The website also includes an enquiry form that allows visitors to submit their accommodation requirements.

Part 1 focuses on establishing the basic HTML structure, organising project files, implementing navigation, integrating images and content, and creating a functional foundation for the website.

---

## Website Goals and Objectives

The main goal of the website is to provide visitors with clear and accessible information about L&J Haven Stays.

The objectives are to:

- Provide information about L&J Haven Stays and its accommodation services.
- Present the available accommodation options and their features.
- Make it easy for visitors to navigate between website pages.
- Provide visitors with contact information.
- Allow potential guests to submit accommodation enquiries.
- Create a clear and organised website structure that can be developed further in later parts of the project.

---

## Key Features and Functionality

The website currently includes the following features:

- Homepage introducing L&J Haven Stays.
- About Us page providing information about the organisation.
- Properties page displaying Ocean Haven and Palm Retreat.
- Property images and descriptions.
- Lists of accommodation features.
- Enquiry page containing an accommodation enquiry form.
- Contact page containing contact information and a contact form.
- Thank You page confirming successful form submission.
- Navigation links connecting the website pages.
- Organised image folder containing the website's accommodation images.
- Semantic HTML elements including header, navigation, main content, sections and footer.

---

## Website Pages

| Page | File | Purpose |
|---|---|---|
| Home | `index.html` | Introduces L&J Haven Stays and provides an overview of the accommodation business. |
| About Us | `about.html` | Provides information about the organisation, its purpose, mission and vision. |
| Properties | `properties.html` | Presents Ocean Haven and Palm Retreat with descriptions, images and features. |
| Enquiry | `enquiry.html` | Allows visitors to submit an accommodation enquiry. |
| Contact | `contact.html` | Provides contact information and a contact form. |
| Thank You | `thankyou.html` | Confirms that an enquiry has been submitted. |

---

## Timeline and Milestones

### Part 1 – Project Foundation

**Milestone 1: Project Planning**
- Select the target organisation.
- Define the target audience.
- Establish website goals and objectives.
- Research the organisation and required content.

**Milestone 2: Content and Asset Collection**
- Gather suitable accommodation information.
- Collect and organise website images.
- Establish appropriate file naming conventions.

**Milestone 3: Website Structure**
- Create the project folder.
- Create the required HTML pages.
- Create the Images, CSS and JS folders.
- Develop the sitemap.

**Milestone 4: HTML Development**
- Develop the basic HTML structure for each page.
- Add headings, paragraphs, lists, images and links.
- Create navigation links between the pages.
- Add forms for enquiries and contact information.

**Milestone 5: Testing and Debugging**
- Test navigation links.
- Check that images display correctly.
- Check forms and page links.
- Correct HTML errors and improve code readability.

**Milestone 6: Part 1 Submission**
- Finalise the website structure.
- Update the README.md.
- Organise the project files.
- Prepare the project for GitHub and submission.

---

## Part 1 Details

Part 1 establishes the foundation of the L&J Haven Stays website. The project uses HTML to create the structure and content of the website.

The project includes:

- A minimum of five main web pages.
- Semantic HTML structure.
- Functional navigation between pages.
- Accommodation images stored in an Images folder.
- Enquiry and contact forms.
- A consistent header and footer structure.
- An organised project folder structure.
- Comments within the HTML code to explain implemented sections.
- A sitemap representing the website structure.

CSS and JavaScript folders have been included in the project structure for development in later parts of the project.

---

## Sitemap

The website structure is organised around the homepage, with the main pages accessible through the navigation menu.

```text
L&J Haven Stays
│
├── Home
│   └── index.html
│
├── About Us
│   └── about.html
│
├── Properties
│   └── properties.html
│       ├── Ocean Haven
│       └── Palm Retreat
│
├── Enquiry
│   └── enquiry.html
│       └── Thank You
│           └── thankyou.html
│
└── Contact
    └── contact.html

    ---

## Part 2 – CSS and Responsive Design

Part 2 builds on the HTML foundation created in Part 1 by adding CSS styling and responsive design to improve the appearance, usability and consistency of the L&J Haven Stays website.

### CSS and Styling

The website has been styled using an external CSS stylesheet named `style.css`. The stylesheet is linked to all website pages and provides a consistent visual design throughout the website.

The CSS implementation includes:

- Consistent Arial font for general website text.
- A modern and clean heading style.
- A baby-blue colour scheme.
- Styled navigation links and buttons.
- Consistent spacing, margins and padding.
- Styled content sections and accommodation cards.
- Responsive image sizing.
- Responsive accommodation galleries.
- Mobile-friendly page layouts.
- Styled enquiry and contact forms.
- Consistent header and footer design.
- Responsive layouts for different screen sizes.

### Responsive Design

The website was tested using browser Developer Tools at different screen sizes, including desktop and mobile device views.

The responsive design allows the website content to adjust according to the available screen width. Navigation and content sections stack appropriately on smaller screens, while accommodation galleries and other website elements remain readable and usable.

The website was tested using a mobile viewport of approximately 400 × 645 pixels to verify that the pages remain functional on smaller devices.

### Part 2 Pages

The following pages were updated with the CSS stylesheet:

- `index.html` – Homepage
- `about.html` – About Us page
- `properties.html` – Properties and accommodation page
- `enquiry.html` – Enquiry form
- `contact.html` – Contact page
- `thankyou.html` – Enquiry confirmation page

### Part 2 Changes

Part 2 introduced visual styling and responsive functionality while maintaining the HTML structure developed in Part 1. The website was tested to ensure that navigation, images, forms and page layouts continue to function correctly across different screen sizes.

The project was also prepared for GitHub version control and final submission.




## Part 3 – JavaScript Functionality and Interactivity

Part 3 builds on the HTML and CSS foundation developed in Parts 1 and 2 by introducing JavaScript functionality, interactive website elements, form validation and dynamic content.

### JavaScript Implementation

JavaScript was implemented using separate external files stored in the `js` folder.

The JavaScript files include:

- `main.js` – Handles active navigation highlighting, scroll reveal animations and accessibility considerations.
- `home.js` – Dynamically generates accommodation property cards on the homepage.
- `properties.js` – Implements property searching, filtering and alphabetical sorting.
- `gallery.js` – Implements an interactive image gallery lightbox for enlarged property images.
- `forms.js` – Handles contact and accommodation enquiry form validation, date selection and AJAX submission.

### Interactive Website Features

The following interactive features were implemented:

- Scroll reveal animations for selected website sections.
- Dynamic property cards on the homepage.
- Property search functionality.
- Alphabetical property sorting in ascending and descending order.
- Interactive property image galleries.
- Lightbox functionality allowing visitors to enlarge and close property images.
-- Google Maps integration displaying illustrative demonstration locations for Ocean Haven and Palm Retreat in Salt Rock. 

### Form Validation and Processing

The website includes separate accommodation enquiry and contact forms.

The contact form incorporates:

- Required form fields.
- HTML5 form validation.
- JavaScript client-side validation.
- Custom validation messages.
- Email format and telephone number checks.
- AJAX form submission using the FormSubmit service.
- Email delivery of submitted contact information.

The contact form was tested successfully, including its validation, activation and email submission process.

The accommodation enquiry form includes:

- Required field validation.
- Email and telephone number checks.
- Date selection using a calendar picker in DD/MM/YYYY format.
- Check-in and check-out date validation.
- AJAX submission and successful submission confirmation.

### Search Engine Optimisation and Accessibility

SEO and accessibility improvements were introduced across the website.

These include:

- Descriptive page titles.
- Meta descriptions and keywords.
- Author metadata.
- Descriptive image filenames.
- Meaningful alternative text for images.
- Responsive image attributes using `srcset` and `sizes`.
- Semantic HTML elements.
- Accessible form labels and validation feedback.

The thank-you page includes a `noindex` directive to discourage search engines from displaying it as a standalone search result.

### Testing and Quality Assurance

Testing was performed to assess website functionality and usability.

The testing included:

- Checking website navigation.
- Testing the property search and sorting functionality.
- Testing gallery image enlargement and closing interactions.
- Checking Google Maps embeds.
- Testing contact form validation.
- Testing AJAX submission and email delivery.
- Checking responsive layouts.
- Checking image display and alternative text.

### Project Development and Version Control

The website was developed using HTML, CSS and JavaScript. Visual Studio Code was used as the development environment.

GitHub was used for version control and project management. The project documentation includes a README file and changelog to record development progress and changes made throughout the project.

### Added
- Created a dedicated References page (`references.html`).
- Added Pexels as an image source acknowledgement.
- Added References links to the footers of all six main website pages.
- Updated website documentation to include the References page.

### Conclusion

The L&J Haven Stays website has progressed from a basic HTML structure into a styled, responsive and interactive accommodation website. The implementation of JavaScript, dynamic content, interactive maps, image galleries, form validation and email processing improves the website's functionality and user experience.