/**
 * @file kmp.js
 * @author heyunfeng
 */

/**
 * 生成next数组
 *
 * @param {string} pattern 子字符串
 * @return {Array} next数组
 */
const generateNext = pattern => {
    const next = [-1];
    let k = -1;
    let j = 0;
    while (j < pattern.length - 1) {
        if (k === -1 || pattern[j] === pattern[k]) {
            j++;
            k++;
            next[j] = k;
        }
        else {
            k = next[k];
        }
    }
    return next;
};

/**
 * 查找子字符串
 *
 * @param {string} text 原始字符串
 * @param {string} pattern 子字符串
 * @return {Array<number>} indexs
 */
const search = (text, pattern) => {
    const next = generateNext(pattern);
    const indexs = [];
    let j = 0;
    for (let i = 0; i < text.length; i++) {
        while (j > 0 && text[i] !== pattern[j]) {
            j = next[j];
        }
        if (text[i] === pattern[j]) {
            j++;
        }
        if (j === pattern.length) {
            indexs.push(i - pattern.length + 1);
            j = next[j - 1];
        }
    }
    return indexs;
};
