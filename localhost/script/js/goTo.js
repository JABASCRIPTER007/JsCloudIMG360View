// Initialize the flag variable
let isExecuting = false;
let isGoToInProgress = false;

// Send a request to the server using the folderUrl value
fetch(folderUrl)
    .then(response => response.text())
    .then(html => {
        // Create a new DOMParser object
        const parser = new DOMParser();

        // Parse the HTML string into a DOM document
        const htmlDocument = parser.parseFromString(html, "text/html");

        // Find all image links in the DOM document
        const images = htmlDocument.querySelectorAll('a[href$=".jpg"], a[href$=".jpeg"], a[href$=".png"], a[href$=".gif"]');

        // Get the number of images found
        amount = images.length - 1;
    })
    .catch(error => console.error(error));

function addClickHandler() {
    const hotspotIcon = document.querySelector('.cloudimage-360-hotspot-custom-icon');
    if (hotspotIcon) {
        hotspotIcon.addEventListener('click', handleClick);
        clearInterval(intervalId);
    }
}

function handleClick(event) {
    if (isExecuting || isGoToInProgress) {
        // Exit the function if it's already executing or goTo() is in progress
        return;
    }

    // Set the flag to true
    isExecuting = true;

    // Get the input element with id 'destSlideInput' and assign it to the variable destSlideInput
    const destSlideInput = document.getElementById('destSlideInput');

    // Get the value of the destSlideInput element and assign it to the variable inputValue
    let inputValue = destSlideInput.value;

    let numInputValue = Number(inputValue);

    if (isNaN(numInputValue)) {
        alert("Input value must be a number!");
        // Reset the flags to false
        isExecuting = false;
        return;
    }

    if (amount < numInputValue) {
        alert("Amount must be less than the input value!");
        // Reset the flags to false
        isExecuting = false;
        return;
    } else if (numInputValue < 0) {
        alert("inputValue < 0");
        // Reset the flags to false
        isExecuting = false;
        return;
    }

    // Get the initial value from input
    targetIndex = numInputValue;

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

        if (direction > 0 && viewer.activeImageX >= targetIndex) {
            clearInterval(myIntervalId);
            callback();
        } else if (direction < 0 && viewer.activeImageX <= targetIndex) {
            clearInterval(myIntervalId);
            callback();
        }
    }, 50);
}

const intervalId = setInterval(addClickHandler, 1000);
