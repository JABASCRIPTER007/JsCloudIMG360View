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
            var event = new KeyboardEvent('keydown', {'keyCode': 37});
            document.dispatchEvent(event);

            var activeIndex = window.CI360.getActiveIndexByID('gurkha-suv');

            if (activeIndex < Number(inputValue)) {
                setTimeout(press, 50);
                //if activeIndex > Number(InputValue)
            } else if (activeIndex > Number(inputValue)) {
                alert(`Iteration to - ${Number(inputValue)}` + ` Active frame - ${activeIndex}`);
            }
        }

        press();
    }
    goTo();
}
// This interval checks for the presence of the hotspotIcon element every 1 second and calls the addClickHandler function.
const intervalId = setInterval(addClickHandler, 1000);
