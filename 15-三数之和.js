/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
    const result = [];
    if (nums.length < 3) {
        return result;
    }
    nums.sort((a, b) => a - b);
    console.log(nums);
    for (let i = 0; i < nums.length - 2; i++) {
        if (nums[i] > 0) {
            break;
        }
        if (i > 0 && nums[i] === nums[i - 1]) {
            continue;
        }
        console.log('i', i, 'num', nums[i]);
        const target = -nums[i];
        let left = i + 1;
        let right = nums.length - 1;
        while (left < right) {
            console.log('left', left, 'num', nums[left]);
            console.log('right', right, 'num', nums[right]);
            if (nums[left] + nums[right] === target) {
                result.push([nums[i], nums[left], nums[right]]);
                left++;
                right--;
                while (left < right && nums[left] === nums[left - 1]) {
                    left++;
                }
                while (left < right && nums[right] === nums[right + 1]) {
                    right--;
                }
            } else if (nums[left] + nums[right] > target) {
                right--;
            } else {
                left++;
            }
        }
    }
    console.log(result);
    return result;
};

threeSum([-1, 0, 1, 2, -1, -4, -2, -3, 3, 0, 4]);
