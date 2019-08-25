/**
* @file 排序数组.js
* @author heyunfeng
*/

/**
* @param {number[]} nums  需要排序的数组
* @return {number[]}  排序后的数组
* 选择排序
*/

var sortArray = function (nums) {
    let len = nums.length;
    const change = (a, b) => {
        let c = nums[b];
        nums[b] = nums[a];
        nums[a] = c;
    };
    for (let i = 0; i < len; i++) {
        let min = i;
        for (let j = i + 1; j < len; j++) {
            if (nums[j] <= nums[min]) {
                min = j;
            }
        }
        change(i, min);
    }
    return nums;
};

/**
* @param {number[]} nums  需要排序的数组
* @return {number[]}  排序后的数组
* 插入排序 直接交换的超时了
*/

var sortArray = function (nums) {
    let len = nums.length;
    for (let i = 1; i < len; i++) {
        let temp = nums[i];
        let j = i;
        while (j > 0) {
            if (temp >= nums[j - 1]) {
                break;
            }
            nums[j] = nums[j - 1];
            j--;
        }
        nums[j] = temp;
    }
    return nums;
};

/**
* @param {number[]} nums  需要排序的数组
* @return {number[]}  排序后的数组
* 希尔排序
*/

var sortArray = function (nums) {
    let len = nums.length;
    let h = 1;
    while (h < len / 3) {
        h = 3 * h + 1;
    }
    while (h >= 1) {
        for (let i = h; i < len; i++) {
            let temp = nums[i];
            let j = i;
            while (j >= h) {
                if (temp >= nums[j - h]) {
                    break;
                }
                nums[j] = nums[j - h];
                j -= h;
            }
            nums[j] = temp;
        }
        h /= 3;
        h = Math.floor(h);
    }
    return nums;
};
