/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

function TreeNode(val, left, right) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
}
/**
 * @param {TreeNode} root
 */
var CBTInserter = function (root) {
    this.stack = [root];
    this.root = root;
    while (this.stack[0] && this.stack[0].left && this.stack[0].right) {
        let node = this.stack.shift();
        this.stack.push(node.left);
        this.stack.push(node.right);
    }
};

/**
 * @param {number} v
 * @return {number}
 */
CBTInserter.prototype.insert = function (v) {
    const parent = this.stack[0];
    const node = new TreeNode(v);
    if (!parent.left) {
        parent.left = node;
    } else {
        parent.right = node;
        this.stack.shift();
        this.stack.push(parent.left);
        this.stack.push(parent.right);
    }
    return parent.val;
};

/**
 * @return {TreeNode}
 */
CBTInserter.prototype.get_root = function () {
    return this.root;
};

/**
 * Your CBTInserter object will be instantiated and called as such:
 * var obj = new CBTInserter(root)
 * var param_1 = obj.insert(v)
 * var param_2 = obj.get_root()
 */
