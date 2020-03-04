/**
 * https://leetcode.com/problems/count-numbers-with-unique-digits/
 *
 * @file 357-Count Numbers with Unique Digits.js
 * @author heyunfeng
 */

/**
 * Count Numbers with Unique Digits
 *
 * @param {number} n 10的指数
 * @return {number}
 */
const countNumbersWithUniqueDigits = function (n) {
    const dp = [1, 10, 91];
    for (let i = 3; i <= n; i++) {
        let result = 9;
        for (let j = 0; j < i - 1; j++) {
            result *= (9 - j);
        }
        dp[i] = dp[i - 1] + result;
    }
    return dp[n];
};
