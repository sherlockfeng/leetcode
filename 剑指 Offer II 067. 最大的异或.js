var findMaximumXOR = function (nums) {
    const root = {};
    HIGH_BIT = 30;

    const add = num => {
        let cur = root;
        for (let i = HIGH_BIT; i >= 0; i--) {
            // 数据当然是从高位开始存储(后面高位亦或取1，结果肯定是最大的)
            const bit = (num >> i) & 1;
            if (!cur[bit]) {
                cur[bit] = {};
            }
            cur = cur[bit];
        }
    };

    const check = num => {
        let res = 0;
        let cur = root;
        for (let i = 30; i >= 0; i--) {
            let bit = (num >> i) & 1;
            if (cur[1] && 1 ^ (bit == 1)) {
                res = (res << 1) + 1; // 有1取1
                cur = cur[1];
            } else if (cur[0] && 0 ^ (bit == 1)) {
                res = (res << 1) + 1; // 有1取1
                cur = cur[0];
            } else {
                // else 说明不是两个都有的，取一个有的就行
                res = res << 1;
                cur = cur[bit];
            }
        }
        return res;
    };
    add(nums[0]);

    let ans = 0;

    for (let i = 1; i < nums.length; i++) {
        ans = Math.max(ans, check(nums[i]));
        if (i === nums.length - 1) {
            break;
        }
        add(nums[i]);
    }

    return ans;
};

console.log(findMaximumXOR([3, 10, 5, 25, 2, 8]));
