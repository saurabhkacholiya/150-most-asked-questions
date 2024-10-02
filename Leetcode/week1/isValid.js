//leetcode.com/problems/valid-parentheses/

// TC -> O(n)
// SC -> O(n)
// Pattern: Stack
var isValid = function (s) {
  const stack = [];
  const openingBracket = "({[";
  for (let i = 0; i < s.length; i++) {
    if (openingBracket.includes(s[i])) {
      stack.push(s[i]);
    } else {
      const lastBracket = stack.pop();
      if (lastBracket) {
        if (s[i] === ")" && lastBracket === "(") continue;
        if (s[i] === "}" && lastBracket === "{") continue;
        if (s[i] === "]" && lastBracket === "[") continue;
        return false;
      } else {
        return false;
      }
    }
  }

  return stack.length === 0 ? true : false;
};
