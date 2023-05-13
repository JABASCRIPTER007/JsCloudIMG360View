// initialize the flag variable
let isExecuting = false;

// Send a request to the server using the folderUrl value
fetch(folderUrl)
    // Process the server response as text
    .then(response => response.text())
    .then(html => {
        // Create a new DOMParser object
        const parser = new DOMParser();

        // Parse the HTML string into a DOM document
        const htmlDocument = parser.parseFromString(html, "text/html");

        // Find all image links in the DOM document
        const images = htmlDocument.querySelectorAll('a[href$=".jpg"], a[href$=".jpeg"], a[href$=".png"], a[href$=".gif"]');

        // Get the number of images found
        amount = images.length;
    })
    // Handle errors and log them to the console
    .catch(error => console.error(error));

// If the element is found, the handleClick function is called, and an intervalId is cleared.
function addClickHandler() {
    const hotspotIcon = document.querySelector('.cloudimage-360-hotspot-custom-icon');
    if (hotspotIcon) {
        hotspotIcon.addEventListener('click', handleClick);
        clearInterval(intervalId);
    }
}

// This function handles the click event on the hotspotIcon element.
function handleClick(event) {
    if (isExecuting) {
        // exit the function if it's already executing
        return;
    }
    // set the flag to true
    isExecuting = true;

    // Get the input element with id 'destSlideInput' and assign it to the variable destSlideInput
    const destSlideInput = document.getElementById('destSlideInput');

    // Get the value of the destSlideInput element and assign it to the variable inputValue
    let inputValue = destSlideInput.value;

    // Add an event listener to the destSlideInput element that listens for input events and updates the inputValue variable with the new value of the input element
    destSlideInput.addEventListener('input', function (event) {
        inputValue = event.target.value;
    });

    // Check if amount is less than the inputValue before executing goTo()
    if (amount < Number(inputValue)) {
        alert("Amount must be less than the input value!");

        // reset the flag to false
        isExecuting = false;

        // exit the function without performing any action
        return;
    }else if(Number(inputValue) < 0) {
        alert("inputValue < 0");
        // reset the flag to false
        isExecuting = false;
        return;
    }

    // This function performs a series of keydown events for the left arrow key based on the value specified in the inputValue variable
    function goTo() {
        var counter = 0;

        function press() {
            var event = new KeyboardEvent('keydown', {'keyCode': 37});
            var activeIndex = window.CI360.getActiveIndexByID('gurkha-suv');

            if (activeIndex === Number(inputValue)) {

                // reset the flag to false
                isExecuting = false;

                // exit the function without performing any action
                return;
            } else if (activeIndex < Number(inputValue)) {
                event = new KeyboardEvent('keydown', {'keyCode': 37});
            } else if (activeIndex > Number(inputValue)) {
                event = new KeyboardEvent('keydown', {'keyCode': 39});
            }

            document.dispatchEvent(event);

            if (activeIndex !== Number(inputValue)) {
                setTimeout(press, 50);
            }else {
                // reset the flag to false
                isExecuting = false;
            }
        }

        press();
    }
    goTo();
}

// This interval checks for the presence of the hotspotIcon element every 1 second and calls the addClickHandler function.
const intervalId = setInterval(addClickHandler, 1000);
