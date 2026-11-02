// L&J Haven Stays - Dynamic Homepage Properties

document.addEventListener("DOMContentLoaded", function () {

    // Property information stored in JavaScript
    const properties = [

        {
            name: "L&J Ocean Haven",
            image: "Images/Ocean Haven Index.jpg",
            description: "A spacious coastal accommodation designed for families and groups, accommodating up to 6 guests."
        },

        {
            name: "L&J Palm Retreat",
            image: "Images/Palm Retreat Index.jpg",
            description: "A comfortable and relaxing accommodation option, accommodating up to 4 guests."
        }

        
    ];

    // Find the property grid on the homepage
    const propertyGrid = document.getElementById("homePropertyGrid");

    // Stop if the property grid does not exist
    if (!propertyGrid) {
        console.error("Homepage property grid could not be found.");
        return;
    }

    // Generate a card for each property
    properties.forEach(function (property) {

        const card = document.createElement("div");
        card.classList.add("property-card");

        const image = document.createElement("img");
        image.src = property.image;
        image.alt = property.name + " accommodation";
        image.width = 400;

        const heading = document.createElement("h3");
        heading.textContent = property.name;

        const description = document.createElement("p");
        description.textContent = property.description;

        const link = document.createElement("a");
        link.href = "properties.html";
        link.textContent = "View Details";

        card.appendChild(image);
        card.appendChild(heading);
        card.appendChild(description);
        card.appendChild(link);

        propertyGrid.appendChild(card);

    });

    console.log("Homepage properties loaded dynamically:", properties.length);

});