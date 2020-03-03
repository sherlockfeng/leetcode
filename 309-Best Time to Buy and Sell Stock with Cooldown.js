/**
 * https://leetcode.com/problems/best-time-to-buy-and-sell-stock-with-cooldown/
 *
 * @file 309-Best Time to Buy and Sell Stock with Cooldown.js
 * @author heyunfeng
 */

/**
 * Time to Buy and Sell Stock with Cooldown
 *
 * @param {number[]} prices 股票价格
 * @return {number}
 */
const maxProfit = function (prices) {
    const len = prices.length;
    if (!len) {
        return 0;
    }
    const sells = [0];
    const buys = [-prices[0]];
    let max = 0;

    for (let i = 1; i < len; i++) {
        const delta = prices[i] - prices[i - 1];
        sells[i] = Math.max(buys[i - 1] + prices[i], sells[i - 1] + delta);
        if (i === 1) {
            buys[i] = buys[0] - delta;
        }
        else {
            buys[i] = Math.max(sells[i - 2] - prices[i], buys[i - 1] - delta);
        }
        if (sells[i] > max) {
            max = sells[i];
        }
    }

    return max;
};
