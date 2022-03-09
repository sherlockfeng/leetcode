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
var pruneTree = function (root) {
    if (!root) {
        return null;
    }
    const dfs = node => {
        if (!node) {
            return 0;
        }
        const leftVal = dfs(node.left);
        const rightVal = dfs(node.right);
        if (leftVal === 0) {
            node.left = null;
        }
        if (rightVal === 0) {
            node.right = null;
        }
        return node.val + leftVal + rightVal;
    };
    dfs(root);
    if (root.val == 0 && root.left === null && root.right === null) {
        return null;
    }
    return root;
};
