/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

// 快排 todo
var findKthLargest = function (nums, k) {
    const swap = (arr, left, right) => {
        [arr[left], arr[right]] = [arr[right], arr[left]];
    };

    const findIndex = (arr, left, right) => {
        const pivot = arr[right - 1];

        let index = left - 1;
        for (let j = left; j < right - 1; j++) {
            if (arr[j] <= pivot) {
                index++;
                swap(arr, index, j);
            }
        }
        swap(arr, index + 1, right - 1);

        return index + 1;
    };
    const quickSort = (arr, left, right) => {
        if (left < right - 1) {
            const index = findIndex(arr, left, right);
            quickSort(arr, left, index);
            quickSort(arr, index + 1, right);
        }
        return arr;
    };

    quickSort(nums, 0, nums.length);

    return nums[nums.length - k];
};

console.log(findKthLargest([3, 2, 1, 5, 6, 4], 2));
