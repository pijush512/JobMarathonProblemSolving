// Problem 32: Throttle Function  [Medium]
// Description: Write a throttle(fn, limit) function that ensures fn is called at most once every limit milliseconds.
// Example:
// const throttledScroll = throttle(onScroll, 200);// Fires at most once every 200ms during scroll
// Hint: Track the last call time with Date.now().

function throttle (fn, limit) {
  let lastTime = 0;

  return function (...args) {
    const now = Date.now();
    if(now - lastTime >= limit ){
      fn(...args);
      lastTime = now;
    }
  }
} 

function onScroll () {
  console.log("Scroll event fired at:", new Date().toLocaleTimeString());
}

const throttledScroll = throttle(onScroll, 200);

const interval = setInterval(() => {
  throttledScroll();
}, 20);

setTimeout(() => {
  clearInterval(interval);
  console.log("Testing stopped.");
}, 1000);