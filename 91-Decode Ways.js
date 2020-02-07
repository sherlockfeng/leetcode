/**
 * https://leetcode.com/problems/decode-ways/
 *
 * @file 91-Decode Ways.js
 * @author heyunfeng
 */

/**
 * 91-Decode Ways
 *
 * @param {string} s 需要解码的数字
 * @return {number}
 */
var numDecodings = function (s) {
    const len = s.length;
    if (len === 0 || s[0] === '0') {
        return 0;
    }
    if (len === 1) {
        return len;
    }
    let pre = 1;
    let back = 1;
    for (let i = 1; i < len; i++) {
        let curWay;
        if (s[i] === '0' && s[i - 1] !== '1' && s[i - 1] !== '2') {
            return 0;
        }
        if (s[i] === '0') {
            curWay = pre;
        }
        else {
            if (s[i - 1] + s[i] > 26 || s[i - 1] === '0') {
                curWay = back;
            }
            else {
                curWay = pre + back;
            }
        }
        pre = back;
        back = curWay;
    }
    return back;
};
