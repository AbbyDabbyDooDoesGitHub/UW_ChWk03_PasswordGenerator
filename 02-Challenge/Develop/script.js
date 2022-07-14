// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  var lowerChars   = "abcdefghijklmnopqrstuvwxyz"; //lower
  var upperChars   = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"; //upper
  var numericChars = "0123456789"; //numeric
  var specialChars = "!#$%&'()*+,-./:;<=>?@[]^_`{|}~"; //special characters

  var chars = "";  //to be actual characters to use
  var passwordLength = 12;  //needs to be 8-128
  var passwordOutput = "";  //to be actual password

  // THEN I confirm whether or not to include lowercase, uppercase
  // THEN my input should be validated and at least one character type should be selected




  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
