function upzip(str) {
    let result = '';
    const stack = [];
    for (let i = 0; i < str.length; i++) {
        const c = str[i];
        if (c !== '[' && stack.length === 0) {
            result += c;
            continue;
        }
        if (c === '[') {
            stack.push([]);
            continue;
        }
        if (c === ']') {
            const t = stack.pop();
            const n = t.shift();
            let r = t.join('');
            let tR = r;
            for (let j = 1; j < n; j++) {
                tR += r;
            }
            if (!stack.length) {
                result += tR;
            }
            else {
                stack[stack.length - 1].push(tR);
            }
            continue;
        }
        const len = stack.length;
        stack[len - 1].push(c);
    }
    return result;
};

console.log(upzip('ABC[3OJ]'));
console.log(upzip('[2ABC]OJ[4CODE]'));
console.log(upzip('[3C[2AB]]'));