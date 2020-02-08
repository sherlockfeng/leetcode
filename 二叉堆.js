/**
* @file 二叉堆.js
* @author heyunfeng
*/

class Heap {
    constructor(nums) {
        this.N = nums.length;
        nums.unshift(null);
        this.pq = nums;
        for (let k = Math.floor(this.N / 2); k >= 1; k--) {
            this.initSink(this.pq, k, this.N);
        }
    }

    initSink(a, k, N) {
        while(2 * k <= N) {
            let j = 2 * k;
            if (j < N && a[j] < a[j + 1]) {
                j++;
            }
            if (a[k] >= a[j]) {
                break;
            }
            this.exch(a, j, k);
            k = j;
        }
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
        this.exch(this.pq, 1, this.N--);
        this.pq.pop();
        this.sink(1);
        return max;
    }

    less(i, j) {
        return this.pq[i] < this.pq[j];
    }

    exch(a, i, j) {
        let temp = a[i];
        a[i] = a[j];
        a[j] = temp;
    }

    swim(k) {
        while (k > 1 && this.less(Math.floor(k / 2), k)) {
            this.exch(this.pq, k, Math.floor(k / 2));
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
            this.exch(this.pq, k, j);
            k = j;
        }
    }
}
