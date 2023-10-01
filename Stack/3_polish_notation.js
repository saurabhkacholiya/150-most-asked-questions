// leetCode https://leetcode.com/problems/evaluate-reverse-polish-notation/

var evalRPN = function (tokens) {
  const stack = [];
  for (let i = 0; i < tokens.length; i++) {
    if (
      tokens[i] !== "+" &&
      tokens[i] !== "-" &&
      tokens[i] !== "/" &&
      tokens[i] !== "*"
    ) {
      stack.push(Number(tokens[i]));
    } else {
      const last = stack.pop();
      const secondLast = stack.pop();
      let ans = 0;

      if (tokens[i] === "+") {
        ans = secondLast + last;
      }

      if (tokens[i] === "-") {
        ans = secondLast - last;
      }

      if (tokens[i] === "*") {
        ans = secondLast * last;
      }

      if (tokens[i] === "/") {
        ans = Math.trunc(secondLast / last);
      }

      stack.push(ans);
    }
  }

  return stack.pop();
};
