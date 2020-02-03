/**
 * https://leetcode.com/problems/divide-array-in-sets-of-k-consecutive-numbers/
 *
 * @file 1296-Divide Array in Sets of K Consecutive Numbers.js
 * @author heyunfeng
 */

/**
 * Divide Array in Sets of K Consecutive Numbers
 *
 * @param {number[]} nums 被切分的数组
 * @param {number} k 切分长度
 * @return {boolean}
 */
var isPossibleDivide = function (nums, k) {
    if (nums.length % k !== 0) {
        return false;
    }
    nums.sort((a, b) => a - b);
    const len = nums.length / k;
    for (let i = 0; i < len; i++) {
        let curMin = nums[0];
        nums.splice(0, 1);
        for (let j = 1; j < k; j++) {
            const index = nums.indexOf(curMin + j);
            if (index === -1) {
                return false;
            }
            nums.splice(index, 1);
        }
    }
    return true;
};

/**
 * Divide Array in Sets of K Consecutive Numbers
 *
 * @param {number[]} nums 被切分的数组
 * @param {number} k 切分长度
 * @return {boolean}
 */
var isPossibleDivide = function (nums, k) {
    if (nums.length % k !== 0) {
        return false;
    }
    const flag = new Map();
    for (let i = 0; i < nums.length; i++) {
        if (flag.get(nums[i])) {
            flag.set(nums[i], flag.get(nums[i]) + 1);
        }
        else {
            flag.set(nums[i], 1);
        }
    }
    for (let key of flag.keys()) {
        let start = flag.get(key);
        if (start === 0) {
            continue;
        }
        while (flag.get(--key)) {}
        start = ++key;
        flag.set(start, flag.get(start) - 1);
        for (let i = 1; i < k; i++) {
            if (flag.get(start + i) === 0) {
                return false;
            }
            flag.set(start + i, flag.get(start + i) - 1);
        }
    }
    return true;
};
