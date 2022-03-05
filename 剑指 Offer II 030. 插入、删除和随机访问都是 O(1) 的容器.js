/**
 * Initialize your data structure here.
 */
var RandomizedSet = function () {
    this.record = new Map();
    this.arr = [];
};

/**
 * Inserts a value to the set. Returns true if the set did not already contain the specified element.
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function (val) {
    if (this.record.has(val)) {
        return false;
    }
    this.record.set(val, this.arr.length);
    this.arr.push(val);
    return true;
};

/**
 * Removes a value from the set. Returns true if the set contained the specified element.
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function (val) {
    if (!this.record.has(val)) {
        return false;
    }
    const index = this.record.get(val);
    this.record.set(this.arr[this.arr.length - 1], index);
    this.record.delete(val);
    this.arr[index] = this.arr[this.arr.length - 1];
    this.arr.pop();
    return true;
};

/**
 * Get a random element from the set.
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function () {
    const index = Math.floor(Math.random() * this.arr.length);
    return this.arr[index];
};

/**
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */

const obj = new RandomizedSet();
const param_1 = obj.insert(1);
const param_2 = obj.remove(2);
const param_3 = obj.insert(2);
const param_4 = obj.getRandom();
const param_5 = obj.remove(1);
const param_6 = obj.insert(2);
const param_7 = obj.getRandom();

console.log(param_1, param_2, param_3, param_4, param_5, param_6, param_7);
