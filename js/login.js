const loginForm = document.getElementById("loginForm");

if (loginForm) {
  loginForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const email = loginForm.querySelector(".email").value.trim();
    const password = loginForm.querySelector(".password").value.trim();
    const errorMessage = loginForm.querySelector(".error-message");

    const storedAdmin = JSON.parse(localStorage.getItem("adminAccount"));
    let storedUsers = JSON.parse(localStorage.getItem("users")) || [];

    if (storedAdmin && storedAdmin.email === email && storedAdmin.password === password) {
      localStorage.setItem("role", "admin");

      errorMessage.textContent = "Đăng nhập thành công với tài khoản admin!";
      errorMessage.classList.remove("red");
      errorMessage.classList.add("green");

      setTimeout(() => {
        window.location.href = "category-manager.html";
      }, 2000);
      return;
    }

    const existingUser = storedUsers.find(user => user.email === email && user.password === password);

    if (existingUser) {
      localStorage.setItem("role", "user");

      errorMessage.textContent = "Đăng nhập thành công!";
      errorMessage.classList.remove("red");
      errorMessage.classList.add("green");

      setTimeout(() => {
        window.location.href = "dashboard.html";
      }, 2000);
      return;
    }
    errorMessage.textContent = "Email hoặc mật khẩu không đúng!";
    errorMessage.classList.add("red");
  });
}
// localStorage.removeItem("users")
