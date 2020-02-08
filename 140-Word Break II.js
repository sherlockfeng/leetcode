/**
 * https://leetcode.com/problems/word-break-ii/
 *
 * @file 140-Word Break II.js
 * @author heyunfeng
 */

/**
 * 140-Word Break II
 *
 * @param {string} s 需要判断的字符串
 * @param {string[]} wordDict 单词数组
 * @return {boolean}
 */
var wordBreak = function (s, wordDict) {
    const m = {};
    const check = s => {
        if (!s.length) {
            return [''];
        }
        if (m[s]) {
            return m[s];
        }
        const res = [];
        for (let word of wordDict) {
            const len = word.length;
            if (s.substring(0, len) !== word) {
                continue;
            }
            const rsb = check(s.substring(len));
            for (let str of rsb) {
                res.push(`${word}${str ? ' ' : ''}${str}`);
            }
        }
        m[s] = res;
        return res;
    };
    return check(s);
};
