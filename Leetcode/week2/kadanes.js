const arr = [4, -1, 2, -7, 3, 4];

function kadaneAlgo(arr) {
  let maxSum = arr[0]; // its a non empty array so value will always be there
  let currSum = 0;

  for (let i = 0; i < arr.length; i++) {
    currSum = Math.max(currSum, 0); // this make sure that currSum is not negative value
    currSum += arr[i]; // this add current value to currTotalSum
    maxSum = Math.max(currSum, maxSum);
  }

  console.log("maxSum is ", maxSum);
}

kadaneAlgo(arr);

// Kadanes variation of sliding window
function slidingWindow(arr) {
  let maxSum = arr[0];
  let currSum = 0;
  let maxLeft = 0;
  let maxRight = 0;
  let left = 0;

  for (let i = 0; i < arr.length; i++) {
    if (currSum < 0) {
      currSum = 0;
      left = i;
    }

    currSum += arr[i]; // add the current value

    if (currSum > maxSum) {
      maxSum = currSum;
      maxLeft = left;
      maxRight = i;
    }
  }

  console.log([maxLeft, maxRight]);
}

slidingWindow(arr);
