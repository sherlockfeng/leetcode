/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
// var reverseList = function (head) {
//     let pre = null;
//     let cur = head;
//     while (cur !== null) {
//         const next = cur.next;
//         cur.next = pre;
//         pre = cur;
//         cur = next;
//     }
//     return pre;
// };

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
    const rL = node => {
        if (!node || !node.next) {
            return node;
        }
        const nextHead = rL(node.next);
        node.next.next = node;
        node.next = null;
        return nextHead;
    };
    const result = rL(head);
    return result;
};
