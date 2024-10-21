// Given an array return true if there are
// two elements are within a window of
// size k that are equal
// Check if array contains a pair of duplicate values,

const arr = [1, 2, 3, 2, 3, 3];

const BruteForce = (arr, windowWidth) => {
  for (let left = 0; left < arr.length; left++) {
    for (
      let right = left + 1;
      right < Math.min(arr.length, left + windowWidth);
      right++
    ) {
      if (arr[left] === arr[right]) {
        return true;
      }
    }
  }
  return false;
};

console.log("Brute", BruteForce(arr, 3));

const optimalSolution = (arr, windowWidth) => {
  const set = new Set();
  let left = 0;
  for (let right = 0; right < arr.length; right++) {
    if (right - left + 1 > windowWidth) {
      set.delete(arr[left]);
      left += 1;
    }
    if (set.has(arr[right])) {
      return true;
    }
    set.add(arr[right]);
  }
  return false;
};

console.log("Optimal", optimalSolution(arr, 1));
