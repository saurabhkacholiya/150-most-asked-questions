// find the minimum length subArray where the sum is greater than or equal to the
// target. assume all value are positive

const arr = [2, 3, 1, 2, 4, 3, 6];

const findMinimumSubArray = (arr, sum) => {
  let total = 0;
  let left = 0;
  let length = Infinity;

  for (let right = 0; right < arr.length; right++) {
    total += arr[right];
    while (total >= sum) {
      length = Math.min(length, right - left + 1);
      total -= arr[left];
      left += 1;
    }
  }

  return length === Infinity ? 0 : length;
};

console.log("O(n)", findMinimumSubArray(arr, 6));
