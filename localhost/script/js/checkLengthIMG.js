// Get the value of the "data-folder" attribute and save it in the folderUrl variable
const folderUrl = document.getElementById("gurkha-suv").getAttribute("data-folder");
let amount = 0;

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

        // Set the value of the "data-amount-x" attribute to the number of images found
        document.getElementById("gurkha-suv").setAttribute("data-amount-x", amount.toString());

        // Assigning variables to element IDs
        const uploadForm = document.getElementById("upload-form");
        const add360View = document.getElementById("add360View");

        // Toggle the display style of uploadForm and add360View based on the amount of images found
        uploadForm.style.display = amount > 0 ? "none" : "block"; // Hide upload form if amount > 0, otherwise show it
        add360View.style.display = amount > 0 ? "block" : "none"; // Show add360View if amount > 0, otherwise hide it
    })
    .catch(error => console.error(error));
