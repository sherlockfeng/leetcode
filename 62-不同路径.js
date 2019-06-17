/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
    let temp = new Array(n);
    for (let i = 0; i < n; i++) {
        temp[i] = new Array(m);
        temp[i][0] = 1;
    }
    for (let j = 1; j < m; j++) {
        temp[0][j] = 1;
    }
    // temp[0][0] = 0;
    console.log(temp);
    for (let i = 1; i < n; i++) {
        for (let j = 1; j < m; j++) {
            if (!temp[i][j]) {
                temp[i][j] = temp[i - 1][j] + temp[i][j - 1];
            }
        }
    }
    return temp[n - 1][m - 1];
};

console.log(uniquePaths(3, 2))