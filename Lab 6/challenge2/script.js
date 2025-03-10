// Select all paragraph elements
const paragraphs = document.querySelectorAll("p");

// Loop through each paragraph and check its text content
paragraphs.forEach(p => {
  if (p.textContent.includes("Llamas and Chickens!")) {
    p.style.color = "red"; // Change color to red
  }
});