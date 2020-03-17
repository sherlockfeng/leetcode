/**
 * https://leetcode.com/problems/largest-divisible-subset/
 *
 * @file 368-Largest Divisible Subset.js
 * @author heyunfeng
 */

/**
 * 368-Largest Divisible Subset
 *
 * @param {number[]} nums 入参数组
 * @return {number[]}
 */
const largestDivisibleSubset = function (nums) {
    nums.sort((a, b) => a - b);
    const len = nums.length;
    const parent = [];
    const dp = Array.from({length: len}).map(() => 0);
    let max = 0;
    let maxStartIndex = 0;
    for (let i = len - 1; i >= 0; i--) {
        for (let j = i; j < len; j++) {
            if (nums[j] % nums[i] === 0 && dp[i] < dp[j] + 1) {
                dp[i] = dp[j] + 1;
                parent[i] = j;
                if (dp[i] > max) {
                    max = dp[i];
                    maxStartIndex = i;
                }
            }
        }
    }
    const result = [];
    for (let i = 0; i < max; i++) {
        result.push(nums[maxStartIndex]);
        maxStartIndex = parent[maxStartIndex];
    }
    return result;
};

// eslint-disable-next-line
console.log(largestDivisibleSubset([1,2,4,8]));
