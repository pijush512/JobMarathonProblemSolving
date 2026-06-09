// Problem 9: Capitalize First Letter of Each Word  [Easy]
// Description: Write a function titleCase(str) that capitalizes the first letter of every word in a string.
// Example:
// Input: 'hello world'  → Output: 'Hello World'
// Hint: Use split(' '), map(), and join(' ').

function titleCase(str) {
  let words = str.split(" ");
  let capitalizedWords = words.map(word => {
    return word[0].toUpperCase() + word.slice(1);
  })
  return capitalizedWords.join(" ");


}

console.log(titleCase("hello world"));