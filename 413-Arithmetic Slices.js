/**
 * https://leetcode.com/problems/arithmetic-slices/
 *
 * @file 413-Arithmetic Slices.js
 * @author heyunfeng
 */

/**
 * Arithmetic Slices
 *
 * @param {number[]} A 总数组
 * @return {number}
 */
const numberOfArithmeticSlices = function (A) {
    const len = A.length;
    let result = 0;
    const dp = Array.from({length: len}).map(() => []);
    for (let i = 0; i < len - 2; i++) {
        for (let j = i + 2; j < len; j++) {
            if (dp[i][j]) {
                continue;
            }
            if (A[j] - A[j - 1] === A[j - 1] - A[j - 2]) {
                dp[i][j] = true;
                result++;
                continue;
            }
            break;
        }
    }
    return result;
};

/**
 * Arithmetic Slices
 *
 * @param {number[]} A 总数组
 * @return {number}
 */
const numberOfArithmeticSlices = function (A) {
    const len = A.length;
    let result = 0;
    const dp = Array.from({length: len}).map(() => 0);
    for (let i = 2; i < len; i++) {
        if (A[i] - A[i - 1] === A[i - 1] - A[i - 2]) {
            dp[i] = dp[i - 1] + 1;
        }
        result += dp[i];
    }
    return result;
};

/**
 * Arithmetic Slices
 *
 * @param {number[]} A 总数组
 * @return {number}
 */
const numberOfArithmeticSlices = function (A) {
    const len = A.length;
    let result = 0;
    let cur = 0;
    for (let i = 2; i < len; i++) {
        if (A[i] - A[i - 1] === A[i - 1] - A[i - 2]) {
            cur += 1;
            result += cur;
        }
        else {
            cur = 0;
        }
    }
    return result;
};

// eslint-disable-next-line
console.log(numberOfArithmeticSlices([1, 2, 3, 4]));
