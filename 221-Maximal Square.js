/**
 * https://leetcode.com/problems/maximal-square/
 *
 * @file 221-Maximal Square.js
 * @author heyunfeng
 */

/**
 * 221-Maximal Square
 *
 * @param {[number[]]} matrix 矩阵
 * @return {number}
 */
const maximalSquare = function (matrix) {
    const m = matrix.length;
    if (m === 0) {
        return 0;
    }
    const n = matrix[0].length;

    if (n === 0) {
        return 0;
    }
    let max = matrix[0][0];

    const check = (i, j, k, l) => {
        for (let m = k; m >= i; m--) {
            if (+matrix[m][l] === 0) {
                return false;
            }
        }
        for (let m = l; m >= j; m--) {
            if (+matrix[k][m] === 0) {
                return false;
            }
        }
        return true;
    };
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (+matrix[i][j] === 0) {
                continue;
            }
            let curMax = 1;
            let k = i + 1;
            let l = j + 1;
            while (k < m && l < n) {
                if (+matrix[k][l] === 0) {
                    break;
                }
                if (check(i, j, k, l)) {
                    curMax++;
                    k++;
                    l++;
                }
                else {
                    break;
                }
            }
            if (curMax > max) {
                max = curMax;
            }
        }
    }

    return max * max;
};

/**
 * 221-Maximal Square
 *
 * @param {[number[]]} matrix 矩阵
 * @return {number}
 */
const maximalSquare = function (matrix) {
    const m = matrix.length;
    if (m === 0) {
        return 0;
    }
    const n = matrix[0].length;
    const map = Array.from({length: m}).map(() => []);
    let max = 0;
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (i === 0 || j === 0 || matrix[i][j] === '0') {
                map[i][j] = +matrix[i][j];
            }
            else {
                map[i][j] = Math.min(map[i - 1][j - 1], map[i - 1][j], map[i][j - 1]) + 1;
            }
            map[i][j] > max && (max = map[i][j]);
        }
    }
    return max * max;
};
