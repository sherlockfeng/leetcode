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
var zigzagLevelOrder = function (root) {
    const result = [];
    if (!root) {
        return result;
    }
    const help = (nodes, level) => {
        if (!nodes.length) {
            return;
        }
        const newNodes = [];
        let temp = [];
        for (let n of nodes) {
            temp.push(n.val);
            n.left && newNodes.push(n.left);
            n.right && newNodes.push(n.right);
        }
        if (level % 2 !== 0) {
            temp = temp.reverse();
        }
        result.push(temp);
        level++;
        help(newNodes, level);
    };
    help([root], 0);
    return result;
};
