/**
 * @file 376-Wiggle Subsequence
 * @author heyunfeng
 * https://leetcode.com/problems/wiggle-subsequence/
 */


/**
 * @param {number[]} nums
 * @return {number}
 */
var wiggleMaxLength = function(nums) {
    const len = nums.length;
    if (len < 2) {
        return len;
    }
    let preDiff = nums[1] - nums[0];
    let num = preDiff === 0 ? 1 : 2;
    for (let i = 2; i < nums.length; i++) {
        const diff = nums[i] - nums[i - 1];
        if ((diff > 0 && preDiff <= 0) || (diff < 0 && preDiff >= 0)) {
            num++;
            preDiff = diff;
        }
    }
    return num;
};

/**
 * @param {number[]} nums
 * @return {number}
 */
var wiggleMaxLength = function(nums) {
    const len = nums.length;
    if (len < 2) {
        return len;
    }
    const up = [1];
    const down = [1];
    for (let i = 1; i < len; i++) {
        if (nums[i] > nums[i - 1]) {
            up[i] = down[i - 1] + 1;
            down[i] = down[i - 1];
        }
        else if (nums[i] < nums[i - 1]) {
            down[i] = up[i - 1] + 1;
            up[i] = up[i - 1];
        }
        else {
            down[i] = down[i - 1];
            up[i] = up[i - 1];
        }
    }
    return Math.max(up[len - 1], down[len - 1]);
};
