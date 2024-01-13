# 150-most-asked-questions

Commonly asked DSA question and Improve your logic solving below problem
note:- Thanks to neetcode for Question's and roadmap [neetcode.io](https://neetcode.io/roadmap)

## Table of Contents 150 questions

- [Week1](#Week1)

## Week1

1. Two Sum https://leetcode.com/problems/two-sum/

- TC O(N)
- SC O(N)

```js
var twoSum = function (nums, target) {
  const obj = {};
  for (let i = 0; i < nums.length; i++) {
    // obj[target - nums[i]]
    if (obj[target - nums[i]] !== undefined) {
      return [obj[target - nums[i]], i];
    } else {
      obj[nums[i]] = i;
    }
  }
};
```

2. Valid Parentheses https://leetcode.com/problems/valid-parentheses/

- TC O(N)
- SC O(N)

```js
var isPalindrome = function(s) {
    let str = getValidStr(s)
    if(str.length === 1) return true
    let left = 0
    let right = str.length -1
    while(left < right){
        if(str[left] !== str[right]){
            return false
        }
        left++
        right--
    }

    return true
};

function getValidStr(str){
    let newStr = ""
    str = str.toLowerCase().replaceAll(" ","")
    for(let i = 0; i < str.length; i++){
        const charCode = str[i].charCodeAt(0)
        if(charCode >= 97 && charCode <= 122 || charCode >= 48 && charCode <= 57){
            newStr += str[i]
        }
    }
    return newStr
}
```

3. Merge two sorted list https://leetcode.com/problems/merge-two-sorted-lists/

- TC O(N)
- SC O(N)

```js
var mergeTwoLists = function (list1, list2) {
  const node = new ListNode(0);
  let curr = node;

  while (list1 && list2) {
    if (list1.val <= list2.val) {
      curr.next = list1;
      list1 = list1.next;
    } else {
      curr.next = list2;
      list2 = list2.next;
    }
    curr = curr.next;
  }
  curr.next = list1 ? list1 : list2;
  return node.next;
};
```

4. Best time to buy and sell stock https://leetcode.com/problems/best-time-to-buy-and-sell-stock/

- TC O(N)
- SC O(1)

```js
var maxProfit = function (prices) {
  let maxProfit = 0;
  let lowestPrice = prices[0];

  for (let i = 1; i < prices.length; i++) {
    if (prices[i] < lowestPrice) {
      lowestPrice = prices[i];
    } else {
      maxProfit = Math.max(maxProfit, prices[i] - lowestPrice);
    }
  }
  return maxProfit;
};
```

5. Valid Palindrome https://leetcode.com/problems/valid-palindrome/

- TC O(N)
- SC O(1)

```js
var isPalindrome = function (s) {
  let str = getValidStr(s);
  if (str.length === 1) return true;
  let left = 0;
  let right = str.length - 1;
  while (left < right) {
    if (str[left] !== str[right]) {
      return false;
    }
    left++;
    right--;
  }

  return true;
};

function getValidStr(str) {
  let newStr = "";
  str = str.toLowerCase().replaceAll(" ", "");
  for (let i = 0; i < str.length; i++) {
    const charCode = str[i].charCodeAt(0);
    if (
      (charCode >= 97 && charCode <= 122) ||
      (charCode >= 48 && charCode <= 57)
    ) {
      newStr += str[i];
    }
  }
  return newStr;
}
```

6. Invert Binary Tree https://leetcode.com/problems/invert-binary-tree/

- TC O(n)
- SC O(1)

```js
var invertTree = function (root) {
  if (!root) return null;
  const curr = root.left;
  root.left = root.right;
  root.right = curr;

  invertTree(root.left);
  invertTree(root.right);
  return root;
};
```

7. Valid Anagram https://leetcode.com/problems/valid-anagram/

- TC O(n)
- SC O(1)

```js
var isAnagram = function (s, t) {
  if (s.length !== t.length) {
    return false;
  }
  const charArr = new Array(26).fill(0);

  for (let i = 0; i < s.length; i++) {
    charArr[s[i].charCodeAt(0) - "a".charCodeAt(0)]++;
    charArr[t[i].charCodeAt(0) - "a".charCodeAt(0)]--;
  }

  for (let i = 0; i < charArr.length; i++) {
    if (charArr[i] !== 0) {
      return false;
    }
  }

  return true;
};
```

8. Binary Search https://leetcode.com/problems/binary-search/

- TC O(n)
- SC O(1)

```js
var search = function (nums, target) {
  let left = 0;
  let right = nums.length - 1;
  while (left <= right) {
    let mid = Math.round((left + right) / 2);
    if (nums[mid] === target) {
      return mid;
    } else if (nums[mid] > target) {
      right--;
    } else {
      left++;
    }
  }

  return -1;
};
```

9. Flood Fill https://leetcode.com/problems/flood-fill/

- TC O(n)
- SC O(1)

```js
var floodFill = function (image, sr, sc, color) {
  const currentColor = image[sr][sc];
  if (currentColor === color) return image;

  function helper(image, row, col, oldColor, color) {
    // error case
    if (
      row < 0 ||
      row >= image.length ||
      col < 0 ||
      col >= image[row].length ||
      image[row][col] !== oldColor
    ) {
      return;
    }
    const oldColorTemp = image[row][col];
    image[row][col] = color;
    helper(image, row + 1, col, oldColorTemp, color);
    helper(image, row - 1, col, oldColorTemp, color);
    helper(image, row, col + 1, oldColorTemp, color);
    helper(image, row, col - 1, oldColorTemp, color);
  }
  helper(image, sr, sc, image[sr][sc], color);
  return image;
};
```

10. LCA https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/submissions/

- TC O(log n)
- SC O(1)

```js
var lowestCommonAncestor = function (root, p, q) {
  let curr = root;
  while (curr) {
    if (p.val > curr.val && q.val > curr.val) {
      curr = curr.right;
    } else if (p.val < curr.val && q.val < curr.val) {
      curr = curr.left;
    } else {
      return curr;
    }
  }
};
```
