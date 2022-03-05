var Node = function (val) {
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
    this.head = new Node();
    this.tail = new Node();
    this.head.next = this.tail;
    this.tail.prev = this.head;
};

LRUCache.prototype.removeNode = function (node) {
    node.prev.next = node.next;
    node.next.prev = node.prev;
    this.record.delete(node.key);
};

LRUCache.prototype.addToHead = function (node) {
    const oldHead = this.head.next;
    if (this.record[node.key]) {
        this.removeNode(node);
    }
    this.head.next = node;
    node.prev = this.head;
    node.next = oldHead;
    oldHead.prev = node;
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
    this.addToHead(node);
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
        this.addToHead(node);
        return null;
    }
    if (this.record.size === this.max) {
        const toRemoveNode = this.tail.prev;
        this.removeNode(toRemoveNode);
    }
    const node = new Node(value);
    this.record[key] = node;
    this.addToHead(node);
};

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
