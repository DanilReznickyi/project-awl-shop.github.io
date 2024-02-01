document.addEventListener("DOMContentLoaded", function () {
  function openPopup() {
    document.getElementById("popupOverlay").style.display = "flex";
  }

  function closePopup() {
    document.getElementById("popupOverlay").style.display = "none";
  }

  function login() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (username === "admin" && password === "admin") {
      alert("Вход выполнен успешно!");
      closePopup();
    } else {
      alert("Неверный логин или пароль. Попробуйте еще раз.");
    }
  }

  document.body.addEventListener("click", function (event) {

    if (event.target.classList.contains("close-btn")) {
      closePopup();
    }
  });

  document.getElementById("userButton").addEventListener("click", openPopup);

  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
      closePopup();
    }
  });
});
