/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
    const len = nums.length;
    if (!len) {
        return 0;
    }

    if (len === 1) {
        return nums[0];
    }

    const nums1 = nums.slice(1, len);
    const nums2 = nums.slice(0, len - 1);

    const r = nums => {
        const len = nums.length;
        if (!len) {
            return 0;
        }
        const dp = [];
        dp[0] = nums[0];
        dp[1] = Math.max(nums[0], nums[1]);

        for (let i = 2; i < len; i++) {
            dp[i] = Math.max(dp[i - 1], dp[i - 2] + nums[i]);
        }
        return dp[len - 1];
    };

    return Math.max(r(nums1), r(nums2));
};

console.log(rob([2, 3, 2])); // 3
console.log(rob([1, 2, 3, 1])); // 4
console.log(rob([0])); // 0
console.log(rob([1])); // 1
