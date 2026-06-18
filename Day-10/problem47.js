// Problem 47: Longest Word in a Sentence  [Easy]
// Description: Write a function longestWord(sentence) that returns the longest word in a sentence. If there's a tie, return the first one.
// Example:
// Input: 'The quick brown fox'Output: 'quick'
// Hint: Split the sentence and use reduce() to track the longest.

function longestWord (sentence) {
  const words = sentence.split(" ");
  let longest = "";

  for(const word of words) {
    if(word.length > longest.length) {
      longest = word;
    }
  }
  return longest;
};

console.log(longestWord ("The quick brown fox"));
console.log(longestWord ("Rejection is the best learning face in success."));