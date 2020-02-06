/**
 * https://leetcode.com/problems/minimum-path-sum/
 *
 * @file 64-Minimum Path Sum.js
 * @author heyunfeng
 */

/**
 * 64-Minimum Path Sum
 *
 * @param {[number[]]} grid 路径数组
 * @return {number}
 */
var minPathSum = function (grid) {
    let m = grid.length;
    let n = grid[0].length;
    for (let i = 1; i < n; i++) {
        grid[0][i] = grid[0][i - 1] + grid[0][i];
    }
    for (let i = 1; i < m; i++) {
        grid[i][0] = grid[i - 1][0] + grid[i][0];
    }
    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            const top = grid[i - 1][j];
            const left = grid[i][j - 1];
            grid[i][j] = Math.min(top, left) + grid[i][j];
        }
    }
    return grid[m - 1][n - 1];
};
