// Add event listeners to track user input changes
posYinput.addEventListener('input', handlePosInputChange);
posXinput.addEventListener('input', handlePosInputChange);

// Function to handle input changes
function handlePosInputChange() {
    // Get the first viewer instance
    const viewer = window.CI360._viewers[0];

    // Update the marker position with the new values
    viewer.update();

    // Call viewer.update() again after a specific interval
    setTimeout(function() {
        viewer.update();
    }, 50);
}
