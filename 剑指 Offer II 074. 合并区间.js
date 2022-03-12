/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
    intervals.sort((a, b) => a[0] - b[0]);
    const isCross = (a, b) => a[1] >= b[0] && a[0] <= b[1];

    const result = [];

    for (const arr of intervals) {
        if (!result.length) {
            result.push(arr);
            continue;
        }
        const end = result[result.length - 1];
        if (!isCross(arr, end)) {
            result.push(arr);
            continue;
        }
        end[1] = Math.max(arr[1], end[1]);
    }

    return result;
};

console.log(
    merge([
        [1, 3],
        [2, 6],
        [8, 10],
        [15, 18]
    ])
); // [[1,6],[8,10],[15,18]]

console.log(
    merge([
        [1, 4],
        [4, 5]
    ])
); // [[1, 5]]

console.log(
    merge([
        [1, 4],
        [2, 3]
    ])
); // [[1, 4]]
