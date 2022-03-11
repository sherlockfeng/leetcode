/**
 * Initialize your data structure here.
 */
var MapSum = function () {
    this.obj = {};
};

/**
 * @param {string} key
 * @param {number} val
 * @return {void}
 */
MapSum.prototype.insert = function (key, val) {
    this.obj[key] = val;
};

/**
 * @param {string} prefix
 * @return {number}
 */
MapSum.prototype.sum = function (prefix) {
    let result = 0;

    // 将 prefix 前缀 存入前缀树
    const root = {};
    let cur = root;
    for (const s of prefix) {
        if (!cur[s]) {
            cur[s] = {};
        }
        cur = cur[s];
    }
    cur.flag = true; // 标记

    // 遍历对象中的属性，是否以 prefix 为前缀
    for (const key in this.obj) {
        let current = root;
        for (const s of key) {
            if (!current[s]) {
                break;
            }
            current = current[s];
        }
        if (current.flag) {
            result += this.obj[key];
        }
    }
    return result;
};

/**
 * Your MapSum object will be instantiated and called as such:
 * var obj = new MapSum()
 * obj.insert(key,val)
 * var param_2 = obj.sum(prefix)
 */

var obj = new MapSum();
obj.insert('apple', 3);
var param_2 = obj.sum('ap');
console.log(param_2);
obj.insert('app', 2);
var param_3 = obj.sum('ap');
console.log(param_3);
