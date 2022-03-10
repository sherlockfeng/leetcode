/**
 * @param {string[]} words
 * @return {number}
 */
var minimumLengthEncoding = function (words) {
    // 前缀树
    const root = {};
    let result = 0;
    words.sort((a, b) => b.length - a.length);
    for (const word of words) {
        let cur = root;
        let flag = false;
        for (let i = word.length - 1; i >= 0; i--) {
            const w = word[i];
            if (!cur[w]) {
                cur[w] = {};
                flag = true;
            }
            cur = cur[w];
        }
        flag && (result += word.length + 1);
    }
    return result;
};

console.log(minimumLengthEncoding(['time', 'me', 'bell']));
