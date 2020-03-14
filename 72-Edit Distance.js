/**
 * https://leetcode.com/problems/edit-distance/
 *
 * @file 72-Edit Distance
 * @author heyunfeng
 */

/**
 * Edit Distance
 *
 * @param {string} word1 原字符串
 * @param {string} word2 目标字符串
 * @return {number}
 */
const minDistance = function (word1, word2) {
    const dp = [];
    const m = word1.length;
    const n = word2.length;
    for (let i = 0; i < m; i++) {
        dp[i] = [];
    }
    const helper = (word1, word2, i, j, dp) => {
        if (i === m) {
            return n - j;
        }
        if (j === n) {
            return m - i;
        }
        if (dp[i][j]) {
            return dp[i][j];
        }
        let res = 0;
        if (word1[i] === word2[j]) {
            return helper(word1, word2, i + 1, j + 1, dp);
        }
        const insertCun = helper(word1, word2, i, j + 1, dp);
        const deleteCun = helper(word1, word2, i + 1, j, dp);
        const replaceCun = helper(word1, word2, i + 1, j + 1, dp);
        res = Math.min(insertCun, deleteCun, replaceCun) + 1;
        dp[i][j] = res;
        return res;
    };
    return helper(word1, word2, 0, 0, dp);
};

/**
 * Edit Distance
 *
 * @param {string} word1 原字符串
 * @param {string} word2 目标字符串
 * @return {number}
 */
const minDistance = function (word1, word2) {
    const dp = [[0]];
    const m = word1.length;
    const n = word2.length;
    for (let i = 1; i <= m; i++) {
        dp[i] = [i];
    }
    for (let j = 1; j <= n; j++) {
        dp[0].push(j);
    }
    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            if (word1[i - 1] === word2[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1];
            }
            else {
                dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]) + 1;
            }
        }
    }
    return dp[m][n];
};
