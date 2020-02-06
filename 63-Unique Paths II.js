/**
 * https://leetcode.com/problems/unique-paths-ii/
 *
 * @file 63-Unique Paths II.js
 * @author heyunfeng
 */

/**
 * 63-Unique Paths II
 *
 * @param {[number[]]} obstacleGrid 棋盘
 * @return {number}
 */
var uniquePathsWithObstacles = function (obstacleGrid) {
    if (obstacleGrid[0][0] === 1) {
        return 0;
    }
    const m = obstacleGrid[0].length;
    const n = obstacleGrid.length;
    if (m === 1 && n === 1) {
        return 1;
    }

    let flag = true;
    const result = Array.from({length: m}).map((value, index) => {
        if (flag) {
            if (obstacleGrid[0][index] === 1) {
                flag = false;
                return [0];
            }
            return [1];
        }
        return [0];
    });
    flag = true;
    for (let i = 1; i < n; i++) {
        if (flag) {
            if (obstacleGrid[i][0] === 1) {
                result[0][i] = 0;
                flag = false;
            }
            else {
                result[0][i] = 1;
            }
        }
        else {
            result[0][i] = 0;
        }
    }
    result[0][0] = 0;
    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            if (obstacleGrid[j][i] === 1) {
                result[i][j] = 0;
            }
            else {
                result[i][j] = result[i - 1][j] + result[i][j - 1];
            }
        }
    }
    return result[m - 1][n - 1];
};
