/**
* @file 格雷编码.js
* @author heyunfeng
*/

/**
* @param {number} n  n为格雷编码位数
* @return {number[]} 生成的格雷编码数组
*/
var grayCode = function (n) {
    if (n === 0) {
        return [0];
    }
    let make = n => {
        let result = [];
        if (n === 1) {
            result = [0, 1];
            return result;
        }
        let lastResult = make(n - 1);
        const len = lastResult.length;
        const max = (1 << n) - 1;
        for (let i = 0; i < len; i++) {
            result[i] = `${lastResult[i]}0`;
            result[max - i] = `${lastResult[i]}1`;
        }
        return result;
    };
    return make(n).map(item => parseInt(item,2));
};

/**
* @param {number} n  n为格雷编码位数
* @return {number[]} 生成的格雷编码数组
*/
var grayCode = function (n) {
    let result = [];
    for (let i = 0, len = 1 << n; i < len; i++) {
        result[i] = i^(i>>1);
    }
    return result;
};

console.log(grayCode(3));
