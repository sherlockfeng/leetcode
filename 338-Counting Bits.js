/**
 * https://leetcode.com/problems/counting-bits/
 *
 * @file 338-Counting Bits.js
 * @author heyunfeng
 */

/**
 * Counting Bits
 *
 * @param {number} num 入参
 * @return {number[]}
 */
const countBits = function (num) {
    const result = [0];
    for (let i = 1; i <= num; i++) {
        result[i] = result[i & (i - 1)] + 1;
    }
    return result;
};
