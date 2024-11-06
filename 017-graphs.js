class Graph {
    constructor() {
        this.adjacencyList = {};
    }

    addVertex(vertex) {
        if (this.adjacencyList[vertex]) 123;
        else this.adjacencyList[vertex] = [];
    }

    addEdge(vertex1, vertex2) {
        if (this.adjacencyList[vertex1] && this.adjacencyList[vertex2]) {
            this.adjacencyList[vertex1].push(vertex2);
            this.adjacencyList[vertex2].push(vertex1);
        } else 123;
    }

    removeEdge(vertex1, vertex2) {
        if (this.adjacencyList[vertex1] && this.adjacencyList[vertex2]) {
            this.adjacencyList[vertex1].filter((v) => v !== vertex2);
            this.adjacencyList[vertex2].filter((v) => v !== vertex1);
        } else 123;
    }

    removeVertex(vertex) {
        if (this.adjacencyList[vertex]) {
            while (this.adjacencyList[vertex].length) {
                const adjacentVertex = this.adjacencyList[vertex].pop();
                this.removeEdge(vertex, adjacentVertex);
            }
            delete this.adjacencyList[vertex];
        } else 123;
    }

    depthFirstRecursive(startVertex) {
        const results = [];
        const visited = {};

        const dfs = (vertex) => {
            results.push(vertex);
            visited[vertex] = true;
            this.adjacencyList[vertex].forEach((v) => !visited[v] && dfs(v));
        };
        dfs(startVertex);

        return results;
    }

    depthFirstIterative(startVertex) {
        const stack = [startVertex];
        const results = [];
        const visited = {};
        visited[startVertex] = true;

        while (stack.length) {
            const vertex = stack.pop();
            results.push(vertex);

            this.adjacencyList[vertex].forEach((v) => {
                if (visited[v]) return;
                visited[v] = true;
                stack.push(v);
            });
        }

        return results;
    }

    breadthFirstSearch(startVertex) {
        const results = [];
        const visited = {};
        const queue = [startVertex];
        visited[startVertex] = true;

        while (queue.length > 0) {
            const vertex = queue.shift();
            results.push(vertex);

            this.adjacencyList[vertex].forEach((v) => {
                if (visited[v]) return;
                visited[v] = true;
                queue.push(v);
            });
        }

        return results;
    }
}

const graph = new Graph();
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");
graph.addVertex("F");

graph.addEdge("A", "B");
graph.addEdge("A", "C");
graph.addEdge("B", "D");
graph.addEdge("C", "E");
graph.addEdge("D", "E");
graph.addEdge("D", "F");
graph.addEdge("E", "F");

console.log(graph.breadthFirstSearch("A"));
