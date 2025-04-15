document.addEventListener("DOMContentLoaded", () => {
  const allTests = JSON.parse(localStorage.getItem("testData")) || [];
  const allCategories = JSON.parse(localStorage.getItem("categories")) || [];

  const nameInput = document.getElementById("name");
  const timeInput = document.getElementById("number");
  const categorySelect = document.getElementById("categorySelect");
  const questionTableBody = document.getElementById("questionTableBody");

  // Hàm hiển thị tên danh mục kèm emoji dựa trên id
  function getCategoryDisplay(categoryId) {
    const category = allCategories.find((c) => c.id === categoryId);
    return category ? `${category.emoji} ${category.name}` : "Không xác định";
  }

  // Khởi tạo danh sách lựa chọn danh mục
  categorySelect.innerHTML = '<option value="">Chọn danh mục</option>';
  allCategories.forEach((cat) => {
    const option = document.createElement("option");
    option.value = cat.id;
    option.textContent = getCategoryDisplay(cat.id);
    categorySelect.appendChild(option);
  });

  // Xử lý khi người dùng chọn danh mục để điền tự động tên, thời gian, câu hỏi
  categorySelect.addEventListener("change", function () {
    const selectedCategoryId = parseInt(this.value);
    if (!selectedCategoryId) {
      nameInput.value = "";
      timeInput.value = "";
      questionTableBody.innerHTML = "";
      return;
    }

    const testByCategory = allTests.find(
      (t) => t.categoryId === selectedCategoryId
    );
    if (testByCategory) {
      nameInput.value = testByCategory.name;
      timeInput.value = testByCategory.time;
      renderQuestions(testByCategory.questions);
    } else {
      nameInput.value = "";
      timeInput.value = "";
      questionTableBody.innerHTML = "";
    }
  });

  // Hàm hiển thị danh sách câu hỏi trong bảng
  function renderQuestions(questions) {
    questionTableBody.innerHTML = "";
    questions.forEach((q) => {
      const row = document.createElement("tr");
      row.innerHTML = `
        <td>${q.id}</td>
        <td>${q.questionText}</td>
        <td>
          <button class="btn btn-warning btn-sm">Sửa</button>
          <button class="btn btn-danger btn-sm">Xóa</button>
        </td>
      `;
      questionTableBody.appendChild(row);
    });
  }

  document.getElementById("goTo").addEventListener("click", function () {
    window.location.href = "category-manager.html";
  });

  document.getElementById("goBack").addEventListener("click", function () {
    window.location.href = "login.html";
  });
});
