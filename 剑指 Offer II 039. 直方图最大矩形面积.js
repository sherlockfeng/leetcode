/**
 * @param {number[]} heights
 * @return {number}
 */
// 编译求包含完整 heights[i] 的最大面积 -1是为了最后循环求最左侧矩形用的
var largestRectangleArea = function (heights) {
    const stack = [-1];
    let max = 0;

    for (let i = 0; i < heights.length; i++) {
        while (stack[stack.length - 1] !== -1 && heights[stack[stack.length - 1]] >= heights[i]) {
            const height = heights[stack.pop()];
            const width = i - stack[stack.length - 1] - 1;
            max = Math.max(max, height * width);
        }
        stack.push(i);
    }
    console.log('stack', stack);
    while (stack[stack.length - 1] !== -1) {
        let height = heights[stack.pop()];
        let width = heights.length - stack[stack.length - 1] - 1;
        max = Math.max(max, height * width);
    }

    return max;
};

console.log(largestRectangleArea([2, 1, 5, 6, 2, 3])); // 10
// console.log(largestRectangleArea([2, 4])); // 4
