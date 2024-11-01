class maxBinaryHeap {
    constructor() {
        this.values = [];
    }

    bubbleUp() {
        let idx = this.values.length - 1;
        const element = this.values[idx];

        while (idx > 0) {
            const parentIdx = Math.floor((idx - 1) / 2);
            const parent = this.values[parentIdx];

            if (element <= parent) break;

            this.values[parentIdx] = element;
            this.values[idx] = parent;
            idx = parentIdx;
        }
    }

    insert(value) {
        this.values.push(value);

        this.bubbleUp();
        return this.values;
    }

    sinkDown() {
        let idx = 0;
        const length = this.values.length;
        const element = this.values[0];

        while (true) {
            let leftChildIdx = 2 * idx + 1;
            let rightChildIdx = 2 * idx + 2;
            let leftChild, rightChild;
            let swap = null;

            if (leftChildIdx < length) {
                leftChild = this.values[leftChildIdx];
                if (leftChild < element) swap = leftChildIdx;
            }

            if (rightChildIdx < length) {
                rightChild = this.values[rightChildIdx];
                if ((swap === null && rightChild < element) || (swap !== null && rightChild < leftChild))
                    swap = rightChildIdx;
            }

            if (swap === null) break;

            this.values[idx] = this.values[swap];
            this.values[swap] = element;
            idx = swap;
        }
    }

    extractMax() {
        const min = this.values[0];

        if (this.values.length > 0) {
            const end = this.values.pop();
            this.values[0] = end;
        }

        this.sinkDown();
        return min;
    }
}

const heap = new maxBinaryHeap();

heap.insert(55);
heap.insert(123);
heap.insert(51);
heap.insert(1);
heap.insert(92345);
heap.insert(5);
heap.insert(512);
heap.insert(888);

console.log(heap);
heap.extractMax();
console.log(heap);
