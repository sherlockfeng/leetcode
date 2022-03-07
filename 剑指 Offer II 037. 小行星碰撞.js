/**
 * @param {number[]} asteroids
 * @return {number[]}
 */

// 可以先不pop，比较之后再决定，这样就不用再 push 了，逻辑会简单一点
var asteroidCollision = function (asteroids) {
    const left = [];
    const same = (left, right) => {
        return (left < 0 && right < 0) || (left > 0 && right > 0);
    };
    for (const n of asteroids) {
        if (!left.length || same(n, left[left.length - 1])) {
            left.push(n);
            continue;
        }
        if (n > 0 && left[left.length - 1] < 0) {
            left.push(n);
            continue;
        }
        // console.log('left', left);
        // console.log('n', n);
        while (left.length) {
            const p = left.pop();
            if (same(p, n)) {
                left.push(p);
                left.push(n);
                break;
            }
            if (p * -1 === n) {
                break;
            }
            if (-1 * n > p) {
                if (!left.length) {
                    left.push(n);
                    break;
                }
                continue;
            }
            left.push(p);
            break;
        }
    }
    return left;
};

console.log(asteroidCollision([5, 10, -5])); // [5,10]
console.log(asteroidCollision([8, -8])); // []
console.log(asteroidCollision([10, 2, -5])); // [10]
console.log(asteroidCollision([-2, -1, 1, 2])); // [-2,-1,1,2]
console.log(asteroidCollision([-2, -2, 1, -2])); // [ -2, -2, -2 ]
console.log(asteroidCollision([1, -2, -2, -2])); // [-2,-2,-2]
