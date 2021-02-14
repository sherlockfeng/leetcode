var CQueue = function () {
    this.stackEnter = [];
    this.stackLeave = [];
};

/**
 * @param {number} value
 * @return {void}
 */
CQueue.prototype.appendTail = function (value) {
    this.stackEnter.push(value);
};

/**
 * @return {number}
 */
CQueue.prototype.deleteHead = function () {
    if (!this.stackEnter.length && !this.stackLeave.length) {
        return -1;
    }
    if (this.stackLeave.length) {
        return this.stackLeave.pop();
    }
    while (this.stackEnter.length) {
        this.stackLeave.push(this.stackEnter.pop());
    }
    return this.stackLeave.pop();
};

/**
 * Your CQueue object will be instantiated and called as such:
 * var obj = new CQueue()
 * obj.appendTail(value)
 * var param_2 = obj.deleteHead()
 */

var obj = new CQueue();
obj.appendTail(1);
obj.appendTail(2);
console.log(obj);
var param_2 = obj.deleteHead();
console.log(param_2);
