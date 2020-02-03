/**
 * https://leetcode.com/problems/remove-duplicate-letters/
 *
 * @file 316-Remove Duplicate Letters.js
 * @author heyunfeng
 */

/**
 * Remove Duplicate Letters
 *
 * @param {string} s 需要去重字符串
 * @return {string}
 */
var removeDuplicateLetters = function (s) {
    const flag = {};
    const len = s.length;
    for (let i = 0; i < len; i++) {
        if (flag[s[i]]) {
            flag[s[i]] += 1;
        }
        else {
            flag[s[i]] = 1;
        }
    }
    const result = [];
    for (let i = 0; i < len; i++) {
        const char = s[i];
        if (!result.includes(char)) {
            while (result.length > 0 && char < result[result.length - 1] && flag[result[result.length - 1]] > 0) {
                result.pop();
            }
            result.push(char);
        }
        flag[char]--;
    }
    return result.join('');
};
