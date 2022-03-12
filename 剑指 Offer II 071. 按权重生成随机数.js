/**
 * @param {number[]} w
 */
var Solution = function (w) {
    this.total = 0;
    this.arr = [];
    for (const n of w) {
        this.total += n;
        this.arr.push(this.total);
    }
};

/**
 * @return {number}
 */
Solution.prototype.pickIndex = function () {
    const r = Math.floor(Math.random() * this.total);
    if (r === 0) {
        return 0;
    }
    let start = 0;
    let end = this.arr.length - 1;

    while (start < end) {
        const mid = Math.floor((start + end) / 2);
        if (this.arr[mid] === r) {
            return mid + 1;
        } else if (this.arr[mid] < r) {
            start = mid + 1;
        } else {
            end = mid;
        }
    }
    return end;
};

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(w)
 * var param_1 = obj.pickIndex()
 */

var obj = new Solution([1, 3]);
console.log(obj.pickIndex());
