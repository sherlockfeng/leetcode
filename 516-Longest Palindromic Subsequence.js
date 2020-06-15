/**
 * https://leetcode.com/problems/longest-palindromic-subsequence/
 *
 * @file 516-ongest Palindromic Subsequence
 * @author heyunfeng
 */

/**
 * target-sum
 *
 * @param {string} s 入参
 * @return {number} 最长子回文字符串长度
 */
const longestPalindromeSubseq = function (s) {
    const n = s.length;
    const dp = Array.from({length: n}).map(() => []);
    for (let i = n - 1; i >= 0; i--) {
        dp[i][i] = 1;
        for (let j = i + 1; j < n; j++) {
            if (s[i] === s[j]) {
                if (j - i === 1) {
                    dp[i][j] = 2;
                }
                else {
                    dp[i][j] = dp[i + 1][j - 1] + 2;
                }
            }
            else {
                dp[i][j] = Math.max(dp[i + 1][j], dp[i][j - 1]);
            }
        }
    }
    return dp[0][n - 1];
};

// eslint-disable-next-line
console.log(longestPalindromeSubseq('bbbab'));
