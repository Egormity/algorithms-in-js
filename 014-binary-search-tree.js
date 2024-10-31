class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    insert(value) {
        const newNode = new Node(value);

        if (!this.root) {
            this.root = newNode;
            return this;
        }

        let cur = this.root;
        while (true) {
            if (cur.value === value) return undefined;

            if (cur.value > value) {
                if (!cur.left) {
                    cur.left = newNode;
                    return this;
                }
                cur = cur.left;
            }

            if (cur.value < value) {
                if (!cur.right) {
                    cur.right = newNode;
                    return this;
                }
                cur = cur.right;
            }
        }
    }

    find(value) {
        if (!this.root) return false;

        let cur = this.root;
        while (true) {
            if (cur.value === value) return true;

            if (cur.value > value) {
                if (!cur.left) return false;
                cur = cur.left;
            }

            if (cur.value < value) {
                if (!cur.right) return false;
                cur = cur.right;
            }
        }
    }

    BreadthFirstSearch() {
        const queue = [this.root];
        const result = [];
        let cur;

        while (queue.length) {
            cur = queue.shift();
            result.push(cur.value);
            if (cur.left) queue.push(cur.left);
            if (cur.right) queue.push(cur.right);
        }

        return result;
    }

    DepthFirstSearchPreOrder() {
        const result = [];

        const traverse = (node) => {
            result.push(node.value);
            if (node.left) traverse(node.left);
            if (node.right) traverse(node.right);
        };

        traverse(this.root);

        return data;
    }

    DepthFirstSearchPostOrder() {
        const result = [];

        const traverse = (node) => {
            if (node.left) traverse(node.left);
            if (node.right) traverse(node.right);
            result.push(node.value);
        };

        traverse(this.root);

        return data;
    }

    DepthFirstSearchInOrder() {
        const result = [];

        const traverse = (node) => {
            if (node.left) traverse(node.left);
            result.push(node.value);
            if (node.right) traverse(node.right);
        };

        traverse(this.root);

        return data;
    }
}

const tree = new BinarySearchTree();

// tree.root = new Node(10);
// tree.root.left = new Node(5);
// tree.root.right = new Node(15);
// tree.root.left.left = new Node(2);
// tree.root.left.right = new Node(5);
// tree.root.right.right = new Node(22);

tree.insert(10);
tree.insert(112);
tree.insert(15);
tree.insert(2);
tree.insert(5);
tree.insert(22);
tree.insert(512);
tree.insert(5);

console.log(tree);

console.log(tree.find(1234));
