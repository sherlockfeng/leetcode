/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}
const head = new TreeNode(1);
// head.left = new TreeNode(9);
head.right = new TreeNode(2);

// head.left.left = new TreeNode(15);
// head.left.right = new TreeNode(7);

console.log(head);

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
        if (!nodes.length) {
            return result;
        }
        nodes.forEach(node => {
            if (!result[index]) {
                result[index] = [];
            }
            if (index % 2 === 0) {
                result[index].push(node.val);
            } else {
                result[index].unshift(node.val);
            }
            node.left && nextNodes.push(node.left);
            node.right && nextNodes.push(node.right);
        });
        ds(nextNodes, index + 1);
    };
    ds([root], 0);
    return result;
};

console.log(levelOrder(head));
