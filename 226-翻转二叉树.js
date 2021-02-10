/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var invertTree = function(root) {
    const it = node => {
        if (!node) {
            return node;
        }
        if (node.left || node.right) {
            const temp = node.left;
            node.left = node.right;
            node.right = temp;
        }
        if (node.left) {
            it (node.left);
        }
        if (node.right) {
            it(node.right);
        }
    }
    it(root);
    return root;
};