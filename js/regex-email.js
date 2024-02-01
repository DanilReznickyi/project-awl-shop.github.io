function validateEmail() {
  const emailInput = document.getElementById("emailInput");
  const emailValue = emailInput.value.trim();
  const emailRegex = /\S+@\S+\.\S+/;

  if (emailRegex.test(emailValue)) {
    emailInput.style.borderColor = "#206930";
    alert("Email is valid. Sending...");
  } else {
    emailInput.style.borderColor = "red";
    alert("Invalid email. Please enter a valid email address.");
  }
}