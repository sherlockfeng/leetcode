/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var getKthFromEnd = function (head, k) {
    const start = head;
    const end = head;
    let result = null;
    for (let i = 0; i < k; i++) {
        if (!end.next) {
            break;
        }
        end = end.next;
    }
    while (end.next) {
        start = start.next;
        end = end.next;
    }
    result = start;
    return result;
};
