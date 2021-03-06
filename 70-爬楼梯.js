/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
    if (n < 2) {
        return 1;
    }
    let temp = {};
    let a, b;
    const trans = n => {
        if (n >= 2) {
            if (temp[n - 1]) {
                a = temp[n - 1];
            } else {
                a = trans(n - 1);
                temp[n - 1] = a;
            }
            if (temp[n - 2]) {
                b = temp[n - 2];
            } else {
                b = trans(n - 2);
                temp[n - 2] = b;
            }
            return a + b;
        } else if (n >= 0) {
            return 1;
        }
    };
    return trans(n);
};

/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
    if (n < 4) {
        return n;
    }
    let a = 2;
    let b = 3;
    let temp = 0;
    for (let i = 4; i <= n; i++) {
        temp = a + b;
        a = b;
        b = temp;
    }
    return b;
};

climbStairs(10);
