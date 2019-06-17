/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
    if (m <=0 || n<=0) {
        return 1;
    }
    let temp = Array(m).fill(0);
    temp[0] = 1;
    console.log(temp)
    for (let i = 0; i < n; i++) {
        for (let j = 1; j < m; j++) {
            temp[j] += temp[j - 1];
        }
    }
    return temp[m- 1];
};

console.log(uniquePaths(3, 2))