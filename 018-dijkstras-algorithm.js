class Node {
    constructor(value, priority) {
        this.value = value;
        this.priority = priority;
    }
}

class PriorityQueue {
    constructor() {
        this.values = [];
    }

    enqueue(val, priority) {
        let newNode = new Node(val, priority);
        this.values.push(newNode);
        this.bubbleUp();
    }

    bubbleUp() {
        let idx = this.values.length - 1;
        const element = this.values[idx];
        while (idx > 0) {
            let parentIdx = Math.floor((idx - 1) / 2);
            let parent = this.values[parentIdx];
            if (element.priority >= parent.priority) break;
            this.values[parentIdx] = element;
            this.values[idx] = parent;
            idx = parentIdx;
        }
    }

    dequeue() {
        const min = this.values[0];
        const end = this.values.pop();
        if (this.values.length > 0) {
            this.values[0] = end;
            this.sinkDown();
        }
        return min;
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
}

class WeightedGraph {
    constructor() {
        this.adjacencyList = {};
    }

    addVertex(vertex) {
        if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
    }

    addEdge(vertex1, vertex2, weight) {
        if (this.adjacencyList[vertex1] && this.adjacencyList[vertex2]) {
            this.adjacencyList[vertex1].push({ node: vertex2, weight });
            this.adjacencyList[vertex2].push({ node: vertex1, weight });
        } else 123;
    }

    dijkstra(startVertex, endVertex) {
        const nodes = new PriorityQueue();
        const distances = {};
        const prev = {};
        const path = [];

        // BUILD UP QUEUE
        for (let vertex in this.adjacencyList) {
            if (vertex === startVertex) {
                distances[vertex] = 0;
                nodes.enqueue(vertex, 0);
            } else {
                distances[vertex] = Infinity;
                nodes.enqueue(vertex, Infinity);
            }
            prev[vertex] = null;
        }

        // AS LONG AS QUEUE LENGTH > 0
        while (nodes.values.length > 0) {
            let smallest = nodes.dequeue().value;

            if (smallest === endVertex) {
                while (prev[smallest]) {
                    path.unshift(smallest);
                    smallest = prev[smallest];
                }
                path.unshift(startVertex);
                break;
            }

            if (smallest || distances[smallest] !== Infinity) {
                for (let neighbor in this.adjacencyList[smallest]) {
                    // GET NEIGHBOR NODE
                    const nextNode = this.adjacencyList[smallest][neighbor];

                    // CALC NEW DISTANCE
                    const newDistance = distances[smallest] + nextNode.weight;
                    const nextNeighbor = nextNode.node;

                    // IF SMALLER
                    if (newDistance < distances[nextNeighbor]) {
                        distances[nextNeighbor] = newDistance;
                        prev[nextNeighbor] = smallest;
                        nodes.enqueue(nextNeighbor, newDistance);
                    }
                }
            }
        }

        return path;
    }
}

const graph = new WeightedGraph();

graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");
graph.addVertex("F");

graph.addEdge("A", "B", 4);
graph.addEdge("A", "C", 2);
graph.addEdge("B", "E", 3);
graph.addEdge("C", "D", 2);
graph.addEdge("C", "F", 4);
graph.addEdge("D", "E", 3);
graph.addEdge("D", "F", 1);
graph.addEdge("E", "F", 1);

console.log(graph.dijkstra("A", "E"));
