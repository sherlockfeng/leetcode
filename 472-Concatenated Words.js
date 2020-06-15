/**
 * https://leetcode.com/problems/concatenated-words/
 *
 * @file 472-Concatenated Words
 * @author heyunfeng
 */

/**
 * Concatenated Words
 *
 * @param {string[]} words 字符串数组
 * @return {string[]}
 */
const findAllConcatenatedWordsInADict = function (words) {
    const wordSet = new Set(words);
    const result = [];
    const isConcat = (word) => {
        if (wordSet.has(word)) {
            return true;
        }
        const len = word.length;
        for (let i = 0; i < len; i++) {
            const prefix = word.slice(0, i + 1);
            if (wordSet.has(prefix)) {
                if (isConcat(word.slice(i + 1))) {
                    return true;
                }
            }
        }
    };
    for (let word of words) {
        wordSet.delete(word);
        if (isConcat(word)) {
            result.push(word);
        }
        wordSet.add(word);
    }
    return result;
};

// eslint-disable-next-line
console.log(findAllConcatenatedWordsInADict(['cat', 'cats', 'catsdogcats', 'dog', 'dogcatsdog', 'hippopotamuses', 'rat', 'ratcatdogcat']));
