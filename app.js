
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const emailError = document.getElementById('emailError');
const passwordError = document.getElementById('passwordError');
const successMessage = document.getElementById('successMessage');
const form = document.getElementById('signupForm');

let emailValid = false;
let passwordValid = false;

// Email validation function
emailInput.addEventListener('input', function () {
  const emailValue = emailInput.value;
  if (emailValue.length > 3 && emailValue.includes('@') && emailValue.includes('.')) {
    emailError.textContent = '';
    emailValid = true;
  } else {
    emailError.textContent = 'Make sure email is more than 3 characters and has @ and a . ';
    emailValid = false;
  }
  toggleSuccessMessage();
});

// Password validation function
passwordInput.addEventListener('input', function () {
  const passwordValue = passwordInput.value;
  if (passwordValue.length > 8) {
    passwordError.textContent = '';
    passwordValid = true;
  } else {
    passwordError.textContent = 'Make sure password is more than 8 characters.';
    passwordValid = false;
  }
  toggleSuccessMessage();
});

// Function to display success message when both fields are valid
function toggleSuccessMessage() {
  if (emailValid && passwordValid) {
    successMessage.style.display = 'block';
  } else {
    successMessage.style.display = 'none';
  }
}

// Handle form submission
form.addEventListener('submit', function (event) {
  event.preventDefault(); // Prevent default form submission behavior

  if (emailValid && passwordValid) {
    const userConfirmed = confirm('Are you sure you want to sign up?');
    if (userConfirmed) {
      alert('Successful signup!');
    } else {
      // If user cancels, reset the form and reload the page
      form.reset();
      emailError.textContent = '';
      passwordError.textContent = '';
      successMessage.style.display = 'none';
    }
  } else {
    alert('Please fix the errors before submitting.');
  }
});