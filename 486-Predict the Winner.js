/**
 * https://leetcode.com/problems/predict-the-winner/
 *
 * @file 486-Predict the Winner.js
 * @author heyunfeng
 */

/**
 * Predict the Winner
 *
 * @param {number[]} nums 价格数组
 * @return {boolean}
 */
// eslint-disable-next-line
const PredictTheWinner = function (nums) {
    const len = nums.length;
    const dp = Array.from({length: len}).map(() => []);
    const helper = (i, j) => {
        if (i === j) {
            dp[i][j] = nums[i];
            return dp[i][j];
        }
        if (dp[i][j]) {
            return dp[i][j];
        }
        const pickI = nums[i] - helper(i + 1, j);
        const pickJ = nums[j] - helper(i, j - 1);
        if (pickI > pickJ) {
            dp[i][j] = pickI;
        }
        else {
            dp[i][j] = pickJ;
        }
        return dp[i][j];
    };
    return helper(0, len - 1) >= 0;
};
// eslint-disable-next-line
console.log(PredictTheWinner([1, 5, 2]));
