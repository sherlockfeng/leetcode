/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function(nums) {
    const len = nums.length;
    if (len === 1) {
        return [[], nums];
    }
    nums.sort();
    let res = [[], [nums[0]]];
    let j = 0;
    let a = 2;
    for (let i = 1; i < len; i++) {
        let temp = [];
        if (nums[i] === nums[i - 1]) {
            if (!j) {
                j = res.length / 2;
                a = j;
            }
            else {
                j += a;
            }
        }
        else {
            j = 0;
        }
        for (let k = j; k < res.length; k++) {
            let a = res[k].slice(0);
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
var subsetsWithDup = function(nums) {

    let res = [];
    const len = nums.length;
    nums.sort();
    
    dfs([], 0);
    
    function dfs(tmp, leves) {
        if (leves === len) {
            res.push(tmp.slice(0));
            return;
        }
        if (leves === 0 || tmp[tmp.length - 1] !== nums[leves]) {
            dfs(tmp.slice(0), leves + 1);        
        }
        tmp.push(nums[leves]);
        dfs(tmp, leves + 1);
    }

    return res;
};
