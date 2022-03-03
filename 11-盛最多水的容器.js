/**
 * @param {number[]} height
 * @return {number}
 */
const maxArea = height => {
    const len = height.length;
    let max = 0;
    for (let i = 0; i < len - 1; i++) {
        for (let j = len - 1; j > i; j--) {
            if (height[j] >= height[i]) {
                max = Math.max(max, (j - i) * height[i]);
                break;
            }
        }
    }
    for (let i = len - 1; i > 0; i--) {
        for (let j = 0; j < i; j++) {
            if (height[j] >= height[i]) {
                max = Math.max(max, (i - j) * height[i]);
                break;
            }
        }
    }
    return max;
};

/**
 * @param {number[]} height
 * @return {number}
 */
const maxArea = height => {
    const len = height.length;
    let max = 0;
    let left = 0;
    let right = len - 1;
    while (left < right) {
        max = Math.max(Math.min(height[left], height[right]) * (right - left), max);
        if (height[left] <= height[right]) {
            left++;
        } else {
            right--;
        }
    }
    return max;
};

console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]));
console.log(maxArea([1, 1]));
console.log(maxArea([4, 3, 2, 1, 4]));
console.log(maxArea([1, 2, 1]));
