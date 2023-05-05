//assigning elements and converting "posYinput" and "posXinput" variables
const posYinput = document.getElementById("posYinput");
const posXinput = document.getElementById("posXinput");
const valueY = Number(posYinput.value);
const valueX = Number(posXinput.value);
posYinput.addEventListener("input", updateHotspot);
posXinput.addEventListener("input", updateHotspot);

////assigning elements and converting "fromInput" and "toInput" variables
const fromInput = document.getElementById("fromInput");
const toInput = document.getElementById("toInput");
fromInput.addEventListener("input", updateHotspot);
toInput.addEventListener("input", updateHotspot);

function updateHotspot() {
    //converting in Number "posYinput" and "posXinput"
    const fromValueY = Number(posYinput.value);
    const toValueX = Number(posXinput.value);

    //converting in Number "fromInputValue" and "toInputValue"
    const fromInputValue = Number(fromInput.value);
    const toInputValue = Number(toInput.value);

    GURKHA_SUV_HOTSPOTS_CONFIG[0].positions.forEach((position, index) => {
        //iteration for add new update in "imageIndex"
        if (index >= fromInputValue - 1 && index <= toInputValue - 1) {
            position.imageIndex = index + 1;
        } else {
            position.imageIndex = 0;
        }
        //add new update in "xCoord" and "yCoord"
        position.xCoord = toValueX;
        position.yCoord = fromValueY;
    });
    //method to update the hotspot
    window.CI360.addHotspots("gurkha-suv", GURKHA_SUV_HOTSPOTS_CONFIG);
}

