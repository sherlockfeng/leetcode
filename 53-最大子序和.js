/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
    if (!nums.length) {
        return 0;
    }
    let dp = nums[0];
    let result = nums[0];
    for (let i = 1; i < nums.length; i++) {
        dp = Math.max(nums[i], nums[i] + dp);
        result = Math.max(dp, result);
    }
    return result;
};

maxSubArray([-2,1,-3,4,-1,2,1,-5,4]);
