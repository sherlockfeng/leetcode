/**
 * https://leetcode.com/problems/continuous-subarray-sum/
 *
 * @file 523-Continuous Subarray Sum
 * @author heyunfeng
 */

/**
 * Continuous Subarray Sum
 *
 * @param {number[]} nums 数组
 * @param {number} k 和
 * @return {boolean}
 */
const checkSubarraySum = function (nums, k) {
    const sum  = [];
    nums.forEach((n, i) => {
        if (i) {
            sum.push(sum[i - 1] + n);
        }
        else {
            sum.push(n);
        }
    });
    let result = false;
    for (let i = 0; i < nums.length - 1; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            const sums = i === 0 ? sum[j] : sum[j] - sum[i - 1];
            if (k === 0 & sums === 0) {
                result = true;
                break;
            }
            if (sums % k === 0) {
                result = true;
                break;
            }
        }
        if (result) {
            break;
        }
    }
    return result;
};

/**
 * Continuous Subarray Sum
 *
 * @param {number[]} nums 数组
 * @param {number} k 和
 * @return {boolean}
 */
const checkSubarraySum = function (nums, k) {
    let sum = 0;
    const flag = {0: -1};
    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];
        const extro = k === 0 ? sum : sum % k;
        if (flag[extro] || flag[extro] === 0) {
            if (i - flag[extro] > 1) {
                return true;
            }
        }
        else {
            flag[extro] = i;
        }
    }
    return false;
};

// eslint-disable-next-line
console.log(checkSubarraySum([0, 0], 0));
