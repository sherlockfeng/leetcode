/**
 * @file 32-Longest Valid Parentheses.js
 * @author heyunfeng
 * https://leetcode.com/problems/longest-valid-parentheses/
 */

/**
 * Regular Expression Matching
 *
 * @param {string} s 括号字符串
 * @return {number}
 */
const longestValidParentheses = function (s) {
    const dp = Array.from({length: s.length}).map(() => 0);
    let max = 0;
    for (let i = 1; i < s.length; i++) {
        if (s[i] === ')') {
            if (s[i - 1] === '(') {
                dp[i] = (i >= 2 ? dp[i - 2] : 0) + 2;
            }
            else if (i - dp[i - 1] > 0 && s[i - dp[i - 1] - 1] === '(') {
                dp[i] = dp[i - 1] + (i - dp[i - 1] >= 2 ? dp[i - dp[i - 1] - 2] : 0) + 2;
            }
            max = Math.max(max, dp[i]);
        }
    }
    return max;
};

/**
 * Regular Expression Matching
 *
 * @param {string} s 括号字符串
 * @return {number}
 */
const longestValidParentheses = function (s) {
    const stack = [-1];
    let max = 0;
    for (let i = 0; i < s.length; i++) {
        if (s[i] === '(') {
            stack.push(i);
            continue;
        }
        if (s[i] === ')') {
            stack.pop();
            if (!stack.length) {
                stack.push(i);
            }
            else {
                max = Math.max(max, i - stack[stack.length - 1]);
            }
        }
    }
    return max;
};
