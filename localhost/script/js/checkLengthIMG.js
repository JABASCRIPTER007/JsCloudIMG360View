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

        //assigning a variable to an element
        const uploadForm = document.getElementById("upload-form");
        const add360View =  document.getElementById("add360View");

        // Check if the amount of images found is greater than 0
        if (amount > 0) {
            // Execute additional code here
            uploadForm.style.display = "none";
            add360View.style.display = "block";
        } else {
            // Execute alternative code here
            uploadForm.style.display = "block";
            add360View.style.display = "none";
        }

    })
    // Handle errors and log them to the console
    .catch(error => console.error(error));
