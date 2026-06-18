// Problem 48: Rotate an Array  [Medium]
// Description: Write a function rotateArray(arr, k) that rotates an array to the right by k steps.
// Example:
// Input: [1,2,3,4,5], k=2Output: [4,5,1,2,3]
// Hint: Use slice and concat, or reverse the whole array then parts.

// Problem 48: Rotate an Array  [Medium]

function rotateArray(arr, k) {
  const n = arr.length;
  
  if (n === 0 || k === 0) return arr;

  k = k % n;
  const rightPart = arr.slice(-k);

  const leftPart = arr.slice(0, n - k);

  return rightPart.concat(leftPart);
};

const nums = [1, 2, 3, 4, 5];
const k = 2;

console.log(rotateArray(nums, k)); 