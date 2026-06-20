// Problem 44: Valid Parentheses  [Medium]
// Description: Write a function isValidParentheses(str) that returns true if the string has valid, balanced parentheses, brackets, and braces.
// Example:
// Input: '()[]{}'  → Output: trueInput: '([)]'    → Output: false
// Hint: Use a stack (array). Push opening brackets, pop and compare for closing ones.


// Problem 44: Valid Parentheses  [Medium]

function isValidParentheses(str) {
  const stack = [];

  const bracketMap = {
    ')': '(',
    '}': '{',
    ']': '['
  };

  for (const char of str) {
    if (bracketMap[char]) {
      const topElement = stack.pop();

      if (topElement !== bracketMap[char]) {
        return false;
      }
    } else {
      stack.push(char);
    }
  }

  return stack.length === 0;
}


console.log(isValidParentheses('()[]{}')); 
console.log(isValidParentheses('([)]'));   
console.log(isValidParentheses('{[]}'));   
console.log(isValidParentheses('('));      