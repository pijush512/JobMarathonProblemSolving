// Problem 20: Find Duplicate Values in Array of Objects  [Medium]
// Description: Given an array of objects, write a function findDuplicateNames(arr) that returns names that appear more than once.
// Example:
// Input: [{name:'Ali'},{name:'Sara'},{name:'Ali'}]Output: ['Ali']
// Hint: Use a frequency map (object) to count occurrences.


function findDuplicateNames(arr) {
  let counts = {};       
  let duplicates = [];  

  for (let item of arr) {
    let name = item.name;
  
    if (counts[name]) {
      counts[name] += 1;
    } else {
      counts[name] = 1;
    }
  }

  for (let name in counts) {
    if (counts[name] > 1) {
      duplicates.push(name);
    }
  }

  return duplicates; 
}


console.log(findDuplicateNames([{name:'Ali'}, {name:'Sara'}, {name:'Ali'}]));
