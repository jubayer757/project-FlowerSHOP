let currentPage = 1;
const totalPages = 3;
const interval = 3000; // Time interval in milliseconds (3000ms = 3 seconds)

function showPage(pageNumber) {
    // Hide all pages
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => {
        page.classList.remove('active');
    });

    // Show the current page
    const currentPageElement = document.getElementById(`page${pageNumber}`);
    currentPageElement.classList.add('active');
}

function nextPage() {
    currentPage = (currentPage % totalPages) + 1;
    showPage(currentPage);
}

// Initial call to show the first page
showPage(currentPage);

// Set the timer to switch pages
setInterval(nextPage, interval);

