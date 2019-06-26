/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function(root) {
    if (!root || root.val === null) {
        return 0
    }
    let result = 1;
    let deep = (root, level) => {
        if (root.left) {
            deep(root.left, level + 1);
        }
        if (root.right) {
            deep(root.right, level + 1);
        }
        if (!(root.left || root.right)) {
            result = Math.max(result, level);
        }
    };
    deep(root, 1)
    return result;
};

/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function(root) {
    if (root === null) {
        return 0
    }
    if (root !== null && root.left === null && root.right === null) {
        return 1;
    }
    return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1;
};
