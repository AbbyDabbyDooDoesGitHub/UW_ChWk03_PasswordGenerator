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
  
  let text;
  let charLength = prompt("Please enter your desired password length (8-128 characters permitted):", "15");

  if (charLength == "") {
    alert("No password length was entered.");
    console.log("if charLength is: " + charLength);
  } else if (charLength == null) {
    alert("User cancelled the prompt.");
    console.log("else if charLength is: " + charLength);
  } else {
    console.log("else charLength is: " + charLength);

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
    console.log("actual characters to use: " + chars);
    
    if (chars == "" || chars == null) {
      alert("No characters were permitted. Please select at least one character type to generate a password.");
    } else {
      document.getElementById("demo").innerHTML = text;

    }

  }

}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");


  var passwordLength = 12;  //needs to be 8-128
  var passwordOutput = "";  //to be actual password

  let person = prompt("Please enter your name", "Harry Potter");
  let text;
  if (person == null || person == "") {
    text = "User cancelled the prompt.";
  } else {
    text = "Hello " + person + "! How are you today?";
  }

  // THEN I confirm whether or not to include lowercase, uppercase
  // THEN my input should be validated and at least one character type should be selected




  passwordText.value = password;

}

// Write password to the #password input
// function changeCriteriaClass(whichCriteriaBtn) {
//   var className = document.getElementById(whichCriteriaBtn).className;

//   if ( document.getElementById(whichCriteriaBtn).classList.contains("include") ) {

//     document.getElementById(whichCriteriaBtn).classList.remove("include");

//     document.getElementById(whichCriteriaBtn).classList.add('skip');

//   } else if ( document.getElementById(whichCriteriaBtn).classList.contains("skip") ) {

//     document.getElementById(whichCriteriaBtn).classList.remove("skip");

//     document.getElementById(whichCriteriaBtn).classList.add('include');

//   }

// }



// lowercaseBtn.addEventListener("click", changeCriteriaClass("lowercaseBtn"));

// document.getElementById("lowercaseBtn").addEventListener("click", function(){

//   if ( document.getElementById("lowercaseBtn").classList.contains("include") ) {

//     document.getElementById("lowercaseBtn").classList.remove("include");

//     document.getElementById("lowercaseBtn").classList.add('skip');

//   } else if ( document.getElementById("lowercaseBtn").classList.contains("skip") ) {

//     document.getElementById("lowercaseBtn").classList.remove("skip");

//     document.getElementById("lowercaseBtn").classList.add('include');

//   }

// });

// uppercaseBtn.addEventListener("click", changeCriteriaClass("uppercaseBtn"));

// numericBtn.addEventListener("click", changeCriteriaClass("numericBtn"));

// specialBtn.addEventListener("click", changeCriteriaClass("specialBtn"));
