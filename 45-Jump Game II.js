/**
 * @file 45-Jump Game II
 * @author heyunfeng
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
    let lastPos = nums.length - 1;
    let step = 0;
    const getLongest = pos => {
        let temp = 0;
        for (let i = pos - 1; i >= 0; i--) {
            if (nums[i] + i >= pos) {
                temp = i;
            }
        }
        lastPos = temp
        step++;
    }
    while (lastPos !== 0) {
        getLongest(lastPos);
    }
    return step;
};

/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
    const len = nums.length;
    let last = 0;
    let cur = 0;
    let step = 0;
    for (let i = 0; i < len - 1; i++) {
        cur = Math.max(cur, nums[i] + i);
        if (i === last) {
            last = cur;
            step++;
            if (cur >= len - 1) {
                break;
            }
        }
    }
    return step;
};
