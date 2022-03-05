/**
 * // Definition for a Node.
 * function Node(val, next) {
 *     this.val = val;
 *     this.next = next;
 * };
 */

function Node(val, next) {
    this.val = val;
    this.next = next;
}

const one = new Node(1);
const four = new Node(4);
const three = new Node(3, four);
four.next = one;
one.next = three;

console.log(one);

/**
 * @param {Node} head
 * @param {number} insertVal
 * @return {Node}
 */
var insert = function (head, insertVal) {
    const r = new Node(insertVal);

    if (!head) {
        r.next = r;
        return r;
    }
    let cur = head.next;
    while (cur !== head) {
        if (cur.val > cur.next.val && (insertVal >= cur.val || insertVal <= cur.next.val)) {
            break;
        }
        if (insertVal >= cur.val && insertVal <= cur.next.val) {
            break;
        }
        cur = cur.next;
    }
    r.next = cur.next;
    cur.next = r;
    return head;
};

// [1,3,5] 0

console.log(insert(three, 2));
