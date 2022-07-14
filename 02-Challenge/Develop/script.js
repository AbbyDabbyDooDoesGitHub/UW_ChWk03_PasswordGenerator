// Assignment Code

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
  var className = document.getElementById(whichCriteriaBtn).className;

  if ( document.getElementById(whichCriteriaBtn).classList.contains("include") ) {

    document.getElementById(whichCriteriaBtn).classList.remove("include");

    document.getElementById(whichCriteriaBtn).classList.add('skip');

  } else if ( document.getElementById(whichCriteriaBtn).classList.contains("skip") ) {

    document.getElementById(whichCriteriaBtn).classList.remove("skip");

    document.getElementById(whichCriteriaBtn).classList.add('include');

  }

}

// EVENT LISTENERS

generateBtn.addEventListener("click", writePassword);

lowercaseBtn.addEventListener("click", changeCriteriaClass("#lowercaseBtn") { alert("Hello World!"); });

uppercaseBtn.addEventListener("click", changeCriteriaClass("#uppercaseBtn"));

numericBtn.addEventListener("click", changeCriteriaClass("#numericBtn"));

specialBtn.addEventListener("click", changeCriteriaClass("#specialBtn"));
