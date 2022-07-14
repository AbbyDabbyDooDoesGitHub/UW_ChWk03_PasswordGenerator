// Assignment Code
var jQueryScript = document.createElement('script');
jQueryScript.setAttribute('src','https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js');
document.head.appendChild(jQueryScript);

var generateBtn = document.querySelector("#generate");
var lowercaseBtn = document.querySelector("#lowercase");
var uppercaseBtn = document.querySelector("#uppercase");
var numericBtn = document.querySelector("#numeric");
var specialBtn = document.querySelector("#special");
var criteriaBtn = document.querySelector("#criteriaBtn");

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

// Write password to the #password input
function changeCriteriaClass(whichCriteriaBtn) {
  var changeBtn = whichCriteriaBtn;
  var className = document.getElementById(whichCriteriaBtn).className;

  if (className="include") {

    $('#element_id').removeClass('hidden').addClass('skip');

  } else if (className="skip") {

    $('#element_id').removeClass('skip').addClass('include');

  }

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Add event listener to lowercase button
lowercaseBtn.addEventListener("click", changeCriteriaClass(lowercaseBtn));

// Add event listener to uppercase button
uppercaseBtn.addEventListener("click", changeCriteriaClass(uppercaseBtn));

// Add event listener to numeric button
numericBtn.addEventListener("click", changeCriteriaClass(numericBtn));

// Add event listener to special button
specialBtn.addEventListener("click", changeCriteriaClass(specialBtn));
