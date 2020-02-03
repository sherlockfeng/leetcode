/**
 * https://leetcode.com/problems/reduce-array-size-to-the-half/
 *
 * @file 1342-Reduce Array Size to The Half.js
 * @author heyunfeng
 */

/**
 * reduce-array-size-to-the-half
 *
 * @param {number[]} arr 需要检测的数组
 * @return {number}
 */
var minSetSize = function (arr) {
    const map = new Map();
    for (let c of arr) {
        if (!map.has(c)) {
            map.set(c, 1);
        }
        else {
            map.set(c, map.get(c) + 1);
        }
    }
    let val = Array.from(map.values()).sort((a, b) => b - a);
    let count = 0;
    let sum = 0;
    for (let v of val) {
        sum += v;
        count++;
        if (sum >= arr.length / 2) {
            return count;
        }
    }
};
