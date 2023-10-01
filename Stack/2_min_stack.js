// leetCode link https://leetcode.com/problems/min-stack/

const MinStack = function () {
  this.stack = [];
};

MinStack.prototype.push = function (val) {
  this.stack.push({
    value: val,
    min: this.stack.length === 0 ? val : Math.min(val, this.getMin()),
  });
};

MinStack.prototype.pop = function () {
  this.stack.pop();
};

MinStack.prototype.top = function () {
  return this.stack[this.stack.length - 1].value;
};

// O(1)
MinStack.prototype.getMin = function () {
  return this.stack[this.stack.length - 1].min;
};
