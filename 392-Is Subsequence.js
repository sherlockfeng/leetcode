/**
 * @file 392-Is Subsequence
 * @author heyunfeng
 * https://leetcode.com/problems/is-subsequence/
 */


/**
 * 子字符串
 *
 * @param {string} s pattern
 * @param {string} t text
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    for (let i = 0; i < s.length; i++) {
        const index = t.indexOf(s[i]);
        if (index === -1) {
            return false;
        }
        t = t.slice(index + 1);
    }
    return true;
};

console.log(isSubsequence('abc', 'ahbgdc'));
