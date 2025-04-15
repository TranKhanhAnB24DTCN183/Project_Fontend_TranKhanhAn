document.addEventListener("DOMContentLoaded", function () {
  const selectedTestId = localStorage.getItem("selectedTestId");
  const testData = JSON.parse(localStorage.getItem("testData")) || [];

  const test = testData.find((t) => t.id == selectedTestId);
  if (!test) {
    document.body.innerHTML = "<p>Không tìm thấy bài kiểm tra!</p>";
    return;
  }

  let currentIndex = 0;
  const userAnswers = new Array(test.questions.length).fill(null);

  const testTitle = document.getElementById("testTitle");
  const questionCounter = document.getElementById("questionCounter");
  const questionText = document.getElementById("questionText");
  const optionsContainer = document.getElementById("optionsContainer");
  const questionNav = document.querySelector(".question-nav");

  const resultModal = document.getElementById("resultModal");
  const modalScore = document.getElementById("modalScore");
  const totalQuestionsEl = document.getElementById("totalQuestions");
  const correctAnswersEl = document.getElementById("correctAnswers");
  const wrongAnswersEl = document.getElementById("wrongAnswers");
  const closeModalBtn = document.getElementById("closeModalBtn");
  const retakeBtn = document.getElementById("retakeBtn");
  const backBtn = document.getElementById("backBtn");

  testTitle.textContent = test.name;
  document.getElementById(
    "timerTitle"
  ).textContent = `Thời gian: ${test.time} phút`;

  // Hàm hiển thị đồng hồ đếm ngược
  const countdownElement = document.getElementById("countdown");
  let startTime = Date.now();
  let endTime = startTime + test.time * 60 * 1000;

  function updateTimerDisplay() {
    const now = Date.now();
    const timeLeft = Math.max(0, Math.floor((endTime - now) / 1000));
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    countdownElement.textContent = `${minutes
      .toString()
      .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;

    if (timeLeft <= 0) {
      clearInterval(timerInterval);
      submitTest();
    }
  }

  const timerInterval = setInterval(updateTimerDisplay, 1000);
  updateTimerDisplay();

  // Hàm hiển thị câu hỏi theo chỉ số index
  function renderQuestion(index) {
    const q = test.questions[index];
    questionCounter.textContent = `Câu hỏi ${index + 1} trên ${
      test.questions.length
    }:`;
    questionText.textContent = q.questionText;

    optionsContainer.innerHTML = q.answers
      .map((answer, i) => {
        const isChecked = userAnswers[index] === answer.id ? "checked" : "";
        return `
        <div>
          <input class="radio" type="radio" name="answer" id="q${q.id}_a${i}" value="${answer.id}" ${isChecked}>
          <label for="q${q.id}_a${i}">${answer.text}</label>
        </div>
      `;
      })
      .join("");

    // Bắt sự kiện chọn đáp án
    const radios = optionsContainer.querySelectorAll(".radio");
    radios.forEach((radio) => {
      radio.addEventListener("change", function () {
        userAnswers[index] = parseInt(this.value);
        updateNavStatus(index);
      });
    });

    updateNavActive(index);
  }

  // Hàm tạo thanh điều hướng các câu hỏi
  function renderQuestionNav() {
    questionNav.innerHTML = "";
    for (let i = 0; i < test.questions.length; i++) {
      const btn = document.createElement("button");
      btn.textContent = i + 1;
      btn.addEventListener("click", () => {
        currentIndex = i;
        renderQuestion(currentIndex);
      });
      questionNav.appendChild(btn);
    }
    updateNavActive(currentIndex);
  }

  // Hàm cập nhật trạng thái nút đang chọn (active)
  function updateNavActive(index) {
    const buttons = questionNav.querySelectorAll("button");
    buttons.forEach((btn) => btn.classList.remove("active"));
    if (buttons[index]) {
      buttons[index].classList.add("active");
    }
  }

  // Hàm cập nhật trạng thái đã trả lời cho từng nút
  function updateNavStatus(index) {
    const buttons = questionNav.querySelectorAll("button");
    if (userAnswers[index] !== null) {
      buttons[index].classList.add("answered");
    } else {
      buttons[index].classList.remove("answered");
    }
  }

  // Sự kiện nút Next chuyển sang câu tiếp theo
  document.querySelector(".next").addEventListener("click", () => {
    if (currentIndex < test.questions.length - 1) {
      currentIndex++;
      renderQuestion(currentIndex);
    }
  });

  // Sự kiện nút quay lại câu trước
  document.querySelector(".prev").addEventListener("click", () => {
    if (currentIndex > 0) {
      currentIndex--;
      renderQuestion(currentIndex);
    }
  });

  // Sự kiện nút Hoàn thành để nộp bài
  document.querySelector(".complete").addEventListener("click", () => {
    clearInterval(timerInterval);
    submitTest();
  });

  // Hàm nộp bài kiểm tra và hiển thị kết quả
  function submitTest() {
    let correctCount = 0;
    test.questions.forEach((q, i) => {
      const selectedId = userAnswers[i];
      const correct = q.answers.find((ans) => ans.isCorrect);
      if (selectedId === correct.id) {
        correctCount++;
      }
    });

    const total = test.questions.length;
    const wrong = total - correctCount;
    const score = Math.round((correctCount / total) * 100);

    modalScore.textContent = `Điểm của bạn: ${score}`;
    totalQuestionsEl.textContent = total;
    correctAnswersEl.textContent = correctCount;
    wrongAnswersEl.textContent = wrong;
    resultModal.style.display = "flex";
  }

  // Đóng modal kết quả
  closeModalBtn.addEventListener("click", () => {
    resultModal.style.display = "none";
  });

  // Làm lại bài kiểm tra
  retakeBtn.addEventListener("click", () => {
    location.reload();
  });

  backBtn.addEventListener("click", () => {
    window.location.href = "dashboard.html";
  });

  document.getElementById("goBack").addEventListener("click", function () {
    window.location.href = "login.html";
  });

  renderQuestionNav();
  renderQuestion(currentIndex);
});
