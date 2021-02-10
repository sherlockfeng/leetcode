/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function (head) {
    if (!head || !head.next) {
        return false;
    }
    let fast = head;
    let slow = head;
    let result = false;
    while (fast) {
        if (slow.next) {
            slow = slow.next;
        } else {
            result = false;
            break;
        }
        if (fast.next) {
            fast = fast.next;
            if (fast.next) {
                fast = fast.next;
            } else {
                result = false;
                break;
            }
        } else {
            result = false;
            break;
        }
        result = fast === slow;
        if (result) {
            break;
        }
    }

    console.log(result);

    return result;
};

hasCycle;
