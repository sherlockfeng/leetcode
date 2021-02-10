/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let result = [];
    const len = nums.length;
    for (let i = 0; i < len; i++) {
        const t = target - nums[i];
        for (let j = i + 1; j < len; j++) {
            if (nums[j] === t) {
                result = [i, j];
                break;
            }
        }
        if (result.length) {
            break;
        }
    }
    return result;
};