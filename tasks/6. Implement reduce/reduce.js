export function Reduce(array, reducer, initialValue) {
  var accumulator = initialValue;
  // Loop through array
  for(var i = 0; i < array.length; i++){
    accumulator = reducer(accumulator, array[i]);
  }
  return accumulator;
}

/*

  A reducer function is the sum between the accumulator and the current value. When you pass the reducer function into the Reduce() method, it will loop through each number
  in the array, and add it into the accumulator. This subsequently becomes the new accumulator for the next iteration of the loop. 
  This will continue until the end of the array, finally returning the accumulator. 

  First, we initialized the accumulator variable equal to the initialValue from the Reduce(array, reducer, initialValue) function.

  Secondly, we looped through the array elements

  Then, the reducer function is called with the accumulator, and current element as arguments.

  Finally, after going through every element, the accumulator is returned, successfully reducing to a single value.

*/