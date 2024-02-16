document.addEventListener('DOMContentLoaded', function() {
    // Add an event listener to the top link
    var topLink = document.getElementById('top-link');
    if (topLink) {
        topLink.addEventListener('click', function(event) {
            event.preventDefault();

            // Scroll to the top of the document
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
});
