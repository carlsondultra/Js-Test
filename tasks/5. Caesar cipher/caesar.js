export function encryptCaesar(inputString, key) {
  // Wrap the key
  if (key < 0) {
    return caesarShift(inputString, key + 26);
  }

  var output = "";

  // Go through each character
  for (var i = 0; i < inputString.length; i++) {
    // Get the current character
    var char = inputString[i];

    // Checking if character is a letter
    if (char.match(/[a-z]/i)) {
      // Get its code
      var code = inputString.charCodeAt(i);

      // Checking if uppercase letter
      if (code >= 65 && code <= 90) {
        char = String.fromCharCode(((code - 65 + key) % 26) + 65); //Moving to the left by 65 so A = 0, B = 1, C = 2, etc.. adding 65 again in order to have letter code and not alphabet position
      }

      // Checking if lowercase letter
      else if (code >= 97 && code <= 122) {
        char = String.fromCharCode(((code - 97 + key) % 26) + 97);
      }
    }

    // Append
    output += char;
  }

  return output;
}

/*

  The Caesar Cipher shifts the english ABC within a specified key. 

  We first start by wrapping the key, that is, wrapping around the alphabet, which is 26 letters. (Z becomes A, etc...)

  Afterwards, we loop through the string's (inputString) individual characters in order to figure out which characters will be added to the variable char.

  Regex is used in order to see if the character is a letter, then once it is established that it is in fact a letter, 
  we store its corresponding UTF-16 (unicode) code at the given index into variable "code".

  Once storing the value into "code" variable, we then proceed to check if it is an uppercase letter. (line 19)

  In unicode, uppercase letters start at unicode 65 (represents A) to unicode 90 (represents Z)
  We then decide to take a String based off the unicode, and we use (code - 65 + key), 
  this means we move the unicode backwards by 65, and add the key in in order to have the preferred alphabetical value.
  The reason "% 26" is there is because there are only 26 characters in ASCII alphabet. 
  We add the "65" in order to put the character not in the alphabetical value, but the unicode value, which is equivalent to the alphabetical value set before.

  The lowercase letters work the same way (line 25).
  Unicode 97 (represents a) and Unicode 122 (represents z).

  The characters are then appended into an output variable, then returned, finishing the Caesar Cipher.

  ** Example Below **

  for encryptCaesar(inputString, key), lets have inputString = 'GAME', and then key = 1.

  encryptCaesar('GAME', 1), since inputString is uppercase, we use line 21, the code block inside the uppercase letters if statement.
  char = String.fromCharCode(((code - 65 + key) % 26) + 65);
  What is the unicode code for "G"? The code is 71. let's add that into the equation.
  (((71 - 65 + 1) % 26) + 65)
  ((7 % 26) + 65)
  (7 + 65)
  (72)

  Now, What is unicode 72? Unicode 72 is H. We have successfully transformed the "G" into an "H", performing the Caesar Cipher for one character. This process will be repeated 
  for the rest of the inputString. 

  ** End of Example **

*/
