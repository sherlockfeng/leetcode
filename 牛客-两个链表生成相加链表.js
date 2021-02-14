// 假设链表中每一个节点的值都在 0 - 9 之间，那么链表整体就可以代表一个整数。
// 给定两个这种链表，请生成代表两个整数相加值的结果链表。
// 例如：链表 1 为 9->3->7，链表 2 为 6->3，最后生成新的结果链表为 1->0->0->0。
// [9,3,7],[6,3] {1,0,0,0}

function ListNode(x) {
    this.val = x;
    this.next = null;
}

let r = new ListNode(9);
const head1 = r;
[3, 7].forEach(n => {
    r.next = new ListNode(n);
    r = r.next;
});

let r2 = new ListNode(6);
const head2 = r2;
[3].forEach(n => {
    r2.next = new ListNode(n);
    r2 = r2.next;
});

function addInList(head1, head2) {
    // write code here
    const reverse = head => {
        let pre = null;
        let cur = head;
        while (cur) {
            const next = cur.next;
            cur.next = pre;
            pre = cur;
            cur = next;
        }
        return pre;
    };
    let newHead1 = reverse(head1);
    let newHead2 = reverse(head2);
    let carry = 0;

    let temp = new ListNode(0);
    let count = temp;

    while (newHead1 || newHead2 || carry) {
        const val1 = newHead1 ? newHead1.val : 0;
        const val2 = newHead2 ? newHead2.val : 0;
        const sum = val1 + val2 + carry;

        if (sum > 9) {
            carry = 1;
        } else {
            carry = 0;
        }

        count.next = new ListNode(sum % 10);
        count = count.next;

        newHead1 && (newHead1 = newHead1.next);
        newHead2 && (newHead2 = newHead2.next);
    }

    temp = temp.next;
    // let z = reverse(temp);
    // console.log(z);
    return reverse(temp);
}

addInList(head1, head2);
