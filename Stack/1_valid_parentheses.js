// leetCode link https://leetcode.com/problems/valid-parentheses/

var isValid = function (s) {
  const stack = [];

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(" || s[i] === "{" || s[i] === "[") {
      stack.push(s[i]);
    } else {
      const lastElm = stack.lenght !== 0 ? stack.pop() : false;
      if (s[i] === "]" && lastElm !== "[") return false;
      if (s[i] === "}" && lastElm !== "{") return false;
      if (s[i] === ")" && lastElm !== "(") return false;
    }
  }

  return stack.length === 0;
};
