class MaxHeap {
    constructor(data = []) {
        this.data = data;
        this.compare = (a, b) => a - b;
        this.heapify();
    }

    size() {
        return this.data.length;
    }

    swap(index1, index2) {
        [this.data[index1], this.data[index2]] = [this.data[index2], this.data[index1]];
    }

    heapify() {
        if (this.data.length < 2) {
            return;
        }
        for (let i = 1; i < this.size(); i++) {
            this.bubbleUp(i);
        }
    }

    bubbleUp(index) {
        while (index > 0) {
            const parent = ((index - 1) / 2) >> 1;
            if (this.compare(this.data[parent], this.data[index]) < 0) {
                this.swap(parent, index);
                index = parent;
            } else {
                break;
            }
        }
    }

    bubbleDown(index) {
        const lastIndex = this.size() - 1;
        while (true) {
            const leftChild = index * 2 + 1;
            const rightChild = index * 2 + 2;
            let findIndex = index;

            if (leftChild <= lastIndex && this.compare(this.data[findIndex], this.data[leftChild]) < 0) {
                findIndex = leftChild;
            }

            if (rightChild <= lastIndex && this.compare(this.data[findIndex], this.data[rightChild]) < 0) {
                findIndex = rightChild;
            }

            if (findIndex !== index) {
                this.swap(findIndex, index);
                index = findIndex;
            } else {
                break;
            }
        }
    }
}
