/**
 * https://leetcode.com/problems/maximum-subarray/
 *
 * @file 53-Maximum Subarray
 * @author heyunfeng
 */

/**
 * 53-Maximum Subarray
 * 
 * @param {number[]} nums 需要求值的数组
 * @return {number}
 */
var maxSubArray = function (nums) {
    const len = nums.length;
    if (len === 0) {
        return 0;
    };
    if (len === 1) {
        return nums[0];
    };
    let result = nums[0];
    let curr = nums[0];
    for (let i = 1; i < len; i++) {
        curr = Math.max(nums[i], curr + nums[i]);
        result = Math.max(result, curr);
    }
    return result;
};
