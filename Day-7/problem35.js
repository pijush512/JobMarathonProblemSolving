// Problem 35: Implement Array.prototype.map from Scratch  [Medium]
// Description: Write a function myMap(arr, callback) that replicates the behavior of Array.prototype.map without using the built-in map().
// Example:
// myMap([1,2,3], x => x * 2);// Output: [2, 4, 6]
// Hint: Loop through the array, apply the callback to each element, push results to a new array.


// Problem 35: Implement Array.prototype.map from Scratch  [Medium]

function myMap (arr, callback) {
  const result = [];

  for (let i = 0; i < arr.length; i++) {
    const newValue = callback(arr[i], i, arr); 
    result.push(newValue); 
  }

  return result; 
}

const nums = [1, 2, 3];
const doubled = myMap(nums, x => x * 2);

console.log("Original Array:", nums);  
console.log("Transformed Array:", doubled); 