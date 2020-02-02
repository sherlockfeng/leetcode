/**
 * @file 55-Jump Game
 * @author heyunfeng
 */

/**
 * 其
 *
 * @param {number[]} nums 输入数组
 * @return {boolean}
 */
var canJump = function(nums) {
    let lastPos = nums.length - 1;
    for (let i = nums.length - 2; i >= 0; i--) {
        if (nums[i] + i >= lastPos) {
            lastPos = i;
        }
    }
    return lastPos === 0;
};
