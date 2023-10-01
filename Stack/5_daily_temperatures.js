// leetCode https://leetcode.com/problems/daily-temperatures/

const top = (arr) => {
  return arr[arr.length - 1];
};

var dailyTemperatures = function (temp) {
  const stack = [];
  const ans = new Array(temp.length).fill(0);

  const len = temp.length - 1;

  for (let i = len; i >= 0; i--) {
    while (stack.length && temp[top(stack)] <= temp[i]) {
      stack.pop();
    }

    if (stack.length) {
      ans[i] = top(stack) - i;
    }

    stack.push(i);
  }

  return ans;
};
