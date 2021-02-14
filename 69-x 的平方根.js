/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
    if (x < 2) {
        return x;
    }
    let left = 1;
    let right = x >> 1;
    let mid = left + ((right - left) >> 1);
    while (left <= right) {
        mid = left + ((right - left) >> 1);
        if (mid * mid === x) {
            return mid;
        }
        if (mid * mid < x) {
            left = mid + 1;
        }
        if (mid * mid > x) {
            right = mid - 1;
        }
    }
    return right;
};
