// Select all links inside the <nav>
const navLinks = document.querySelectorAll("nav a");

// Loop through each link and add a click event listener
navLinks.forEach(link => {
    link.addEventListener("click", function(event) {
        event.preventDefault(); // Prevent default link action
        alert(this.textContent); // Show alert with the text of the clicked link
    });
});