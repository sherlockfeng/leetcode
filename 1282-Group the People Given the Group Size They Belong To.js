/**
 * https://leetcode.com/problems/group-the-people-given-the-group-size-they-belong-to/
 *
 * @file 1282-Group the People Given the Group Size They Belong To
 * @author heyunfeng
 */

/**
 * 1282-Group the People Given the Group Size They Belong To
 *
 * @param {number[]} groupSizes 每个人位于哪个组
 * @return {[number[]]}
 */
var groupThePeople = function (groupSizes) {
    const len = groupSizes.length;
    if (!len) {
        return {};
    }
    const temp = {};
    const result = [];
    for (let i = 0; i < len; i++) {
        const key = groupSizes[i];
        if (temp[key]) {
            const last = temp[key][temp[key].length - 1];
            if (last.length === key) {
                temp[key].push([i]);
            }
            else {
                last.push(i);
            }
        }
        else {
            temp[key] = [[i]];
        }
    }
    Object.keys(temp).forEach(key => {
        result.push(...temp[key]);
    });
    return result;
};
