export function getFizzBuzzUntil(n) {
  // Creating an array variable to store the numbers in
  var array = [];

  // For loop to see if the numbers are multiples of 3, 5, or three and five (15)
  for(let count = 1; count <= n; count++){
    if(count % 15 === 0){
      array.push("FizzBuzz");
    }
    else if(count % 3 === 0){
      array.push("Fizz");
    }
    else if(count % 5 === 0){
      array.push("Buzz");
    }
    else{
      array.push(count);
    }
  }
  return array;
}

/*

Seeing as the task is to return an array with numbers from 1 to n, It is important to first initialize an array, which is what i did.
Upon creating that array (line 3), I then proceeded  to create a for loop in order to figure out the multiples of 3, 5, and 15.
The for loop has an initial count of 1, and if count is less than or equal to n, then execute the code block in the loop.

Count % 15 === 0 is calculated first because if any of the others (count % 3 === 0 / count % 5 === 0 ) were calculated first, it would override the count % 15 === 0, 
seeing as if some number is divisible by 3 or 5, it would also be divisible by 15.
what count % 15 === 0 means is that the number is divisible by 15. If so, push "FizzBuzz" into the array, if not, go to the next statement.

If not divisible by 15, we then check if count is divisible by 3. If so, push "Fizz" into the array, if not, go to the next statement.

If not divisible by 3, we then check if count is divisible by 5. If so, push  "Buzz" into the array, if not, go the next statement.

If the count is not divisible by 15, 3, or 5, then push the number that is currently "count" into the array.

Finally, the array is returned.

An example would be this: If n = 15 ( getFizzBuzzUntil(15) ) then the following would display:

[1,2,"Fizz",4,"Buzz","Fizz",7,8,"Fizz","Buzz",11,"Fizz",13,14,"FizzBuzz"]

*/