/**
 * @param {string} s
 * @return {string[]}
 */
var restoreIpAddresses = function (s) {
    const result = [];
    const stack = [];

    const help = start => {
        if (stack.length > 4) {
            return;
        }
        if (start === s.length && stack.length === 4) {
            const str = stack.join('.');
            result.push(str);
            return;
        }
        for (let i = start; i < s.length; i++) {
            const str = s.substring(start, i + 1);
            if (+str > 255 || (str.length > 1 && str[0] === '0')) {
                break;
            }
            stack.push(str);
            help(i + 1);
            stack.pop();
        }
    };

    help(0);

    return result;
};

console.log(restoreIpAddresses('25525511135')); // ["255.255.11.135","255.255.111.35"]
console.log(restoreIpAddresses('0000')); // ["0.0.0.0"]
console.log(restoreIpAddresses('1111')); // ["1.1.1.1"]
