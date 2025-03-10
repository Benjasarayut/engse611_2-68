        // Selecting the button element
        let button = document.getElementById("exampleButton");

        // Adding a 'click' event listener to the button
        button.addEventListener("click", function() {
            // Selecting the paragraph element
            let message = document.getElementById("message");
            
            // Changing the text content of the paragraph
            message.textContent = "Button was clicked!";
        });
        // Selecting the "Back" button
        let backButton = document.getElementById("backButton");

        // Adding an event listener to the "Back to Home" button to navigate to index.html
        backButton.addEventListener("click", function() {
            window.location.href = "/Lab 7/Homepage/index.html"; //กลับไปที่ index.html
        });