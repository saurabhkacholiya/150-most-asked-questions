// ******************************************
// A basic implementation of how promise internally
// handle the THENABLE object
// ******************************************
const thenable = {
  then: function (resolve, reject) {
    setTimeout(() => resolve("Resolved from thenable!"), 1000);
  },
};
function PromiseResolve(value) {
  if (typeof value.then === "function") {
    // If `then` is a function,
    // treat x as a thenable and handle it accordingly
    return new Promise((resolve, reject) => {
      try {
        // Call the `then` method with `resolve`
        // and `reject` as arguments
        props.then.call(value, resolve, reject);
      } catch (error) {
        // If calling `then` throws an error,
        // reject the promise
        reject(error);
      }
    });
  }
}
// After 1 second: "Resolved from thenable!"
Promise.resolve(thenable).then((value) => {
  console.log(value);
});
