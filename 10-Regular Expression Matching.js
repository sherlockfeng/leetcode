/**
 * @file 10-Regular Expression Matching.js
 * @author heyunfeng
 * https://leetcode.com/problems/regular-expression-matching/
 */


/**
 * Regular Expression Matching
 *
 * @param {string} s 字符串
 * @param {string} p 正则表达式
 * @return {boolean}
 */
const isMatch = function (s, p) {
    if (!p.length) {
        return !s.length;
    }

    const match = (s.length && (p[0] === s[0] || p[0] === '.'));

    if (p.length >= 2 && p[1] === '*') {
        return isMatch(s, p.slice(2)) || (match && isMatch(s.slice(1), p));
    }
    return match && isMatch(s.slice(1), p.slice(1));
};

/**
 * Regular Expression Matching
 *
 * @param {string} s 字符串
 * @param {string} p 正则表达式
 * @return {boolean}
 */

const isMatch = function (s, p) {
    const m = s.length;
    const n = p.length;
    const dp = [];
    for (let k = 0; k <= s.length; k++) {
        dp[k] = [];
    }
    dp[0][0] = true;
    for (let i = 0; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            if (p[j - 1] !== '*') {
                dp[i][j] = i > 0 && dp[i - 1][j - 1] && (s[i - 1] === p[j - 1] || p[j - 1] === '.');
            }
            else if (j > 1) {
                // eslint-disable-next-line
                dp[i][j] = dp[i][j - 1] || dp[i][j - 2] || (i > 0 && (p[j - 2] === s[i - 1] || p[j - 2] === '.') && dp[i - 1][j]);
            }
        }
    }
    return !!dp[m][n];
};
