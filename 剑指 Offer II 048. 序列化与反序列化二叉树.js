/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

var serialize = function (root) {
    const res = [];
    const queue = [root];
    while (queue.length) {
        const node = queue.shift();
        if (!node) {
            res.push(null);
            continue;
        }
        res.push(node.val);
        queue.push(node.left);
        queue.push(node.right);
    }
    return res.join(',');
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function (data) {
    const arr = data.split(',');
    const val = arr.shift();
    if (!val) {
        return null;
    }
    const root = new TreeNode(val);
    const queue = [root];
    while (queue.length) {
        const node = queue.shift();
        const left = arr.shift();
        const right = arr.shift();
        if (left) {
            node.left = new TreeNode(left);
            queue.push(node.left);
        }
        if (right) {
            node.right = new TreeNode(right);
            queue.push(node.right);
        }
    }
    return root;
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */
