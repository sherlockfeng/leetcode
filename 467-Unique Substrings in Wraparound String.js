/**
 * https://leetcode.com/problems/unique-substrings-in-wraparound-string/
 *
 * @file 467-Unique Substrings in Wraparound String.js
 * @author heyunfeng
 */

/**
 * unique-substrings-in-wraparound-string
 *
 * @param {string} p 子字符串
 * @return {number}
 */
const findSubstringInWraproundString = function (p) {
    const len = p.length;
    if (len === 0) {
        return 0;
    }
    let curLen = 0;
    const result = [];
    for (let i = 0; i < len; i++) {
        const after = p.charCodeAt(i);
        let before;
        if (i > 0) {
            before = p.charCodeAt(i - 1);
        }
        if (
            i > 0
            && (after - before === 1 || before - after === 25)
        ) {
            ++curLen;
        }
        else {
            curLen = 1;
        }
        result[after] = Math.max(result[after] || 0, curLen);
    }
    return Object.keys(result).reduce((acc, cur) => (acc + result[cur]), 0);
};

// eslint-disable-next-line
console.log(findSubstringInWraproundString('abaab'));
