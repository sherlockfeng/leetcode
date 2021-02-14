/**
 * @param {number[]} nums
 * @return {number}
 */
// var firstMissingPositive = function (nums) {
//     if (!nums.length) {
//         return 1;
//     }
//     let record = [];
//     for (let n of nums) {
//         if (n > 0) {
//             record[n] = true;
//         }
//     }
//     if (!record.length) {
//         return 1;
//     }
//     let result = 0;
//     for (let i = 1; i < record.length; i++) {
//         if (!record[i]) {
//             result = i;
//             break;
//         }
//     }
//     return result ? result : record.length;
// };

var firstMissingPositive = function (nums) {
    const len = nums.length;
    for (let i = 0; i < len; i++) {
        if (nums[i] <= 0) {
            nums[i] = len + 1;
        }
    }
    console.log(nums);
    for (let i = 0; i < len; i++) {
        const v = Math.abs(nums[i]);
        if (v <= len) {
            nums[v - 1] = -Math.abs(nums[v - 1]);
        }
    }
    for (let i = 0; i < len; i++) {
        if (nums[i] > 0) {
            return i + 1;
        }
    }
    return len + 1;
};

console.log(firstMissingPositive([1, 0, 2]));
