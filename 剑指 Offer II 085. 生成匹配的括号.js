/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
    const result = [];

    const help = (open, close, acc) => {
        if (open < close || open > n) {
            return;
        }
        if (open === n && close === n) {
            result.push(acc);
        }

        help(open + 1, close, `${acc}(`);
        help(open, close + 1, `${acc})`);
    };

    help(0, 0, '');

    return result;
};

console.log(generateParenthesis(3)); // ["((()))","(()())","(())()","()(())","()()()"]
