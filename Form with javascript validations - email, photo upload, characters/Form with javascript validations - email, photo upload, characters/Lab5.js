function validateForm() {
    var name = document.getElementById('name').value;
    var age = document.getElementById('age').value;
    var city = document.getElementById('city').value;
    var hostel = document.querySelector('input[name="hostel"]:checked');
    var foodPreference = document.getElementById('foodPreference').value;
    var email = document.getElementById('email').value;
    var photo = document.getElementById('photo').value;
  
    clearErrors();
  
    if (!isValidName(name)) {
      displayError('nameError', 'Name must be 10 characters long');
      return false;
    }
  
    if (!isValidAge(age)) {
      displayError('ageError', 'Age must be greater than 18');
      return false;
    }
  
    if (!isValidCity(city)) {
      displayError('cityError', 'City must be a single character');
      return false;
    }
  
    if (!isValidHostel(hostel)) {
      displayError('hostelError', 'Select Hostel Preference');
      return false;
    }
  
    if (!isValidFoodPreference(foodPreference)) {
      displayError('foodPreferenceError', 'Select Food Preference');
      return false;
    }
  
    if (!isValidEmail(email)) {
      displayError('emailError', 'Enter a valid email address');
      return false;
    }
  
    if (!isValidPhoto(photo)) {
      displayError('photoError', 'Upload a photo');
      return false;
    }
  
    return true;
  }
  
  function isValidName(name) {
    return name.length === 10;
  }
  
  function isValidAge(age) {
    return parseInt(age) > 18;
  }
  
  function isValidCity(city) {
    return city.length === 1;
  }
  
  function isValidHostel(hostel) {
    return hostel !== null;
  }
  
  function isValidFoodPreference(foodPreference) {
    return foodPreference !== '';
  }
  
  function isValidEmail(email) {
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
  
  function isValidPhoto(photo) {
    return photo !== '';
  }
  
  function displayError(elementId, errorMessage) {
    document.getElementById(elementId).innerText = errorMessage;
  }
  
  function clearErrors() {
    var errorElements = document.querySelectorAll('.error');
    errorElements.forEach(function (element) {
      element.innerText = '';
    });
  }