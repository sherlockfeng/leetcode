/**
 * // Definition for a Node.
 * function Node(val,prev,next,child) {
 *    this.val = val;
 *    this.prev = prev;
 *    this.next = next;
 *    this.child = child;
 * };
 */
function Node(val, prev, next, child) {
    this.val = val;
    this.prev = prev;
    this.next = next;
    this.child = child;
}

const one = new Node(1, null, new Node(2), new Node(3));
const two = new Node(1);
const a = new Node(2);
const b = new Node(3);
const c = new Node(4);
const d = new Node(5);
const e = new Node(6);

const f = new Node(7);
const g = new Node(8);
const h = new Node(9);
const i = new Node(10);

const j = new Node(11);
const k = new Node(12);

two.next = a;
a.prev = two;
a.next = b;
b.prev = a;
b.child = f;

b.next = c;
c.prev = b;

c.next = d;
d.prev = c;

d.next = e;
e.prev = d;

f.next = g;
g.prev = f;
g.next = h;
g.child = j;
h.prev = g;
h.next = i;
i.prev = h;

j.next = k;
k.prev = j;

// console.log(two);
const three = new Node(1);
const four = new Node(2);
const five = new Node(3);

three.child = four;
four.child = five;

console.log(three);
/**
 * @param {Node} head
 * @return {Node}
 */
var flatten = function (head) {
    const result = head;
    const flattenReturnEnd = head => {
        let p = head;
        let last = null;
        while (p) {
            const next = p.next;
            if (p.child) {
                p.next = p.child;
                p.child.prev = p;
                const end = flattenReturnEnd(p.child);
                p.child = null;
                if (next) {
                    end.next = next;
                    next.prev = end;
                }
                last = end;
            } else {
                last = p;
            }
            p = next;
        }
        return last;
    };
    flattenReturnEnd(head);
    result.child = null;
    return result;
};

// var flatten = function (head) {
//     const dfs = node => {
//         let cur = node;
//         // 记录链表的最后一个节点
//         let last = null;

//         while (cur) {
//             let next = cur.next;
//             //  如果有子节点，那么首先处理子节点
//             if (cur.child) {
//                 const childLast = dfs(cur.child);

//                 next = cur.next;
//                 //  将 node 与 child 相连
//                 cur.next = cur.child;
//                 cur.child.prev = cur;

//                 //  如果 next 不为空，就将 last 与 next 相连
//                 if (next != null) {
//                     childLast.next = next;
//                     next.prev = childLast;
//                 }

//                 // 将 child 置为空
//                 cur.child = null;
//                 last = childLast;
//             } else {
//                 last = cur;
//             }
//             cur = next;
//         }
//         return last;
//     };

//     dfs(head);
//     return head;
// };

let result = flatten(three);
while (result) {
    console.log('val', result.val);
    console.log('prev', result.prev ? result.prev.val : 'null');
    console.log('child', result.child ? result.child.val : 'null');
    result = result.next;
}
