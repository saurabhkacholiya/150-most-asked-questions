const getSpaceRemoved = (s) => {
  return s
    .trim()
    .toLowerCase()
    .split("")
    .filter((item) => {
      if (
        (item.charCodeAt(0) >= 97 && item.charCodeAt(0) <= 122) ||
        (item.charCodeAt(0) >= 48 && item.charCodeAt(0) <= 57)
      ) {
        return true;
      } else {
        false;
      }
    })
    .join("");
};

// TC -> O(N)
// SC -> O(N)
var isPalindrome = function (s) {
  // TC -> O(N)
  // SC -> O(N)
  const str = getSpaceRemoved(s);
  let start = 0;
  let end = str.length - 1;
  while (start < end) {
    if (str[start] === str[end]) {
      start++;
      end--;
    } else {
      return false;
    }
  }

  return true;
};

// The while loop processes the array in one linear pass,
// adjusting the left and right pointers based on the sum of numbers[left] and numbers[right].

// TC -> O(N)
// SC -> O(1)
var twoSum = function (numbers, target) {
  let left = 0;
  let right = numbers.length - 1;

  while (left < right) {
    if (target === numbers[left] + numbers[right]) {
      return [left + 1, right + 1];
    } else if (target > numbers[left] + numbers[right]) {
      left++;
    } else {
      right--;
    }
  }
};

// Skip Duplicates: Ensures that we don’t add duplicate triplets to result.
// Two-Pointer Technique: Efficiently narrows down potential matches for the sum == 0
// TC O(N^2)
// SC O(N)

var threeSum = function (nums) {
  nums.sort((a, b) => a - b);
  const result = [];
  for (let i = 0; i < nums.length - 2; i++) {
    // below line avoids duplicate in nums[a] where we are check for the previous value of i
    if (i > 0 && nums[i] === nums[i - 1]) continue;
    let left = i + 1;
    let right = nums.length - 1;

    while (left < right) {
      const currentSum = nums[i] + nums[left] + nums[right];
      if (currentSum === 0) {
        result.push([nums[i], nums[left], nums[right]]);
        // below line avoids duplicate in nums[b]
        while (left < right && nums[left] === nums[left + 1]) left++;
        // below line avoids duplicate in nums[c]
        while (left < right && nums[right] === nums[right - 1]) right--;
        left++;
        right--;
      } else if (currentSum > 0) {
        right--;
      } else {
        left++;
      }
    }
  }
  return result;
};
