// Problem 27: Merge Arrays with Spread  [Easy]
// Description: Write a function mergeArrays(...arrays) that accepts any number of arrays and merges them into one using the spread operator.
// Example:
// Input: [1,2], [3,4], [5] Output: [1,2,3,4,5]
// Hint: Use rest parameters and spread inside reduce or flat.

// const arra = [1,2];
// const arrb = [3,4];
// const arrc = [5];

// const mergeArrays =[...arra, ...arrb, ...arrc];

// console.log(mergeArrays);

function mergeArrays (...arrays) {
  const mergeArray = arrays.flat();
  return mergeArray;
};

console.log(mergeArrays ([1, 2,], [3, 4], [5]));
console.log(mergeArrays ([1, 2,], [3, 4], [5], [6, 7, 8], [9, 10]));

