/**
 * https://leetcode.com/problems/distinct-subsequences/
 *
 * @file 115-Distinct Subsequences
 * @author heyunfeng
 */

/**
 * Distinct Subsequences
 *
 * @param {string} s 长字符串
 * @param {string} t 短字符串
 * @return {number}
 */
const numDistinct = function (s, t) {
    const m = s.length;
    const n = t.length;
    const dp = Array.from({length: m + 1}).map(() => []);
    for (let i = 0; i <= m; i++) {
        for (let j = 0; j <= n; j++) {
            dp[i][j] = 0;
            if (j === 0) {
                dp[i][j] = 1;
                continue;
            }
            if (j > i) {
                dp[i][j] = 0;
                continue;
            }
            if (s[i - 1] === t[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1] + dp[i - 1][j];
            }
            else {
                dp[i][j] = dp[i - 1][j];
            }
        }
    }
    return dp[m][n];
};

// eslint-disable-next-line
console.log(numDistinct('babgbag', 'bag'));
