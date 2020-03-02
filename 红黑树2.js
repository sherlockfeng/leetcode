/**
 * @file 红黑树.js
 * @author heyunfeng
 */

const RED = 'RED';
const BLACK = 'BLACK';

/**
 * 节点
 *
 * @param {string|number} key 节点的key
 * @param {any} val 节点的value
 */
class Node {
    constructor(key, value, color = BLACK) {
        this.key = key;
        this.value = value;
        this.color = color;
        this.N = 1;
        this.left = this.right = null;
    }

    size() {
        return this.N;
    }
}



/**
 * 红黑树
 *
 * @param {string|number} key 根节点的key
 * @param {any} val 根节点的value
 */
class RedBlackBST {
    constructor(key, val) {
        this.root = new Node(key, val);
    }

    compare(a, b) {
        if (typeof a === 'string' && typeof b === 'string') {
            return b.localeCompare(a);
        }
        if (typeof a === 'number' && typeof b === 'number') {
            return a - b;
        }
        throw new Error('节点key错误');
    }

    size() {
        return this.nodeSize(this.root);
    }

    nodeSize(node) {
        if (node === null) {
            return 0;
        }
        return node.N;
    }

    isRed(node) {
        if (node === null) {
            return false;
        }
        return node.color === RED;
    }

    rotateLeft(node) {
        const r = node.right;
        node.right = r.left;
        r.left = node;
        r.color = node.color;
        node.color = RED;
        r.N = node.N;
        node.N = this.nodeSize(node.left) + this.nodeSize(node.right) + 1;
        return r;
    }

    rotateRight(node) {
        const l = node.left;
        node.left = l.right;
        l.right = node;
        l.color = node.color;
        node.color = RED;
        l.N = node.N;
        node.N = this.nodeSize(node.left) + this.nodeSize(node.right) + 1;
        return l;
    }

    flipColor(node) {
        node.color = RED;
        node.left.color = BLACK;
        node.right.color = BLACK;
        return node;
    }

    put(key, val) {
        this.root = this.privatePut(key, val, this.root);
        this.root.color = BLACK;
    }

    privatePut(key, val, node) {
        if (node === null) {
            return new Node(key, val, RED);
        }
        const cmp = this.compare(node.key, key);
        if (cmp < 0) {
            node.right = this.privatePut(key, val, node.right);
        }
        else if (cmp > 0) {
            node.left = this.privatePut(key, val, node.left);
        }
        else {
            node.val = val;
        }
        if (this.isRed(node.right) && !this.isRed(node.left)) {
            node = this.rotateLeft(node);
        }
        if (this.isRed(node.left) && this.isRed(node.left.left)) {
            node = this.rotateRight(node);
        }
        if (this.isRed(node.left) && this.isRed(node.right)) {
            node = this.flipColor(node);
        }
        node.N = this.nodeSize(node.left) + this.nodeSize(node.right) + 1;
        return node;
    }
}
