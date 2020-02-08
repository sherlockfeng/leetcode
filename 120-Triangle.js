/**
 * https://leetcode.com/problems/triangle/
 *
 * @file 120-Triangle.js
 * @author heyunfeng
 */

/**
 * 120-Triangle
 *
 * @param {[number[]]} triangle 金字塔
 * @return {number}
 */
var minimumTotal = function (triangle) {
    const len = triangle.length;
    let dp = [triangle[0][0]];
    let min = triangle[0][0];
    while (dp.length < len) {
        const row = triangle[dp.length];
        const temp = [dp[0] + row[0]];
        min = dp[0] + row[0];
        const dpLen = dp.length;
        for (let i = 1; i < dpLen; i++) {
            const minNum = row[i] + Math.min(dp[i - 1], dp[i]);
            if (minNum < min) {
                min = minNum;
            }
            temp.push(minNum);
        }
        if (dp[dpLen - 1] + row[dpLen] < min) {
            min = dp[dpLen - 1] + row[dpLen];
        }
        temp.push(dp[dpLen - 1] + row[dpLen]);
        dp = temp;
    }
    return min;
};
