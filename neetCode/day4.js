// TC O(N) and SC O(N)
var longestConsecutiveWithSet = function (arr) {
  let maxScore = 0;

  const numSet = new Set(arr);

  // O(N) time
  for (const num of [...numSet]) {
    const prevNum = num - 1;
    if (numSet.has(prevNum)) continue;
    // this is for what??
    // the previous number is present in the counting sequence
    // and later should not calculate the score again for it thats why
    let currNum = num;

    // Making score as 1
    // We only enter the while loop when num is the start of a new consecutive sequence.
    // Since num itself is part of this sequence, we initialize score with 1.
    let score = 1;
    // const isStreak = nums[i] === ((nums[i - 1]) + 1) A important function
    const isStreak = () => numSet.has(currNum + 1);
    while (isStreak()) {
      // O(N)
      currNum++;
      score++;
    }
    maxScore = Math.max(maxScore, score);
  }

  console.log("maxScore is ", maxScore);
};

const arr = [0, 3, 7, 2, 5, 8, 4, 6, 0, 1];

// TC O(N log N) // SC O(1)
var longestConsecutiveWithSorting = function (nums) {
  nums.sort((a, b) => a - b);
  console.log("nums is ", nums);
  let maxScore = 0;
  let score = 1;
  for (let i = 1; i < nums.length; i++) {
    // TC O(N)
    if (nums[i] === nums[i - 1]) {
      continue;
    }
    const isStreak = nums[i] === nums[i - 1] + 1;
    console.log("isStrea ", isStreak);
    if (isStreak) {
      score++;
    }
    maxScore = Math.max(score, maxScore);
    score = 1;
  }
  console.log("maxScore is ", maxScore);
  return maxScore;
};

longestConsecutive([9, 1, 4, 7, 3, -1, 0, 5, 8, -1, 6]);
