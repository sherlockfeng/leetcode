/**
 * https://leetcode.com/problems/longest-increasing-subsequence/
 *
 * @file 300-Longest Increasing Subsequence.js
 * @author heyunfeng
 */

/**
 * 300-Longest Increasing Subsequence
 *
 * @param {number[]} nums 数组
 * @return {number}
 */
const lengthOfLIS = function (nums) {
    const len = nums.length;
    if (!len) {
        return 0;
    }
    const dp = [1];
    let max = 1;
    for (let i = 1; i < len; i++) {
        dp[i] = 1;
        for (let j = i - 1; j >= 0; j--) {
            if (nums[i] > nums[j]) {
                dp[i] = Math.max(dp[j] + 1, dp[i]);
            }
        }
        if (dp[i] > max) {
            max = dp[i];
        }
    }
    return max;
};

/**
 * 300-Longest Increasing Subsequence
 *
 * @param {number[]} nums 数组
 * @return {number}
 */
const lengthOfLIS = function (nums) {
    const binarySearch = (data, num) => {
        let left = 0;
        let right = num.length - 1;
        while (left < right) {
            let mid = left + ~~((right - left) / 2);
            if (num[mid] < data) {
                left = mid + 1;
            }
            else if (num[mid] === data) {
                right = mid;
                break;
            }
            else {
                right = mid - 1;
            }
        }
        if (num[right] < data) {
            num[right + 1] = data;
        }
        else {
            num[right] = data;
        }
    };

    const len = nums.length;
    if (!len) {
        return 0;
    }
    const result = [nums[0]];
    for (let i = 1; i < len; i++) {
        const data = nums[i];
        if (data < result[0]) {
            result[0] = data;
            console.log(result)
            continue;
        }
        if (data > result[result.length - 1]) {
            result.push(data);
            console.log(result)
            continue;
        }
        binarySearch(data, result);
        console.log(result)
    }
    return result.length;
};

console.log(lengthOfLIS([3,5,6,2,5,4,19,5,6,7,12]))