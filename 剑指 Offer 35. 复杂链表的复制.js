function Node(val, next, random) {
    this.val = val;
    this.next = next;
    this.random = random;
}

const head = new Node(-1, null, null);

/**
 * @param {Node} head
 * @return {Node}
 */
var copyRandomList = function (head) {
    if (!head) {
        return head;
    }
    const copy = (old, cur) => {
        cur.val = old.val;
        old.copyNode = cur;
        if (!old.next) {
            cur.next = null;
            return;
        }
        cur.next = new Node();
        copy(old.next, cur.next);
    };
    let newHead = new Node();
    copy(head, newHead);
    console.log(newHead);
    console.log(head);

    const result = newHead;

    while (head) {
        if (head.random) {
            newHead.random = head.random.copyNode;
        } else {
            newHead.random = null;
        }
        head = head.next;
        newHead = newHead.next;
    }

    return result;
};

copyRandomList(head);
