/**
 * https://leetcode.com/problems/house-robber-ii/
 *
 * @file 213-House Robber II.js
 * @author heyunfeng
 */

/**
 * 213-House Robber II
 *
 * @param {number[]} nums 房子
 * @return {number}
 */
var rob = function (nums) {
    let len = nums.length;
    if (len === 0) {
        return 0;
    }
    if (len === 1) {
        return nums[0];
    }
    if (len === 2) {
        return Math.max(nums[0], nums[1]);
    }
    if (len === 3) {
        return Math.max(nums[0], nums[1], nums[2]);
    }
    let result1 = [nums[0], Math.max(nums[0], nums[1])];
    let result2 = [nums[1], Math.max(nums[1], nums[2])];
    for (let i = 2; i < nums.length - 1; i++) {
        result1[i] = Math.max(result1[i - 2] + nums[i], result1[i - 1]);
        result2[i] = Math.max(result2[i - 2] + nums[i + 1], result2[i - 1]);

    }
    return Math.max(result1[len - 2], result2[len - 2]);
};
