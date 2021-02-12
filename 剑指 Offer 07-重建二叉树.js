/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */

function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

var buildTree = function (preorder, inorder) {
    const build = (pre, ino) => {
        if (!pre.length || !ino.length) {
            return null;
        }
        const v = pre[0];
        pre.shift();
        const index = ino.indexOf(v);
        const node = new TreeNode(v);

        node.left = build(pre.slice(0, index), ino.slice(0, index));
        node.right = build(pre.slice(index), ino.slice(index + 1));
        return node;
    };
    const result = build(preorder, inorder);
    return result;
};

buildTree([1, 2, 4, 7, 3, 5, 6, 8], [4, 7, 2, 1, 5, 3, 8, 6]);
