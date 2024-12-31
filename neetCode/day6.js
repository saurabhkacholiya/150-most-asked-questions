// Container With Most Water

// TC -> O(N^2)
// SC -> O(1)
var maxArea = function (height) {
  let maxWaterContainer = 0;

  for (let i = 0; i < height.length; i++) {
    for (let j = i + 1; j < height.length; j++) {
      const minHeight = Math.min(height[i], height[j]);
      // calculate min height
      // also calculate the distance from the loop started and that we will get from
      // this i am proud of myself i am able to think (j - i) logic and
      //   why answer was coming as 56 before this code
      const waterTrapped = minHeight * (j - i);
      maxWaterContainer = Math.max(maxWaterContainer, waterTrapped);
    }
  }

  return maxWaterContainer;
};

// TC -> O(N)
// SC -> O(1)
// this is also i am very proud i am able to get the thinking with very little hint
// and able to solve the problem
var maxAreaOptimized = function (height) {
  console.log("i am ");
  let left = 0;
  let right = height.length - 1;
  let maxWaterContained = 0;
  console.log(left, right);
  while (left < right) {
    console.log("here");
    const minHeight = Math.min(height[left], height[right]);
    maxWaterContained = Math.max(maxWaterContained, minHeight * (right - left));
    if (height[left] < height[right]) {
      left++;
    } else {
      right--;
    }
  }
  return maxWaterContained;
};

maxAreaOptimized([1, 8, 6, 2, 5, 4, 8, 3, 7]);
