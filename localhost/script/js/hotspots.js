// Getting references to elements and converting variables "posYinput" and "posXinput"
const posYinput = document.getElementById("posYinput");
const posXinput = document.getElementById("posXinput");
const fromInput = document.getElementById("fromInput");
const toInput = document.getElementById("toInput");

// Adding event listeners to input elements to call the "updateHotspot" function
posYinput.addEventListener("input", updateHotspot);
posXinput.addEventListener("input", updateHotspot);
fromInput.addEventListener("input", updateHotspot);
toInput.addEventListener("input", updateHotspot);

function updateHotspot() {
    // Converting input values to numbers
    const fromValueY = Number(posYinput.value);
    const toValueX = Number(posXinput.value);
    const fromInputValue = Number(fromInput.value);
    const toInputValue = Number(toInput.value);

    // Updating positions in the GURKHA_SUV_HOTSPOTS_CONFIG array
    GURKHA_SUV_HOTSPOTS_CONFIG[0].positions.forEach((position, index) => {
        if (index >= fromInputValue && index <= toInputValue) {
            position.imageIndex = index + 1;
        } else {
            position.imageIndex = 0;
        }

        position.xCoord = toValueX;
        position.yCoord = fromValueY;
    });

    // Adding hotspots to the "gurkha-suv" element using the updated configuration
    window.CI360.addHotspots("gurkha-suv", GURKHA_SUV_HOTSPOTS_CONFIG);
}

// Configuration object for GURKHA_SUV_HOTSPOTS_CONFIG
const GURKHA_SUV_HOTSPOTS_CONFIG = [
    {
        positions: Array.from({ length: 200 }, () => ({
            imageIndex: 0,
            xCoord: Number(posXinput.value),
            yCoord: Number(posYinput.value)
        }))
    }
];
