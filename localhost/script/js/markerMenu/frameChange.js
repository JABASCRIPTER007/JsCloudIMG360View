// Get the input element
const destSlideInput = document.getElementById('destSlideInput');

// Add event listener to track user input changes
destSlideInput.addEventListener('input', handleInput);
fromInput.addEventListener("input", handleInput);
toInput.addEventListener("input", handleInput);

// Function to handle input changes
function handleInput(event) {
    const viewer = CI360.view();

    // Get the input value
    let inputValue = Number(event.target.value);

    // Set the activeImageX to the input value
    viewer.activeImageX = Math.max(inputValue, 0);

    // Call the update method to refresh the image display
    viewer.update();
}
