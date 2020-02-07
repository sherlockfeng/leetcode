/**
 * https://leetcode.com/problems/unique-binary-search-trees-ii/
 *
 * @file 95-Unique Binary Search Trees II.js
 * @author heyunfeng
 */

function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

/**
 * Unique Binary Search Trees II
 *
 * @param {number} n 需要求的数
 * @return {TreeNode[]}
 */
var generateTrees = function (n) {
    const copy = (root, offset) => {
        if (!root) {
            return null;
        }
        const ret = new TreeNode(root.val + offset);
        ret.left = copy(root.left, offset);
        ret.right = copy(root.right, offset);
        return ret;
    };
    const ans = Array.from({length: n + 1}).map(() => []);
    ans[0].push(null);
    for (let i = 1; i <= n; i++) {
        for (let l = 0; l < i; l++) {
            const r = i - 1 - l;
            ans[l].forEach(left => {
                ans[r].forEach(right => {
                    const root = new TreeNode(l + 1);
                    root.left = left;
                    root.right = copy(right, l + 1);
                    ans[i].push(root);
                });
            });
        }
    }
    return ans[n];
};
