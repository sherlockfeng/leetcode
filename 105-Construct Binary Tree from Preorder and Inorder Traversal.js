/**
 * https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/
 *
 * @file 105-Construct Binary Tree from Preorder and Inorder Traversal
 * @author heyunfeng
 */

/**
 * Definition for a binary tree node.
 **/
function TreeNode(val, left, right) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
}

/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
const buildTree = function (preorder, inorder) {
    const buildT = (preStart, inStart, inEnd, preorder, inorder) => {
        if (preStart === preorder.length || inStart > inEnd) {
            return null;
        }
        const root = new TreeNode(preorder[preStart]);
        const inIndex = inorder.indexOf(preorder[preStart]);
        root.left = buildT(preStart + 1, inStart, inIndex - 1, preorder, inorder);
        root.right = buildT(preStart + 1 + inIndex - inStart, inIndex + 1, inEnd, preorder, inorder);
        return root;
    };
    return buildT(0, 0, inorder.length - 1, preorder, inorder);
};

// eslint-disable-next-line
console.log(buildTree([3, 9, 20, 15, 7], [9, 3, 15, 20, 7]));
