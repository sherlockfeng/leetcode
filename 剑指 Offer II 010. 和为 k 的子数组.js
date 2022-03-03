/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function (nums, k) {
    const len = nums.length;
    let sum = 0;
    let result = 0;
    if (!len) {
        return result;
    }
    const map = {0: 1};
    for (const n of nums) {
        sum += n;
        if (map[sum - k]) {
            result += map[sum - k];
        }
        if (map[sum]) {
            map[sum] += 1;
        } else {
            map[sum] = 1;
        }
    }

    return result;
};

console.log(subarraySum([1, 1, 1], 2));
