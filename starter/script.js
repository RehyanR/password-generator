// Array of special characters to be included in password
var specialCharacters = [
  "@",
  "%",
  "+",
  "\\",
  "/",
  "'",
  "!",
  "#",
  "$",
  "^",
  "?",
  ":",
  ",",
  ")",
  "(",
  "}",
  "{",
  "]",
  "[",
  "~",
  "-",
  "_",
  ".",
];

// Array of numeric characters to be included in password
var numericCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

// Function to prompt user for password options
function getPasswordOptions() {
  var length = parseInt(
    prompt("Enter the length of the password (8 to 128 characters):")
  );
  if (isNaN(length) || length < 8 || length > 128) {
    alert("Please enter a valid length between 8 and 128 characters.");
    return null;
  }
}
var lowercase = confirm("Include lowercase characters?");
var uppercase = confirm("Include uppercase characters?");
var numeric = confirm("Include numeric characters?");
var special = confirm("Include special characters?");

return {
  length: length,
  lowercase: lowercase,
  uppercase: uppercase,
  numeric: numeric,
  special: special,
};

if (!(lowercase || uppercase || numeric || special)) {
  alert("Please select at least one character type.");
  return null;
}

// Function for getting a random element from an array
function getRandom(arr) {}

// Function to generate password with user input
function generatePassword() {
  var options = getPasswordOptions();

  if (!options) return ""; // Return an empty string if no options are provided
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
