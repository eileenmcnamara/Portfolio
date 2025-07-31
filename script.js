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
