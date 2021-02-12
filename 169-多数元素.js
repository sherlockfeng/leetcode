/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
    nums.sort();
    return nums[Math.floor(nums.length / 2)];
};

/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
    let result = nums[0];
    let count = 1;
    for (let i = 1; i < nums.length; i++) {
        if (count === 0) {
            result = nums[i];
        }
        if (nums[i] === result) {
            count++;
        } else {
            count--;
        }
    }
    return result;
};
