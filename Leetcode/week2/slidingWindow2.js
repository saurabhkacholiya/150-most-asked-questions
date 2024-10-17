// Find longest subArray with same value in each position

const arr = [4, 2, 2, 3, 3, 3];

const findLongestSubArrayWithSameValue = (arr, k) => {
  let length = 0;
  let left = 0;
  for (let right = 0; right < arr.length; right++) {
    if (arr[left] !== arr[right]) {
      left = right;
    }
    length = Math.max(length, right - left + 1);
  }
  return length;
};

console.log("O(n)", findLongestSubArrayWithSameValue(arr, 3));
