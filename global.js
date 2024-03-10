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
    

    // Retrieve the stored input value from localStorage
    var storedInput = localStorage.getItem('storedInput');

    // Set the stored input value as the placeholder for the input field
    document.getElementById('displayInput').placeholder = storedInput;

    function updateInputWidth() {
            var inputElement = document.getElementById('displayInput');
            var placeholderText = inputElement.placeholder;
            var placeholderLength = placeholderText.length;

            // Set the input width based on the placeholder length
            inputElement.style.width = (placeholderLength * 10) + 'px'; // Adjust the multiplier as needed
        }

        // Call the function initially and update whenever needed
        updateInputWidth()
    });