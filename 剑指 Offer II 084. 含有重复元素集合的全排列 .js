/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function (nums) {
    const result = [];
    const track = [];

    const help = (nums, track) => {
        if (!nums.length) {
            result.push([...track]);
            return;
        }
        for (let i = 0; i < nums.length; i++) {
            if (i < nums.length - 1 && nums[i] === nums[i + 1]) {
                continue;
            }
            const num = nums[i];
            track.push(num);
            help([...nums.slice(0, i), ...nums.slice(i + 1, nums.length)], track);
            track.pop();
        }
    };

    help(
        nums.sort((a, b) => a - b),
        track
    );

    return result;
};

console.log(permuteUnique([1, 1, 2, 1])); // [[1,1,2], [1,2,1],[2,1,1]]
console.log(permuteUnique([1, 2, 3])); // [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
