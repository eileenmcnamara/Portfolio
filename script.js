let currentPage = 1;
const totalPages = document.querySelectorAll('.page').length;

function showPage(pageNumber) {
  document.querySelectorAll('.page').forEach((page, index) => {
    page.classList.remove('active');
    if (index + 1 === pageNumber) {
      page.classList.add('active');
    }
  });
}

function nextPage() {
  if (currentPage < totalPages) {
    currentPage++;
    showPage(currentPage);
  }
}

function prevPage() {
  if (currentPage > 1) {
    currentPage--;
    showPage(currentPage);
  }
}

showPage(currentPage);
