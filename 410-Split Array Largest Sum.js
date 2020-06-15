/**
 * https://leetcode.com/problems/split-array-largest-sum/
 *
 * @file 410-Split Array Largest Sum
 * @author heyunfeng
 */

/**
 * Split Array Largest Sum
 *
 * @param {number[]} nums 数组
 * @param {number} m 切分的数量
 * @return {number}
 */
const splitArray = function (nums, m) {
    const n = nums.length;
    const dp = Array.from({length: m + 1}).map(() => Array.from({length: n + 1}).map(() => Number.MAX_VALUE));
    const sum = [0];
    for (let i = 1; i <= n; i++) {
        sum[i] = nums[i - 1] + sum[i - 1];
    }
    dp[0][0] = 0;
    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            for (let k = i - 1; k < j; k++) {
                const val = Math.max(dp[i - 1][k], sum[j] - sum[k]);
                dp[i][j] = Math.min(val, dp[i][j]);
            }
        }
    }
    return dp[m][n];
};

// eslint-disable-next-line
console.log(splitArray([7, 2, 5, 10, 8], 2));
