/**
 * @param {string[]} matrix
 * @return {number}
 */
var maximalRectangle = function (matrix) {
    const h = new Array(matrix[0].length).fill(0);
    const calc = (h1, h2) => {
        for (let i = 0; i < h2.length; i++) {
            if (+h2[i] === 0) {
                h1[i] = 0;
                continue;
            }
            h1[i] += +h2[i];
        }
        return h1;
    };
    const largestRectangleArea = arr => {
        const stack = [-1];
        let area = Number.MIN_SAFE_INTEGER;

        for (let i = 0; i < arr.length; i++) {
            while (stack[stack.length - 1] !== -1 && arr[stack[stack.length - 1]] >= arr[i]) {
                const heitht = arr[stack.pop()];
                const width = i - stack[stack.length - 1] - 1;
                area = Math.max(area, heitht * width);
            }
            stack.push(i);
        }
        while (stack[stack.length - 1] !== -1) {
            const h = arr[stack.pop()];
            area = Math.max(area, h * (arr.length - stack[stack.length - 1] - 1));
        }
        return area;
    };
    let area = 0;
    for (let i = 0; i < matrix.length; i++) {
        const ch = calc(h, matrix[i]);
        console.log(ch);
        console.log(largestRectangleArea(ch));
        area = Math.max(largestRectangleArea(ch), area);
    }
    return area;
};

// console.log(maximalRectangle(['10100', '10111', '11111', '10010'])); // 6
console.log(maximalRectangle(['01', '10'])); // 1
