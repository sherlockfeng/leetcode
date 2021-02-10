/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function (nums, k) {
    const swap = (nums, left, right) => {
        [nums[left], nums[right]] = [nums[right], nums[left]];
    };
    const getParent = current => Math.floor((current - 1) / 2);
    const down = (nums, start, end) => {
        let left = start * 2 + 1;
        let right = start * 2 + 2;
        while (left < end) {
            let largeIndex = left;
            if (nums[right] > nums[left] && right < end) {
                largeIndex = right;
            }
            if (nums[start] > nums[largeIndex]) {
                largeIndex = start;
            }
            if (largeIndex === start) {
                break;
            }
            swap(nums, largeIndex, start);
            start = largeIndex;
            left = start * 2 + 1;
            right = start * 2 + 2;
        }
    };
    let result = 0;
    let current = 1;
    let parent = getParent(current);
    for (let i = 1; i < nums.length; i++) {
        current = i;
        parent = getParent(current);
        while (nums[parent] < nums[current] && current >= 0) {
            swap(nums, parent, current);
            current = parent;
            parent = getParent(current);
        }
    }
    for (let i = 1; i < k; i++) {
        const end = nums.length - i;
        swap(nums, 0, end);
        down(nums, 0, end);
        if (i === k - 1) {
            result = nums[0];
        }
    }
    return result;
};

console.log(findKthLargest([3,2,3,1,2,4,5,5,6], 4));
