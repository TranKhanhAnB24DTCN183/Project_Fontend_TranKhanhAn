document.addEventListener("DOMContentLoaded", function () {
  let itemsPerPage = 8;
  let currentPage = 1;
  let sortOrder = null;
  let searchQuery = "";

  const quizContainer = document.getElementById("quizContainer");
  const testData = JSON.parse(localStorage.getItem("testData")) || [];
  const categories = JSON.parse(localStorage.getItem("categories")) || [];
  const inputSearch = document.querySelector(".navbar input");

  // Hàm lấy hiển thị danh mục (tên + emoji)
  function getCategoryDisplay(categoryId) {
    const category = categories.find(c => c.id === categoryId);
    return category ? `${category.emoji} ${category.name}` : "Không xác định";
  }

  function createQuizCard(test) {
    return `
      <div class="quiz-card">
        <img src="/assets/images/quiz.jpg" alt="Quiz Image" />
        <div class="quiz-content">
          <h6>${getCategoryDisplay(test.categoryId)}</h6>
          <p>${test.name}</p>
          <p class="text-muted">${test.questions.length} câu hỏi - ${test.amount || 0} lượt chơi</p>
          <button class="choi" onclick="playTest(${test.id})">Chơi</button>
        </div>
      </div>
    `;
  }

  // Hàm lọc và sắp xếp dữ liệu bài test dựa theo tìm kiếm và thứ tự
  function getFilteredAndSortedTests() {
    let filtered = testData.filter(test =>
      test.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    if (sortOrder === "asc") {
      filtered.sort((a, b) => (a.amount || 0) - (b.amount || 0));
    } else if (sortOrder === "desc") {
      filtered.sort((a, b) => (b.amount || 0) - (a.amount || 0));
    }

    return filtered;
  }

  // Hàm hiển thị danh sách bài test theo trang
  function renderTests() {
    const filtered = getFilteredAndSortedTests();
    const startIndex = (currentPage - 1) * itemsPerPage;
    const currentTests = filtered.slice(startIndex, startIndex + itemsPerPage);

    quizContainer.innerHTML = currentTests.length
      ? currentTests.map(createQuizCard).join("")
      : "<p>Không có bài test nào!</p>";
  }

  // Hàm tạo phân trang và xử lý sự kiện chuyển trang
  function updatePagination() {
    const pagination = document.querySelector(".pagination");
    const filteredTests = getFilteredAndSortedTests();
    const totalPages = Math.ceil(filteredTests.length / itemsPerPage);
    let paginationHTML = "";

    paginationHTML += `
      <li class="page-item ${currentPage === 1 ? "disabled" : ""}">
        <a class="page-link" href="#" data-page="${currentPage - 1}">&laquo;</a>
      </li>
    `;

    for (let i = 1; i <= totalPages; i++) {
      paginationHTML += `
        <li class="page-item ${i === currentPage ? "active" : ""}">
          <a class="page-link" href="#" data-page="${i}">${i}</a>
        </li>
      `;
    }

    paginationHTML += `
      <li class="page-item ${currentPage === totalPages ? "disabled" : ""}">
        <a class="page-link" href="#" data-page="${currentPage + 1}">&raquo;</a>
      </li>
    `;

    pagination.innerHTML = paginationHTML;

    // Gắn sự kiện chuyển trang
    document.querySelectorAll(".page-link").forEach(link => {
      link.addEventListener("click", function (e) {
        e.preventDefault();
        const selectedPage = parseInt(this.getAttribute("data-page"));
        changePage(selectedPage);
      });
    });
  }

  // Hàm thay đổi trang hiện tại
  function changePage(page) {
    const totalPages = Math.ceil(getFilteredAndSortedTests().length / itemsPerPage);
    if (page >= 1 && page <= totalPages) {
      currentPage = page;
      renderTests();
      updatePagination();
    }
  }

  // Sắp xếp theo lượt chơi tăng dần
  document.getElementById("sortAsc").addEventListener("click", () => {
    sortOrder = "asc";
    currentPage = 1;
    renderTests();
    updatePagination();
  });

  // Sắp xếp theo lượt chơi giảm dần
  document.getElementById("sortDesc").addEventListener("click", () => {
    sortOrder = "desc";
    currentPage = 1;
    renderTests();
    updatePagination();
  });

  // Xử lý tìm kiếm bài test theo tên
  inputSearch.addEventListener("input", (e) => {
    searchQuery = e.target.value.trim();
    currentPage = 1;
    renderTests();
    updatePagination();
  });

  window.playTest = function (id) {
    const test = testData.find((test) => test.id === id);
    if (test) {
      localStorage.setItem("selectedTestId", id); 
      window.location.href = "check-test.html"; 
    }
  };

  document.getElementById("goBack").addEventListener("click", function () {
    window.location.href = "login.html";
  });

  renderTests();
  updatePagination();
});
