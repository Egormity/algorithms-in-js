class PriorityQueue {
    constructor() {
        this.values = [];
    }

    bubbleUp() {
        let idx = this.values.length - 1;
        const element = this.values[idx];

        while (idx > 0) {
            const parentIdx = Math.floor((idx - 1) / 2);
            const parent = this.values[parentIdx];

            if (element.priority <= parent.priority) break;

            this.values[parentIdx] = element;
            this.values[idx] = parent;
            idx = parentIdx;
        }
    }

    enqueue(value, priority) {
        const newNode = new Node(value, priority);
        this.values.push(newNode);

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
                if (leftChild.priority < element.priority) {
                    swap = leftChildIdx;
                }
            }

            if (rightChildIdx < length) {
                rightChild = this.values[rightChildIdx];
                if (
                    (swap === null && rightChild.priority < element.priority) ||
                    (swap !== null && rightChild.priority < leftChild.priority)
                ) {
                    swap = rightChildIdx;
                }
            }

            if (swap === null) break;

            this.values[idx] = this.values[swap];
            this.values[swap] = element;
            idx = swap;
        }
    }

    dequeue() {
        const max = this.values[0];

        if (this.values.length > 0) {
            const end = this.values.pop();
            this.values[0] = end;
        }

        this.sinkDown();
        return max;
    }
}

class Node {
    constructor(value, priority) {
        this.value = value;
        this.priority = priority;
    }
}

const queue = new PriorityQueue();

queue.insert(55);
queue.insert(123);
queue.insert(51);
queue.insert(1);
queue.insert(92345);
queue.insert(5);
queue.insert(512);
queue.insert(888);

console.log(queue);
queue.extractMax();
console.log(queue);
