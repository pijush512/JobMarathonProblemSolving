// Problem 19: Invert an Object  [Easy]
// Description: Write a function invertObject(obj) that swaps the keys and values of an object.
// Example:
// Input: {a: 1, b: 2}  → Output: {1: 'a', 2: 'b'}
// Hint: Use Object.entries() and reduce().

function invertObject (obj) {
  let inverted = {};

  for(let key in obj){
    let value = obj[key];
    inverted[value] = key;
  }
  return inverted;
}

let result = invertObject({ a: 1, b: 2 });

let outputParts = [];
for (let key in result) {
  outputParts.push(`${key}: '${result[key]}'`); 
}

console.log(`{ ${outputParts.join(', ')} }`);