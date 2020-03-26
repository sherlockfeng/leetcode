/**
 * https://leetcode.com/problems/can-i-win/
 *
 * @file 464-Can I Win.js
 * @author heyunfeng
 */

/**
 * Can I Win
 *
 * @param {number} maxChoosableInteger 可选范围
 * @param {number} desiredTotal 目标数
 * @return {boolean}
 */
const canIWin = function (maxChoosableInteger, desiredTotal) {
    const map = {};
    const sum = (1 + maxChoosableInteger) / 2 * maxChoosableInteger;
    if (sum < desiredTotal) {
        return false;
    }
    if (sum === desiredTotal) {
        return !!(maxChoosableInteger % 2);
    }
    const select = (m, d) => {
        const key = m.join('');
        if (map[key] !== undefined) {
            return map[key];
        }
        let result = false;
        for (let i = m.length - 1; i >= 0; i--) {
            if (m[i] >= d) {
                map[key] = true;
                return true;
            }
            // eslint-disable-next-line
            const temp = [...m.slice(0, i),...m.slice(i + 1)];
            if (!select(temp, d - m[i])) {
                result = true;
                break;
            }
        }
        map[key] = result;
        return result;
    };
    const mArr = [];
    for (let i = 1; i <= maxChoosableInteger; i++) {
        mArr.push(i);
    }
    return select(mArr, desiredTotal, 1);
};

// eslint-disable-next-line
console.log(canIWin(5, 50));
