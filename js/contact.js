document.getElementById('phone').addEventListener('input', function(event) {
  let phoneInput = event.target;
  let sanitizedValue = phoneInput.value.replace(/[^\d+]/g, ''); // Удаляем все, кроме цифр, + и -
  phoneInput.value = sanitizedValue;
});

document.getElementById('feedbackForm').addEventListener('submit', function(event) {
  event.preventDefault();

  let phoneInput = document.getElementById('phone');
  let phoneRegex = /^\d+$/; 
  if (!phoneRegex.test(phoneInput.value)) {
    displayError('Phone must contain only digits.');
    return;
  }
  clearErrors();

  alert('Form submitted successfully!');
});

function displayError(message) {
  let errorMessages = document.getElementById('errorMessages');
  errorMessages.innerHTML = '<p>' + message + '</p>';
}

function clearErrors() {
  let errorMessages = document.getElementById('errorMessages');
  errorMessages.innerHTML = '';
}
