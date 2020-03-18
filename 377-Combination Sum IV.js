/**
 * https://leetcode.com/problems/combination-sum-iv/
 *
 * @file 377-Combination Sum IV.js
 * @author heyunfeng
 */

/**
 * Combination Sum IV
 *
 * @param {number[]} nums 材料数组
 * @param {number} target 目标数字
 * @return {number}
 */
const combinationSum4 = function (nums, target) {
    const dp = new Array(target + 1).fill(0);
    dp[0] = 1;
    nums.sort((a, b) => a - b);
    for (let i = 1; i <= target; i++) {
        for (let n of nums) {
            if (i < n) {
                break;
            }
            dp[i] += dp[i - n];
        }
    }
    return dp[target];
};

// eslint-disable-next-line
console.log(combinationSum4([3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25], 10));
