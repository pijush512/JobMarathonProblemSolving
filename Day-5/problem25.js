// Problem 25: Memoize a Function  [Medium]
// Description: Write a function memoize(fn) that caches the results of a function so repeated calls with the same input return the cached result.
// Example:
// const memoAdd = memoize(n => n + 10);memoAdd(5); // 15 (computed)memoAdd(5); // 15 (from cache)
// Hint: Use an object as a cache inside the outer function.


function memoize(fn) {
  const cache = {};
  return function(n) {
    if (n in cache) {
      return cache[n];
    }
    const result = fn(n);
    cache[n] = result;
    
    return result;
  };
}

const memoAdd = memoize(n => n + 10);

console.log(memoAdd(5)); 
console.log(memoAdd(5)); 
console.log(memoAdd(10)); 