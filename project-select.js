// This event listener ensures that the JavaScript code executes only after the HTML document has been fully loaded and parsed.
document.addEventListener("DOMContentLoaded", function() {
    // Making the cardContainer to flow out as the menu-bar of the links is clicked
    // Add an event listener to the menu bar element
    document.getElementById('menuBar').addEventListener('click', function(event) {
        // Prevent the default action and stop the event from propagating to avoid the page scrolling to the top
        event.preventDefault();
        event.stopPropagation();

        // Select the card container element
        var cardContainer = document.getElementById('cardContainer');
        
        // Check if the card container is hidden or has no specific display style
        if (cardContainer.style.display === 'none' || cardContainer.style.display === '') {
            cardContainer.style.display = 'block'; // If hidden or no display style, show the card container
        } else {
            cardContainer.style.display = 'none'; // If visible, hide the card container
        }
    });
});
