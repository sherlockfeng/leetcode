/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function (temperatures) {
    const n = temperatures.length;
    const result = new Array(n).fill(0);
    const stack = [];
    for (let i = 0; i < temperatures.length; i++) {
        let l = stack.length;
        while (l && temperatures[stack[l - 1]] < temperatures[i]) {
            // console.log('num', temperatures[i]);
            // console.log('stack 2', stack);
            // console.log('l', l, stack[l - 1]);
            result[stack[l - 1]] = i - stack[l - 1];
            // console.log('result', result);
            stack.pop();
            l--;
        }
        stack.push(i);
        // console.log('stack 3', stack);
    }
    return result;
};

console.log(dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73])); // [1,1,4,2,1,1,0,0]
console.log(dailyTemperatures([30, 40, 50, 60])); // [1, 1, 1, 0]
console.log(dailyTemperatures([30, 60, 90])); // [1, 1, 0]
