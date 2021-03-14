// Assigning the generate button class
var generateBtn = document.querySelector("#generate");

generateBtn.addEventListener("click", function () {
  password = generatePassword();
  document.getElementById("password").placeholder = password;
});

// Write password to the #password input
function writePassword() {
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// User input variables: 
var passlen;
var confirmLowercase;
var confirmUppercase;
var confirmNumber;
var confirmCharacter;

// Password values arrays
// Alphabetical characters
letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
// Numeric characters
number = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// Special characters 
character = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"];

// Space variable declared for the Uppercase conversion
var space = [];
// selection variable declared for concatenating password elements
var selection;
// converts letters to uppercase 
var toUpper = function (x) {
    return x.toUpperCase();
};
// variable for uppercase conversion
letters2 = letters.map(toUpper);

// function for generating password
function generatePassword() {
    // Asks for user input
    passlen = parseInt(prompt("Select the length of password between 8 and 128 characters."));
    // if statement for checking user's first input
    if (!passlen) {
        alert(" You must enter a value");
    } else if (passlen < 8 || passlen > 128) {
        // Prompt for password length choice
        passlen = parseInt(prompt("You must choose between 8 and 128"));

    } else {
        // further prompts for password criterias
        confirmNumber = confirm("Should it contain numbers?");
        confirmCharacter = confirm("Should it contain special characters?");
        confirmUppercase = confirm("Should it contain Uppercase letters?");
        confirmLowercase = confirm("Should it contain Lowercase letters?");
    };

    // For alerting user if no criteria chosen
    if (!confirmCharacter && !confirmNumber && !confirmUppercase && !confirmLowercase) {
        selection = alert("You must choose a criteria!");

    }
    // Else if conditions for various combinations of password choices
    else if (confirmCharacter && confirmNumber && confirmUppercase && confirmLowercase) {

        selection = character.concat(number, letters, letters2);
    }
    else if (confirmCharacter && confirmNumber && confirmUppercase) {
        selection = character.concat(number, letters2);
    }
    else if (confirmCharacter && confirmNumber && confirmLowercase) {
        selection = character.concat(number, letters);
    }
    else if (confirmCharacter && confirmLowercase && confirmUppercase) {
        selection = character.concat(letters, letters2);
    }
    else if (confirmNumber && confirmLowercase && confirmUppercase) {
        selection = number.concat(letters, letters2);
    }
    else if (confirmCharacter && confirmNumber) {
        selection = character.concat(number);

    } else if (confirmCharacter && confirmLowercase) {
        selection = character.concat(letters);

    } else if (confirmCharacter && confirmUppercase) {
        selection = character.concat(letters2);
    }
    else if (confirmLowercase && confirmNumber) {
        selection = letters.concat(number);

    } else if (confirmLowercase && confirmUppercase) {
        selection = letters.concat(letters2);

    } else if (confirmNumber && confirmUppercase) {
        selection = number.concat(letters2);
    }
    else if (confirmCharacter) {
        selection = character;
    }
    else if (confirmNumber) {
        selection = number;
    }
    else if (confirmLowercase) {
        selection = letters;
    }
    // Utilising space variable for uppercase conversion
    else if (confirmUppercase) {
        selection = space.concat(letters2);
    };

    // pass variable is used as array for holding random generation
    var pass= [];

    // Random value generator
    for (var i = 0; i < passlen; i++) {
        var pickselection = selection[Math.floor(Math.random() * selection.length)];
        pass.push(pickselection);
    }
    // Joning passwords as a string
    password = pass.join("");
    writePassword();
    return password;
}