// https://leetcode.com/problems/two-sum/

// TC -> O(n)
// SC -> O(n)
// Pattern: Hash Map / Dictionary
var twoSum = function (num, target) {
  const obj = {};
  for (let i = 0; i < num.length; i++) {
    const value = target - num[i];
    if (obj[value] !== undefined) {
      return [i, obj[value]];
    } else {
      obj[num[i]] = i;
    }
  }
};
