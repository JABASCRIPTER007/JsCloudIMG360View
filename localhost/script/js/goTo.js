// Flag to track if a function is currently executing
let isExecuting = false;

// Flag to track if the goTo() function is in progress
let isGoToInProgress = false;

// Send a request to the server using the folderUrl value
fetch(folderUrl)
    .then(response => response.text())
    .then(html => {
        const parser = new DOMParser();
        const htmlDocument = parser.parseFromString(html, "text/html");
        const images = htmlDocument.querySelectorAll('a[href$=".jpg"], a[href$=".jpeg"], a[href$=".png"], a[href$=".gif"]');
        amount = images.length;
    })
    .catch(error => console.error(error));

function addClickHandler() {
    const hotspotIcon = document.querySelector('.cloudimage-360-hotspot-custom-icon');
    if (hotspotIcon) {
        // Add click event listener to the hotspot icon
        hotspotIcon.addEventListener('click', handleClick);
        // Stop the interval
        clearInterval(intervalId);
    }
}

function handleClick(event) {
    if (isExecuting || isGoToInProgress) {
        // Exit the function if another function is currently executing or goTo() is in progress
        return;
    }
    // Set the flag to true
    isExecuting = true;

    // Get the input element
    const destSlideInput = document.getElementById('destSlideInput');

    // Get the value of the input element
    let inputValue = destSlideInput.value;

    let numInputValue = Number(inputValue);
    
    if (amount < numInputValue || numInputValue < 0) {
        let message = amount < numInputValue ? "Amount must be less than the input value!" : "Input value cannot be less than 0!";

        // Show an alert based on the condition
        alert(message);

        // Reset the flags to false
        isExecuting = false;
        return;
    }
    // Get the initial value from input
    targetIndex = Math.max(numInputValue, 0);

    // Check if targetIndex is 0
    if (targetIndex === 0) {
        // Show an alert if targetIndex is 0
        alert("toWhichFrame != 0");

        // Reset the flags to false
        isExecuting = false;
        return;
    }

    // Indicate that the goTo() function is executing
    isGoToInProgress = true;

    goTo(() => {
        // Reset the flags to false after the function has completed
        isExecuting = false;
        isGoToInProgress = false;
    });
}

function goTo(callback) {
    let activeIndex = window.CI360.getActiveIndexByID('gurkha-suv');
    if (activeIndex === targetIndex || (activeIndex === -1 && targetIndex !== 0)) {
        // Exit the function without performing additional actions
        callback();
        return;
    }
    // Determine the iteration direction
    let direction = activeIndex < targetIndex ? 1 : -1;

    // Calculate the number of iterations in the incremental direction
    let incrementalIterations = (direction > 0) ? (targetIndex - activeIndex) : (amount - activeIndex + targetIndex);

    // Calculate the number of iterations in the decremental direction
    let decrementalIterations = (direction < 0) ? (activeIndex - targetIndex) : (activeIndex + amount - targetIndex);

    // Determine the final direction based on the number of iterations
    let finalDirection;

    if (targetIndex < activeIndex) {
        // If targetIndex is less than activeIndex, choose the direction with fewer iterations
        finalDirection = (decrementalIterations <= incrementalIterations) ? -1 : 1;
    } else {
        // If targetIndex is greater than activeIndex, choose the direction with fewer iterations
        finalDirection = (incrementalIterations <= decrementalIterations) ? 1 : -1;
    }
    let myIntervalId = setInterval(() => {
        // Get the first viewer instance
        const viewer = window.CI360._viewers[0];

        if (viewer.activeImageX === targetIndex) {
            clearInterval(myIntervalId);
            callback();
        } else if (finalDirection === 1 && viewer.activeImageX === amount) {
            // If in the incremental direction, the last frame is reached without reaching the target value,
            // reset the activeImageX to 0 and continue iterating towards the target value
            viewer.activeImageX = 0;
        } else if (finalDirection === -1 && viewer.activeImageX === 0) {
            // If in the decremental direction, the first frame is reached without reaching the target value,
            // set the activeImageX to the last frame and continue iterating towards the target value
            viewer.activeImageX = amount;
        } else {
            // Change the value of the activeImageX property according to the final direction
            viewer.activeImageX += finalDirection;
        }
        // Call the update method to refresh the image display
        viewer.update();
    }, 50);
}
// Set interval to call addClickHandler function every 1 second
const intervalId = setInterval(addClickHandler, 1000);
