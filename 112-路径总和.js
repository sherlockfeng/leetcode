/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {boolean}
 */
var hasPathSum = function (root, sum) {
    let result = false;
    const countSum = node => {
        if (result) {
            return;
        }
        if (!node) {
            return false;
        }
        if (node.left) {
            node.left.val += node.val;
            countSum(node.left);
        }
        if (node.right) {
            node.right.val += node.val;
            countSum(node.right);
        }
        if (!node.right && !node.left) {
            if (node.val === sum) {
                result = true;
            }
        }
    }

    countSum(root)

    return result;
};
