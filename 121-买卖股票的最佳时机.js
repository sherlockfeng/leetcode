/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    let min = Number.MAX_SAFE_INTEGER;
    let profit = 0;
    for (let i = 0; i < prices.length; i++) {
        if (prices[i] < min) {
            min = prices[i];
        } else {
            profit = Math.max(profit, prices[i] - min);
        }
    }
    return profit;
};
