function scrollToSection(sectionId, clickedElement) {
    var section = document.getElementById(sectionId);
    if (section) {
        // Remove "bold" class from all menu items
        var allMenuItems = document.querySelectorAll('.new-inner-flex-item');
        allMenuItems.forEach(function (item) {
            item.classList.remove('bold');
        });

        // Add "bold" class to the clicked menu item
        clickedElement.classList.add('bold');

        // Scroll to the selected section
        section.scrollIntoView({
            behavior: 'smooth'
        });
    }
}




// Show content for the first title on page load
window.onload = function () {
    // Initially hide all content
    var allContent = document.querySelectorAll('.right > div');
    allContent.forEach(function (content) {
        content.classList.add('hidden');
    });

    // Show content for the first title
    updateContent('content1');
};
