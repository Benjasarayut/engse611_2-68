// Selecting the data container element
let dataContainer = document.getElementById("dataContainer");
// Fetching data and updating the DOM
fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(data => {
        data.forEach(post => {
         // Creating a new paragraph element for each post
        let postElement = document.createElement("p");
        postElement.textContent = post.title;

        // Appending the new element to the data container
        dataContainer.appendChild(postElement);
    });
    })
    .catch(error => {
    console.error('Error fetching data:', error);
});
// Selecting the "Back" button
let backButton = document.getElementById("backButton");

// Adding an event listener to the "Back to Home" button to navigate to index.html
backButton.addEventListener("click", function() {
    window.location.href = "/Lab 7/Homepage/index.html"; //กลับไปที่ index.html
});