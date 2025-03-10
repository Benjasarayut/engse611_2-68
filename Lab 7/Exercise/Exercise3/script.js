        // Selecting the button element
        let button = document.getElementById("toggleClassButton");

        // Adding an event listener to the button
        button.addEventListener("click", function() {
            // Selecting the paragraph element
            let paragraph = document.getElementById("example");
            
            // Toggling the class on the paragraph
            paragraph.classList.toggle("highlight");
        });

        // Back button functionality
        let backButton = document.getElementById("backButton");
        backButton.addEventListener("click", function() {
            window.location.href = "/Lab 7/Homepage/index.html"; //กลับไปที่ index.html
        });