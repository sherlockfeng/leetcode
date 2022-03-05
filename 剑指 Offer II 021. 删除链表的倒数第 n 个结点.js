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
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
    let bHead = new ListNode();
    bHead.next = head;
    const result = head;
    let end = bHead;

    let flag = false;

    for (let i = 0; i < n; i++) {
        end = end.next;
    }
    while (end.next) {
        end = end.next;
        bHead = bHead.next;
        !flag && (flag = true);
    }
    bHead.next = bHead.next.next;
    return flag ? result : bHead.next;
};

const head1 = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5)))));
const head2 = new ListNode(1);
const head3 = new ListNode(1, new ListNode(2));

console.log(removeNthFromEnd(head1, 2));
console.log(removeNthFromEnd(head2, 1));
console.log(removeNthFromEnd(head3, 2));
