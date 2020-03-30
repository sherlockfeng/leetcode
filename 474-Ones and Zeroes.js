/**
 * https://leetcode.com/problems/ones-and-zeroes/
 *
 * @file 474-Ones and Zeroes.js
 * @author heyunfeng
 */

/**
 * ones-and-zeroes
 *
 * @param {string[]} strs 字符串数组
 * @param {number} m 0的数量
 * @param {number} n 1的数量
 * @return {number}
 */
const findMaxForm = function (strs, m, n) {
    const flag = {};
    const dp = [];
    for (let r = 0; r <= m; r++) {
        const r = [];
        for (let c = 0; c <= n; c++) {
            r.push(0);
        }
        dp.push(r);
    }
    for (let value of strs) {
        if (!flag[value]) {
            let num0 = 0;
            let num1 = 0;
            for (let i = 0; i < value.length; i++) {
                if (value[i] === '0') {
                    num0++;
                    continue;
                }
                num1++;
            }
            flag[value] = {num0, num1};
        }
        const {num0, num1} = flag[value];
        for (let j = m; j >= num0; j--) {
            for (let k = n; k >= num1; k--) {
                dp[j][k] = Math.max(dp[j][k], dp[j - num0][k - num1] + 1);
            }
        }
    }
    return dp[m][n];
};

// eslint-disable-next-line
console.log(findMaxForm(["10", "0001", "111001", "1", "0"], 5, 3));
