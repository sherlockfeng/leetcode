/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    const result = [];
    const map = {
        ')': '(',
        ']': '[',
        '}': '{'
    };
    for (let v of s) {
        switch (v) {
            case '(':
            case '[':
            case '{':
                result.push(v);
                break;
            case ')':
            case ']':
            case '}':
                if (result[result.length - 1] === map[v]) {
                    result.pop();
                } else {
                    return false;
                }
        }
    }
    return !result.length;
};

isValid('()');
