// This function adds a click event listener to a specific element with the class 'cloudimage-360-hotspot-custom-icon'.
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
    // Get the input element with id 'destSlideInput' and assign it to the variable destSlideInput
    const destSlideInput = document.getElementById('destSlideInput');

    // Get the value of the destSlideInput element and assign it to the variable inputValue
    let inputValue = destSlideInput.value;

    // Add an event listener to the destSlideInput element that listens for input events and updates the inputValue variable with the new value of the input element
    destSlideInput.addEventListener('input', function (event) {
        inputValue = event.target.value;
    });

    // This function performs a series of keydown events for the left arrow key based on the value specified in the inputValue variable
    function goTo() {
        // Initialize a counter variable with a value of 0
        var counter = 0;

        function press() {
            // Create a new KeyboardEvent object with the 'keydown' type and a keyCode of 37 (left arrow)
            var event = new KeyboardEvent('keydown', {'keyCode': 37});
            document.dispatchEvent(event);

            var activeIndex = window.CI360.getActiveIndexByID('gurkha-suv');

            // If the activeIndex is less than the number specified in the inputValue variable, call the press function again after a delay of 50 milliseconds using setTimeout
            if (activeIndex < Number(inputValue)) {
                setTimeout(press, 50);
            }
        }
        
        press();
    }
    goTo();
}
// This interval checks for the presence of the hotspotIcon element every 1 second and calls the addClickHandler function.
const intervalId = setInterval(addClickHandler, 1000);
