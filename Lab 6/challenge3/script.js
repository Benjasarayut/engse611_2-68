// Select all links inside the <nav>
const navLinks = document.querySelectorAll("nav a");

// Loop through each link and add a click event listener
navLinks.forEach(link => {
    link.addEventListener("click", event => {
        event.preventDefault(); // Prevent default link action
        alert("clicked!"); // Show alert message
    });
});