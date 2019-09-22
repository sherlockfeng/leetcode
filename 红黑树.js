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
    constructor(key, val, color = BLACK) {
        this.key = key;
        this.val = val;
        this.N = 1;
        this.left = this.right = null;
        this.color = color;
    }

    /**
     * 以此节点为root的树的大小
     *
     * @return {number}
     */
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

    /**
     * 返回树大小
     *
     * @return {number}
     */
    size() {
        return this.nodeSize(this.root);
    }

    /**
     * 以此节点为root的树的大小
     *
     * @param {Node} node 根节点
     * @return {number}
     */
    nodeSize(node) {
        if (node === null) {
            return 0;
        }
        return node.N;
    }

    /**
     * 根据key值比较大小
     *
     * @param {number|string} a a节点的key
     * @param {number|string} b b节点的key
     * @return {number}
     */
    compare(a, b) {
        if (typeof a === 'string' && typeof b === 'string') {
            return b.localeCompare(a);
        }
        if (typeof a === 'number' && typeof b === 'number') {
            return a - b;
        }
        throw new Error('节点key错误');
    }

    /**
     * 返回节点类型
     *
     * @param {Node} node 节点
     * @return {boolean}
     */
    isRed(node) {
        if (node === null) {
            return false;
        }
        return node.color === RED;
    }

    /**
     * 左旋转
     *
     * @param {Node} node 节点
     * @return {Node}
     */
    rotateLeft(node) {
        const x = node.right;
        node.right = x.left;
        x.left = node;
        x.color = node.color;
        node.color = RED;
        x.N = node.N;
        node.N = this.nodeSize(node.left) + this.nodeSize(node.right) + 1;
        return x;
    }

    /**
     * 右旋转
     *
     * @param {Node} node 节点
     * @return {Node}
     */
    rotateRight(node) {
        const x = node.left;
        node.left = x.right;
        x.right = node;
        x.color = node.color;
        node.color = RED;
        x.N = node.N;
        node.N = this.nodeSize(node.left) + this.nodeSize(node.right) + 1;
        return x;
    }

    /**
     * 转换两个子节点颜色
     *
     * @param {Node} node 节点
     */
    flipColors(node) {
        node.color = RED;
        node.left.color = node.right.color = BLACK;
    }

    /**
     * 插入节点
     *
     * @param {number|string} key 插入节点的key
     * @param {any} val 插入节点的val
     */
    put(key, val) {
        this.root = this.privatePut(this.root, key, val);
        this.root.color = BLACK;
    }

    /**
     * 插入节点的具体实现
     *
     * @param {Node} node 树的根节点
     * @param {number|string} key 插入节点的key
     * @param {any} val 插入节点的val
     * @return {Node} node
     */
    privatePut(node, key, val) {
        if (node === null) {
            return new Node(key, val, RED);
        }
        const cmp = this.compare(node.key, key);
        if (cmp > 0) {
            node.right = this.privatePut(node.right, key, val);
        }
        else if (cmp < 0) {
            node.left = this.privatePut(node.left, key, val);
        }
        else {
            node.val = val;
        }
        if (this.isRed(node.right) && !this.isRed(node.left)) {
            node = this.rotateLeft(node);
        }
        if (!this.isRed(node.right) && this.isRed(node.left.left)) {
            node = this.rotateRight(node);
        }
        if (this.isRed(node.right) && this.isRed(node.left)) {
            this.flipColors(node);
        }
        node.N = this.nodeSize(node.left) + this.nodeSize(node.right) + 1;
        return node;
    }
}
