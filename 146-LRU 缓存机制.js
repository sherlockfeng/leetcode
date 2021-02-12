const DLinkedNode = function (key, val, pre, next) {
    this.key = key ? key : null;
    this.val = val ? val : null;
    this.pre = pre ? pre : null;
    this.next = next ? next : null;
};

/**
 * @param {number} capacity
 */
var LRUCache = function (capacity) {
    this.cache = {};
    this.head = new DLinkedNode('head', 'head');
    this.tail = new DLinkedNode('tail', 'tail');
    this.head.next = this.tail;
    this.tail.pre = this.head;
    this.c = capacity;
    this.size = 0;
};

LRUCache.prototype.addToHead = function (node) {
    node.pre = this.head;
    node.next = this.head.next;
    this.head.next.pre = node;
    this.head.next = node;
};

LRUCache.prototype.removeNode = function (node) {
    node.pre.next = node.next;
    node.next.pre = node.pre;
};

LRUCache.prototype.moveToHead = function (node) {
    this.removeNode(node);
    this.addToHead(node);
};

LRUCache.prototype.removeTail = function () {
    const node = this.tail.pre;
    delete this.cache[node.key];
    this.removeNode(node);
};

/**
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function (key) {
    if (this.cache[key] === undefined) {
        return -1;
    }
    const node = this.cache[key];
    this.moveToHead(node);
    return node.val;
};

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function (key, value) {
    if (this.cache[key] === undefined) {
        const node = new DLinkedNode(key, value);
        this.cache[key] = node;
        this.addToHead(node);
        this.size++;
    } else {
        const node = this.cache[key];
        this.moveToHead(node);
        node.val = value;
    }
    if (this.size > this.c) {
        this.size--;
        this.removeTail();
    }
};
/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */

const lRUCache = new LRUCache(2);
lRUCache.put(1, 1); // 缓存是 {1=1}
console.log(lRUCache);

lRUCache.put(2, 2); // 缓存是 {1=1, 2=2}
console.log(lRUCache);

let a = lRUCache.get(1); // 返回 1
console.log(lRUCache);
console.log(a);

lRUCache.put(3, 3); // 该操作会使得关键字 2 作废，缓存是 {1=1, 3=3}
console.log(lRUCache);

let b = lRUCache.get(2); // 返回 -1 (未找到)
console.log(lRUCache);
console.log(b);

lRUCache.put(4, 4); // 该操作会使得关键字 1 作废，缓存是 {4=4, 3=3}
console.log(lRUCache);

let c = lRUCache.get(1); // 返回 -1 (未找到)
console.log(lRUCache);
console.log(c);

let d = lRUCache.get(3); // 返回 3
console.log(lRUCache);
console.log(d);

let e = lRUCache.get(4); // 返回 4
console.log(lRUCache);
console.log(e);
