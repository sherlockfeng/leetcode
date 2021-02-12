/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
    if (!root) {
        return [];
    }
    const result = [];
    const ds = (nodes, index) => {
        const nextNodes = [];
        nodes.forEach(node => {
            if (!result[index]) {
                result[index] = [];
            }
            result[index].push(node.val);
            node.left && (nextNodes.push(node.left));
            node.right && (nextNodes.push(node.right));
        });
        ds(nextNodes, index + 1);
    }
    ds([root], 0);
    return result;
};
