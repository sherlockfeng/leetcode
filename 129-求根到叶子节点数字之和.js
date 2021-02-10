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
var sumNumbers = function(root) {
    let result = 0;
    const countSum = (node, sum) => {
        sum += `${node.val}`;
        if (node.left) {
            countSum(node.left, sum);
        }
        if (node.right) {
            countSum(node.right, sum);
        }
        if (!node.left && !node.right) {
            result += +sum;
        }
    }
    countSum(root, 0);
    return result
};