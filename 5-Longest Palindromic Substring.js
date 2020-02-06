/**
 * https://leetcode.com/problems/longest-palindromic-substring/
 *
 * @file 5-Longest Palindromic Substring.js
 * @author heyunfeng
 */

/**
 * Longest Palindromic Substring.js
 *
 * @param {string} s 需要求回文的字符串
 * @return {string}
 */
var longestPalindrome = function (s) {
    const len = s.length;
    const result = Array.from({length: len}).map(() => []);
    let left = 0;
    let resultLength = 1;
    for (let i = 0; i < len; i++) {
        result[i][i] = 1;
        for (let j = 0; j < i; j++) {
            if (s[i] === s[j]) {
                if (i === j + 1) {
                    result[j][i] = 1;
                }
                else {
                    result[j][i] = result[j + 1][i - 1];
                }
                if (result[j][i] && resultLength < i - j + 1) {
                    left = j;
                    resultLength = i - j + 1;
                }
            }
        }
    }
    return s.substr(left, resultLength);
};