const GURKHA_SUV_HOTSPOTS_CONFIG = [
    {
        positions: [
            { imageIndex: 0, xCoord: valueX, yCoord: valueY },
            { imageIndex: 0, xCoord: valueX, yCoord: valueY },
            { imageIndex: 0, xCoord: valueX, yCoord: valueY },
            { imageIndex: 0, xCoord: valueX, yCoord: valueY },
            { imageIndex: 0, xCoord: valueX, yCoord: valueY },
            { imageIndex: 0, xCoord: valueX, yCoord: valueY },
            { imageIndex: 0, xCoord: valueX, yCoord: valueY },
            { imageIndex: 0, xCoord: valueX, yCoord: valueY },
            { imageIndex: 0, xCoord: valueX, yCoord: valueY },
            { imageIndex: 0, xCoord: valueX, yCoord: valueY },
            { imageIndex: 0, xCoord: valueX, yCoord: valueY },
            { imageIndex: 0, xCoord: valueX, yCoord: valueY },
            { imageIndex: 0, xCoord: valueX, yCoord: valueY },
            { imageIndex: 0, xCoord: valueX, yCoord: valueY },
            { imageIndex: 0, xCoord: valueX, yCoord: valueY },
            { imageIndex: 0, xCoord: valueX, yCoord: valueY },
            { imageIndex: 0, xCoord: valueX, yCoord: valueY },
            { imageIndex: 0, xCoord: valueX, yCoord: valueY },
            { imageIndex: 0, xCoord: valueX, yCoord: valueY },
            { imageIndex: 0, xCoord: valueX, yCoord: valueY },
            { imageIndex: 0, xCoord: valueX, yCoord: valueY },
            { imageIndex: 0, xCoord: valueX, yCoord: valueY },
            { imageIndex: 0, xCoord: valueX, yCoord: valueY },
            { imageIndex: 0, xCoord: valueX, yCoord: valueY },
            { imageIndex: 0, xCoord: valueX, yCoord: valueY },
            { imageIndex: 0, xCoord: valueX, yCoord: valueY },
            { imageIndex: 0, xCoord: valueX, yCoord: valueY },
            { imageIndex: 0, xCoord: valueX, yCoord: valueY },
            { imageIndex: 0, xCoord: valueX, yCoord: valueY },
            { imageIndex: 0, xCoord: valueX, yCoord: valueY },
            { imageIndex: 0, xCoord: valueX, yCoord: valueY },
            { imageIndex: 0, xCoord: valueX, yCoord: valueY },
            { imageIndex: 0, xCoord: valueX, yCoord: valueY },
            { imageIndex: 0, xCoord: valueX, yCoord: valueY },
            { imageIndex: 0, xCoord: valueX, yCoord: valueY },
            { imageIndex: 0, xCoord: valueX, yCoord: valueY },
            { imageIndex: 0, xCoord: valueX, yCoord: valueY },
            { imageIndex: 0, xCoord: valueX, yCoord: valueY },
            { imageIndex: 0, xCoord: valueX, yCoord: valueY },
            { imageIndex: 0, xCoord: valueX, yCoord: valueY },
            { imageIndex: 0, xCoord: valueX, yCoord: valueY },
            { imageIndex: 0, xCoord: valueX, yCoord: valueY },
            { imageIndex: 0, xCoord: valueX, yCoord: valueY },
            { imageIndex: 0, xCoord: valueX, yCoord: valueY },
            { imageIndex: 0, xCoord: valueX, yCoord: valueY },
            { imageIndex: 0, xCoord: valueX, yCoord: valueY },
            { imageIndex: 0, xCoord: valueX, yCoord: valueY },
            { imageIndex: 0, xCoord: valueX, yCoord: valueY },
            { imageIndex: 0, xCoord: valueX, yCoord: valueY },
            { imageIndex: 0, xCoord: valueX, yCoord: valueY },
            { imageIndex: 0, xCoord: valueX, yCoord: valueY },
            { imageIndex: 0, xCoord: valueX, yCoord: valueY },
            { imageIndex: 0, xCoord: valueX, yCoord: valueY },
            { imageIndex: 0, xCoord: valueX, yCoord: valueY },
            { imageIndex: 0, xCoord: valueX, yCoord: valueY },
            { imageIndex: 0, xCoord: valueX, yCoord: valueY },
            { imageIndex: 0, xCoord: valueX, yCoord: valueY },
            { imageIndex: 0, xCoord: valueX, yCoord: valueY },
            { imageIndex: 0, xCoord: valueX, yCoord: valueY },
            { imageIndex: 0, xCoord: valueX, yCoord: valueY },
            { imageIndex: 0, xCoord: valueX, yCoord: valueY },
            { imageIndex: 0, xCoord: valueX, yCoord: valueY },
            { imageIndex: 0, xCoord: valueX, yCoord: valueY },
            { imageIndex: 0, xCoord: valueX, yCoord: valueY },
            { imageIndex: 0, xCoord: valueX, yCoord: valueY },
            { imageIndex: 0, xCoord: valueX, yCoord: valueY },
            { imageIndex: 0, xCoord: valueX, yCoord: valueY },
            { imageIndex: 0, xCoord: valueX, yCoord: valueY },
            { imageIndex: 0, xCoord: valueX, yCoord: valueY },
            { imageIndex: 0, xCoord: valueX, yCoord: valueY },
            { imageIndex: 0, xCoord: valueX, yCoord: valueY },
            { imageIndex: 0, xCoord: valueX, yCoord: valueY },
            { imageIndex: 0, xCoord: valueX, yCoord: valueY },
            { imageIndex: 0, xCoord: valueX, yCoord: valueY },
            { imageIndex: 0, xCoord: valueX, yCoord: valueY },
            { imageIndex: 0, xCoord: valueX, yCoord: valueY },
            { imageIndex: 0, xCoord: valueX, yCoord: valueY },
            { imageIndex: 0, xCoord: valueX, yCoord: valueY },
            { imageIndex: 0, xCoord: valueX, yCoord: valueY },
            { imageIndex: 0, xCoord: valueX, yCoord: valueY },
            { imageIndex: 0, xCoord: valueX, yCoord: valueY },
            { imageIndex: 0, xCoord: valueX, yCoord: valueY },
            { imageIndex: 0, xCoord: valueX, yCoord: valueY },
            { imageIndex: 0, xCoord: valueX, yCoord: valueY },
            { imageIndex: 0, xCoord: valueX, yCoord: valueY },
            { imageIndex: 0, xCoord: valueX, yCoord: valueY },
            { imageIndex: 0, xCoord: valueX, yCoord: valueY },
            { imageIndex: 0, xCoord: valueX, yCoord: valueY },
            { imageIndex: 0, xCoord: valueX, yCoord: valueY },
            { imageIndex: 0, xCoord: valueX, yCoord: valueY },
            { imageIndex: 0, xCoord: valueX, yCoord: valueY },
            { imageIndex: 0, xCoord: valueX, yCoord: valueY },
            { imageIndex: 0, xCoord: valueX, yCoord: valueY },
            { imageIndex: 0, xCoord: valueX, yCoord: valueY },
            { imageIndex: 0, xCoord: valueX, yCoord: valueY },
            { imageIndex: 0, xCoord: valueX, yCoord: valueY },
            { imageIndex: 0, xCoord: valueX, yCoord: valueY },
            { imageIndex: 0, xCoord: valueX, yCoord: valueY },
        ]
    }
];
