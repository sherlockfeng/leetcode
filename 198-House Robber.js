/**
 * https://leetcode.com/problems/house-robber/
 *
 * @file 198-House Robber.js
 * @author heyunfeng
 */

/**
 * 198-House Robber
 *
 * @param {number[]} nums 房子
 * @return {number}
 */
var rob = function(nums) {
    const len = nums.length;
    if (len === 0) {
        return 0;
    }
    if (len === 1) {
        return nums[0];
    }

    const result = [nums[0], Math.max(nums[0], nums[1])];
    for (let i = 2; i < nums.length; i++) {
        result[i] = Math.max(result[i - 2] + nums[i], result[i - 1]);
    }
    return result[len - 1];
};
