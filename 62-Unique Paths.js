/**
 * https://leetcode.com/problems/unique-paths/
 *
 * @file 62-Unique Paths.js
 * @author heyunfeng
 */

/**
 * 62-Unique Paths
 *
 * @param {number} m 列
 * @param {number} n 行
 * @return {number}
 */
var uniquePaths = function (m, n) {
    if (m === 1 || n === 1) {
        return 1;
    }
    const result = Array.from({length: m}).map(() => [1]);
    for (let i = 1; i < n; i++) {
        result[0][i] = 1;
    }
    result[0][0] = 0;
    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            result[i][j] = result[i - 1][j] + result[i][j - 1];
        }
    }
    return result[m - 1][n - 1];
};
