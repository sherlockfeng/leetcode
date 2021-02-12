/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
    let top = 0;
    let left = 0;
    let right = matrix[0].length - 1;
    let bottom = matrix.length - 1;

    const result = [];
    let i = 0;
    let j = 0;
    let type = 'toRight';

    while (result.length < matrix[0].length * matrix.length) {
        result.push(matrix[i][j]);
        if (type === 'toRight') {
            if (j === right) {
                top++;
                type = 'toBottom';
                i++;
                continue;
            } else {
                j++;
            }
        } else if (type === 'toBottom') {
            if (i === bottom) {
                right--;
                type = 'toLeft';
                j--;
                continue;
            } else {
                i++;
            }
        } else if (type === 'toLeft') {
            if (j === left) {
                bottom--;
                type = 'toTop';
                i--;
                continue;
            } else {
                j--;
            }
        } else if (type === 'toTop') {
            if (i === top) {
                left++;
                type = 'toRight';
                j++;
                continue;
            } else {
                i--;
            }
        }
    }
    return result;
};

spiralOrder([
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [13, 14, 15, 16]
]);
