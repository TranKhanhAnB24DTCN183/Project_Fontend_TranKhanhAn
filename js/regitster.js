const adminAccount = {
id: 1,
name: "HanTarann",
email: "admin@admin.com",
password: "admin1234",
role: "admin",
};

if (!localStorage.getItem("adminAccount")) {
localStorage.setItem("adminAccount", JSON.stringify(adminAccount));
}

const registerForm = document.getElementById("registerForm");


registerForm.addEventListener("submit", function (event) {
  event.preventDefault();
  const name = registerForm.querySelector(".text").value.trim();
  const email = registerForm.querySelector(".email").value.trim();
  const password = registerForm.querySelectorAll(".password")[0].value.trim();
  const confirmPassword = registerForm.querySelectorAll(".password")[1].value.trim();
  const errorMessage = registerForm.querySelector(".error-message");

  if (!name || !email || !password || !confirmPassword) {
    errorMessage.textContent = "Vui lòng điền đầy đủ thông tin";
    errorMessage.classList.add("red");
    return;
  }
  // if (password[0]!==password[0].toUpperCase()){
  //   errorMessage.textContent = "Mật khẩu phải bắt đầu bằng chữ hoa";
  //   errorMessage.classList.add("red");
  //   return;
  // }
  // if (isNaN(password[password.length-1])) {
  //   errorMessage.textContent = "Mật khẩu phải chứa một ký tự số ở cu";
  //   errorMessage.classList.add("red");
  //   return;
  // }
  // const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  // if (!emailPattern.test(email) || email.includes("..") || email.startsWith(".") || email.endsWith(".") || email.includes(".@") || email.includes("@.")) {
  //   errorMessage.textContent = "Email không hợp lệ!";
  //   errorMessage.classList.add("red");
  //   return;
  // }

  if (password !== confirmPassword) {
    errorMessage.textContent = "Mật khẩu xác nhận không khớp";
    errorMessage.classList.add("red");
    return;
  }

  if (password.length < 8) {
    errorMessage.textContent = "Mật khẩu phải có ít nhất 8 ký tự";
    errorMessage.classList.add("red");
    return;
  }

  let users = JSON.parse(localStorage.getItem("users")) || [];

  const existingUser = users.find(user => user.email === email);

  if (existingUser) {
    errorMessage.textContent = "Email này đã được đăng ký!";
    errorMessage.classList.add("red");
    return;
  }

  const user = { id: Date.now(), name, email, password, role: "user" };

  users.push(user);

  localStorage.setItem("users", JSON.stringify(users));

  errorMessage.textContent = "Đăng ký thành công !";
  errorMessage.classList.remove("red");
  errorMessage.classList.add("green");

  setTimeout(() => {
    window.location.href = "login.html";
  }, 2000);
});

