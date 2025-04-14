let currentPage = 1;
const itemsPerPage = 8;

let categories = [
  { id: 1, name: "Đời sống", emoji: "🙉" },
  { id: 2, name: "Toán học", emoji: "📚" },
  { id: 3, name: "Khoa học", emoji: "🧪" },
  { id: 4, name: "Lịch sử", emoji: "📜" },
  { id: 5, name: "Văn học", emoji: "📖" },
  { id: 6, name: "Địa lý", emoji: "🌍" },
  { id: 7, name: "Hóa học", emoji: "⚗️" },
  { id: 8, name: "Sinh học", emoji: "🧬" },
  { id: 9, name: "Vật lý", emoji: "⚛️" },
  { id: 10, name: "Công nghệ", emoji: "📱" },
  { id: 11, name: "Nghệ thuật", emoji: "🎨" },
  { id: 12, name: "Thể thao", emoji: "🏀" },
  { id: 13, name: "Âm nhạc", emoji: "🎶" },
  { id: 14, name: "Giải trí", emoji: "🎭" },
];

const savedCategories = localStorage.getItem("categories");
if (savedCategories) {
  categories = JSON.parse(savedCategories);
}

function saveCategoriesToLocalStorage() {
  localStorage.setItem("categories", JSON.stringify(categories));
}

// Hàm hiển thị danh mục theo trang hiện tại
function loadCategories() {
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = Math.min(startIndex + itemsPerPage, categories.length);
  const tableBody = document.querySelector("table tbody");
  tableBody.innerHTML = "";

  categories.slice(startIndex, endIndex).forEach((category) => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${category.id}</td>
      <td><span class="category-icon">${category.emoji}</span> ${category.name}</td>
      <td>
        <button class="btn btn-warning btn-sm" onclick="editCategory(${category.id})">Sửa</button>
        <button class="btn btn-danger btn-sm"  onclick="confirmDelete(${category.id})">Xóa</button>
      </td>
    `;
    tableBody.appendChild(row);
  });

  updatePagination();
}

// Hàm cập nhật thanh phân trang
function updatePagination() {
  const pagination = document.querySelector(".pagination");
  const totalPages = Math.ceil(categories.length / itemsPerPage);
  let paginationHTML = "";

  paginationHTML += `<li class="page-item ${
    currentPage === 1 ? "disabled" : ""
  }">
    <a class="page-link" href="#" onclick="changePage(${
      currentPage - 1
    })">&laquo;</a>
  </li>`;

  for (let i = 1; i <= totalPages; i++) {
    paginationHTML += `<li class="page-item ${
      i === currentPage ? "active" : ""
    }">
      <a class="page-link" href="#" onclick="changePage(${i})">${i}</a>
    </li>`;
  }

  paginationHTML += `<li class="page-item ${
    currentPage === totalPages ? "disabled" : ""
  }">
    <a class="page-link" href="#" onclick="changePage(${
      currentPage + 1
    })">&raquo;</a>
  </li>`;

  pagination.innerHTML = paginationHTML;
}

// Hàm thay đổi trang
function changePage(page) {
  if (page > 0 && page <= Math.ceil(categories.length / itemsPerPage)) {
    currentPage = page;
    loadCategories();
  }
}

// Hàm hiển thị modal
function showModal(modalId) {
  const modal = document.getElementById(modalId);
  modal.classList.add("show");
  modal.style.display = "block";
}

// Hàm ẩn modal
function hideModal(modalId) {
  const modal = document.getElementById(modalId);
  modal.classList.remove("show");
  modal.style.display = "none";
}

// Bắt sự kiện click nút "Thêm danh mục"
document
  .querySelector(".btn-add-category")
  .addEventListener("click", function () {
    document.getElementById("categoryForm").reset();
    document.getElementById("modalTitle").textContent = "Thêm danh mục";
    document.getElementById("categoryId").value = "";
    showModal("categoryModal");
  });

// Hàm chỉnh sửa danh mục
function editCategory(id) {
  const category = categories.find((c) => c.id === id);
  document.getElementById("modalTitle").textContent = "Sửa danh mục";
  document.getElementById("categoryId").value = category.id;
  document.getElementById("categoryName").value = category.name;
  document.getElementById("categoryEmoji").value = category.emoji;
  showModal("categoryModal");
}

// Hàm xác nhận xóa danh mục
function confirmDelete(id) {
  document.getElementById("confirmDeleteBtn").onclick = function () {
    categories = categories.filter((category) => category.id !== id);
    saveCategoriesToLocalStorage();

    let testData = JSON.parse(localStorage.getItem("testData") || "[]");
    testData = testData.filter(test => test.categoryId !== id);
    localStorage.setItem("testData", JSON.stringify(testData));
    loadCategories();
    hideModal("confirmDeleteModal");
  };
  showModal("confirmDeleteModal");
}


// Hàm hiển thị lỗi
function showError(message) {
  const errorDiv = document.getElementById("categoryError");
  errorDiv.textContent = message;
  errorDiv.style.display = "block";
}

// Hàm xóa thông báo lỗi
function clearError() {
  const errorDiv = document.getElementById("categoryError");
  errorDiv.textContent = "";
  errorDiv.style.display = "none";
}

// Hàm kiểm tra tính hợp lệ của danh mục
function validateCategory(name, emoji, id = null) {
  name = name.trim();
  emoji = emoji.trim();

  if (!name) {
    showError("Tên danh mục không được để trống");
    return false;
  }

  if (name.length < 2 || name.length > 20) {
    showError("Tên danh mục quá ngắn");
    return false;
  }

  if (emoji.length !== 2) {
    showError("Emoji phải có 1 ký tự emoji");
    return false;
  }

  const isDuplicate = categories.some(
    (c) => c.name === name && c.id !== parseInt(id)
  );
  if (isDuplicate) {
    showError("Tên danh mục đã tồn tại");
    return false;
  }

  clearError();
  return true;
}

// Xử lý lưu danh mục khi nhấn "Lưu"
document
  .getElementById("saveCategoryBtn")
  .addEventListener("click", function () {
    const id = document.getElementById("categoryId").value;
    const name = document.getElementById("categoryName").value;
    const emoji = document.getElementById("categoryEmoji").value;

    if (!validateCategory(name, emoji, id)) return;

    if (id) {
      const category = categories.find((c) => c.id === parseInt(id));
      category.name = name.trim();
      category.emoji = emoji.trim();
    } else {
      const newId = categories.length
        ? categories[categories.length - 1].id + 1
        : 1;
      categories.push({ id: newId, name: name.trim(), emoji: emoji.trim() });
    }

    saveCategoriesToLocalStorage();
    loadCategories();
    hideModal("categoryModal");
  });

// Đóng modal khi nhấn nút đóng
document.querySelectorAll(".btn-close, .btn-secondary").forEach((button) => {
  button.addEventListener("click", function () {
    hideModal("categoryModal");
    hideModal("confirmDeleteModal");
  });
});

loadCategories();

document.getElementById("goTo").addEventListener("click", function () {
  window.location.href = "product-manager.html";
});
document.getElementById("goBack").addEventListener("click", function () {
  window.location.href = "login.html";
});
