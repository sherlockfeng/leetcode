/**
 * https://leetcode.com/problems/integer-break/
 *
 * @file 343-Integer Break.js
 * @author heyunfeng
 */

/**
 * 343-Integer Break
 *
 * @param {number} n 总值
 * @return {number}
 */
const integerBreak = function (n) {
    const dp = [0, 1, 1];
    for (let i = 3; i <= n; i++) {
        dp[i] = 0;
        for (let j = 1; j < i; j++) {
            dp[i] = Math.max(dp[i], j * dp[i - j], j * (i - j));
        }
    }
    return dp[n];
};

/**
 * 343-Integer Break
 *
 * @param {number} n 总值
 * @return {number}
 */
const integerBreak = function (n) {
    if (n === 2 || n === 3) {
        return n - 1;
    }
    let res = 1;
    while (n > 4) {
        res *= 3;
        n -= 3;
    }
    return res * n;
};
