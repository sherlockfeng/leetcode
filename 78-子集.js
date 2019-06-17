/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    const len = nums.length;
    let num = Math.pow(2, len);
    let result = [];
    for (let i = 0; i < num; i++) {
        let temp = [];
        const erString = parseInt(i).toString(2).split('').reverse();
        for (let j = 0; j < erString.length; j++) {
            if (+erString[j]) {
                temp.push(nums[j]);
            }
        }
        result.push(temp);
    }
    return result;
};

console.log(subsets([0]));