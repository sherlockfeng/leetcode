/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function (target, nums) {
    let result = Number.MAX_SAFE_INTEGER;
    const len = nums.length;
    if (!len) {
        return 0;
    }

    let left = 0;
    let right = 0;
    let sum = 0;


    while (right < len) {
        sum += nums[right];
        while(sum >= target) {
            result = Math.min(result, right - left + 1);
            sum -= nums[left];
            left++;
        }
        right++;
    }

    return result === Number.MAX_SAFE_INTEGER ? 0 : result;
};

console.log(minSubArrayLen(0, [1, 1, 1, 1, 1, 1, 1, 1]));
