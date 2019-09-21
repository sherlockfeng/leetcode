/**
* @file 工具函数.js
* @author heyunfeng
*/

/**
 * 数组最长递增子序列
 *
 * @export
 * @param {Array<number|string>} nums 需要求的数组
 * @return {Array<number|string>} 最长递增子序列数组
 */

export const lis = nums => {
    let result = [];
    let source = [];
    const len = nums.length;
    let max = 0;
    let maxIndex = 0;
    for (let i = len - 1; i >= 0; i--) {
        source[i] = 1;
        const value = nums[i];
        for (let j = i + 1; j < len; j++) {
            if (value < nums[j]) {
                if (source[j] + 1 > source[i]) {
                    source[i] += source[j];
                }
            }
        }
        if (source[i] > max) {
            maxIndex = i;
            max = source[i];
        }
    }
    result.push(nums[maxIndex]);
    for (let i = maxIndex + 1; i < len; i++) {
        if (source[i] === max - 1) {
            result.push(nums[i]);
            max--;
            continue;
        }
    }
    return result;
};
