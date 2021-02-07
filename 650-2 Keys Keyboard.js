/**
 * @file 650-2 Keys Keyboard
 * @author heyunfeng
 * https://leetcode.com/problems/2-keys-keyboard/
 */

/**
 * 2 Keys Keyboard
 *
 * @param {number} n 输出长度
 * @return {number} 最小步数
 */
const minSteps = function (n) {
    if (n === 1) {
        return 0;
    }
    const getCount = (n, num) => {
        const half = Math.floor(n / 2 + 1);
        let temp = 0;
        for (let i = 2; i < half; i++) {
            if (n % i === 0) {
                num += i;
                temp = i;
                break;
            }
        }
        if (temp) {
            return getCount(n / temp, num);
        }
        num += n;
        return num;
    };

    return getCount(n, 0);
};

console.log(minSteps(18));
