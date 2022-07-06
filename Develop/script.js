// Assignment Code
var generateBtn = document.querySelector("#generate");

//Character Types and password parameters
var lowerChar = "abcdefghijklmnopqrstuvwxyz";
var upperChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numberChar = "0123456789";
var specialChar = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
var possibleChar = "";
var passwordLength = "";


//Setting length of password

function determineLength() {
  passwordLength = prompt("Choose length of your password. (between 8-128 characters): ")
}
  determineLength();
if (passwordLength < 8 || passwordLength > 128) {
  alert("Must be a number between 8-128 characters");
  determineLength();
}


//Setting characters used in password
var yesLowercase = confirm("Include lowercase characters?");
if (yesLowercase === true) {
  possibleChar += lowerChar
}
var yesUppercase = confirm("Include uppercase characters?");
if (yesUppercase === true) {
  possibleChar += upperChar
}
var yesNumbercase = confirm("Include numbers?");
if (yesNumbercase === true) {
  possibleChar += numberChar
}
var yesSpecialcase = confirm("Include special characters?");
if (yesSpecialcase === true) {
  possibleChar += specialChar
}


//Generate Password with random math and including selected characters and lenght
function generatePassword() {
  var retValue = "";
  for (var i = 0, n = possibleChar.length; i < passwordLength; ++i) {
    retValue += possibleChar.charAt(Math.floor(Math.random() * n));
  }
  return retValue;
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);