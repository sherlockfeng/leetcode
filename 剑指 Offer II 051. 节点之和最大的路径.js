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
var maxPathSum = function (root) {
    let ans = Number.MIN_SAFE_INTEGER;
    const dfs = node => {
        if (!node) {
            return 0;
        }
        const left = dfs(node.left);
        const right = dfs(node.right);

        const max = Math.max(left + node.val, right + node.val, node.val);

        ans = Math.max(ans, max, left + right + node.val);

        return Math.max(max, 0);
    };
    dfs(root);
    return ans;
};
