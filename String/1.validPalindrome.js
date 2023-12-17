var isPalindrome = function (s) {
  let str = getValidStr(s);
  if (str.length === 1) return true;
  let left = 0;
  let right = str.length - 1;
  while (left < right) {
    if (str[left] !== str[right]) {
      return false;
    }
    left++;
    right--;
  }

  return true;
};

function getValidStr(str) {
  let newStr = "";
  str = str.toLowerCase().replaceAll(" ", "");
  for (let i = 0; i < str.length; i++) {
    const charCode = str[i].charCodeAt(0);
    if (
      (charCode >= 97 && charCode <= 122) ||
      (charCode >= 48 && charCode <= 57)
    ) {
      newStr += str[i];
    }
  }
  return newStr;
}
