const email = document.querySelector('#email');
const country = document.querySelector('#country');
const zip = document.querySelector('#zip');
const password = document.querySelector('#password');
const confirmPassword = document.querySelector('#confirm-password');
const submit = document.querySelector('#submit');

function validateEmail() {
  const emailStatus = document.querySelector('#email-status');

  if (email.validity.valueMissing) {
    emailStatus.textContent = 'Required';
    return false;
  }

  if (email.validity.typeMismatch) {
    emailStatus.textContent = 'Not a valid email';
    return false;
  }

  emailStatus.textContent = 'OK';
  return true;
}

email.addEventListener('input', validateEmail);
validateEmail();

function validateCountry() {
  const countryStatus = document.querySelector('#country-status');

  if (country.value === '') {
    countryStatus.textContent = 'Select a country from the list';
    country.setCustomValidity('No country selected');
    return false;
  }

  countryStatus.textContent = 'OK';
  return true;
}

country.addEventListener('input', validateCountry);
validateCountry();

function validateZip() {
  const zipStatus = document.querySelector('#zip-status');

  const zipRegex = /^([A-Z]{2}-)?[0-9]{4}$/;

  if (zip.validity.valueMissing) {
    zipStatus.textContent = 'Required';
    return false;
  }

  if (!zipRegex.test(zip.value)) {
    zipStatus.textContent = 'Provide a valid zip code, e.g. 1000 or SI-1000';
    zip.setCustomValidity('Invalid zip code');
    return false;
  }

  zipStatus.textContent = 'OK';
  zip.setCustomValidity('');
  return true;
}

zip.addEventListener('input', validateZip);
validateZip();

function validatePassword() {
  const passwordStatus = document.querySelector('#password-status');

  if (password.validity.valueMissing) {
    passwordStatus.textContent = 'Required';
    return false;
  }

  passwordStatus.textContent = 'OK';
  return true;
}

password.addEventListener('input', validatePassword);
validatePassword();

function validateConfirmPassword() {
  const confirmPasswordStatus = document.querySelector(
    '#confirm-password-status'
  );

  if (confirmPassword.validity.valueMissing) {
    confirmPasswordStatus.textContent = 'Required';
    return false;
  }

  if (password.value !== confirmPassword.value) {
    confirmPassword.setCustomValidity('Passwords do not match');
    confirmPasswordStatus.textContent = 'Passwords do not match';
    return false;
  }

  confirmPasswordStatus.textContent = 'OK';
  confirmPassword.setCustomValidity('');
  return true;
}

confirmPassword.addEventListener('input', validateConfirmPassword);
password.addEventListener('input', validateConfirmPassword);
validateConfirmPassword();

submit.addEventListener('click', (event) => {
  event.preventDefault();

  if (
    validateEmail() &&
    validateCountry() &&
    validateZip() &&
    validatePassword() &&
    validateConfirmPassword()
  ) {
    alert('Looks good!');
  } else {
    alert('Please fix the errors in the form');
  }
});
