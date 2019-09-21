/**
 * @file 树.js
 * @author heyunfeng
 */

/**
 * 节点
 *
 * @param {string|number} key 节点的key
 * @param {any} val 节点的value
 */
class Node {
    constructor(key, val) {
        this.key = key;
        this.val = val;
        this.N = 1;
        this.left = this.right = null;
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
 * 二叉树
 *
 * @param {string|number} key 根节点的key
 * @param {any} val 根节点的value
 */
class BST {
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
        return a - b;
    }

    /**
     * 查找节点的val
     *
     * @param {Node} node 被查找树的根节点
     * @param {string|number} key 节点的key
     * @return {any}
     */
    get(node, key) {
        if (node === null) {
            return null;
        }
        const cmp = this.compare(node.key, key);
        if (cmp > 0) {
            return this.get(node.left, key);
        }
        if (cmp < 0) {
            return this.get(node.right, key);
        }
        return node.val;
    }

    /**
     * 插入节点
     *
     * @param {Node} node 被插入树的根节点
     * @param {string|number} key 插入节点的key
     * @param {any} val 插入节点的val
     * @return {Node} root
     */
    put(node, key, val) {
        if (node === null) {
            return new Node(key, val);
        }
        const cmp = this.compare(node.key, key);
        if (cmp > 0) {
            node.left = this.put(node.left, key, val);
        }
        else if (cmp < 0) {
            node.right = this.put(node.right, key, val);
        }
        else {
            node.val = val;
        }
        node.N = this.nodeSize(node.left) + this.nodeSize(node.right) + 1;
        return node;
    }

    /**
     * 树最小节点
     *
     * @param {Node} node 树的根节点
     * @return {Node} node
     */
    min(node) {
        if (node.left === null) {
            return node;
        }
        return this.min(node.left);
    }

    /**
     * 树最大节点
     *
     * @param {Node} node 树的根节点
     * @return {Node} node
     */
    max(node) {
        if (node.right === null) {
            return node;
        }
        return this.min(node.right);
    }

    /**
     * 不大于key的最大节点
     *
     * @param {Node} node 树的根节点
     * @param {number|string} key 需要比较的key
     * @return {Node} node
     */
    floor(node, key) {
        if (node === null) {
            return null;
        }
        const cmp = this.compare(node.key, key);
        if (cmp === 0) {
            return node;
        }
        if (cmp > 0) {
            return this.floor(node.left, key);
        }
        const result = this.floor(node.right, key);
        return result || node;
    }

    /**
     * 不小于key的最小节点
     *
     * @param {Node} node 树的根节点
     * @param {number|string} key 需要比较的key
     * @return {Node} node
     */
    ceiling(node, key) {
        if (node === null) {
            return null;
        }
        const cmp = this.compare(node.key, key);
        if (cmp === 0) {
            return node;
        }
        if (cmp < 0) {
            return this.ceiling(node.right, key);
        }
        const result = this.ceiling(node.left, key);
        return result || node;
    }

    /**
     * 找出有k个比该节点小的节点
     *
     * @param {Node} node 被查找树的根节点
     * @param {number} k 排名
     * @return {Node} node 查找的节点
     */
    select(node, k) {
        if (node === null) {
            return null;
        }
        const t = this.nodeSize(node.left);
        if (t > k) {
            return this.select(node.left, k);
        }
        else if (t < k) {
            return this.select(node.right, k - t - 1);
        }
        return node;
    }

    /**
     * 查找key的排名
     *
     * @param {Node} node 被查找树的根节点
     * @param {number} key 需要查找的key
     * @return {number} number 排名
     */
    rank(node, key) {
        if (node === null) {
            return 0;
        }
        const cmp = this.compare(node.key, key);
        if (cmp > 0) {
            return this.rank(node.left, key);
        }
        else if (cmp < 0) {
            return this.rank(node.right, key) + this.nodeSize(node.left) + 1;
        }
        return this.nodeSize(node.left);
    }

    /**
     * 删除最小节点
     *
     * @param {Node} node 树的根节点
     */
    deleteMin(node) {
        if (node.left) {
            node.left = this.deleteMin(node.left);
            node.N = this.nodeSize(node.left) + this.nodeSize(node.right) + 1;
            return node;
        }
        else {
            return node.right;
        }
    }

    /**
     * 删除最大节点
     *
     * @param {Node} node 树的根节点
     */
    deleteMax(node) {
        if (node.right) {
            node.right = this.deleteMax(node.right);
            node.N = this.nodeSize(node.left) + this.nodeSize(node.right) + 1;
            return node;
        }
        else {
            return node.left;
        }
    }

    /**
     * 删除指定节点
     *
     * @param {Node} node 树的根节点
     * @param {number|string} key 需要删除的节点
     */
    delete(node, key) {
        if (node === null) {
            return null;
        }
        const cmp = this.compare(node.key, key);
        if (cmp > 0) {
            node.left = this.delete(node.left, key);
        }
        else if (cmp < 0) {
            node.right = this.delete(node.right, key);
        }
        else {
            if (node.right === null) {
                return node.left;
            }
            if (node.left === null) {
                return node.right;
            }
            const t = node;
            node = this.min(node.right);
            node.right = this.deleteMin(t.right);
            node.left = t.left;
        }
        node.N = this.nodeSize(node.left) + this.nodeSize(node.right) + 1;
        return node;
    }
}
