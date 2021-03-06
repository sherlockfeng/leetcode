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

/**
* @param {number[]} nums  需要排序的数组
* @return {number[]}  排序后的数组
* 归并排序
*/

var sortArray = function (nums) {
    const merge = (num, lo, mid, hi) => {
        let i = lo;
        let j = mid + 1;
        let temp = [];
        for (let k = lo; k <= hi; k++) {
            temp[k] = num[k];
        }
        for (let k = lo; k <= hi; k++) {
            if (i > mid) {
                num[k] = temp[j++];
            }
            else if (j > hi) {
                num[k] = temp[i++];
            }
            else if (temp[i] < temp[j]) {
                num[k] = temp[i++];
            }
            else {
                num[k] = temp[j++];
            }
        }
    }
    const sort = (num, lo, hi) => {
        if (hi <= lo) {
            return;
        }
        let mid = Math.floor(lo + (hi - lo) / 2);
        sort(num, lo, mid);
        sort(num, mid + 1, hi);
        merge(num, lo, mid, hi);
    }
    sort(nums, 0, nums.length - 1);
    return nums;
};

/**
* @param {number[]} nums  需要排序的数组
* @return {number[]}  排序后的数组
* 自底向上归并排序
*/

var sortArray = function (nums) {
    const merge = (num, lo, mid, hi) => {
        let i = lo;
        let j = mid + 1;
        let temp = [];
        for (let k = lo; k <= hi; k++) {
            temp[k] = num[k];
        }
        for (let k = lo; k <= hi; k++) {
            if (i > mid) {
                num[k] = temp[j++];
            }
            else if (j > hi) {
                num[k] = temp[i++];
            }
            else if (temp[i] < temp[j]) {
                num[k] = temp[i++];
            }
            else {
                num[k] = temp[j++];
            }
        }
    }
    let len = nums.length;
    for (let sz = 1; sz < len; sz = sz + sz) {
        for (let lo = 0; lo < len - sz; lo += sz + sz) {
            merge(nums, lo, lo + sz - 1, Math.min(lo + sz + sz - 1, len - 1));
        }
    }
    return nums;
};

/**
* @param {number[]} nums  需要排序的数组
* @return {number[]}  排序后的数组
* 快速排序
*/

var sortArray = function (nums) {

    var insert = function (nums, lo, hi) {
        let len = hi - lo + 1;
        for (let i = lo + 1; i < len; i++) {
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
    };

    const change = (a, b) => {
        let c = nums[b];
        nums[b] = nums[a];
        nums[a] = c;
    };
    const partition = (num, lo, hi) => {
        let i = lo;
        let j = hi + 1;
        while (true) {
            while (num[++i] <= num[lo]) {
                if (i === hi) {
                    break;
                }
            }
            while (num[--j] >= num[lo]) {
                if (j === lo) {
                    break;
                }
            }
            if (i >= j) {
                break;
            }
            change(i, j);
        }
        change(lo, j);
        return j;
    };
    const sort = (num, lo, hi) => {
        if (hi <= lo + 10) {
            insert(num, lo, hi)
            return;
        }
        let j = partition(num, lo, hi);
        sort(num, lo, j - 1);
        sort(num, j + 1, hi);
    };
    sort(nums, 0, nums.length - 1);
    return nums;
};

/**
* @param {number[]} nums  需要排序的数组
* @return {number[]}  排序后的数组
* 堆排序
*/

var sortArray = function (nums) {
    let N = nums.length;
    const exch = (a, i, j) => {
        let temp = a[--i];
        a[i] = a[--j];
        a[j] = temp;
    }

    const sink = (a, k, N) => {
        while(2 * k <= N) {
            let j = 2 * k;
            if (j < N && a[j - 1] < a[j]) {
                j++;
            }
            if (a[k - 1] >= a[j - 1]) {
                break;
            }
            exch(a, j, k);
            k = j;
        }
    }

    for (let k = Math.floor(N / 2); k >= 1; k--) {
        sink(nums, k, N);
    }
    while (N > 1) {
        exch(nums, 1, N--);
        sink(nums, 1, N);
    }
    return nums;
};
