// [3,1,6,4,5,2]
// 对于任意子序列可以计算一个X值
// X=sum(subArray) * min(subArray)
// 求最大X（2020.07 字节跳动-商业化-前端

const max = nums => {
    const stack = [];
    const len = nums.length;

    const empty = () => !stack.length;
    const peak = () => (empty() ? undefined : stack[stack.length - 1]);
    const dp = [0];

    let result = Number.MIN_SAFE_INTEGER;

    for (let i = 1; i <= len; i++) {
        dp[i] = dp[i - 1] + nums[i - 1];
    }

    for (let i = 0; i < len; i++) {
        while (!empty() && nums[peak()] >= nums[i]) {
            const top = nums[peak()];
            stack.pop();
            const left = empty() ? -1 : peak();
            const r = i;
            const dist = dp[r] - dp[left + 1];
            result = Math.max(dist * top, result);
        }
        stack.push(i);
    }

    while (!empty()) {
        const top = nums[peak()];
        stack.pop();
        const left = empty() ? -1 : peak();
        const dist = dp[len] - dp[left + 1];
        result = Math.max(dist * top, result);
    }
    return result;
};

max([3, 1, 6, 4, 5, 2]);
