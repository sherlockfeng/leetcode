/**
 * https://leetcode.com/problems/guess-number-higher-or-lower-ii/
 *
 * @file 375-Guess Number Higher or Lower II.js
 * @author heyunfeng
 */

/**
 * Guess Number Higher or Lower II
 *
 * @param {number} n 范围
 * @return {number}
 */
const getMoneyAmount = function (n) {
    const dp = Array(n + 1).fill(null).map(() => Array(n + 1).fill(Infinity));
    const helper = (s, e) => {
        if (s >= e) {
            return 0;
        }
        if (dp[s][e] !== Infinity) {
            return dp[s][e];
        }
        for (let i = s; i <= e; i++) {
            dp[s][e] = Math.min(dp[s][e], i + Math.max(helper(s, i - 1), helper(i + 1, e)));
        }
        return dp[s][e];
    };
    return helper(1, n);
};

// eslint-disable-next-line
console.log(getMoneyAmount(12));
