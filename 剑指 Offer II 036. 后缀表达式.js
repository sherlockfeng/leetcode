/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function (tokens) {
    const stack = [];
    for (const t of tokens) {
        if (['+', '-', '*', '/'].includes(t)) {
            const last = +stack.pop();
            const lastTwo = +stack.pop();
            // console.log(last, lastTwo, stack);
            switch (t) {
                case '+':
                    stack.push(last + lastTwo);
                    break;
                case '-':
                    stack.push(lastTwo - last);
                    break;
                case '*':
                    stack.push(last * lastTwo);
                    break;
                case '/':
                    stack.push(parseInt(lastTwo / last, 10));
                    break;
            }
        } else {
            stack.push(t);
        }
        // console.log('stack', stack);
    }
    return stack[0];
};

console.log(evalRPN(['2', '1', '+', '3', '*']));
console.log(evalRPN(['4', '13', '5', '/', '+']));
console.log(evalRPN(['10', '6', '9', '3', '+', '-11', '*', '/', '*', '17', '+', '5', '+']));
console.log(evalRPN(['4', '13', '5', '/', '+']));
