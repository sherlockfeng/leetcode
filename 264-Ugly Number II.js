/**
 * https://leetcode.com/problems/ugly-number-ii/
 *
 * @file 264-Ugly Number II.js
 * @author heyunfeng
 */

/**
 * 264-Ugly Number II
 *
 * @param {number} n 范围
 * @return {number}
 */
var nthUglyNumber = function (n) {
    const cache = [0, 1];
    const base = [2, 3, 5];
    const indexs = [1, 1, 1];
    for (let i = 2; i <= n; i++) {
        const a0 = base[0] * cache[indexs[0]];
        const a1 = base[1] * cache[indexs[1]];
        const a2 = base[2] * cache[indexs[2]];
        const min = Math.min(a0, a1, a2);
        min === a0 && ++indexs[0];
        min === a1 && ++indexs[1];
        min === a2 && ++indexs[2];
        cache[i] = min;
    }
    return cache.pop();
};
