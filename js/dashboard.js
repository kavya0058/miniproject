function showSection(sectionId) {

    // Get all sections
    let sections =
        document.querySelectorAll(".section");


    // Hide all sections
    sections.forEach(function(section) {

        section.classList.add("hidden");

    });


    // Show selected section
    document
        .getElementById(sectionId)
        .classList.remove("hidden");
}