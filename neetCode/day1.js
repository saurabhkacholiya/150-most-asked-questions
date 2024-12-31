// TC -> O(N)
// SC -> O(N)
// pattern: hash table
var containsDuplicate = function (nums) {
  const obj = {};

  for (let i = 0; i < nums.length; i++) {
    if (obj[nums[i]]) {
      return true;
    } else {
      obj[nums[i]] = true;
    }
  }
  return false;
};

// SC O(N)
// TC O(N * log N)
// why this is space O(N) ?? Maybe split is creating new array
var isAnagramSubOptimal = function (s, t) {
  return s.split("").sort().join("") === t.split("").sort().join("");
};

// SC O(1)
// TC O(N)
// ASCII code
// mistake i made array first to 122 i needed to be 123 because z will be at 122 and if create array
// of 122 the last value i can insert will be at 121 not on 122 that why make array of 123 size
// Most lowercase English letters (a to z) have ASCII values in the range 97 to 122.
// pattern frequency counting
const isAnagram = (s, t) => {
  if (s.length !== t.length) return false;
  const arr = new Array(123).fill(0);
  for (let i = 0; i < s.length; i++) {
    arr[s[i].charCodeAt(0)] += 1;
    arr[t[i].charCodeAt(0)] -= 1;
  }
  return arr.every((val) => val === 0);
};

// twoSum

// SC O(n)
// TC O(n)
// The hash map approach you've already implemented is optimal in terms of
// both time and space complexity (O(N) time and O(N) space).

// SC O(1)
// TC O(N * logN)
// The two-pointer method could work in O(N) time and O(1) space but only
// if the array is sorted, and sorting would take O(N log N),
// which is generally less efficient for unsorted arrays. Therefore,
// your current solution is the most efficient in most practical cases.

// space O(N)
// time O(N)
var twoSum = function (nums, target) {
  const map = {};
  for (let i = 0; i < nums.length; i++) {
    if (map[target - nums[i]] !== undefined) {
      return [map[target - nums[i]], i];
    } else {
      map[nums[i]] = i;
    }
  }
};

// sc O(N * K) where N total number of string and K is length of a string
// TC O(N * K * log K) -> K * logK is for sorting and N is looping through eaNch array
// n * K * log K is each string into that string is getting sorted
var groupAnagrams = function (strs) {
  const map = {};

  for (let i = 0; i < strs.length; i++) {
    const sortedValue = strs[i].split("").sort().join("");
    if (map[sortedValue]) {
      map[sortedValue].push(strs[i]);
    } else {
      map[sortedValue] = [strs[i]];
    }
  }

  return Object.values(map);
};

// TC O(N * K) N is the number of strings and K is the maximum length of a string.
// SC O(N * K)
// to save extra ***log K*** on each string we will use Frequency counter
// pattern: frequency counter
const groupAnagramsFrequencyCounter = (strs) => {
  const map = {};
  for (let i = 0; i < strs.length; i++) {
    const fc = new Array(26).fill(0); //O(1) space
    for (let str of strs[i]) {
      fc[str.charCodeAt(0) - "a".charCodeAt(0)]++; // this also important
    }
    const key = fc.join("#");
    if (map[key]) {
      map[key].push(strs[i]);
    } else {
      map[key] = [strs[i]];
    }
  }

  return Object.values(map);
};
