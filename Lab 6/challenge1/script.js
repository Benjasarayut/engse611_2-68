const paragraphs = document.querySelectorAll("#main p");

  // Loop through each selected paragraph and apply styles
  paragraphs.forEach(p => {
    p.style.fontSize = "24px";
    p.style.color = "red";
  });