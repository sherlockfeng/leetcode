/**
 * https://leetcode.com/problems/linked-list-in-binary-tree/
 *
 * @file 1367-Linked List in Binary Tree.js
 * @author heyunfeng
 */

class ListNode {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class TreeNode {
    constructor(val) {
        this.val = val;
        this.left = this.right = null;
    }
}

// [1,4,4,null,2,2,null,1,null,6,8,null,null,null,null,1,3]
const root = new TreeNode(1);
root.left = new TreeNode(4);
root.right = new TreeNode(4);

root.left.right = new TreeNode(2);
root.left.right.left = new TreeNode(1);

root.right.left = new TreeNode(2);
root.right.left.right = new TreeNode(8);
root.right.left.left = new TreeNode(6);


root.right.left.right.left = new TreeNode(1);
root.right.left.right.right = new TreeNode(3);

const head = new ListNode(4);
let temp = head;
[2, 8].forEach(num => {
    temp.next = new ListNode(num);
    temp = temp.next;
});

/**
 * 1367-Linked List in Binary Tree
 *
 * @param {ListNode} head 列表头
 * @param {TreeNode} root 树的根节点
 * @return {boolean}
 */
const isSubPath = function (head, root) {
    const start = [];

    const copyTree = tree => {
        const result = new TreeNode(tree.val);
        result.left = tree.left;
        result.right = tree.right;
        return result;
    };

    const find = (link, tree) => {
        if (link.val === null || tree.val === null) {
            return;
        }
        if (tree.val === link.val) {
            start.push(copyTree(tree));
        }
        if (tree.left !== null) {
            find(link, tree.left);
        }
        if (tree.right !== null) {
            find(link, tree.right);
        }
    };

    const check = (link, tree) => {
        if (link === null) {
            return true;
        }
        if (tree === null || (tree.left === null && tree.right === null)) {
            return false;
        }
        const left = tree.left;
        const right = tree.right;
        let resultLeft = false;
        let resultRight = false;
        if (left && left.val === link.val) {
            resultLeft = check(link.next, left);
        }
        if (right && right.val === link.val) {
            resultRight = check(link.next, right);
        }
        return resultLeft || resultRight;
    };

    find(head, root);

    if (!start.length) {
        return false;
    }

    for (let i = 0; i < start.length; i++) {
        if (start[i].left === null && start[i].right === null && head.next !== null) {
            continue;
        }
        const result = check(head.next, start[i]);
        if (result) {
            return result;
        }
    }

    return false;
};
