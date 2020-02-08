/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
    const len = nums.length;
    let num = Math.pow(2, len);
    let result = [];
    for (let i = 0; i < num; i++) {
        let temp = [];
        const erString = parseInt(i, 10).toString(2).split('').reverse();
        for (let j = 0; j < erString.length; j++) {
            if (+erString[j]) {
                temp.push(nums[j]);
            }

        }
        result.push(temp);
    }
    return result;
};

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {

    let res = [];
    const len = nums.length;

    dfs([], 0);

    function dfs(tmp, leves) {
        if (leves === len) {
            res.push(tmp.slice(0));
            return;
        }

        dfs(tmp.slice(0), leves + 1);

        tmp.push(nums[leves]);
        dfs(tmp, leves + 1);
    }

    return res;
};

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {

    let res = [[]];
    const len = nums.length;
    for (let i = 0; i < len; i++) {
        let temp = [];
        for (let j = 0; j < res.length; j++) {
            let a = res[j].slice(0);
            a.push(nums[i]);
            temp.push(a);
        }
        res = res.concat(temp);
    }
    return res;
};

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
    let res = [];
    let temp = [];

    const dfs = (temp, leves) => {
        res.push(temp.slice(0));
        for (let i = leves; i < nums.length; i++) {
            temp.push(nums[i]);
            dfs(temp, i + 1);
            temp.pop();
        }
    };

    dfs(temp, 0);

    return res;

};
