
// Problem 39: Flatten Object (Deep)  [Medium]
// Description: Write a function flattenObject(obj) that takes a deeply nested object and returns a flat object with dot-notation keys.
// Example:
// Input: {a: {b: {c: 1}}}Output: {'a.b.c': 1}
// Hint: Use recursion; build the key by joining parent keys with dots.



// Problem 39: Flatten Object (Deep)  [Medium]

function flattenObject(obj) {
  const result = {};
  function recurse(currentObj, prefix = "") {
    for (const key in currentObj) {
      if (currentObj.hasOwnProperty(key)) {
        const newKey = prefix ? `${prefix}.${key}` : key;

        if (typeof currentObj[key] === 'object' && currentObj[key] !== null && !Array.isArray(currentObj[key])) {
          recurse(currentObj[key], newKey);
        } else {
          result[newKey] = currentObj[key];
        }
      }
    }
  }

  recurse(obj);

  return result;
}

const nestedObj = {
  a: {
    b: {
      c: 1
    },
    d: 2
  },
  e: 3
};

console.log(flattenObject(nestedObj)); 
