// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

// Function to prompt user for password options
function getPasswordOptions() {

  // Prompt for password length
  var length = prompt("Enter the length of the password (between 8 and 128 characters):");

  // Validate the length
  if (length < 8 || length > 128 || isNaN(length)) {
    alert("Please enter a valid length between 8 and 128 characters.");
    return;
  }

  // Confirm character types
  var useLowercase = confirm("Include lowercase characters?");
  var useUppercase = confirm("Include uppercase characters?");
  var useNumeric = confirm("Include numeric characters?");
  var useSpecial = confirm("Include special characters?");

  // Validate at least one character type is selected
  if (!(useLowercase || useUppercase || useNumeric || useSpecial)) {
    alert("Please select at least one character type.");
    return;
  }

  // Return the user's password options
  return {
    length: length,
    useLowercase: useLowercase,
    useUppercase: useUppercase,
    useNumeric: useNumeric,
    useSpecial: useSpecial
  };
}

// Function for getting a random element from an array
function getRandom(arr) {
  var randomIndex = Math.floor(Math.random() * arr.length);
  return arr[randomIndex];
}

// Function to generate password with user input
function generatePassword() {
  var options = getPasswordOptions();

  // Create a pool of characters based on user options
  var characterPool = [];
  if (options.useLowercase) characterPool = characterPool.concat(lowerCasedCharacters);
  if (options.useUppercase) characterPool = characterPool.concat(upperCasedCharacters);
  if (options.useNumeric) characterPool = characterPool.concat(numericCharacters);
  if (options.useSpecial) characterPool = characterPool.concat(specialCharacters);

  // Generate the password
  var password = "";
  for (var i = 0; i < options.length; i++) {
    password += getRandom(characterPool);
  }

  return password;
}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  alert("Generated Password: " + password);
}

// Function to prompt user for password options
function getPasswordOptions() {
  
// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);

}

// Function for getting a random element from an array
function getRandom(arr) {

}

// Function to generate password with user input
function generatePassword() {

}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);