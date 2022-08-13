// Assignment code here
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {

  //declaring object with true/false for criteria and arrays containing the criteria, will reset upon pressing "Generate Password"
  var criteriaArrays = {
  length : 0,
  upperCase : false,
  upperCaseLetters : ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',],
  lowerCase : false,
  lowerCaseLetters : ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"],
  numeric : false,
  numbers : [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
  specialCharacters : false,
  special : [' ', '!', '"', '#', '$', '%', '&', "'", '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', '\\', ']', '^', '_', '`', '{', '}', '~']
  }

  //functions to request user input
  function passwordLength() {
    var i = window.prompt("How long will your password be (8-128)?");
    
    if (i >= 8 && length <= 128){
      criteriaArrays.length = i;
    } else if (i == null){
      return;
    } else {
      window.alert("Please input a number between 8 and 128.")
      passwordLength();
      return;
    }
  }

  function passwordUpper() {
    var i= window.prompt("Will your password include upper case letters? Yes/No?");

    //If i is null (cancel was selected), will throw an error, and thus end the program.
    i = i.toLowerCase();

    if (!i) {
      return;
    }else if (i == "yes"  || i == "y") {
      criteriaArrays.upperCase = true;
    }
    else if (i == "no" || i == "n") {
      criteriaArrays.upperCase = false;
    } else {
      window.alert("Please input Yes/No (Y/N).")
      passwordUpper();
      return;
    }
  }

  function passwordLower() {
    var i = window.prompt("Will your password include lower case letters? Yes/No?");

    //If i is null (cancel was selected), will throw an error, and thus end the program.
    i = i.toLowerCase();

    if (!i) {
      return;
    }else if (i == "yes"  || i == "y") {
      criteriaArrays.lowerCase = true;
    }
    else if (i == "no" || i == "n") {
      criteriaArrays.lowerCase = false;
    } else {
      window.alert("Please input Yes/No (Y/N).")
      passwordLower();
      return;
    }
  }

  function passwordNumeric() {
    var i = window.prompt("Will your password include numbers? Yes/No?");

    //If i is null (cancel was selected), will throw an error, and thus end the program.
    i = i.toLowerCase();

    if (!i) {
      return;
    }else if (i == "yes"  || i == "y") {
      criteriaArrays.numeric = true;
    }
    else if (i == "no" || i == "n") {
      criteriaArrays.numeric = false;
    } else {
      window.alert("Please input Yes/No (Y/N).")
      passwordNumeric();
      return;
    }
  }

  function passwordSpecChar() {
    var i = window.prompt("Will your password include special characters? Yes/No?");
    
    //If i is null (cancel was selected), will throw an error, and thus end the program.
    i = i.toLowerCase();

    if (!i) {
      return;
    }else if (i == "yes"  || i == "y") {
      criteriaArrays.specialCharacters = true;
    }
    else if (i == "no" || i == "n") {
      criteriaArrays.specialCharacters = false;
    } else {
      window.alert("Please input Yes/No (Y/N).")
      passwordSpecChar();
      return;
    }
  }
  
  //obtaining user input
  passwordLength();
  //Cancels whole function if "cancel" was selected 
  if (criteriaArrays.length == 0){
    return;
  }
  passwordUpper();
  passwordLower();
  passwordNumeric();
  passwordSpecChar();

  //create an array for the characters we will generate a password from
  var characterArray = [];

  //filling out above array based upon user input
  if (!criteriaArrays.upperCase && !criteriaArrays.lowerCase && !criteriaArrays.numeric && !criteriaArrays.specialCharacters) {
    window.alert("No criteria selected. No password can be generated.");
  }
  if (criteriaArrays.upperCase === true) {
    characterArray = characterArray.concat(criteriaArrays.upperCaseLetters);
  }
  if (criteriaArrays.lowerCase === true) {
    characterArray = characterArray.concat(criteriaArrays.lowerCaseLetters);
  }
  if (criteriaArrays.numeric === true) {
    characterArray = characterArray.concat(criteriaArrays.numbers);
  }
  if (criteriaArrays.specialCharacters === true) {
    characterArray = characterArray.concat(criteriaArrays.special);
  }
  
  //function to generate the password
  function generatePassword(){

    //create an array to contain the password
    var passwordArray = [];

    //iterate a push of a randomly selected character, from the characterArray, into the passwordArray
    for (i = 0; i < criteriaArrays.length; i++) {
      var index = Math.floor((Math.random() * characterArray.length));
      passwordArray.push(characterArray[index]);
    }

    //turn password array into strong
    var passwordString = passwordArray.join('');

    //returning the passwordString
    return passwordString;
  }

  //create password using generatePassword function
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
