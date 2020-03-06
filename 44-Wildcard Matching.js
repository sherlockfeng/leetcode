/**
 * @file 44-Wildcard Matching.js
 * @author heyunfeng
 * https://leetcode.com/problems/wildcard-matching/
 */

/**
 * 44-Wildcard Matching
 *
 * @param {string} s 字符串
 * @param {string} p 正则
 * @return {boolean}
 */
const isMatch = function (s, p) {
    const m = s.length;
    const n = p.length;
    const dp = [];
    for (let i = 0; i <= m; i++) {
        dp[i] = [];
    }
    dp[0][0] = true;
    for (let i = 0; i < n; i++) {
        if (p[i] === '*' && (i === 0 || dp[0][i])) {
            dp[0][i + 1] = true;
        }
    }
    for (let j = 1; j <= m; j++) {
        const curS = s[j - 1];
        for (let k = 1; k <= n; k++) {
            const curP = p[k - 1];
            if (curS === curP || curP === '?') {
                dp[j][k] = dp[j - 1][k - 1];
            }
            else if (curP === '*') {
                dp[j][k] = dp[j - 1][k] || dp[j - 1][k - 1] || dp[j][k - 1];
            }
        }
    }
    return !!dp[m][n];
};
