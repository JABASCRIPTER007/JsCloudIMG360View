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

    if (isNaN(numInputValue)) {
        // Show an alert if the input value is not a number
        alert("Input value must be a number!");

        // Reset the flags to false
        isExecuting = false;
        return;
    }
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
    if (activeIndex === targetIndex) {
        // Exit the function without performing additional actions
        callback();
        return;
    }
    // Determine the iteration direction
    let direction = activeIndex < targetIndex ? 1 : -1;

    let myIntervalId = setInterval(() => {
        // Get the first viewer instance
        const viewer = window.CI360._viewers[0];

        // Change the value of the activeImageX property according to the direction
        viewer.activeImageX += direction;

        // Call the update method to refresh the image display
        viewer.update();

        if ((direction > 0 && viewer.activeImageX >= targetIndex) || (direction < 0 && viewer.activeImageX <= targetIndex)) {
            clearInterval(myIntervalId);
            callback();
        }
    }, 50);
}

// Set interval to call addClickHandler function every 1 second
const intervalId = setInterval(addClickHandler, 1000);
