//the appearance of a marker menu
function btnAddMarker() {
    document.getElementById("addMarker").addEventListener("click", function() {
        //changing the "MARKER MENU" style
        document.getElementById("markerMenu").classList.toggle("active");
    });
}

btnAddMarker();
