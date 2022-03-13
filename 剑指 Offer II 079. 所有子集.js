/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
    const result = [[]];
    const help = (index, acc) => {
        if (index === nums.length) {
            return;
        }
        help(index + 1, [...acc]);
        acc.push(nums[index]);
        result.push([...acc]);
        help(index + 1, acc);
    };
    help(0, []);
    return result;
};

console.log(subsets([1, 2, 3])); // [[], [1], [2], [1, 2], [3], [1, 3], [2, 3], [1, 2, 3]]
console.log(subsets([0])); // [ [ 0 ], [] ]
