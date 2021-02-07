/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function (num1, num2) {
    const len1 = num1.length;
    const len2 = num2.length;

    const result = new Array(len1 + len2).fill(0);
    for (let i = 0; i < len1; i++) {

        for (let j = 0; j < len2; j++) {
            result[i + j + 1] += Number(num1[i]) * Number(num2[j]);
        }
    }


    for (let i = len1 + len2 - 1; i >= 0; i--) {
        const carry = Math.trunc(result[i] / 10);
        if (carry) {
            result[i - 1] += carry;
        }
        result[i] = result[i] % 10;
    }
    while (result[0] === 0) {
        result.shift();
    }
    return result.join('') || '0';
};

const r = multiply('123', '456');
console.log(r);
console.log(123 * 456)
