/**
 * https://leetcode.com/problems/word-break/
 *
 * @file 139-Word Break.js
 * @author heyunfeng
 */

/**
 * 139-Word Break
 *
 * @param {string} s 需要判断的字符串
 * @param {string[]} wordDict 单词数组
 * @return {boolean}
 */
var wordBreak = function (s, wordDict) {
    if (!s.length) {
        return true;
    }
    if (!wordDict.length) {
        return false;
    }
    const dp = [true];
    for (let i = 1; i <= s.length; i++) {
        for (let j = 0; j < i; j++) {
            if (dp[j] && wordDict.indexOf(s.substring(j, i)) !== -1) {
                dp[i] = true;
                break;
            }
        }
    }
    return !!dp[s.length];
};
