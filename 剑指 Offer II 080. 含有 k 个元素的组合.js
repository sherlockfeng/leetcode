/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function (n, k) {
    const result = [];
    if (k <= 0 || n <= 0) {
        return result;
    }
    const help = (index, acc) => {
        if (acc.length === k) {
            result.push([...acc]);
            return;
        }
        for (let i = index; i <= n; i++) {
            acc.push(i);
            help(i + 1, acc);
            acc.pop();
        }
    };

    help(1, []);

    return result;
};

console.log(combine(4, 2)); // [[2, 4], [3, 4], [2, 3], [1, 2], [1, 3], [1, 4]]
