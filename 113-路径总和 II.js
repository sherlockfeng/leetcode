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
 * @param {number} targetSum
 * @return {number[][]}
 */
var pathSum = function (root, targetSum) {
    const result = [];
    const getSum = (node, sum, ans) => {
        sum += node.val;
        ans = [...ans, node.val];
        if (!node.left && !node.right) {
            if (sum === targetSum) {
                result.push(ans);
            }
            return;
        }
        if (node.left) {
            getSum(node.left, sum, ans);
        }
        if (node.right) {
            getSum(node.right, sum, ans);
        }
    };
    getSum(root, 0, []);
    return result;
};
