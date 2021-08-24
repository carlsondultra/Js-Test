export function isPalindrome(inputString) {
  var len = inputString.length; //Getting length of inputted string (if inputString is "dogs", len would equal 4).
  var mid = Math.floor(len/2); //Cutting the length in half, getting the "floor" of the result, (if len equals 4, mid equals 2, if len equals 5, mid equals 2 as well).

  //Looping through the inputString to see if it is a palindrome.
  for(var i = 0; i < mid; i++) { 
    if(inputString[i] !== inputString[len - 1 - i]) {
      return false;
    }
  }
  return true;
}

/* 

  For the code above, I will attempt to explain using a real world example.
  
  Let's say the inputString is "dogs".
  The resulting "len" would be 4, and the "mid" would be 2. (line 2 and 3)

  Now we start the loop. i = 0, and since 0 is less than mid (0 < 2), execute the code block in the loop. (line 6)

  The result is an if statement, so we see if the code inside the if statement is satisfied or not in order to proceed. 
  Let's input the values we got previously now.
  inputString[i] !== inputString [len - 1 - i]
  inputString[0] !== inputString [4 - 1 - 0]
  inputString[0] !== inputString [3]

  Now, what does this mean? This is asking if the first index (inputString[0]) does not equal the last index (inputString[3]) (line 7)
  Remember, the 0 and 3 apply to our case since we used the word dogs for inputString.
  Let's take a look at the word "dogs".
  Does the first index "d" equal the last index "s"? (are they the same letter)
  The answer is no. Seeing as being false is the condition to execute the code in the if statement, we proceed through the if statement, returning false. (line 8)

  This concludes that "dogs" is not a palindrome. 

  On the contrary, if on the occasion that inputString was in fact a palindrome, the loop would continue, checking if the indexes match from start to finish. This loop would 
  continue until the whole word is looped through. 

  */