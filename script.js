// Grab the elements from the HTML
const actionButton = document.getElementById('actionBtn');
const feedbackMessage = document.getElementById('message');

// Add an event listener for the click action
actionButton.addEventListener('click', () => {
    // Toggle the 'hidden' class to show or hide the text
    feedbackMessage.classList.toggle('hidden');
    
    // Change button text dynamically based on state
    if (feedbackMessage.classList.contains('hidden')) {
        actionButton.textContent = "Click Me!";
    } else {
        actionButton.textContent = "Hide Message";
    }
});