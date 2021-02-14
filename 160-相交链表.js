/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function (headA, headB) {
    if (!headA || !headB) {
        return null;
    }
    const a = headA;
    const b = headB;
    while (headA !== headB) {
        if (headA === null) {
            headA = b;
        } else {
            headA = headA.next;
        }
        if (headB === null) {
            headB = a;
        } else {
            headB = headB.next;
        }
    }
    return headA;
};
