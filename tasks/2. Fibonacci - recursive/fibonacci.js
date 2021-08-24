export function getFibonacciUntil(n) {
  //Hard coding the non-recursive parts of Fibonacci Sequence
  if(n == 0){
    return [0];
  }
  if (n == 1 || n == 2 ) {
    return [0,1];   
  }

  //Recursively generating an array for Fibonacci Sequence
  var array = getFibonacciUntil(n - 1);
  array.push(array[n - 2] + array[n - 3]);
  return array;
}

/* 

I will make my best attempt to explain the code above.

The first ten Fibonacci numbers are 0, 1, 1, 2, 3, 5, 8, 13, 21, 34

Seeing as the sequence starts with 0, and the second and third numbers are 1, (0,1,1), we can hard code the first few numbers to display that sequence if asked for them.

Moving on to the recursive part, I started by creating a variable called array, which is getFibonacciUntil(n - 1). 
This means that if for example, n were to equal 7, 
array = getFibonacciUntil(6), and should show 0,1,1,2,3,5
                                        array[0,1,2,3,4,5]
The reason why it would not show the next number, 8 right now is because the number is not being added into the end of the array.
This is the function of line 12, recursively calling itself until hitting the base cases (n == 0 , n == 1 , n == 2).
We keep adding the new element to the end of the array that is being returned from the getFibonacciUntil(n-1).

Using our example, if n were to equal 7, 
array.push(array[5] + array[4]) from line 12 would push the previous array numbers from Fibonacci, 3 + 5, and take that element and move it to the end, 
So then subsequently, 3 + 5 would move that number to the end of the array, making that element 8.

for the array[5] and array[4], those would also be called recursively again, meaning we would see
array[3] + array[2] for array[5] and 
array[2] + array[1] for array[4]. 
This would continue until the base cases are hit, and finish the Fibonacci Sequence.


*/
