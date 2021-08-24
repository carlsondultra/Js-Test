export function areParenthesesBalanced(inputString) {
  // Declaring variables
  var stack = [];
    var map = {
        '(': ')'
    }
    //Looping through the inputString
    for (var i = 0; i < inputString.length; i++) {

        // If character is an opening parentheses add it to the stack
        if (inputString[i] === '(') {
            stack.push(inputString[i]);
        }
        // If the character is a closing parentheses, pop from the stack, which will also reduce the length of the stack each time a closing parentheses is encountered.
        else {
            var last = stack.pop();

            // If the popped element from the stack, which is the last opening parentheses doesn’t match the corresponding closing parentheses in the map, then return false
            if (inputString[i] !== map[last]) {return false};
        }
    }

    // Once for loop is complete, at the end, if the stack is not empty then return false
        if (stack.length !== 0) {return false};

    return true;
}

/*
  This program uses a stack variable (array), and loops through the inputString.
  If an opening parenthesis is encountered, add it to the array.
  If the character is not an opening parenthesis, then create a variable called "last" and pop it from the stack.
  If the current element (inputStringp[i]) does not match the corresponding closing parenthesis (map[last]), return false.
  Once the loop is finished, if the stack still has elements in it, return false, otherwise, return true;
*/