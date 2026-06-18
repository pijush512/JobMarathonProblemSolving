// Problem 42: Check Anagram  [Easy]
// Description: Write a function isAnagram(str1, str2) that returns true if the two strings are anagrams of each other.
// Example:
// Input: 'listen', 'silent'  → Output: trueInput: 'hello', 'world'   → Output: false
// Hint: Sort both strings and compare, or use a character frequency map.


function isAnagram (str1, str2) {
  if(str1.length !== str2.length) {
    return false;
  }
  const cloneStr1 = str1.toLowerCase().split("").sort().join("");
  const cloneStr2 = str2.toLowerCase().split("").sort().join("");

  const anagram = cloneStr1 === cloneStr2;
  return anagram;
};

console.log(isAnagram ("listen", "silent"));
console.log(isAnagram ("hello", "world"));