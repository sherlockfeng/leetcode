/**
 * https://leetcode.com/problems/coin-change/
 *
 * @file 322-Coin Change.js
 * @author heyunfeng
 */

/**
 * Coin Change
 *
 * @param {number[]} coins 硬币价格
 * @param {number} amount 总价
 * @return {number}
 */
const coinChange = function (coins, amount) {
    if (amount < 1) {
        return 0;
    }

    const find = (coins, rem, count) => {
        if (rem < 0) {
            return -1;
        }
        if (rem === 0) {
            return 0;
        }
        if (count[rem]) {
            return count[rem];
        }
        let min = Number.MAX_SAFE_INTEGER;
        for (let i = 0; i < coins.length; i++) {
            const res = find(coins, rem - coins[i], count);
            if (res >= 0 && res < min) {
                min = 1 + res;
            }
        }
        count[rem] = (min === Number.MAX_SAFE_INTEGER) ? -1 : min;
        return count[rem];
    };

    return find(coins, amount, []);
};

/**
 * Coin Change
 *
 * @param {number[]} coins 硬币价格
 * @param {number} amount 总价
 * @return {number}
 */
const coinChange = function (coins, amount) {
    if (amount < 1) {
        return 0;
    }

    const dp = [0];

    for (let i = 1; i <= amount; i++) {
        if (!dp[i]) {
            dp[i] = amount + 1;
        }
        for (let j = 0; j < coins.length; j++) {
            const data = coins[j];
            if (i - data >= 0) {
                dp[i] = Math.min(dp[i], dp[i - data] + 1);
            }
        }
    }
    return dp[amount] > amount ? -1 : dp[amount];
};
