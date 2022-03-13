/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
    const result = [];
    const track = [];

    const help = (nums, track) => {
        if (!nums.length) {
            result.push([...track]);
            return;
        }
        for (const num of nums) {
            track.push(num);
            help(
                nums.filter(n => n !== num),
                track
            );
            track.pop();
        }
    };

    help(nums, track);

    return result;
};

console.log(permute([1, 2, 3])); // [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
console.log(permute([0, 1])); // [[0, 1], [1, 0]]
