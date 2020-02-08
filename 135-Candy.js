/**
 * https://leetcode.com/problems/candy/
 *
 * @file 135-Candy.js
 * @author heyunfeng
 */

/**
 * Candy
 *
 * @param {number[]} ratings 评分
 * @return {number}
 */
var candy = function (ratings) {
    const len = ratings.length;
    let total = 0;
    if (len === 1) {
        return 1;
    }
    if (len === 2) {
        if (ratings[0] === ratings[1]) {
            return 2;
        }
        return 3;
    }
    let i = 0;
    let j = len - 1;
    const candysi = Array.from({length: len}).map(() => 1);
    const candysj = Array.from({length: len}).map(() => 1);
    while (i < len - 1) {
        if (ratings[i + 1] > ratings[i]) {
            candysi[i + 1] = candysi[i] + 1;
        }
        i++;
    }
    while (j > 0) {
        if (ratings[j - 1] > ratings[j]) {
            candysj[j - 1] = candysj[j] + 1;
        }
        j--;
    }
    candysi.forEach((data, index) => total += Math.max(data, candysj[index]));
    return total;
};
