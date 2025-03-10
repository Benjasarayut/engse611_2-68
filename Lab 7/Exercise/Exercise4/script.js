        // Selecting the button element to add a new paragraph
        let button = document.getElementById("addElementButton");

        // Adding an event listener to the "Add Element" button
        button.addEventListener("click", function() {
            // Creating a new paragraph element
            let newParagraph = document.createElement("p");
            
            // Setting the text content of the new paragraph
            newParagraph.textContent = "Woravit Suwan";
            
            // Selecting the parent element
            let parentDiv = document.getElementById("parent");
            
            // Appending the new paragraph to the parent div
            parentDiv.appendChild(newParagraph);
        });

        // Selecting the "Back" button
        let backButton = document.getElementById("backButton");

        // Adding an event listener to the "Back to Home" button to navigate to index.html
        backButton.addEventListener("click", function() {
            window.location.href = "/Lab 7/Homepage/index.html"; //กลับไปที่ index.html
        });