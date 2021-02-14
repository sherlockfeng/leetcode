/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
    const len = height.length;
    if (height.length < 3) {
        return 0;
    }
    let result = 0;
    const left = [height[0]];
    const right = [];
    right[len - 1] = height[len - 1];

    for (let i = 1; i < len; i++) {
        left[i] = Math.max(height[i], left[i - 1]);
    }
    for (let j = len - 2; j >= 0; j--) {
        right[j] = Math.max(height[j], right[j + 1]);
    }
    for (let i = 0; i < len; i++) {
        result += Math.min(left[i], right[i]) - height[i];
    }
    console.log(result);
    return result;
};

/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
    const stack = [];
    const empty = () => !stack.length;
    const peak = () => (empty() ? undefined : stack[stack.length - 1]);

    let i = 0;
    let result = 0;
    while (i < height.length) {
        while (!empty() && height[peak()] < height[i]) {
            const top = stack.pop();
            if (empty()) {
                break;
            }
            const width = i - peak() - 1;
            const h = Math.min(height[peak()], height[i]);
            result += width * (h - height[top]);
        }
        stack.push(i);
        i++;
    }
    console.log(result);
    return result;
};

/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
    let result = 0;
    let left = 0;
    let right = height.length - 1;
    let lMax = 0;
    let rMax = 0;

    while (left < right) {
        if (height[left] < height[right]) {
            if (height[left] > lMax) {
                lMax = height[left];
            } else {
                result += lMax - height[left];
            }
            left++;
        } else {
            if (height[right] > rMax) {
                rMax = height[right];
            } else {
                result += rMax - height[right];
            }
            right--;
        }
    }
    return result;
};
trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]);

const maxWater = arr => {
    const len = arr.length;
    let result = 0;

    if (len < 3) {
        return result;
    }
    const stack = [];
    const top = () => stack[stack.length - 1];
    const empty = () => !stack.length;

    for (let i = 0; i < len; i++) {
        while (!empty() && arr[i] > arr[top()]) {
            const t = top();
            stack.pop();
            if (empty()) {
                break;
            }
            const h = Math.min(arr[top()], arr[i]) - arr[t];
            const w = i - top() - 1;
            result += h * w;
        }
        stack.push(i);
    }
    return result;
};

maxWater([3, 1, 2, 5, 2, 4]);
