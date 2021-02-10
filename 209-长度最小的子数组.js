/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
// var minSubArrayLen = function (target, nums) {
//     let min = 0;

//     const sum = (nums, start, end) => {
//         let s = 0;
//         for (let i = start; i <= end; i++) {
//             s += nums[i];
//         }
//         return s;
//     };

//     for (let i = nums.length - 1; i >= 0; i--) {
//         let flag = false;
//         if (min > i + 2) {
//             break;
//         }
//         for (let j = 0; j + i < nums.length; j++) {
//             const h = sum(nums, j, j + i);
//             console.log('j', j);
//             console.log('i', i);
//             console.log('sum', h);
//             if (h < target && i === nums.length - 1) {
//                 flag = true;
//                 break;
//             } else if (h >= target) {
//                 min = i + 1;
//             }
//             console.log('min', min);
//         }
//         if (flag) {
//             break;
//         }
//         if (min > i + 1) {
//             break;
//         }
//     }
//     console.log(min);
//     return min;
// };

var minSubArrayLen = function (target, nums) {
    let start = 0;
    let end = 0;
    let sum = 0;
    const len = nums.length;
    let result = len + 1;
    if (len <= 0) {
        return 0;
    }

    while (end < len) {
        sum += nums[end];
        while (sum >= target) {
            result = Math.min(end - start + 1, result);
            sum -= nums[start];
            start++;
        }
        end++;
    }
    return result === len + 1 ? 0 : result;
};

console.log(minSubArrayLen(4, [1, 4, 4]));
