/**
 * https://leetcode.com/problems/perfect-squares/
 *
 * @file 279-Perfect Squares.js
 * @author heyunfeng
 */

/**
 * 279-Perfect Squares
 *
 * @param {number} n 需要求和的数
 * @return {number}
 */
const numSquares = function (n) {
    const dp = [0];
    for (let i = 0; i <= n; i++) {
        for (let j = 1; i + j * j <= n; j++) {
            if (!dp[i + j * j]) {
                dp[i + j * j] = dp[i] + 1;
            }
            else {
                dp[i + j * j] = Math.min(dp[i + j * j], dp[i] + 1);
            }
        }
    }
    return dp[n];
};
