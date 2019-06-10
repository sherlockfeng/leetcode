/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 * 超时了
 */
var minDistance = function(word1, word2) {
    function recursion(a, b, len1, len2) {
        if (len1 === 0) {
            return len2;
        }
        if (len2 === 0) {
            return len1;
        }
        if (a[len1 - 1] === b[len2 - 1]) {
            return recursion(a, b, len1 - 1, len2 - 1);
        }
        const m1 = recursion(a, b, len1 - 1, len2) + 1;
        const m2 = recursion(a, b, len1, len2 - 1) + 1;
        const m3 = recursion(a, b, len1 - 1, len2 - 1) + 1;
        return Math.min(m1, m2, m3);
    }
        
    return recursion(word1, word2, word1.length, word2.length);
};

/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function(word1, word2) {
    function dynamicPlanning(a, b) {
        const len1 = a.length;
        const len2 = b.length;
        let result = [[]];
        for (let j = 0; j <= len2; j++) {
            result[0].push(j);
        };
        for (let i = 1; i <= len1; i++) {
            result[i] = [i];
        };
        for (let i = 1; i <= len1; i++) {
            for (let j = 1; j <= len2; j++) {
                if (a[i-1] === b[j-1]) {
                    result[i][j] = result[i-1][j-1];
                }
                else {
                    let m1 = result[i-1][j] + 1;
                    let m2 = result[i][j-1] + 1;
                    let m3 = result[i-1][j-1] + 1;
                    result[i][j] = Math.min(m1, m2, m3);
                }
            }
        }
        return result[len1][len2];
    }
        
    return dynamicPlanning(word1, word2);
};