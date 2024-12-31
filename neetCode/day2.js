const topArr = [1, 1, 1, 2, 2, 3, 3];

// need to revise more
// pattern: bucket sort in this the index of array is total number of
// SC -> O(N)
// TC -> O(N)
const topKFrequent = (arr, k) => {
  const map = {};
  const result = [];
  const occurrenceArr = new Array(arr.length + 1);

  for (let i = 0; i < arr.length; i++) {
    if (map[arr[i]] !== undefined) {
      map[arr[i]] += 1;
    } else {
      map[arr[i]] = 1;
    }
  }

  for (const key in map) {
    // map[key] -> Total no of occurrence which we will use as index
    // key -> is the value that occurred
    if (occurrenceArr[map[key]] !== undefined) {
      occurrenceArr[map[key]] = [...occurrenceArr[map[key]], Number(key)];
    } else {
      occurrenceArr[map[key]] = [Number(key)];
    }
  }

  for (let i = occurrenceArr.length - 1; i >= 0; i--) {
    if (k > 0) {
      occurrenceArr[i]?.forEach((item) => {
        if (k > 0) {
          // this i added
          result.push(item);
          k--;
        }
      });
    }
  }
  console.log(result);
};

topKFrequent(topArr, 2);

class Solution {
  encode(strs) {
    let result = "";
    for (const str of strs) {
      result += `${str.length}#${str}`;
    }
    return result;
  }

  decode(str) {
    const result = [];
    let i = 0;
    while (i < str.length) {
      const pos = str.indexOf("#", i);
      // -> will return you position of string
      // and second one is from where to lock for
      const len = parseInt(str.slice(i, pos));
      i = pos + 1;
      // as we only added `number` and `#` value so we will start
      // iteration from this pre added values
      const st = str.slice(i, i + len);
      result.push(st);
      i += len;
    }
    return result;
  }
}

const sl = new Solution();
sl.encode(["saurabh", "ramesh", "kacholiya"]);
sl.decode("7#saurabh6#ramesh9#kacholiya");

// SC -> O(N)
// TC -> O(N)
// Pattern : PreFix and post fix
const productExceptSelfNum = [1, 2, 3, 4];

const productExceptSelf = function (num) {
  const preFix = [];
  const postFix = [];
  const result = [];

  preFix[0] = num[0];
  postFix[num.length - 1] = num[num.length - 1];

  for (let i = 1; i < num.length; ++i) {
    preFix[i] = preFix[i - 1] * num[i];
  }

  for (let i = num.length - 2; i >= 0; i--) {
    postFix[i] = postFix[i + 1] * num[i];
  }

  for (let i = 0; i < num.length; i++) {
    const preFixValue = preFix[i - 1] ? preFix[i - 1] : 1;
    const postFixValue = postFix[i + 1] ? postFix[i + 1] : 1;
    result[i] = preFixValue * postFixValue;
  }

  console.log("result is ", result);
};

productExceptSelf(productExceptSelfNum);

// TODO  need to understand this solution

// const nums = [1, 2, 3, 4];
// function productExceptSelf(nums) {
//   const result = [];
//   let prefix = 1;
//   let postfix = 1;

//   for (let i = 0; i < nums.length; i++) {
//     result[i] = prefix;
//     prefix *= nums[i];
//   }
//   for (let i = nums.length - 2; i >= 0; i--) {
//     postfix *= nums[i + 1];
//     result[i] *= postfix;
//   }

//   return result;
// }
