        // Selecting the button element
        let button = document.getElementById("traverseButton");

        // Adding an event listener to the button
        button.addEventListener("click", function() {
            // Selecting the element with the id "example"
            let element = document.getElementById("example");

            // Accessing the parent element
            let parent = element.parentNode;
            console.log("Parent element:", parent);

            // Accessing the child elements of the parent
            let children = parent.children;
            console.log("Child elements:", children);

            // Accessing the next sibling element
            let nextSibling = element.nextElementSibling;
            console.log("Next sibling element:", nextSibling);

            // Accessing the previous sibling element
            let previousSibling = element.previousElementSibling;
            console.log("Previous sibling element:", previousSibling);

            // Display results in the output paragraph
            let output = document.getElementById("output");
            output.innerHTML = `
                <strong>Parent Element:</strong> <br>${parent.outerHTML}<br><br>
                <strong>Child Elements:</strong> <br>${Array.from(children).map(child => child.outerHTML).join('<br>')}<br><br>
                <strong>Next Sibling Element:</strong> <br>${nextSibling ? nextSibling.outerHTML : 'None'}<br><br>
                <strong>Previous Sibling Element:</strong> <br>${previousSibling ? previousSibling.outerHTML : 'None'}
            `;
        });
        // Selecting the "Back" button
        let backButton = document.getElementById("backButton");

        // Adding an event listener to the "Back to Home" button to navigate to index.html
        backButton.addEventListener("click", function() {
            window.location.href = "/Lab 7/Homepage/index.html"; //กลับไปที่ index.html
        });