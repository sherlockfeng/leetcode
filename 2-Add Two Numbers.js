/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

class ListNode {
    constructor(val, next) {
        this.val = val === undefined ? 0 : val;
        this.next = next === undefined ? null : next;
    }
}
const l1 = new ListNode(
    9,
    new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(9))))))
);
const l2 = new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(9))));

const c = r => {
    const result = [];
    while (r) {
        result.push(r.val);
        r = r.next;
    }
    console.log(result);
}

c(l1);
c(l2);

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
    let result = new ListNode(0);
    let r = result;
    let carry = 0;
    while (carry || l1 || l2) {
        const val1 = l1 === null ? 0 : l1.val;
        const val2 = l2 === null ? 0 : l2.val;
        result.next = new ListNode(0);
        result = result.next;
        const sum = val1 + val2 + carry;
        result.val = sum % 10;
        carry = sum > 9 ? 1 : 0;
        l1 && (l1 = l1.next);
        l2 && (l2 = l2.next);
    }

    return r.next;
};

let r = addTwoNumbers(l1, l2);

c(r);
