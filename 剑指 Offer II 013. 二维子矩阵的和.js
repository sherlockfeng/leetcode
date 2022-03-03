/**
 * @param {number[][]} matrix
 */
var NumMatrix = function (matrix) {
    this.matrix = matrix;
    this.cMatrix = this.calcMatrices(matrix);
};

/**
 * @param {number} row1
 * @param {number} col1
 * @param {number} row2
 * @param {number} col2
 * @return {number}
 */
NumMatrix.prototype.sumRegion = function (row1, col1, row2, col2) {
    if (row1 !== 0 && col1 !== 0) {
        return (
            this.cMatrix[row2][col2] -
            this.cMatrix[row1 - 1][col2] -
            this.cMatrix[row2][col1 - 1] +
            this.cMatrix[row1 - 1][col1 - 1]
        );
    }
    if (row1 === 0 && col1 === 0) {
        return this.cMatrix[row2][col2];
    }
    if (row1 === 0) {
        return this.cMatrix[row2][col2] - this.cMatrix[row2][col1 - 1];
    }
    if (col1 === 0) {
        return this.cMatrix[row2][col2] - this.cMatrix[row1 - 1][col2];
    }
};

NumMatrix.prototype.calcMatrices = function (matrix) {
    const result = [];
    for (let i = 0; i < matrix.length; i++) {
        result.push([]);
    }
    for (let j = 0; j < matrix[0].length; j++) {
        for (let i = 0; i < matrix.length; i++) {
            if (i === 0 && j === 0) {
                result[i][j] = matrix[j][j];
                continue;
            }
            if (i === 0) {
                result[i][j] = result[i][j - 1] + matrix[i][j];
                continue;
            }
            if (j === 0) {
                result[i][j] = result[i - 1][j] + matrix[i][j];
                continue;
            }
            result[i][j] = matrix[i][j] + result[i - 1][j] + result[i][j - 1] - result[i - 1][j - 1];
        }
    }
    return result;
};

/**
 * Your NumMatrix object will be instantiated and called as such:
 * var obj = new NumMatrix(matrix)
 * var param_1 = obj.sumRegion(row1,col1,row2,col2)
 */

const obj = new NumMatrix([
    [3, 0, 1, 4, 2],
    [5, 6, 3, 2, 1],
    [1, 2, 0, 1, 5],
    [4, 1, 0, 1, 7],
    [1, 0, 3, 0, 5]
]);

console.log(obj.matrix);
console.log(obj.cMatrix);
console.log(obj.sumRegion(2, 1, 4, 3));
console.log(obj.sumRegion(1, 1, 2, 2));
console.log(obj.sumRegion(1, 2, 2, 4));
