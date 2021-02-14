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

let h = new ListNode(1);
const r = h;
[2, 3, 4, 5].forEach(n => {
    h.next = new ListNode(n);
    h = h.next;
});
console.log(r);
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function (head) {
    if (!head) {
        return null;
    }
    if (!head.next) {
        return head;
    }
    const reverse = node => {
        let pre = null;
        let cur = node;
        while (cur) {
            const next = cur.next;
            cur.next = pre;
            pre = cur;
            cur = next;
        }
        return pre;
    };
    const findMiddle = node => {
        let slow = node;
        let fast = node;
        while (fast.next !== null && fast.next.next !== null) {
            slow = slow.next;
            fast = fast.next.next;
        }
        return slow;
    };
    const merge = (n1, n2) => {
        let h = new ListNode();
        let t = h;
        while (n1 !== null || n2 !== null) {
            if (n1 !== null) {
                t.next = n1;
                n1 = n1.next;
                t = t.next;
            }
            if (n2 !== null) {
                t.next = n2;
                n2 = n2.next;
                t = t.next;
            }
        }
        return h.next;
    };
    const mid = findMiddle(head);
    let l1 = head;
    let l2 = mid.next;
    mid.next = null;
    l2 = reverse(l2);
    merge(l1, l2);
    console.log(head);
};

reorderList(r);
