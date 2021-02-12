/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function (head) {
    if (head === null) {
        return null;
    }
    let slow = head;
    let fast = head;
    while (fast) {
        slow = slow.next;
        if (fast.next !== null) {
            fast = fast.next.next;
        } else {
            return null;
        }
        if (slow === fast) {
            let pre = head;
            while (pre !== slow) {
                pre = pre.next;
                slow = slow.next;
            }
            return pre;
        }
    }
    return null;
};
