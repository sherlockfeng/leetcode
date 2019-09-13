/**
* @file 二叉树.js
* @author heyunfeng
*/

class Heap {
    constructor() {
        this.pq = [];
        this.N = 0;
    }

    isEmpty() {
        return this.N === 0;
    }

    size() {
        return this.N;
    }

    insert(value) {
        this.pq[++this.N] = value;
        this.swim(this.N);
    }

    delMax() {
        let max = this.pq[1];
        this.exch(1, this.N--);
        this.pq.pop();
        this.sink(1);
        return max;
    }

    less(i, j) {
        return this.pq[i] < this.pq[j];
    }

    exch(i, j) {
        let temp = this.pq[i];
        this.pq[i] = this.pq[j];
        this.pq[j] = temp;
    }

    swim(k) {
        while (k > 1 && this.less(Math.floor(k / 2), k)) {
            this.exch(k, Math.floor(k / 2));
            k = Math.floor(k / 2);
        }
    }

    sink(k) {
        while (2 * k <= this.N) {
            let j = 2 * k;
            if (j < this.N && this.less(j, j + 1)) {
                j++;
            }
            if (!this.less(k, j)) {
                break;
            }
            this.exch(k, j);
            k = j;
        }
    }
}
