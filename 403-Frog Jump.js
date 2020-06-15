/**
 * https://leetcode.com/problems/frog-jump/
 *
 * @file 403-Frog Jump
 * @author heyunfeng
 */

/**
 * Frog Jump
 *
 * @param {number[]} stones 🐸可以跳的地方
 * @return {boolean}
 */
const canCross = function (stones) {
    const len = stones.length;
    const dp = Array.from({length: len}).map(() => []);
    const result = [true];
    dp[0] = [0];
    for (let i = 1; i < len; i++) {
        for (let j = i - 1; j >= 0; j--) {
            if (!result[j]) {
                continue;
            }
            const jumps = dp[j];
            const diff = stones[i] - stones[j];
            if (jumps.some(step => ~[step - 1, step, step + 1].indexOf(diff))) {
                result[i] = true;
                dp[i].push(diff);
            }
        }
    }
    return !!result[len - 1];
};

// eslint-disable-next-line
console.log(canCross([0, 1, 2, 3, 4, 8, 9, 11]));
