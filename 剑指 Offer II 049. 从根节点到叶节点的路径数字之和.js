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
 * @return {number}
 */
var sumNumbers = function (root) {
    let result = 0;
    const dfs = (node, acc) => {
        if (!node) return;
        if (!node.left && !node.right) {
            result += acc * 10 + node.val;
            return;
        }
        node.left && dfs(node.left, acc * 10 + node.val);
        node.right && dfs(node.right, acc * 10 + node.val);
    };

    dfs(root, 0);
    return result;
};
