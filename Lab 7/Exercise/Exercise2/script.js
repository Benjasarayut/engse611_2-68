        // Selecting the button element
        let button = document.getElementById("changeStyleButton");

        // Adding an event listener to the button
        button.addEventListener("click", function() {
            // Selecting the paragraph element
            let paragraph = document.getElementById("example");
            
            // Changing CSS styles dynamically
            paragraph.style.backgroundColor = "lightblue";
            paragraph.style.fontSize = "22px";
            paragraph.style.color = "white";
            paragraph.style.border = "2px solid blue";
            paragraph.style.borderRadius = "10px";
            paragraph.style.padding = "15px";
        });

        // Back button functionality
        let backButton = document.getElementById("backButton");
        backButton.addEventListener("click", function() {
            window.location.href = "/Lab 7/Homepage/index.html"; //กลับไปที่ index.html
        });