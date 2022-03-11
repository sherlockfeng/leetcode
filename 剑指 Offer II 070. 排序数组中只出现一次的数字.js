/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNonDuplicate = function (nums) {
    let start = 0;
    let end = nums.length - 1;
    while (start < end) {
        const middle = (start + end) >> 1;
        // ^ 奇数会-1 偶数会+1
        if (nums[middle] === nums[middle ^ 1]) {
            start = middle + 1;
        } else {
            end = middle;
        }
    }
    return nums[end];
};
