console.log("Script loaded");

// Filter button logic
const filterButtons = document.querySelectorAll(".filters button");
const images = document.querySelectorAll(".art-grid img");

filterButtons.forEach(button => {
  button.addEventListener("click", () => {
    filterButtons.forEach(btn => btn.classList.remove("active"));
    button.classList.add("active");

    const filter = button.getAttribute("data-filter");

    images.forEach(img => {
      if (filter === "all" || img.classList.contains(filter)) {
        img.style.display = "block";
      } else {
        img.style.display = "none";
      }
    });
  });
});

// Smooth transition on load
window.addEventListener('DOMContentLoaded', () => {
  document.body.classList.add('loaded');

  // Add image descriptions
  document.querySelectorAll(".art-grid img").forEach(img => {
    const fileName = img.src.split('/').pop();
    console.log("Checking:", fileName); // 👈 for debugging
    if (descriptions[fileName]) {
      const caption = document.createElement("div");
      caption.className = "img-description";
      caption.textContent = descriptions[fileName];
      img.parentElement.insertBefore(caption, img.nextSibling);
    }
  });
});

// Dark mode toggle
const toggleButton = document.querySelector('.dark-toggle');
toggleButton?.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  const mode = document.body.classList.contains('dark-mode') ? 'dark' : 'light';
  localStorage.setItem('theme', mode);
});

// Load saved theme
window.addEventListener('load', () => {
  const saved = localStorage.getItem('theme');
  if (saved === 'dark') document.body.classList.add('dark-mode');
});

// Descriptions for images
const descriptions = {
  "Page1.jpg": "Procreate digital sketch using symmetry tool",
  "Page2.jpg": "Watercolor experiment with natural pigments",
  "Page3.jpg": "Photoshop composite using layer masks",
  "Page4.jpg": "Charcoal sketch from live model session",
  "Page5.jpg": "Digital poster using typography tools",
  "Page6.jpg": "Acrylic still life on canvas",
  "Page7.jpg": "Animated frame study in Krita",
  "Page8.jpg": "Pencil sketch from reference photo",
  "Page9.jpg": "Acrylic still life on canvas",
  "Page10.jpg": "Animated frame study in Krita",
  "Page11.jpg": "Pencil sketch from reference photo",
  "Page12.jpg": "Acrylic still life on canvas",
  "Page13.jpg": "Animated frame study in Krita",
  "Page14.jpg": "Pencil sketch from reference photo",
  "Page15.jpg": "Acrylic still life on canvas",
  "Page16.jpg": "Animated frame study in Krita",
  "Page17.jpg": "Pencil sketch from reference photo"
};
