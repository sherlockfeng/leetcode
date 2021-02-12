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

let a = new ListNode(1);
const r = a;
for (let i of [2, 3, 4, 5]) {
    a.next = new ListNode(i);
    a = a.next;
}

/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function (head, k) {
    const reverse = (head, tail) => {
        let pre = tail.next;
        let cur = head;
        while (pre !== tail) {
            const next = cur.next;
            cur.next = pre;
            pre = cur;
            cur = next;
        }
        return [head, tail];
    };

    const hair = new ListNode(0);
    hair.next = head;
    let pre = hair;
    while (head) {
        let tail = pre;
        for (let i = 0; i < k; i++) {
            tail = tail.next;
            if (!tail) {
                return hair.next;
            }
        }
        const next = tail.next;
        [tail, head] = reverse(head, tail);
        pre.next = head;
        tail.next = next;
        pre = tail;
        head = tail.next;
    }
    return hair.next;
};

reverseKGroup(r, 3);
