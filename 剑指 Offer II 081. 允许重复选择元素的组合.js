/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
// var combinationSum = function (candidates, target) {
//     const result = [];
//     const help = (sum, start, acc) => {
//         // console.log('sum', sum);
//         // console.log('start', start);
//         if (sum > target) {
//             return;
//         }
//         if (sum === target) {
//             result.push([...acc]);
//             return;
//         }
//         if (start > candidates.length - 1) {
//             return;
//         }
//         let temp = 0;
//         let tempAcc = acc;
//         while (temp + sum <= target) {
//             help(temp + sum, start + 1, [...tempAcc]);
//             temp += candidates[start];
//             tempAcc.push(candidates[start]);
//         }
//     };
//     help(0, 0, []);
//     return result;
// };

var combinationSum = function (candidates, target) {
    const result = [];
    const track = [];
    const help = (sum, start) => {
        if (sum > target) {
            return;
        }
        if (sum === target) {
            result.push([...track]);
            return;
        }
        for (let i = start; i < candidates.length; i++) {
            track.push(candidates[i]);
            help(sum + candidates[i], i);
            track.pop();
        }
    };
    help(0, 0);
    return result;
};

console.log(combinationSum([2, 3, 6, 7], 7)); // [[7], [2, 2, 3]]
console.log(combinationSum([2, 3, 5], 8)); // [[2,2,2,2],[2,3,3],[3,5]]
