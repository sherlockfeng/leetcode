/**
 * https://leetcode.com/problems/maximum-product-subarray/
 *
 * @file 152-Maximum Product Subarray.js
 * @author heyunfeng
 */

/**
 * 152-Maximum Product Subarray
 *
 * @param {number[]} nums 入参数组
 * @return {number}
 */
var maxProduct = function (nums) {
    const len = nums.length;
    if (len === 1) {
        return nums[0];
    }
    let max = nums[0];
    let min = nums[0];
    let result = nums[0];
    for (let i = 1; i < len; i++) {
        const perMax = max;
        max = Math.max(nums[i], min * nums[i], max * nums[i]);
        min = Math.min(nums[i], min * nums[i], perMax * nums[i]);
        if (result < max) {
            result = max;
        }
    }
    return result;
};
