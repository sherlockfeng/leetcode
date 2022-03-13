/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
// var combinationSum2 = function (candidates, target) {
//     const result = [];
//     const track = [];
//     const flag = {};

//     const help = (start, sum) => {
//         if (sum === target) {
//             const t = [...track].sort((a, b) => a - b).join('');
//             if (!flag[t]) {
//                 flag[t] = true;
//                 result.push([...track]);
//             }
//             return;
//         }
//         if (sum > target) {
//             return;
//         }
//         for (let i = start; i < candidates.length; i++) {
//             track.push(candidates[i]);
//             help(i + 1, sum + candidates[i]);
//             track.pop();
//         }
//     };

//     help(0, 0);
//     return result;
// };

var combinationSum2 = function (candidates, target) {
    const result = [];
    const track = [];

    const help = (start, sum) => {
        if (sum === target) {
            result.push([...track]);
            return;
        }
        if (sum > target) {
            return;
        }
        for (let i = start; i < candidates.length; i++) {
            if (i - 1 >= start && candidates[i - 1] === candidates[i]) {
                continue;
            }
            track.push(candidates[i]);
            help(i + 1, sum + candidates[i]);
            track.pop();
        }
    };

    candidates.sort((a, b) => a - b);
    help(0, 0);
    return result;
};

console.log(combinationSum2([10, 1, 2, 7, 6, 1, 5], 8)); // [[1,1,6],[1,2,5],[1,7],[2,6]]
console.log(combinationSum2([2, 5, 2, 1, 2], 5)); // [[1,2,2],[5]]
