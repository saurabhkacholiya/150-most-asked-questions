// LeetCode https://leetcode.com/problems/valid-anagram/description/

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

// TC -> O(n log n)
// SC -> O(n)
var isAnagram = function (s, t) {
  if (s.length !== t.length) {
    return false;
  }

  const sortedS = s.split("").sort();
  const sortedT = t.split("").sort();

  for (let i = 0; i < sortedS.length; i++) {
    if (sortedS[i] !== sortedT[i]) {
      return false;
    }
  }

  return true;
};

// TC -> O(n)
// SC -> O(1)
var isAnagram = function (s, t) {
  if (s.length !== t.length) {
    return false;
  }

  var freq = new Array(26).fill(0);
  for (var i = 0; i < s.length; i++) {
    freq[s.charCodeAt(i) - "a".charCodeAt(0)]++;
    freq[t.charCodeAt(i) - "a".charCodeAt(0)]--;
  }

  console.log("Freq is ", freq);

  for (var i = 0; i < freq.length; i++) {
    if (freq[i] !== 0) {
      return false;
    }
  }

  return true;
};

console.log("isAnagram is ", isAnagram("ABC", "ABC"));
