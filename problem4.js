// Problem 4: Celsius to Fahrenheit  [Easy]
// Description: Write a function toFahrenheit(celsius) that converts a Celsius temperature to Fahrenheit.
// Example:
// Input: 0   → Output: 32Input: 100 → Output: 212
// Hint: Formula: (C × 9/5) + 32


function toFahrenheit (celsius) {
  let result = (celsius * 9/5) + 32;
  return result;
}

console.log(toFahrenheit (100))