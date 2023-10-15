// LeetCode https://leetcode.com/problems/two-sum/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

// TC -> O(N^2)
// SC -> O(1)
var twoSum = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (target === nums[i] + nums[j]) {
        return [i, j];
      }
    }
  }
};

// TC -> O(N)
// SC -> O(N)
var twoSum = function (nums, target) {
  const obj = {};
  for (let i = 0; i < nums.length; i++) {
    const diff = target - nums[i];
    if (obj[diff] !== undefined) {
      return [obj[diff], i];
    }
    obj[nums[i]] = i;
  }
};
