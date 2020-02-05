/**
 * https://leetcode.com/problems/minimum-number-of-k-consecutive-bit-flips/
 *
 * @file 995-Minimum Number of K Consecutive Bit Flips
 * @author heyunfeng
 */

/**
 * 995-Minimum Number of K Consecutive Bit Flips
 *
 * @param {number[]} A 需要翻转的数组
 * @param {number} K 一次翻转的长度
 * @return {number}
 */
var minKBitFlips = function (A, K) {
    const len = A.length;
    let count = 0;
    for (let i = 0; i < len; i++) {
        if (A[i] === 1) {
            continue;
        }
        count++;
        if (i + K > len) {
            return -1;
        }
        for (let j = 0; j < K; j++) {
            A[j + i] === 0 ? (A[j + i] = 1) : (A[j + i] = 0);
        }
    }
    return count;
};
