        // Selecting the element to animate and the button to trigger the animation
        let element = document.getElementById("animateMe");
        let button = document.getElementById("animateButton");

        // Function to trigger the CSS transition (resize and change color)
        function triggerTransition() {
            element.style.width = "200px";
            element.style.height = "200px";
            element.style.backgroundColor = "red";
        }

        // Adding an event listener to the button to trigger the transition on click
        button.addEventListener("click", triggerTransition);

        // Defining and starting a simple JavaScript animation (moving the element)
        let position = 0;
        function animate() {
            if (position < 350) {
                position++;
                element.style.left = position + "px";
            } else {
                clearInterval(interval);
            }
        }

        // Starting the animation using setInterval
        let interval = setInterval(animate, 10);
        // Selecting the "Back" button
        let backButton = document.getElementById("backButton");

        // Adding an event listener to the "Back to Home" button to navigate to index.html
        backButton.addEventListener("click", function() {
            window.location.href = "/Lab 7/Homepage/index.html"; //กลับไปที่ index.html
        });