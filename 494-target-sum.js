/**
 * https://leetcode.com/problems/target-sum/
 *
 * @file 494-target-sum
 * @author heyunfeng
 */

/**
 * target-sum
 *
 * @param {number[]} nums 数组
 * @param {number} S 和
 * @return {number}
 */
const findTargetSumWays = function (nums, S) {
    const dp = Array.from({length: nums.length + 1}).map(() => ({}));
    dp[0][0] = 1;
    for (let i = 0; i < nums.length; i++) {
        Object.keys(dp[i]).forEach(key => {
            if (!dp[i + 1][+key + nums[i]]) {
                dp[i + 1][+key + nums[i]] = 0;
            }
            dp[i + 1][+key + nums[i]] += dp[i][key];
            if (!dp[i + 1][key - nums[i]]) {
                dp[i + 1][key - nums[i]] = 0;
            }
            dp[i + 1][key - nums[i]] += dp[i][key];
        });
    }
    return dp[nums.length][S] || 0;
};

/**
 * target-sum
 *
 * @param {number[]} nums 数组
 * @param {number} S 和
 * @return {number}
 */
const findTargetSumWays = function (nums, S) {
    let result = 0;
    const n = nums.length;
    const helper = (i, sum) => {
        if (i === n) {
            if (sum === S) {
                result++;
            }
            return;
        }

        helper(i + 1, sum + nums[i]);
        helper(i + 1, sum - nums[i]);
    };
    helper(0, 0);
    return result;
};


// eslint-disable-next-line
console.log(findTargetSumWays([1, 1, 1, 1, 1], 3));
