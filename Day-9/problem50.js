// Problem 45: Binary Search  [Medium]
// Description: Write a function binarySearch(arr, target) that searches a sorted array and returns the index of the target, or -1 if not found.
// Example:
// Input: [1,3,5,7,9], target=7  → Output: 3
// Hint: Use left and right pointers; check the middle element each iteration.


// Problem 45: Binary Search  [Medium]

function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {

    let mid = Math.floor((left + right) / 2);

    if (arr[mid] === target) {
      return mid;
    }

    if (arr[mid] < target) {
      left = mid + 1;
    } 

    else {
      right = mid - 1;
    }
  }

  return -1;
}

const nums = [1, 3, 5, 7, 9];
const target = 7;

console.log(binarySearch(nums, target)); 

const targetNotFound = 4;
console.log(binarySearch(nums, targetNotFound));