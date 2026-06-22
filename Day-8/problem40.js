// Problem 40: Group Array by Property  [Medium]
// Description: Write a function groupBy(arr, key) that groups an array of objects by a given property key.
// Example:
// groupBy([{type:'fruit',name:'apple'},{type:'veg',name:'carrot'},{type:'fruit',name:'mango'}], 'type')// {fruit: [...], veg: [...]}
// Hint: Use reduce() and build an object where each key maps to an array.


// Problem 40: Group Array by Property  [Medium]

function groupBy(arr, key) {
  return arr.reduce((accumulator, currentObj) => {
    const groupKey = currentObj[key];

    if (!accumulator[groupKey]) {
      accumulator[groupKey] = [];
    }

    accumulator[groupKey].push(currentObj);

    return accumulator;
  }, {}); 
}


const data = [
  { type: 'fruit', name: 'apple' },
  { type: 'veg', name: 'carrot' },
  { type: 'fruit', name: 'mango' }
];

console.log(groupBy(data, 'type'));
