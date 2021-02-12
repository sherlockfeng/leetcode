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
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function (lists) {
    lists = lists.filter(i => i.length);
    if (!lists.length) {
        return null;
    }
    let head = new ListNode();
    const result = head;

    let finish = false;

    const help = lists => {
        if (finish) {
            return;
        }
        let minNode;
        let index;
        for (let i = 0; i < lists.length; i++) {
            const node = lists[i];

            if (!node) {
                continue;
            }
            if (!minNode || node.val < minNode.val) {
                minNode = node;
                index = i;
            }
        }
        if (!minNode) {
            return null;
        }
        head.next = minNode;
        head = head.next;
        minNode = minNode.next;
        lists[index] = minNode;
        finish = !lists.filter(v => v).length;
        help(lists);
    };
    help(lists);
    return result.next;
};

/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function (lists) {
    const max = Number.MAX_SAFE_INTEGER;
    lists = lists.filter(v => v);
    if (!lists.length) {
        return null;
    }
    if (lists.length === 1) {
        return lists[0];
    }
    const merge = (left, right) => {
        let head = new ListNode();
        const result = head;
        while (left || right) {
            const l = left ? left.val : max;
            const r = right ? right.val : max;
            if (l < r) {
                head.next = new ListNode(l);
                left = left.next;
            } else {
                head.next = new ListNode(r);
                right = right.next;
            }
            head = head.next;
        }
        return result.next;
    };
    let left = lists[0];
    let result;
    for (let i = 1; i < lists.length; i++) {
        result = merge(left, lists[i]);
        left = result;
    }
    return result;
};

const build = nums => {
    let head = new ListNode(nums[0]);
    const result = head;
    for (let i = 1; i < nums.length; i++) {
        head.next = new ListNode(nums[i]);
        head = head.next;
    }
    return result;
};

mergeKLists([build([1, 4, 5]), build([1, 3, 4]), build([2, 6])]);
