// Problem 29: Async/Await Fetch Simulation  [Medium]
// Description: Write an async function getUserData(id) that simulates fetching user data by awaiting a Promise that resolves after 500ms with a mock user object.
// Example:
// await getUserData(1);// returns {id:1, name:'Test User'}
// Hint: Use async/await with a Promise that wraps setTimeout.

async function getUserData (id) {
  await new Promise ((resolve) => {
    setTimeout(resolve, 500);
  })

  return {
    id:id,
    name:'Test User'
  }
}

getUserData (1).then((data) => {
  console.log(data);
})
