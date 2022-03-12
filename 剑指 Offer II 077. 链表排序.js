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

const head = new ListNode(4, new ListNode(2, new ListNode(1, new ListNode(3))));

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var sortList = function (head) {
    if (!head || !head.next) {
        return head;
    }

    const splitList = node => {
        let vHead = new ListNode(-1, node);
        let fast = vHead;
        let slow = vHead;
        while (fast && fast.next) {
            fast = fast.next.next;
            slow = slow.next;
        }

        const result = slow.next;

        slow.next = null;

        return result;
    };

    const mergeList = (head1, head2) => {
        const result = new ListNode(-1);
        let vHead = result;
        while (head1 && head2) {
            if (head1.val < head2.val) {
                vHead.next = head1;
                head1 = head1.next;
            } else {
                vHead.next = head2;
                head2 = head2.next;
            }
            vHead = vHead.next;
        }
        if (head1) {
            vHead.next = head1;
        }
        if (head2) {
            vHead.next = head2;
        }

        return result.next;
    };

    let list = splitList(head);

    head = sortList(head);
    list = sortList(list);

    return mergeList(head, list);
};

console.log(sortList(head));
