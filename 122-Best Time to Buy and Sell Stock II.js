/**
 * @file 122-Best Time to Buy and Sell Stock II.js
 * @author heyunfeng
 */

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    let i = 0;
    let low = 0;
    let high = 0;
    let profit = 0;
    while (i < prices.length) {
        while (i < prices.length - 1 && prices[i] > prices[i + 1]) {
            i++;
        }
        low = prices[i];

        while (i < prices.length - 1 && prices[i] < prices[i + 1]) {
            i++;
        }
        high = prices[i];
        profit += high - low;
        i++;
    }
    return profit;
};
