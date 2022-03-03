/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxLength = function (nums) {
    let result = 0;
    const map = {0: -1};
    let sum = 0;
    for (let i = 0; i < nums.length; i++) {
        sum += nums[i] === 0 ? -1 : 1;
        // console.log(sum);
        if (!map[sum] && map[sum] !== 0) {
            map[sum] = i;
        } else {
            result < i - map[sum] && (result = i - map[sum]);
        }
    }
    // console.log(map);

    return result;
};

console.log(findMaxLength([0, 1, 0, 0,1]));
