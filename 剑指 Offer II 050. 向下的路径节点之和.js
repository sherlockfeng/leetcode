/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

function TreeNode(val, left, right) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
}

const ten = new TreeNode(
    10,
    new TreeNode(5, new TreeNode(3, new TreeNode(3), new TreeNode(-2)), new TreeNode(2, null, new TreeNode(1))),
    new TreeNode(-3, null, new TreeNode(11))
);
/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {number}
 */
var pathSum = function (root, targetSum) {
    const sum = [];
    const dfs = node => {
        const temp = [];
        if (!node) {
            return temp;
        }
        const left = dfs(node.left);
        const right = dfs(node.right);

        [...left, ...right].map(num => {
            temp.push(num + node.val);
        });
        temp.push(node.val);
        sum.push(...temp);
        return temp;
    };
    dfs(root);
    return sum.filter(target => target === targetSum).length;
};

var pathSum = function (root, targetSum) {
    if (!root) return 0;
    let res = 0,
        map = new Map();
    map.set(0, 1);

    function dfs(node, sum) {
        if (!node) return;
        sum = sum + node.val;
        res += map.get(sum - targetSum) || 0;
        map.set(sum, (map.get(sum) || 0) + 1);
        dfs(node.left, sum);
        dfs(node.right, sum);
        map.set(sum, map.get(sum) - 1);
    }

    return dfs(root, 0), res;
};

pathSum(ten, 8); // 3
