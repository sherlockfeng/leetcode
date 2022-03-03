function ListNode(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
}

const head = new ListNode(1, new ListNode(2, new ListNode(3)));
// console.log(head);

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
    if (!head || !head.next) {
        return head;
    }
    const reverse = (pre, cur) => {
        if (!cur) {
            return pre;
        }
        const next = cur.next;
        cur.next = pre;
        return reverse(cur, next);
    };
    const next = head.next;
    head.next = undefined;
    return reverse(head, next);
};

console.log(reverseList(head));
