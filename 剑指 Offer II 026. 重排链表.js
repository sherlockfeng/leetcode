/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

function ListNode(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
}

const head = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5)))));
const head1 = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4))));
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function (head) {
    const reverse = head => {
        if (!head || !head.next) {
            return head;
        }
        const p = reverse(head.next);
        head.next.next = head;
        head.next = null;
        return p;
    };
    const findMiddle = head => {
        let slow = head;
        let fast = head;
        while (fast.next && fast.next.next) {
            fast = fast.next.next;
            slow = slow.next;
        }
        return slow;
    };

    const merge = (left, right) => {
        let p = left;
        let q = right;
        let head = new ListNode();
        let tail = head;
        while (p && q) {
            tail.next = p;
            tail = tail.next;
            p = p.next;
            tail.next = q;
            tail = tail.next;
            q = q.next;
        }
        tail.next = p || q;
        return head.next;
    };

    const middle = findMiddle(head);
    const next = middle.next;
    middle.next = null;
    const right = reverse(next);
    merge(head, right);
    return head;
};

console.log(reorderList(head));
// console.log(reorderList(head1));
