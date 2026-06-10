// Problem 13: Remove Duplicates from Array  [Easy]
// Description: Write a function removeDuplicates(arr) that returns a new array with duplicate values removed.
// Example:
// Input: [1, 2, 2, 3, 3, 4]  → Output: [1, 2, 3, 4]
// Hint: Use Set or filter() with indexOf().



function removeDuplicates (arr) {
  let uniqueArray = arr.filter((element, index) => {
    return arr.indexOf(element) === index;
  });
  return uniqueArray;
}
console.log(removeDuplicates ([1, 2, 3, 4, 5 ,5,1,6,7, 7,2,]) );