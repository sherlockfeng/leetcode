class MinHeap {
    constructor(data = []) {
        this.data = data;
        this.comparator = (a, b) => a - b;
        this.heapify();
    }

    size() {
        return this.data.length;
    }

    swap(i, j) {
        [this.data[i], this.data[j]] = [this.data[j], this.data[i]];
    }

    heapify() {
        if (this.data.length < 2) {
            return;
        }
        for (let i = 1; i < this.size(); i++) {
            this.bubbleUp(i);
        }
    }

    bubbleUp(i) {
        while (i > 0) {
            const parent = Math.floor((i - 1) / 2);
            if (this.comparator(this.data[parent], this.data[i]) > 0) {
                this.swap(parent, i);
                i = parent;
            } else {
                break;
            }
        }
    }

    bubbleDown(i) {
        const lastIndex = this.size() - 1;
        while (true) {
            const leftChild = 2 * i + 1;
            const rightChild = 2 * i + 2;
            let findIndex = i;
            if (leftChild <= lastIndex && this.comparator(this.data[leftChild], this.data[findIndex]) < 0) {
                findIndex = leftChild;
            }
            if (rightChild <= lastIndex && this.comparator(this.data[rightChild], this.data[findIndex]) < 0) {
                findIndex = rightChild;
            }
            if (i !== findIndex) {
                this.swap(i, findIndex);
                i = findIndex;
            } else {
                break;
            }
        }
    }

    peek() {
        if (this.size() === 0) {
            return null;
        }
        return this.data[0];
    }

    offer(value) {
        this.data.push(value);
        this.bubbleUp(this.size() - 1);
    }

    poll() {
        if (this.size() === 0) {
            return null;
        }
        const result = this.data[0];
        const last = this.data.pop();
        if (this.size() !== 0) {
            this.data[0] = last;
            this.bubbleDown(0);
        }
        return result;
    }
}

const a = new MinHeap([4, 5, 8, 2]);
console.log(a.data);
