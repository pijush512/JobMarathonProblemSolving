// Problem 6: Reverse a String  [Easy]
// Description: Write a function reverseString(str) that returns the reverse of a given string.
// Example:
// Input: 'hello'   → Output: 'olleh'Input: 'world'   → Output: 'dlrow'
// Hint: Use split(''), reverse(), and join('').


function reverseString (str) {
  let strSplit = str.split('');
  let strreverse = strSplit.reverse();
  let result = strreverse.join('');

  return result;
}

console.log(reverseString ("Hello"));
              