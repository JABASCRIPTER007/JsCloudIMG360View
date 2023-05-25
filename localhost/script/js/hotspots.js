// Getting references to elements and converting variables "posYinput" and "posXinput"
const posYinput = document.getElementById("posYinput");
const posXinput = document.getElementById("posXinput");
const fromInput = document.getElementById("fromInput");
const toInput = document.getElementById("toInput");

// Configuration object for GURKHA_SUV_HOTSPOTS_CONFIG
const GURKHA_SUV_HOTSPOTS_CONFIG = [
    {
        positions: []
    }
];

// Sending a request to the server using the folderUrl value
fetch(folderUrl)
    .then(response => response.text())
    .then(html => {
        const parser = new DOMParser();
        const htmlDocument = parser.parseFromString(html, "text/html");
        const images = htmlDocument.querySelectorAll('a[href$=".jpg"], a[href$=".jpeg"], a[href$=".png"], a[href$=".gif"]');
        const amount = images.length + 2;

        GURKHA_SUV_HOTSPOTS_CONFIG[0].positions = Array.from({ length: amount }, () => ({
            imageIndex: 0,
            xCoord: Number(posXinput.value),
            yCoord: Number(posYinput.value)
        }));

        // Call the updateHotspot() function here, after the fetch request is completed
        updateHotspot();
    })
    .catch(error => console.error(error));

// Adding event listeners to input elements to call the "updateHotspot" function
posYinput.addEventListener("input", updateHotspot);
posXinput.addEventListener("input", updateHotspot);
fromInput.addEventListener("input", updateHotspot);
toInput.addEventListener("input", updateHotspot);

function updateHotspot() {
    const fromValueY = Number(posYinput.value);
    const toValueX = Number(posXinput.value);
    const fromInputValue = Number(fromInput.value);
    const toInputValue = Number(toInput.value);

    GURKHA_SUV_HOTSPOTS_CONFIG[0].positions.forEach((position, index) => {
        if (index >= fromInputValue && index <= toInputValue) {
            position.imageIndex = index > 0 ? index - 1 : 0;
        } else if (index === toInputValue + 1) {
            position.imageIndex = toInputValue;
        } else {
            position.imageIndex = 0;
        }
        position.xCoord = toValueX;
        position.yCoord = fromValueY;
    });

    window.CI360.addHotspots("gurkha-suv", GURKHA_SUV_HOTSPOTS_CONFIG);
}
