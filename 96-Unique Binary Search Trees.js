/**
 * https://leetcode.com/problems/unique-binary-search-trees/
 *
 * @file 96-Unique Binary Search Trees.js
 * @author heyunfeng
 */

/**
 * 96-Unique Binary Search Trees
 *
 * @param {number} n 需要求的数
 * @return {number}
 */
var numTrees = function (n) {
    const result = [];
    result[0] = 1;
    result[1] = 1;
    for (let i = 2; i <= n; i++) {
        result[i] = 0;
        for (let j = 0; j < i; j++) {
            result[i] += result[j] * result[i - j - 1];
        }
    }
    return result[n];
};
