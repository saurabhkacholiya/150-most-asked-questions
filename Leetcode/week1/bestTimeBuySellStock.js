// https://leetcode.com/problems/best-time-to-buy-and-sell-stock/description/

// TC ->
// SC ->
// Pattern: sliding window

var maxProfit = function (prices) {
  let maxProfit = 0;
  // Catch start with the 1st value
  // bcz lowestValue was initialized to zero which
  // wrong as 0 was never present in the array
  let lowestValue = prices[0];
  for (let i = 1; i < prices.length; i++) {
    // because we can only buy in one day
    // and sell in one day then we can find
    // lowest in 1st time and find the max profit in
    // 2nd iteration
    if (prices[i] < lowestValue) {
      lowestValue = prices[i];
    } else {
      maxProfit = Math.max(maxProfit, prices[i] - lowestValue);
    }
  }
  return maxProfit;
};
