/**
* @file 数组diff.js
* @author heyunfeng
*/

import {lis} from './utils';

function diff(pre, next) {
    let j = 0;
    let preEnd = pre.length - 1;
    let nextEnd = next.length - 1;

    outer: {
        while (pre[j] === next[j]) {
            j++;
            if (j > preEnd || j > nextEnd) {
                break outer;
            }
        }

        while (pre[preEnd] === next[nextEnd]) {
            preEnd--;
            nextEnd--;
            if (j > preEnd || j > nextEnd) {
                break outer;
            }
        }
    }

    if (j > preEnd && j <= nextEnd) {
        while (j <= nextEnd) {
            pre.slice(j++, 0, next[j]);
        }
    }
    else if (j > nextEnd) {
        while (j <= preEnd) {
            pre.slice(j++, 1);
        }
    }
    else {
        const nextLeft = nextEnd - j + 1
        const source = [];
        let keyIndex = {};
        const prevStart = j;
        const nextStart = j;
        let moved = false;
        let pos = 0;
        let patched = 0

        for (let i = nextStart; i <= nextEnd; i++) {
            source.push(-1);
            keyIndex[next[i]] = i;
        }
        for (let i = prevStart; i <= preEnd; i++) {
            if (patched < nextLeft) {
                const k = keyIndex[pre[i]];
                if (k) {
                    patched++;
                    pre[i] = next[k];
                    source[k - nextStart] = i;
                    if (k < pos) {
                        moved = true;
                    }
                    else {
                        pos = k;
                    }
                }
                else {
                    pre.splice(i, 1);
                }
            }
            else {
                pre.splice(i, 1);
            }
        }
        if (moved) {
            const seq = lis(source);
        }
    }
}
