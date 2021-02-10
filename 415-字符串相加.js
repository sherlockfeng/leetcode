/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function (num1, num2) {
    let result = '';
    let carry = 0;
    let l1 = num1.length - 1;
    let l2 = num2.length - 1;
    while (l1 >= 0 || l2 >= 0 || carry > 0) {
        const n1 = l1 < 0 ? 0 : num1[l1];
        const n2 = l2 < 0 ? 0 : num2[l2];

        const sum = +n1 + +n2 + carry;

        result = (sum % 10) + result;

        carry = sum > 9 ? 1 : 0;

        l1--;
        l2--;
    }

    return result;
};
