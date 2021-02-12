/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function (grid) {
    const width = grid[0].length;
    const height = grid.length;
    let max = 0;
    const getArea = (i, j) => {
        if (i < 0 || j < 0 || i === height || j === width || !grid[i][j]) {
            return 0;
        }
        grid[i][j] = 0;
        return 1 + getArea(i - 1, j) + getArea(i, j - 1) + getArea(i + 1, j) + getArea(i, j + 1);
    };
    for (let i = 0; i < height; i++) {
        for (let j = 0; j < width; j++) {
            max = Math.max(getArea(i, j), max);
        }
    }
    return max;
};

maxAreaOfIsland([
    [1, 1],
    [1, 0]
]);
