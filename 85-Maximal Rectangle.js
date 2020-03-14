/**
 * https://leetcode.com/problems/maximal-rectangle/
 *
 * @file 85-Maximal Rectangle.js
 * @author heyunfeng
 */

/**
 * Maximal Rectangle
 *
 * @param {Array<Array<string>>} matrix 0和1的矩阵
 * @return {number}
 */
const maximalRectangle = function (matrix) {
    const m = matrix.length;

    if (m === 0) {
        return 0;
    }

    const n = matrix[0].length;

    if (n === 0) {
        return 0;
    }

    const height = Array.from({length: m}).map(() => []);

    for (let l = 0; l < m; l++) {
        height[l] = [];
    }

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (matrix[i][j] === '0') {
                height[i][j] = 0;
            }
            else {
                height[i][j] = (i === 0) ? 1 : height[i - 1][j] + 1;
            }
        }
    }
    const largestRectangleArea = height => {
        const stack = [];
        height.push(0);
        let sum = 0;
        let i = 0;
        while (i < height.length) {
            if (!stack.length || height[stack[stack.length - 1]] < height[i]) {
                stack.push(i);
                i++;
            }
            else {
                const t = stack.pop();
                sum = Math.max(sum, height[t] * (stack.length ? i - stack[stack.length - 1] - 1 : i));
            }
        }
        return sum;
    };

    let maxArea = 0;
    for (let i = 0; i < m; i++) {
        maxArea = Math.max(maxArea, largestRectangleArea(height[i]));
    }
    return maxArea;
};
