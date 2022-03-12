/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
// /**
//  * @param {ListNode[]} lists
//  * @return {ListNode}
//  */
// var mergeKLists = function (lists) {
//     const result = new ListNode(-1);
//     let cur = result;
//     const len = lists.length;

//     while (true) {
//         let min = Number.MAX_SAFE_INTEGER;
//         let index = -1;
//         for (let i = 0; i < len; i++) {
//             if (lists[i] === null) {
//                 continue;
//             }
//             if (lists[i].val < min) {
//                 index = i;
//                 min = lists[i].val;
//             }
//         }
//         if (index === -1) {
//             break;
//         }
//         console.log('index', index);
//         cur.next = lists[index];
//         lists[index] = lists[index].next;
//         cur = cur.next;
//         cur.next = null;
//     }

//     return result.next;
// };

/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function (lists) {
    if (!lists.length) {
        return null;
    }
    const merge = (node1, node2) => {
        const result = new ListNode(-1);
        let cur = result;
        while (node1 && node2) {
            if (node1.val < node2.val) {
                cur.next = node1;
                node1 = node1.next;
            } else {
                cur.next = node2;
                node2 = node2.next;
            }
            cur = cur.next;
        }

        cur.next = node1 || node2;

        return result.next;
    };

    const mergeLists = (start, end) => {
        if (start >= end) {
            return lists[end];
        }

        const mid = (start + end) >> 1;
        let head1 = mergeLists(start, mid);
        let head2 = mergeLists(mid + 1, end);
        return merge(head1, head2);
    };

    return mergeLists(0, lists.length - 1);
};

function ListNode(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
}

const one = new ListNode(1, new ListNode(4, new ListNode(5)));
const two = new ListNode(1, new ListNode(3, new ListNode(4)));
const three = new ListNode(2, new ListNode(6));

console.log(mergeKLists([one, two, three]));
