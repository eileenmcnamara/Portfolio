console.log("Script loaded");

// ========== Filter Logic ==========
const filterButtons = document.querySelectorAll(".filters button");

filterButtons.forEach(button => {
  button.addEventListener("click", () => {
    filterButtons.forEach(btn => btn.classList.remove("active"));
    button.classList.add("active");

    const filter = button.getAttribute("data-filter");

    document.querySelectorAll(".art-item").forEach(item => {
      if (filter === "all" || item.classList.contains(filter)) {
        item.style.display = "block";
      } else {
        item.style.display = "none";
      }
    });
  });
});

// ========== Theme + Load ==========
window.addEventListener("DOMContentLoaded", () => {
  document.body.classList.add("loaded");

  const saved = localStorage.getItem('theme');
  if (saved === 'dark') document.body.classList.add('dark-mode');

  // Add image descriptions and wrap image in .art-item
  document.querySelectorAll(".art-grid img").forEach(img => {
    const fileName = img.src.split('/').pop();
    const description = descriptions[fileName];

    if (description) {
      const wrapper = document.createElement("div");
      wrapper.className = `art-item ${img.className}`;

      // Insert wrapper before image, then move image into wrapper
      img.parentElement.insertBefore(wrapper, img);
      wrapper.appendChild(img);

      // Add description below image
      const caption = document.createElement("div");
      caption.className = "img-description";
      caption.textContent = description;
      wrapper.appendChild(caption);
    }
  });
});

// ========== Dark Mode Toggle ==========
const toggleButton = document.querySelector('.dark-toggle');
toggleButton?.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  const mode = document.body.classList.contains('dark-mode') ? 'dark' : 'light';
  localStorage.setItem('theme', mode);
});

// ========== Image Descriptions ==========
const descriptions = {
  "Page1.jpg": "Pop-art inspired digital sketch created in Adobe Illustrator.First experiment with typography and layering techniques, exploring text as visual expression.",
  "Page2.jpg": "Watercolor experiment with natural pigments",
  "Page3.jpg": "Shape-based digital fashion sketch using Adobe Illustrator. Ready mannequin styled with geometric forms and bold contrast for a futuristic look.",
  "Page4.jpg": "Charcoal sketch from live model session",
  "Page5.jpg": "Geometric logo design created in Adobe Illustrator. First attempt at digital lettering — exploring symmetry and graphic rhythm.",
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

