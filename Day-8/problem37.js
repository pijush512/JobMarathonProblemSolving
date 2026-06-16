// Problem 37: Retry a Promise  [Medium]
// Description: Write a function retry(fn, times) that calls an async function fn up to times times, retrying if it throws an error. Resolves on first success, rejects after all attempts fail.
// Example:
// await retry(unstableFetch, 3);// Tries up to 3 times before failing
// Hint: Use a loop with try/catch; only throw after all retries are exhausted.

// Problem 37: Retry a Promise  [Medium]

async function retry(fn, times) {
  for (let i = 1; i <= times; i++) {
    try {
      return await fn();
    } catch (error) {
      if (i === times) {
        throw error;
      }
      console.log(`Attempt ${i} failed. Retrying...`);
    }
  }
}

let count = 0;
const unstableFetch = () => {
  return new Promise((resolve, reject) => {
    count++;
    if (count < 3) {
      reject("Network Error!");
    } else {
      resolve("Data fetched successfully!");
    }
  });
};

(async () => {
  try {
    console.log("Starting retry process...");
    const result = await retry(unstableFetch, 3); // ৩ বার ট্রাই করতে দেওয়া হলো
    console.log("Final Result:", result);
  } catch (err) {
    console.error("All attempts failed. Error:", err);
  }
})();

