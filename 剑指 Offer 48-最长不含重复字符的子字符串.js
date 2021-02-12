/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    if (s.length < 2) {
        return s.length;
    }

    let end = 1;
    let max = 0;
    let result = [s[0]];
    while (end < s.length) {
        const index = result.indexOf(s[end]);
        if (index !== -1) {
            max = Math.max(max, result.length);
            result = result.slice(index + 1);
        }
        result.push(s[end]);
        if (end === s.length - 1) {
            max = Math.max(max, result.length);
        }

        end++;
    }
    console.log(max);
    max = Math.max(max, result.length);
    return max;
};

lengthOfLongestSubstring('au');
