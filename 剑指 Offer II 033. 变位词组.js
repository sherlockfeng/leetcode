/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
    const map = new Map();
    const result = [];
    for (const str of strs) {
        const orderStr = str.split('').sort().join();
        // console.log('orderStr', str, orderStr);
        // console.log('result', result);
        // console.log('map', map);
        if (map.has(orderStr)) {
            result[map.get(orderStr)].push(str);
        } else {
            map.set(orderStr, result.length);
            result.push([str]);
        }
    }
    return result;
};

console.log(groupAnagrams(['eat', 'tea', 'tan', 'ate', 'nat', 'bat']));
