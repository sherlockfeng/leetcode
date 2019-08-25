/**
 * @param {string} data
 * @return {number}
 */

function Evaluate(data) {
    let ops = [];
    let val = [];
    const handle = (ops, value) => {
        let result = +val.pop();
        let n = +value;
        switch (ops) {
            case '+':
                result = result + n;
                break;
            case '-':
                result = result - n;
                break;
            case '*':
                result = result * n;
                break;
            case '/':
                result = result / n;
                break;
        };
        val.push(result);
    }
    for (let i = 0; i < data.length; i++) {
        let eva = data[i];
        switch (eva) {
            case '(':
                break;
            case '+':
            case '-':
            case '*':
            case '/':
                ops.push(eva);
                break;
            case ')':
                handle(ops.pop(), val.pop())
                break;
            default:
                val.push(eva);
        }
    }
    return val;
};

console.log(Evaluate('(1+((2*3)+(2-1)))'));
