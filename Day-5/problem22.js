// Problem 22: Fibonacci Sequence  [Easy]
// Description: Write a function fibonacci(n) that returns the nth number in the Fibonacci sequence.
// Example:
// Input: 6  → Output: 8 (0,1,1,2,3,5,8...)
// Hint: Try both iterative and recursive approaches.

function fibonacci(n) {
  if(n <= 1){
    return n;
  }
  let fib = [0, 1];

  for( let i = 2; i <= n; i++) {
    fib[i] = fib[i-1] + fib[i-2];
  
  }
    return fib[n];
}

console.log(fibonacci(6));
