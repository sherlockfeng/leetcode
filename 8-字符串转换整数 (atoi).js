/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function (s) {
    class ZTJ {
        constructor() {
            this.ans = 0;
            this.state = 'start';
            this.sign = 1;
            this.table = {
                start: ['start', 'signed', 'number', 'end'],
                signed: ['end', 'end', 'number', 'end'],
                number: ['end', 'end', 'number', 'end'],
                end: ['end', 'end', 'end', 'end']
            };
        }

        getIndex(s) {
            if (s === ' ') {
                return 0;
            }
            if (s === '+' || s === '-') {
                return 1;
            }
            if (typeof +s === 'number' && !isNaN(s)) {
                return 2;
            }
            return 3;
        }

        put(s) {
            this.state = this.table[this.state][this.getIndex(s)];
            if (this.state === 'number') {
                this.ans = this.ans * 10 + (s - 0);
                this.ans =
                    this.sign === 1 ? Math.min(this.ans, Math.pow(2, 31) - 1) : Math.min(this.ans, -Math.pow(-2, 31));
            } else if (this.state === 'signed') {
                this.sign = s === '+' ? 1 : -1;
            }
        }
    }

    const z = new ZTJ();
    for (let c of s) {
        z.put(c);
    }
    return z.sign * z.ans;
};

myAtoi('   11333713950');
