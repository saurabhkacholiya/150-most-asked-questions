// leetCode https://leetcode.com/problems/generate-parentheses/

const helper = (n, result = [], path = [], open = 0, close = 0) => {
  if (path.length === 2 * n) {
    return result.push(path.join(""));
  }

  if (open < n) {
    path.push("(");
    helper(n, result, path, open + 1, close);
    path.pop();
  }

  if (close < open) {
    path.push(")");
    helper(n, result, path, open, close + 1);
    path.pop();
  }

  return result;
};

var generateParenthesis = (n) => helper(n);
