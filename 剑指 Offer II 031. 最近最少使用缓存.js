var Node = function (key, val) {
    this.key = key;
    this.val = val;
    this.next = null;
    this.prev = null;
};

/**
 * @param {number} capacity
 */
var LRUCache = function (capacity) {
    this.max = capacity;
    this.record = new Map();
    this.head = new Node('head', 'head');
    this.tail = new Node('tail', 'tail');
    this.head.next = this.tail;
    this.tail.prev = this.head;
};

LRUCache.prototype.removeNode = function (node) {
    const next = node.next;
    const prev = node.prev;
    prev.next = next;
    next.prev = prev;
};

LRUCache.prototype.removeNodeAndDelete = function (node) {
    this.removeNode(node);
    this.record.delete(node.key);
};

LRUCache.prototype._addHead = function (node) {
    const oldHead = this.head.next;
    this.head.next = node;
    node.prev = this.head;
    node.next = oldHead;
    oldHead.prev = node;
};

LRUCache.prototype.switchToHead = function (node) {
    this.removeNode(node);
    this._addHead(node);
};

LRUCache.prototype.addToHead = function (node) {
    if (this.record.has(node.key)) {
        this.switchToHead(node);
    } else {
        this.record.set(node.key, node);
        this._addHead(node);
    }
};

/**
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function (key) {
    if (!this.record.has(key)) {
        return -1;
    }
    const node = this.record.get(key);
    this.switchToHead(node);
    return node.val;
};

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function (key, value) {
    if (this.record.has(key)) {
        const node = this.record.get(key);
        node.val = value;
        this.switchToHead(node);
        return null;
    }

    if (this.record.size === this.max) {
        const toRemoveNode = this.tail.prev;
        this.removeNodeAndDelete(toRemoveNode);
    }
    const node = new Node(key, value);
    this.addToHead(node);
};

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */

var lRUCache = new LRUCache(2);
console.log(lRUCache.put(1, 0)); // 缓存是 {1=0}
console.log(lRUCache.put(2, 2)); // 缓存是 {1=0, 2=2}
console.log(lRUCache.get(1)); // 返回 0
console.log(lRUCache.put(3, 3)); // 该操作会使得关键字 2 作废，缓存是 {1=0, 3=3}
console.log(lRUCache.get(2)); // 返回 -1 (未找到)
lRUCache.put(4, 4); // 该操作会使得关键字 1 作废，缓存是 {4=4, 3=3}
lRUCache.get(1); // 返回 -1 (未找到)
lRUCache.get(3); // 返回 3
lRUCache.get(4); // 返回 4

let head = lRUCache.head;

let i = 0;
while (head && i < 10) {
    console.log(head.key, '===', head.val);
    i++;
    head = head.next;
}
