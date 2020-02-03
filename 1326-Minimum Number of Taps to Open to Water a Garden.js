/**
 * https://leetcode.com/problems/minimum-number-of-taps-to-open-to-water-a-garden/
 *
 * @file 1326-Minimum Number of Taps to Open to Water a Garden.js
 * @author heyunfeng
 */

/**
 * Minimum Number of Taps to Open to Water a Garden
 * 
 * @param {number} n 花园大小
 * @param {number[]} ranges 每处水管覆盖范围
 * @return {number}
 */
var minTaps = function (n, ranges) {
    for (let i = 0; i <= n; i++) {
        const char = ranges[i];
        const e = Math.min(i + char, n);
        const s = Math.max(i - char, 0);
        e > ranges[s] && (ranges[s] = e);
    }
    let count = 1;
    let cur = ranges[0];
    let next = ranges[0];
    for (let i = 1; i <= n; i++) {
        if (i > next) {
            return -1;
        }
        if (i > cur) {
            count++;
            cur = next;
        }
        ranges[i] > next && (next = ranges[i]);
    }
    return count;
};
