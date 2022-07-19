// Assignment Code

var generateBtn = document.querySelector("#generate");

// EVENT LISTENER
document.getElementById("generate").addEventListener("click", passwordParameters);

function passwordParameters() {
  var lowerChars   = "abcdefghijklmnopqrstuvwxyz"; //lower
  var upperChars   = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"; //upper
  var numericChars = "0123456789"; //numeric
  var specialChars = "!#$%&'()*+,-./:;<=>?@[]^_`{|}~"; //special characters

  var chars = "";  //to be actual characters to use
  
  let charLength = prompt("Please enter your desired password length (8-128 characters permitted):", "15");

  if (charLength == "") {
    alert("No password length was entered.");
    // console.log("if charLength is: " + charLength);
  } else if (charLength == null) {
    alert("User cancelled the prompt.");
    // console.log("else if charLength is: " + charLength);
  } else if (charLength < 8) {
    alert("Minimum of 8 characters required to generate password. You requested " + charLength +".");
  } else if (charLength > 128) {
    alert("Maximum of 128 characters permitted to generate password. You requested " + charLength +".");;
  } else {
    // console.log("else charLength is: " + charLength);

    if (confirm("Press OK to allow lowercase characters.")) {
    } else {
      lowerChars = "";
    }

    if (confirm("Press OK to allow UPPERCASE characters.")) {
    } else {
      upperChars = "";
    }

    if (confirm("Press OK to allow num3r1c (numeric) characters.")) {
    } else {
      numericChars = "";
    }

    if (confirm("Press OK to allow $pec!al (special) characters.")) {
    } else {
      specialChars = "";
    }
  
    var chars = lowerChars+upperChars+numericChars+specialChars;  //to be actual characters to use
    // console.log("actual characters to use: " + chars);
    
    if (chars == "" || chars == null) {
      alert("No characters were permitted. Please select at least one character type to generate a password.");
    } else {
      generatePassword((charLength-1),chars);

    }

  }

}

// Generate Password
function generatePassword(passwordLength,chars) {

  var password = "";

  for (var i = 0; i <= passwordLength; i++) {
    var randomNumber = Math.floor(Math.random() * chars.length);
    password += chars.substring(randomNumber, randomNumber +1);
   }

  //  console.log("password: " + password);
   writePassword(password);
}

// Write password to the #password input
function writePassword(password) {
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}



