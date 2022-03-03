/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var numSubarrayProductLessThanK = function (nums, k) {
    const len = nums.length;
    let result = 0;
    if (!len) {
        return result;
    }
    let start = 0;
    let end = 0;
    let sum = 1;

    while (end < len) {
        sum *= nums[end];
        while (sum >= k) {
            sum /= nums[start];
            start++;
            if (start === end) {
                break;
            }
        }
        if (sum < k) {
            result += end - start + 1;
        }
        end++;
    }

    return result;
};

console.log(numSubarrayProductLessThanK([10, 5,2, 6], 100));
