function add360View(viewId) {
    //assigning the variable to the 3D model and adding hotspots
    const new360View = document.getElementById(viewId);
    new360View.classList.add("cloudimage-360");
    window.CI360.addHotspots("gurkha-suv", GURKHA_SUV_HOTSPOTS_CONFIG);

    //assignment of variables to element IDs
    const uploadForm = document.getElementById("upload-form");
    const add360View = document.getElementById("add360View");
    const addMarker = document.getElementById("addMarker");

    //changing styles of HTML elements
    uploadForm.style.display = "none";
    add360View.style.display = "none";
    addMarker.style.display = "block"
}
