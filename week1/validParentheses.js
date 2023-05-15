//5.15.2023

// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Every close bracket has a corresponding open bracket of the same type.
 

// Example 1:
// Input: s = "()"
// Output: true

// Example 2:
// Input: s = "()[]{}"
// Output: true

// Example 3:
// Input: s = "(]"
// Output: false


const isValid = (string) => {
    // Initialize an empty stack
    const stack = [];
    
    // Loop through each character of the input string
    for (let i = 0; i < string.length; i++) {
      const char = string[i];
      
      // If the character is an opening bracket, push it onto the stack
      if (char === '(' || char === '{' || char === '[') {
        stack.push(char);
      } // If the character is a closing bracket, pop the top element from the stack
       else if (char === ')' && stack[stack.length - 1] === '(') {
        stack.pop();
      }  else if (char === '}' && stack[stack.length - 1] === '{') {
        stack.pop();
      }  else if (char === ']' && stack[stack.length - 1] === '[') {
           console.log('fire')
  
        stack.pop();
      }
      // If the character is not a valid bracket or the brackets don't match, return false
      else {
        return false;
      }
    }
    
    // If the stack is empty, all brackets are matched and the input string is valid
    return stack.length === 0;
  };