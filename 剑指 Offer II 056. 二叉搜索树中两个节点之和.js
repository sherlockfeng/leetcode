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
 * @param {number} k
 * @return {boolean}
 */
// var findTarget = function (root, k) {
//     const arr = [];
//     const dfs = node => {
//         if (!node) {
//             return;
//         }
//         dfs(node.left);
//         arr.push(node.val);
//         dfs(node.right);
//     };
//     dfs(root);
//     if (arr.length === 1) {
//         return false;
//     }
//     let start = 0;
//     let end = arr.length - 1;
//     console.log('arr', arr);
//     while (start < end) {
//         const sum = arr[start] + arr[end];
//         if (sum === k) {
//             return true;
//         }
//         if (sum < k) {
//             start++;
//         } else {
//             end--;
//         }
//     }
//     return false;
// };

/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {boolean}
 */
var findTarget = function (root, k) {
    const find = (node, target) => {
        if (!node) {
            return false;
        }
        if (target === node.val) {
            return true;
        }
        return target > node.val ? find(node.right, target) : find(node.left, target);
    };
    const findSum = (node, target) => {
        if (!node) {
            return false;
        }
        return (
            (target !== 2 * node.val && find(root, target - node.val)) ||
            findSum(node.right, target) ||
            findSum(node.left, target)
        );
    };
    return findSum(root, k);
};
