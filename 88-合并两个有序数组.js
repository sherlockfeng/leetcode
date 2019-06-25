/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    let temp = nums1.concat();
    let i = j = 0;
    while (i < m && j < n) {
        if(temp[i] <= nums2[j]) {
            nums1[i + j] = temp[i];
            i++;
            continue;
        }
        nums1[i + j] = nums2[j];
        j++;
    }
    if (j === n) {
        while(i < m) {
            nums1[i + j] = temp[i];
            i++;
        }
    }
    if (i === m) {
        while(j < n) {
            nums1[i + j] = nums2[j];
            j++;
        }
    }
    return nums1;
};

/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    let i = m - 1, j = n - 1;
    while (i >= 0 && j >= 0) {
        if (nums1[i] >= nums2[j]) {
            nums1[i + j + 1] = nums1[i];
            i--;
            continue;
        }
        nums1[i + j + 1] = nums2[j];
        j--;
    }
    if (j >= 0) {
        while(j >=0 ) {
            nums1[j] = nums2[j];
            j--;
        }
    }
    return nums1;
};


console.log(merge([2, 2, 3, 0, 0, 0], 3, [1, 5, 6], 3));