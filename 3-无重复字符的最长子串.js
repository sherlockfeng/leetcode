/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let result = [];
    let max = 0;
    if (s.length < 2) {
        return s.length;
    }
    for (let i = 0; i < s.length; i++) {
        const n = s[i];
        const index = result.indexOf(n);
        if (index === -1) {
            result.push(n);
            if (i === s.length - 1) {
                max = Math.max(max, result.length);
            }
        } else {
            max = Math.max(max, result.length);
            result = result.slice(index + 1);
            result.push(n);
        }
    }
    return max;
};

console.log(lengthOfLongestSubstring('anviaj'));
