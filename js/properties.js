
// L&J Haven Stays - Property Search and Sorting

document.addEventListener("DOMContentLoaded", function () {

    const searchInput = document.getElementById("propertySearch");
    const sortSelect = document.getElementById("propertySort");
    const propertyList = document.getElementById("propertyList");
    const resultsMessage = document.getElementById("propertyResults");

    console.log("Property search script loaded!");

    if (!searchInput || !sortSelect || !propertyList || !resultsMessage) {
        console.error("Property search elements could not be found.");
        return;
    }

    const properties = Array.from(
        propertyList.querySelectorAll(".property-card")
    );

    console.log("Properties found:", properties.length);

    function filterProperties() {

        const searchTerm = searchInput.value.toLowerCase().trim();

        let visibleCount = 0;

        properties.forEach(function (property) {

            const propertyInformation = property.textContent.toLowerCase();

            const matchesSearch = propertyInformation.includes(searchTerm);

            if (matchesSearch) {
                property.style.display = "";
                visibleCount++;
            } else {
                property.style.display = "none";
            }

        });

        if (visibleCount === 0) {
            resultsMessage.textContent =
                "No properties found. Please try another search.";
        } else {
            resultsMessage.textContent =
                "Showing " + visibleCount + " of " +
                properties.length + " properties.";
        }

        console.log("Search results:", visibleCount);

    }

    function sortProperties() {

        const sortOrder = sortSelect.value;
        const sortedProperties = [...properties];

        if (sortOrder === "ascending") {

            sortedProperties.sort(function (a, b) {
                return a.dataset.property.localeCompare(b.dataset.property);
            });

        } else if (sortOrder === "descending") {

            sortedProperties.sort(function (a, b) {
                return b.dataset.property.localeCompare(a.dataset.property);
            });

        }

        sortedProperties.forEach(function (property) {
            propertyList.appendChild(property);
        });

        filterProperties();

    }

    searchInput.addEventListener("input", filterProperties);
    sortSelect.addEventListener("change", sortProperties);

    filterProperties();

});
