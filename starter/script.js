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

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
// Function to prompt user for password options
function generatePassword() {
  // Define character sets for different types of characters
  const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
  const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numericChars = "0123456789";
  const specialChars = "!@#$%^&*()-_=+";

  // Prompt user for password length
  let passwordLength = parseInt(
    prompt("Enter the length of the password (between 8 and 128 characters):")
  );

  // Validate password length
  if (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {
    alert("Please enter a valid password length between 8 and 128 characters.");
    return;
  }
}

// Prompt user for character types to include
var includeLowercase = confirm("Include lowercase letters?");
var includeUppercase = confirm("Include uppercase letters?");
var includeNumbers = confirm("Include numbers?");
var includeSpecialChars = confirm("Include special characters?");

// Validate that at least one character type is selected
if (
  !includeLowercase &&
  !includeUppercase &&
  !includeNumbers &&
  !includeSpecialChars
) {
  alert("Please select at least one character type.");
  return;
}

// Function for getting a random element from an array
function getRandom(arr) {
  function getRandom(arr) {
    var randomIndex = Mathfloor(Math.random() * arr.length);
    return arr[randomIndex];
  }
}

// Function to generate password with user input
function generatePassword() {
  if (options.includeLowercase) {
    possibleChars = possibleChars.concat(
      "abcdefghijklmnopqrstuvwxyz".split("")
    );
  }
  if (options.includeUppercase) {
    possibleChars = possibleChars.concat(
      "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("")
    );
  }
  if (options.includeSpecialChars) {
    possibleChars = possibleChars.concat("!@#$%^&*()-_=+".split(""));
  }
  if (options.includeNumbers) {
    possibleChars = possibleChars.concat("0123456789".split(""));
  }
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
