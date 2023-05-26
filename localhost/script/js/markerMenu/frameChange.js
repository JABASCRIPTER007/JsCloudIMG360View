// Get the input element
const destSlideInput = document.getElementById('destSlideInput');

// Add event listener to track user input changes
destSlideInput.addEventListener('input', handleInput);
fromInput.addEventListener("input", handleInput);
toInput.addEventListener("input", handleInput);

// Function to handle input changes
function handleInput(event) {
    // Get the input value
    let inputValue = Number(event.target.value);

    // Check if the input value is a valid number
    if (isNaN(inputValue)) {
        // Show an alert if the input value is not a number
        alert("Input value must be a number!");
        return;
    }

    // Get the first viewer instance
    const viewer = window.CI360._viewers[0];

    // Set the activeImageX to the input value
    viewer.activeImageX = Math.max(inputValue, 0);

    // Call the update method to refresh the image display
    viewer.update();
}
