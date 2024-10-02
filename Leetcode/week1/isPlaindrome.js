/**
 * @param {string} s
 * @return {boolean}
 */

const getSpaceRemoved = (s) => {
  return s
    .trim()
    .toLowerCase()
    .split("")
    .filter((item) => {
      console.log("item is ", item.charCodeAt(0));
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

// TC -> O(n)
// SC -> O(n)
// pattern -> Two pointer
var isPalindrome = function (s) {
  // creates a new space
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

console.log("isPlaindrome is ", isPalindrome("0P"));
