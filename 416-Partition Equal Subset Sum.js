/**
 * https://leetcode.com/problems/partition-equal-subset-sum/
 *
 * @file 416-Partition Equal Subset Sum.js
 * @author heyunfeng
 */

/**
 * Partition Equal Subset Sum
 *
 * @param {number[]} nums 被切分的数组
 * @return {boolean}
 */
// const canPartition = function (nums) {
//     const total = nums.reduce((acc, cur) => (acc + cur), 0);
//     if (total % 2 !== 0) {
//         return false;
//     }
//     const target = total / 2;
//     const helper = (arr, tar) => {
//         const len = arr.length;
//         if (tar === 0) {
//             return true;
//         }
//         if (len === 0 && tar > 0) {
//             return false;
//         }
//         let result = false;
//         for (let i = 0; i < len; i++) {
//             if (tar >= arr[i]) {
//                 const newArr = [...arr];
//                 newArr.splice(i, 1);
//                 result = helper(newArr, tar - arr[i]);
//                 if (result) {
//                     break;
//                 }
//             }
//         }
//         return result;
//     };
//     return helper(nums, target);
// };

/**
 * Partition Equal Subset Sum
 *
 * @param {number[]} nums 被切分的数组
 * @return {boolean}
 */
const canPartition = function (nums) {
    const total = nums.reduce((acc, cur) => (acc + cur), 0);
    if (total & 1) {
        return false;
    }
    const target = total >> 1;
    const len = nums.length;
    const dp = new Array(len + 1).fill(null).map(() => []);
    for (let i = 0; i <= len; i++) {
        dp[i][0] = true;
    }

    for (let j = 1; j <= target; j++) {
        dp[0][j] = false;
    }
    for (let i = 1; i <= len; i++) {
        for (let j = 0; j <= target; j++) {
            if (j >= nums[i - 1]) {
                dp[i][j] = dp[i - 1][j] || dp[i - 1][j - nums[i - 1]];
            }
            else {
                dp[i][j] = dp[i - 1][j];
            }
        }
    }
    return dp[len][target];
};

// eslint-disable-next-line
console.log(canPartition([1, 1, 1, 1, 2, 6]));
