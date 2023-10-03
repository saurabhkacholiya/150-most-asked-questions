// LeetCode https://leetcode.com/problems/largest-rectangle-in-histogram/

// time O(N)
// Space O(N)
const getValue = (heights) => {
  const stack = [];
  let maxArea = 0;

  for (let i = 0; i < heights.length; i++) {
    let index = i;
    while (stack.length && heights[i] < stack[stack.length - 1][1]) {
      const [_index, _height] = stack.pop();
      const width = i - _index;
      const area = width * _height;
      maxArea = Math.max(maxArea, area);
      index = _index;
    }

    stack.push([index, heights[i]]);
  }

  return { stack, maxArea };
};

var largestRectangleArea = function (heights) {
  let { stack, maxArea } = getValue(heights);

  while (stack.length) {
    const [_index, _height] = stack.pop();
    const width = heights.length - _index;
    const area = width * _height;
    maxArea = Math.max(maxArea, area);
  }

  return maxArea;
};
