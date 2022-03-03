const matrix = [
    [-5]
];

/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var findNumberIn2DArray = function (matrix, target) {
    const n = matrix.length;
    if (!n) {
        return false;
    }
    const m = matrix[0].length;
    let result = false;
    for (let i = n - 1; i >= 0; i--) {
        if (result) {
            return result;
        }
        if (matrix[i][0] > target) {
            continue;
        }
        for (let j = 0; j < m; j++) {
            console.log(matrix[i][j]);
            console.log(target);
            if (matrix[i][j] === target) {
                console.log(11)
                result = true;
                break;
            }
            if (matrix[i][j] > target) {
                break;
            }
        }
    }
    return result;
};

console.log(findNumberIn2DArray(matrix, -5));
