/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
    let temp = [];
    for (let i = 0; i < n; i++) {
      temp[i] = Array(m).fill(0)
    }
    console.log(temp);
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            if (i === 0 || j === 0) {
                temp[i][j] = 1;
            }
            else if (!temp[i][j]) {
                temp[i][j] = temp[i - 1][j] + temp[i][j - 1];
            }
        }
    }
    return temp[n - 1][m - 1];
};

console.log(uniquePaths(3, 2))