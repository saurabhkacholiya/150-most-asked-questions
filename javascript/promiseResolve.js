// ******************************************
// Custom Implementation of Promise.resolve
// ******************************************

function promiseResolve(value) {
  if (value instanceof Promise) {
    // If the value is already a promise, return it as is
    return value;
  }
  // Otherwise, resolve with the value
  return new Promise((res) => res(value));
}
