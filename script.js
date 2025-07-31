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
  "Page1.jpg": "Pop-art inspired digital sketch created in Adobe Illustrator. First experiment with typography and layering techniques, exploring text as visual expression.",
  "Page3.jpg": "Shape-based digital fashion sketch using Adobe Illustrator. Ready mannequin styled with geometric forms and bold contrast for a futuristic look.",
  "Page5.jpg": "Geometric logo design for Besiktas Football Team created in Adobe Illustrator. First attempt at digital lettering — exploring symmetry and graphic rhythm.",
  "Page9.jpg": "Adobe Illustrator study using colorful star shapes. Focus on symmetry, layering, and bold outlines.",
  "Page11.jpg": "Collage made in Adobe Photoshop, inspired by Drake and PARTYNEXTDOOR promo visuals. Combines concert tickets, merch, and digital media to recreate an OVO-style PR look.",
  "Page13.jpg": "Mixed media collage using Adobe Photoshop and Illustrator. Combines bold star shapes with music visuals from Drake and PARTYNEXTDOOR to create a dynamic, fan-inspired layout.",
  "Page15.jpg": "3D perspective study in Adobe Illustrator. Created using geometric shapes, gradient lines, and star motifs to explore depth, motion, and bold contrast.",
  "Page17.jpg": "Abstract gradient study created in Adobe Illustrator. First try with shapes, shadows, and 3D raster mesh effects to explore depth and light using bold color transitions.",
  "Page19.jpg": "Colorful star composition made in Adobe Illustrator. Practicing shape building, layering, and vibrant color contrast.",
  "Page21.jpg": "Adobe Illustrator illustration of cereal and spoon. Practicing shape repetition, outlines, and playful food design.",
  "Quietloud.gif": "Animated artwork using looping effects, exploring rhythm and text timing with GIF format.",
  "Page2.jpg":  "Charcoal drawing of a cat in profile, capturing light, texture, and expression through bold contrasts and soft shading. Handmade on paper using subtractive techniques."
};

